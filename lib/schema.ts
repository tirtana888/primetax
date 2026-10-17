import { site } from "@/config/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/logo-full.svg`,
    sameAs: [site.social.linkedin, site.social.instagram, site.social.youtube],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.contact.phone,
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "AccountingService"],
    name: site.brandName,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: site.contact.city,
      addressCountry: "ID",
    },
    areaServed: "ID",
    openingHours: `Mo-Fr ${site.contact.hours.open}-${site.contact.hours.close}`,
  };
}

export function buildServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${site.url}/layanan/${params.slug}`,
    provider: {
      "@type": "Organization",
      name: site.brandName,
      url: site.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(params: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
  authorSlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: `${site.url}/insight/${params.slug}`,
    datePublished: params.publishedAt,
    dateModified: params.updatedAt,
    author: {
      "@type": "Person",
      name: params.authorName,
      url: `${site.url}/tim/${params.authorSlug}`,
    },
    publisher: {
      "@type": "Organization",
      name: site.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/logo-full.svg`,
      },
    },
  };
}

export function buildPersonSchema(params: {
  name: string;
  role: string;
  slug: string;
  certifications: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.role,
    url: `${site.url}/tim/${params.slug}`,
    worksFor: {
      "@type": "Organization",
      name: site.brandName,
    },
    hasCredential: params.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: cert,
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ label: string; href?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}
