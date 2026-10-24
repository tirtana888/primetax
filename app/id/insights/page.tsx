import { InsightsView, insightsMetadata } from "@/views/InsightsView";

export const metadata = insightsMetadata("id");

export default function Page() {
  return <InsightsView locale="id" />;
}
