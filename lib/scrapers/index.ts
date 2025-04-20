export interface EventScraper {
  listEvents(...args: any[]): Promise<CalendarEvent[]>;
}

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  start: Date;
  end?: Date;
  location: string;
  imageUrl?: string;
  url: string;
};
