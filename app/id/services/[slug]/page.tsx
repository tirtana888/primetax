import { notFound } from "next/navigation";
import { getService, getServices } from "@/content/services";
import { ServiceView, serviceMetadata } from "@/views/ServiceView";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  return serviceMetadata((await params).slug, "id");
}

export default async function Page({ params }: Params) {
  const service = getService((await params).slug, "id");
  if (!service) notFound();
  return <ServiceView service={service} locale="id" />;
}
