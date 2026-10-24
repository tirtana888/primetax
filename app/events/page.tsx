import { EventsView, eventsMetadata } from "@/views/EventsView";

export const metadata = eventsMetadata("en");

export default function Page() {
  return <EventsView locale="en" />;
}
