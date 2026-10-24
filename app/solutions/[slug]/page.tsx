import { notFound } from "next/navigation";
import { getLandingPage, getLandingPages } from "@/content/landing-pages";
import { LandingView, landingMetadata } from "@/views/LandingView";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getLandingPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  return landingMetadata((await params).slug, "en");
}

export default async function Page({ params }: Params) {
  const page = getLandingPage((await params).slug, "en");
  if (!page) notFound();
  return <LandingView page={page} locale="en" />;
}
