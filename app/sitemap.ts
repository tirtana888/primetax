import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { insightArticles } from "@/content/insights";
import { teamMembers } from "@/content/team";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/korporasi",
    "/ukm",
    "/layanan",
    "/harga",
    "/studi-kasus",
    "/insight",
    "/insight/kategori/update-regulasi",
    "/insight/kategori/panduan-praktis",
    "/insight/buletin",
    "/tools",
    "/tools/kalender-pajak",
    "/tools/kalkulator-pph-21",
    "/tools/kalkulator-ppn",
    "/tools/cek-wajib-tp-doc",
    "/tentang",
    "/tim",
    "/karier",
    "/kontak",
    "/minta-proposal",
    "/company-profile",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
    "/disclaimer",
    "/en",
    "/en/corporate",
    "/en/services",
    "/en/request-proposal",
    "/en/contact",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/insight" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  for (const svc of services) {
    entries.push({
      url: `${baseUrl}/layanan/${svc.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    entries.push({
      url: `${baseUrl}/en/services/${svc.enSlug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const cs of caseStudies) {
    entries.push({
      url: `${baseUrl}/studi-kasus/${cs.slug}`,
      lastModified: new Date(cs.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const art of insightArticles) {
    entries.push({
      url: `${baseUrl}/insight/${art.slug}`,
      lastModified: new Date(art.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const member of teamMembers) {
    entries.push({
      url: `${baseUrl}/tim/${member.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
