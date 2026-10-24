import { InsightsView, insightsMetadata } from "@/views/InsightsView";

export const metadata = insightsMetadata("en");

export default function Page() {
  return <InsightsView locale="en" />;
}
