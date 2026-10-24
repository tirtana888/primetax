import { site } from "@/config/site";
import { t } from "@/lib/i18n";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.brandName,
    legalName: site.legalName,
    url: site.url,
    slogan: site.tagline,
    logo: `${site.url}/brand/icon-512.png`,
    description: t("en").statement,
    knowsLanguage: ["en", "id"],
    areaServed: { "@type": "Country", name: "Indonesia" },
    ...(site.contact.email ? { email: site.contact.email } : {}),
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    ...(site.social.linkedin ? { sameAs: [site.social.linkedin] } : {}),
  };
}

export function serviceSchema(params: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${site.url}${params.path}`,
    provider: { "@type": "Organization", name: site.brandName, url: site.url },
    areaServed: { "@type": "Country", name: "Indonesia" },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: `${site.url}${params.path}`,
    datePublished: params.publishedAt,
    dateModified: params.updatedAt,
    author: { "@type": "Organization", name: params.author },
    publisher: { "@type": "Organization", name: site.brandName, url: site.url },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };
}
