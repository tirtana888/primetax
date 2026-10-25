import { notFound } from "next/navigation";
import { getIndustries } from "@/content/industries";
import { getIndustryDetail } from "@/content/industry-details";
import { IndustryView, industryMetadata } from "@/views/IndustryView";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params) {
  return industryMetadata((await params).slug, "en");
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustries("en").find((i) => i.slug === slug);
  const detail = getIndustryDetail(slug, "en");
  if (!industry || !detail) notFound();
  return <IndustryView industry={industry} detail={detail} locale="en" />;
}
