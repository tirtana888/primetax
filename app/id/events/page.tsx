import { EventsView, eventsMetadata } from "@/views/EventsView";

export const metadata = eventsMetadata("id");

export default function Page() {
  return <EventsView locale="id" />;
}
