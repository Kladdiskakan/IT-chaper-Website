import { scrapeFbEvent } from "facebook-event-scraper";
import puppeteer from "puppeteer";
import { CalendarEvent, EventScraper } from ".";

export class FacebookScraper implements EventScraper {
  async listEvents(pageSlug: string) {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();

      await page.goto(`https://www.facebook.com/${pageSlug}/events`, {
        waitUntil: "networkidle2",
      });

      const eventLinks = await page.evaluate(() => {
        const eventNodes = document.querySelectorAll('a[href*="/events/"]');

        return [
          ...new Set(
            Array.from(eventNodes).map((el) => {
              const anchor = el as HTMLAnchorElement;
              return anchor.href;
            }),
          ),
        ];
      });

      const events = await Promise.all(
        eventLinks.map(async (link): Promise<CalendarEvent> => {
          const event = await scrapeFbEvent(link);
          return {
            id: event.id,
            title: event.name,
            description: event.description,
            location: event.location?.name || "Unknown",
            start: new Date(event.startTimestamp),
            end: event.endTimestamp ? new Date(event.endTimestamp) : undefined,
            url: event.url,
            imageUrl: event.photo?.imageUri,
          };
        }),
      );

      return events;
    } catch (error) {
      console.error("Error scraping events:", error);
      throw error;
    } finally {
      await browser.close(); // Make sure to close the browser
    }
  }
}
