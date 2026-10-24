import type { Metadata, Viewport } from "next";
import { inter, sourceSerif } from "@/app/fonts";
import "@/styles/globals.css";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { JsonLd } from "@/components/layout/JsonLd";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { site } from "@/config/site";
import { t } from "@/lib/i18n";
import { organizationSchema } from "@/lib/schema";

// Defaults only; every page sets its own localised metadata via lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandName} — ${site.tagline} | Strategic Tax Advisory Indonesia`,
    template: `%s | ${site.brandName}`,
  },
  description: t("en").statement,
  icons: {
    icon: [
      { url: "/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="en" is rewritten to "id" for /id pages at build time (scripts/set-html-lang.mjs) and kept in sync by
    // <HtmlLang /> on client navigation. data-scroll-behavior lets Next.js jump to the top on navigation.
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
        <ScrollReveal />
        <HtmlLang />
      </body>
    </html>
  );
}
