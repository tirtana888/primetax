import type { Metadata } from "next";
import { site } from "@/config/site";

/** Unique title, description, canonical URL and Open Graph data for a page. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: `${site.url}${path}`,
      siteName: site.brandName,
      title: `${title} | ${site.brandName}`,
      description,
      locale: "en_US",
    },
    twitter: { card: "summary", title: `${title} | ${site.brandName}`, description },
  };
}
