import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { events } from "@/content/events";
import { getPublishedInsights } from "@/content/insights";
import { landingPages } from "@/content/landing-pages";
import { services } from "@/content/services";
import { localizePath, locales } from "@/lib/i18n";

export const dynamic = "force-static";

/** Every page in both languages, each entry listing its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; lastModified?: string }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
    ...landingPages.map((p) => ({ path: `/solutions/${p.slug}`, priority: 0.8 })),
    { path: "/about", priority: 0.7 },
    { path: "/industries", priority: 0.7 },
    { path: "/insights", priority: 0.8 },
    ...getPublishedInsights().map((i) => ({ path: `/insights/${i.slug}`, priority: 0.7, lastModified: i.updatedAt })),
    ...(events.length > 0 ? [{ path: "/events", priority: 0.6 }] : []),
    { path: "/team", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
    { path: "/book-consultation", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/disclaimer", priority: 0.2 },
  ];

  return pages.flatMap(({ path, priority, lastModified }) =>
    locales.map((locale) => ({
      url: `${site.url}${localizePath(path, locale)}`,
      lastModified: lastModified ? new Date(lastModified) : new Date(),
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${localizePath(path, l)}`])),
      },
    }))
  );
}
