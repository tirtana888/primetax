import type { Metadata } from "next";
import { site } from "@/config/site";
import { localeMeta, localizePath, type Locale } from "@/lib/i18n";

/**
 * Unique title, description, canonical URL, hreflang alternates and Open
 * Graph data for a page. `path` is locale-neutral (e.g. "/services").
 */
export function pageMetadata({
  title,
  description,
  path,
  locale,
  type = "website",
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  type?: "website" | "article";
  /** Use the title as-is, without the "| PrimeTax" suffix. */
  absoluteTitle?: boolean;
}): Metadata {
  const url = localizePath(path, locale);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.brandName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: localizePath(path, "en"),
        id: localizePath(path, "id"),
        "x-default": localizePath(path, "en"),
      },
    },
    openGraph: {
      type,
      url: `${site.url}${url}`,
      siteName: site.brandName,
      title: fullTitle,
      description,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: localeMeta[locale === "en" ? "id" : "en"].ogLocale,
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
