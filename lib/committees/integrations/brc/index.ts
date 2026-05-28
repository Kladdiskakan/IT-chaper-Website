import { env } from "@/env";
import { CommitteeIntegration } from "..";
import {
  mapBrcEvent,
  mapBrcProtocol,
  BrcEvent,
  BrcProtocol,
} from "./types";

const brcAuthHeaders = {
  Authorization: `Bearer ${env.BRC_API_KEY}`,
};

const brcIntegration: CommitteeIntegration = {
  listEvents: async () => {
    try {
      const res = await fetch(`${env.BRC_base_url}/rest/eventsCustom`, {
        headers: brcAuthHeaders,
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }





      const jsonResponse = await res.json();
      const eventsList = jsonResponse?.data?.eventsCustom || [];
      console.log("Fetched BRC events:", eventsList);

      return eventsList
        .map(mapBrcEvent)
        .sort(
          (a, b) =>
            a.start.getTime() - b.start.getTime() ||
            a.title.localeCompare(b.title),
        );
    } catch (error) {
      console.error("Error listing BRC events", error);
      return [];
    }
  },
  getEvent: async (id: string) => {
    try {
      const res = await fetch(`${env.BRC_base_url}/rest/eventsCustom`, {
        headers: brcAuthHeaders,
      });
      const data: BrcEvent[] = await res.json();

      const event = data.find((event) => event.id === Number(id));

      return event ? mapBrcEvent(event) : undefined;
    } catch (error) {
      console.error(`Error getting BRC event (id: ${id})`, error);
      return undefined;
    }
  },
  /*
  listProtocols: async () => {
    try {
      const res = await fetch(`${env.BRC_base_url}/protocol/view`, {
        headers: brcAuthHeaders,
      });
      const data: BrcProtocol[] = await res.json();

      const protocols = data
        .map(mapBrcProtocol)
        .sort(
          (a, b) =>
            b.date.getTime() - a.date.getTime() || b.name.localeCompare(a.name),
        );

      return protocols;
    } catch (error) {
      console.error("Error listing BRC protocols", error);
      return [];
    }
  },*/
};

export default brcIntegration;
