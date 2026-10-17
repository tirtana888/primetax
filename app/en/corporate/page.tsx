import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { DisputeFlowDiagram } from "@/components/blocks/DisputeFlowDiagram";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Corporate & Foreign Investment (PMA) Tax Advisory in Indonesia",
  description:
    "Strategic tax advisory, transfer pricing documentation (PMK 172/2023), Pillar Two GMT readiness, SP2DK & tax audit defense, and Tax Court representation in Indonesia.",
  alternates: {
    canonical: "/en/corporate",
    languages: {
      "id-ID": "/korporasi",
      en: "/en/corporate",
    },
  },
};

export default function EnglishCorporatePage() {
  const corporateServices = services.filter(
    (s) => s.segment === "korporasi" || s.segment === "both"
  );

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Corporate & Foreign Investment (PMA)" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-navy-700">
              For Corporations &amp; Multinational Subsidiaries (PMA)
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Audit-ready. Dispute-ready. Growth-ready.
            </h1>
            <p className="mt-4 text-lead text-ink-700">
              We support CFOs, regional tax directors, and finance teams of
              foreign-invested (PMA) and domestic corporate groups in navigating
              Indonesian tax compliance, transfer pricing, and tax controversy
              with senior representation ({site.about.seniorBackground}).
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="/en/request-proposal">
                Request Proposal (RFP)
              </Button>
              <Button variant="secondary" size="lg" href="/company-profile">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-h2 font-bold text-navy-900">
            Corporate &amp; international tax services
          </h2>
          <ServiceGrid items={corporateServices} isEn />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site space-y-12">
          <DisputeFlowDiagram isEn />

          <div className="overflow-x-auto rounded-lg border border-ink-300 bg-white shadow-xs">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Corporate engagement governance and SLA standards
              </caption>
              <thead>
                <tr className="border-b border-navy-200 bg-navy-50 font-body text-label font-semibold text-navy-900">
                  <th scope="col" className="px-4 py-3.5">
                    Governance Aspect
                  </th>
                  <th scope="col" className="px-4 py-3.5">
                    Our Commitment &amp; Standard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200 text-body-sm">
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold text-navy-900">
                    Response Time SLA
                  </th>
                  <td className="px-4 py-3.5 text-ink-700">
                    &lt; 1 business day (written SLA in engagement letter)
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold text-navy-900">
                    Engagement Leadership
                  </th>
                  <td className="px-4 py-3.5 text-ink-700">
                    Dedicated Partner-in-Charge + Senior Manager throughout the assignment
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold text-navy-900">
                    Confidentiality &amp; Data Protection
                  </th>
                  <td className="px-4 py-3.5 text-ink-700">
                    Mutual NDA execution prior to scoping &amp; full compliance with Law No. 27/2022 (PDP Law)
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold text-navy-900">
                    Independence
                  </th>
                  <td className="px-4 py-3.5 text-ink-700">
                    Independent from external audit firms (no audit independence conflicts) &amp; strict anti-bribery policy
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand mode="en-corporate" />
    </>
  );
}
