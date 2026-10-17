import type { Metadata } from "next";
import { brandFont, plexSans, sourceSerif } from "@/app/fonts";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingLeadGen } from "@/components/layout/FloatingLeadGen";
import { PageTransition } from "@/components/layout/PageTransition";
import { site } from "@/config/site";
import { buildOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/brand/icon.svg" },
  title: {
    default: `Konsultan Pajak untuk Korporasi & UKM | ${site.brandName}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    "Konsultan pajak bersertifikat di Indonesia untuk Korporasi/PMA (transfer pricing, SP2DK, pemeriksaan, sengketa) dan UKM/Startup (paket bulanan transparan).",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.brandName,
    title: `Konsultan Pajak untuk Korporasi & UKM | ${site.brandName}`,
    description:
      "Pajak bisnis Anda ditangani dengan jelas, tepat waktu, dan siap diperiksa.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plexSans.variable} ${sourceSerif.variable} ${brandFont.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white font-body text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationSchema()),
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingLeadGen />
      </body>
    </html>
  );
}
