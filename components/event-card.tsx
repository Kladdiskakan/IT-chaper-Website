import { CalendarEvent } from "@/lib/scrapers";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EventCard = ({ event }: { event: CalendarEvent }) => {
  return (
    <Card className="pt-0 px-0 overflow-hidden">
      <CardHeader className="px-0">
        <img
          className="border-b mb-6"
          src={event.imageUrl ?? "/placeholder.png"}
          alt={event.title}
        />
        <div className="px-6">
          <CardTitle className="mb-1.5">{event.title}</CardTitle>
          <CardDescription>{event.description.slice(0, 80)}...</CardDescription>
        </div>
      </CardHeader>
      <CardFooter>
        <CardAction>
          <Button variant="secondary" asChild>
            <Link href={event.url}>Read more</Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export { EventCard };
