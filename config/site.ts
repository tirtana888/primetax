/**
 * Central site configuration.
 *
 * Everything public-facing that depends on verified company facts lives here.
 * Empty strings are intentional: components hide a field until it is filled in
 * with a verified value (see docs/CONTENT-GUIDE.md → "Pre-launch verification").
 */
export const site = {
  brandName: "PrimeTax",
  legalName: "PT PrimeTax Infinity Berjaya",
  descriptor: "Strategic Tax Advisory",
  tagline: "Complex Tax. Clear Decisions.",
  essence: "Clarity in complexity.",
  statement:
    "Strategic Indonesian tax advisory for foreign-invested companies, large taxpayers, and businesses navigating complex tax matters.",
  url: "https://primetax.id",
  locale: "en",

  /**
   * Logo. Leave `src` empty to use the temporary typographic wordmark.
   * When final artwork is supplied, place the files in /public/brand/ and set:
   *   src:        horizontal logo for light backgrounds (SVG preferred)
   *   srcInverse: reversed (white) logo for the charcoal footer
   *   width/height: intrinsic size of the artwork, used for aspect ratio
   */
  logo: {
    src: "",
    srcInverse: "",
    width: 160,
    height: 32,
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],

  primaryCta: { label: "Book a Consultation", href: "/book-consultation" },

  contact: {
    // Shown only when non-empty. Fill with verified details before launch.
    email: "advisory@primetax.id",
    privacyEmail: "privacy@primetax.id",
    phone: "",
    phoneHref: "",
    addressLines: [] as string[],
    city: "Jakarta, Indonesia",
    hours: "Monday – Friday, 08:30 – 17:30 WIB",
  },

  social: {
    linkedin: "",
  },

  /**
   * Lead delivery. The site is a static export, so form submissions are sent
   * to an external endpoint (e.g. Formspree, a Firebase Function, or a CRM
   * webhook) configured through NEXT_PUBLIC_LEAD_ENDPOINT. When it is not set,
   * the form falls back to opening a pre-filled email to `contact.email`.
   */
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "",

  analytics: {
    // GA4 measurement ID, e.g. "G-XXXXXXX". Loaded only after consent.
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  },
} as const;

export type SiteConfig = typeof site;
