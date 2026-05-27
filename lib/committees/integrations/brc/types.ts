import { CalendarEvent } from "@/types";
import { Protocol } from "@/types";

export type BrcEvent = {
  id: number;
  name: string;
  type: string;
  image: string;
  start: string;
  end: string;
  info: string;
  location: string;
};

export const mapBrcEvent = (BrcEvent: BrcEvent): CalendarEvent => ({
  id: `brc-${BrcEvent.id}`,
  title: BrcEvent.name,
  start: new Date(BrcEvent.start),
  end: new Date(BrcEvent.end),
  description: BrcEvent.info,
  location: BrcEvent.location,
  imageUrl: BrcEvent.image == "" ? undefined : BrcEvent.image,
  committeeSlug: "brc",
});

export type BrcProtocol = {
  id: number;
  name: string;
  upload_date: string;
  actions: {
    view_pdf: string;
  };
};

export const mapBrcProtocol = (brcProtocol: BrcProtocol): Protocol => ({
  id: brcProtocol.id,
  name: brcProtocol.name,
  date: new Date(brcProtocol.upload_date),
  url: brcProtocol.actions.view_pdf,
});
