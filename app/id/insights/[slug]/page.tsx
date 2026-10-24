import { notFound } from "next/navigation";
import { getInsight, getPublishedInsights } from "@/content/insights";
import { InsightView, insightMetadata } from "@/views/InsightView";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedInsights("id").map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params) {
  return insightMetadata((await params).slug, "id");
}

export default async function Page({ params }: Params) {
  const insight = getInsight((await params).slug, "id");
  if (!insight) notFound();
  return <InsightView insight={insight} locale="id" />;
}
