import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Tax Services in Indonesia — Compliance, Transfer Pricing & Controversy",
  description:
    "Full suite of Indonesian tax services: monthly & annual compliance, SP2DK & tax audit assistance, Tax Court litigation, VAT refunds, and Transfer Pricing.",
  alternates: {
    canonical: "/en/services",
    languages: {
      "id-ID": "/layanan",
      en: "/en/services",
    },
  },
};

export default function EnglishServicesIndexPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Services" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Practice Areas
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Indonesian tax advisory, compliance &amp; controversy services
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Tailored tax solutions for multinational subsidiaries (PMA),
              domestic corporate groups, and high-growth businesses operating in
              Indonesia.
            </p>
          </div>

          <div className="mt-10">
            <ServiceGrid items={services} isEn />
          </div>
        </div>
      </section>

      <CtaBand mode="en-corporate" />
    </>
  );
}
