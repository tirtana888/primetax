import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPublishedInsights } from "@/content/insights";
import { landingPages } from "@/content/landing-pages";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, lastModified?: string) => ({
    url: `${site.url}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    priority,
  });

  return [
    entry("/", 1),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    ...landingPages.map((p) => entry(`/solutions/${p.slug}`, 0.8)),
    entry("/about", 0.7),
    entry("/industries", 0.7),
    entry("/insights", 0.8),
    ...getPublishedInsights().map((i) => entry(`/insights/${i.slug}`, 0.7, i.updatedAt)),
    entry("/team", 0.5),
    entry("/contact", 0.7),
    entry("/book-consultation", 0.8),
    entry("/privacy-policy", 0.2),
    entry("/terms", 0.2),
    entry("/disclaimer", 0.2),
  ];
}
