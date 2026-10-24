import { IndustriesView, industriesMetadata } from "@/views/IndustriesView";

export const metadata = industriesMetadata("id");

export default function Page() {
  return <IndustriesView locale="id" />;
}
