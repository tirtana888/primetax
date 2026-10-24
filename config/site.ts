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
  // Localised brand statement: lib/i18n.ts → `statement`.
  url: "https://primetax.id",

  /**
   * Logo. Leave `src` empty to use the temporary typographic wordmark.
   * When final artwork is supplied, place the files in /public/brand/ and set:
   *   src:        horizontal logo for light backgrounds (SVG preferred)
   *   srcInverse: reversed (white) logo for the charcoal footer
   *   width/height: intrinsic size of the artwork, used for aspect ratio
   */
  logo: {
    src: "/brand/logo.png",
    srcInverse: "/brand/logo-inverse.png",
    width: 545,
    height: 144,
  },

  /**
   * Homepage hero background (Cloudinary). The source clip is trimmed to the
   * Monas sunset aerial (13–33s), muted, and compressed by URL transformation:
   * ~0.95 MB desktop, ~0.24 MB mobile. Confirm the footage licence before launch.
   */
  heroMedia: {
    video:
      "https://res.cloudinary.com/enppvihs/video/upload/so_13,eo_33,q_auto:eco,w_1600,ac_none/v1792217349/videoplayback_2.mp4",
    videoMobile:
      "https://res.cloudinary.com/enppvihs/video/upload/so_13,eo_33,q_auto:eco,w_720,ac_none/v1792217349/videoplayback_2.mp4",
    poster: "https://res.cloudinary.com/enppvihs/video/upload/so_13,w_1600,q_auto:good/v1792217349/videoplayback_2.jpg",
  },

  // Labels come from lib/i18n.ts (`nav.<key>`); hrefs are locale-neutral.
  nav: [
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "industries", href: "/industries" },
    { key: "insights", href: "/insights" },
    { key: "team", href: "/team" },
    { key: "contact", href: "/contact" },
  ] as const,

  primaryCta: { href: "/book-consultation" },

  contact: {
    // Shown only when non-empty. Fill with verified details before launch.
    email: "advisory@primetax.id",
    privacyEmail: "privacy@primetax.id",
    phone: "",
    phoneHref: "",
    addressLines: [] as string[],
    city: "Jakarta, Indonesia",
    hours: { en: "Monday – Friday, 08:30 – 17:30 WIB", id: "Senin – Jumat, 08.30 – 17.30 WIB" },
  },

  social: {
    linkedin: "",
  },

  /**
   * Credibility signals. Hidden while empty. Add ONLY verified facts, each
   * with an "as of" date and an internal source you can produce on request.
   * Example stat:
   *   { value: "15+", label: { en: "Years of partner experience", id: "Tahun pengalaman partner" }, asOf: "October 2026" }
   */
  credibility: {
    stats: [] as { value: string; label: { en: string; id: string }; asOf: string }[],
    // One sentence on verified professional background, e.g. prior roles or qualifications.
    background: { en: "", id: "" },
  },

  /**
   * Company profile PDF. Place the file in /public/downloads/ and set the path,
   * e.g. "/downloads/primetax-company-profile.pdf". Hidden while empty.
   */
  companyProfile: {
    href: "",
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
