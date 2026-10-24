import { IndustriesView, industriesMetadata } from "@/views/IndustriesView";

export const metadata = industriesMetadata("en");

export default function Page() {
  return <IndustriesView locale="en" />;
}
