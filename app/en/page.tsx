import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PhotoPlaceholder } from "@/components/blocks/PhotoPlaceholder";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: `Indonesian Tax Advisory for Corporations, Foreign Investment (PMA) & SMEs`,
  description:
    "Certified Indonesian tax consultants providing transfer pricing documentation (PMK 172/2023), Pillar Two GMT readiness, SP2DK & tax audit defense, tax court litigation, and corporate compliance.",
  alternates: {
    canonical: "/en",
    languages: {
      "id-ID": "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function EnglishHomePage() {
  const coreServices = services.slice(0, 6);

  return (
    <>
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Indonesian Tax Advisory &amp; Controversy
              </p>
              <h1 className="mt-3 font-heading text-display font-extrabold text-navy-900">
                Audit-ready. Dispute-ready. Growth-ready.
              </h1>
              <p className="mt-4 max-w-2xl text-lead text-ink-700">
                Strategic tax advisory and compliance for multinational
                subsidiaries (PMA), domestic corporate groups, and growing
                enterprises in Indonesia—backed by certified BKP consultants and
                licensed Tax Court attorneys.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Badge variant="certification" size="sm">
                  Certified Tax Consultants (BKP A/B/C)
                </Badge>
                <Badge variant="brand" size="sm">
                  Licensed Tax Court Counsel
                </Badge>
                <Badge variant="neutral" size="sm">
                  &lt; 1 Business Day SLA
                </Badge>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  href="/en/request-proposal"
                >
                  Request Proposal (RFP)
                </Button>
                <Button variant="secondary" size="lg" href="/company-profile">
                  Download Company Profile
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhotoPlaceholder
                label="[HERO PHOTO: Senior Advisory Team]"
                ratio="5:4"
                caption="Senior Partners and Managers reviewing transfer pricing and tax audit documentation."
              />
            </div>
          </div>

          {/* Dual Path Cards in English */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border-2 border-ink-300 bg-white p-8 shadow-sm transition-colors hover:border-emerald-500">
              <div>
                <p className="font-heading text-eyebrow uppercase text-navy-700">
                  For Corporations &amp; Foreign Investment (PMA)
                </p>
                <h2 className="mt-2 font-heading text-h3 font-semibold text-navy-900">
                  Strategic risk mitigation &amp; controversy defense
                </h2>
                <ul className="mt-5 space-y-3 text-body-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>
                      Transfer Pricing Documentation (PMK 172/2023) &amp; Global
                      Minimum Tax (Pillar Two)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>
                      SP2DK inquiry response, Tax Audit defense, VAT refunds
                      &amp; Tax Court litigation
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>
                      Written SLA, dedicated Partner-in-Charge, &amp; bilingual
                      executive reporting
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-200 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  href="/en/request-proposal"
                >
                  Request Proposal
                </Button>
                <Link
                  href="/en/corporate"
                  className="inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-700 no-underline hover:underline"
                >
                  <span>Explore Corporate Solutions</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border-2 border-ink-300 bg-white p-8 shadow-sm transition-colors hover:border-emerald-500">
              <div>
                <p className="font-heading text-eyebrow uppercase text-emerald-700">
                  For Growing Businesses &amp; Startups in Indonesia
                </p>
                <h2 className="mt-2 font-heading text-h3 font-semibold text-navy-900">
                  Monthly tax compliance &amp; company incorporation
                </h2>
                <ul className="mt-5 space-y-3 text-body-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>
                      Monthly withholding tax (PPh 21/23/26), VAT e-Invoicing
                      (Coretax), &amp; Annual Returns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>
                      Entity setup (PT / PMA), Corporate NPWP, &amp; PKP VAT
                      registration
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span className="tabular">
                      Transparent SME monthly packages starting from IDR{" "}
                      {site.pricing.starterFrom}/month
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-200 pt-4">
                <Button variant="outline" size="md" href="/en/contact">
                  Schedule a Consultation
                </Button>
                <Link
                  href="/en/services"
                  className="inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-700 no-underline hover:underline"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Our Practice Areas
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Comprehensive Indonesian tax services
            </h2>
          </div>

          <div className="mt-10">
            <ServiceGrid items={coreServices} isEn />
          </div>
        </div>
      </section>

      <CtaBand mode="en-corporate" />
    </>
  );
}
