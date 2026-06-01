import { CalendarEvent } from "@/types";

export type BrcLocation = {
  addressStreet1: string;
};

export type BrcImage = {
  primaryLinkUrl: string;
};

export type BrcEvent = {
  id: string;
  name: string;
  type: string;
  image: BrcImage;
  date: string;
  info: string; 
  location: BrcLocation;
};

export const mapBrcEvent = (BrcEvent: BrcEvent): CalendarEvent => ({
  id: `brc-${BrcEvent.id}`,
  title: BrcEvent.name,
  start: new Date(BrcEvent.date),
  description: BrcEvent.info,
  location: BrcEvent.location?.addressStreet1,
  imageUrl: BrcEvent.image?.primaryLinkUrl,
  committeeSlug: "brc",
});