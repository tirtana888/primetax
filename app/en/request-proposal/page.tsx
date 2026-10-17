import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RfpForm } from "@/components/blocks/RfpForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Request for Proposal (RFP) — Corporate Tax & Transfer Pricing",
  description:
    "Submit a Request for Proposal (RFP) for corporate tax compliance, transfer pricing documentation, or tax dispute representation in Indonesia.",
  alternates: {
    canonical: "/en/request-proposal",
    languages: {
      "id-ID": "/minta-proposal",
      en: "/en/request-proposal",
    },
  },
};

export default function EnglishRequestProposalPage() {
  return (
    <section className="bg-ink-100 pt-6 pb-16 lg:pb-24">
      <div className="container-site">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Corporate & PMA", href: "/en/corporate" },
            { label: "Request Proposal (RFP)" },
          ]}
        />

        <div className="mt-6 max-w-3xl">
          <p className="font-heading text-eyebrow uppercase text-navy-700">
            Request for Proposal (RFP)
          </p>
          <h1 className="mt-2 font-heading text-h1 font-bold text-navy-900">
            Request a corporate tax proposal
          </h1>
          <p className="mt-3 text-lead text-ink-700">
            Complete the 3-step form below. Our Partner-in-Charge will respond
            within 1 business day to arrange an NDA and a 45–60 minute scoping
            call.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <RfpForm isEn />
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-h4 font-semibold text-navy-900">
                What happens next?
              </h2>
              <ol className="mt-4 space-y-3 text-body-sm text-ink-700">
                <li>
                  <strong className="text-navy-900">
                    1. Partner Review (≤ 1 business day):
                  </strong>{" "}
                  Initial review &amp; mutual NDA execution if requested.
                </li>
                <li>
                  <strong className="text-navy-900">
                    2. Scoping Call (45–60 mins):
                  </strong>{" "}
                  Technical discussion of scope, entities, and timelines.
                </li>
                <li className="tabular">
                  <strong className="text-navy-900">
                    3. Written Proposal (≤{" "}
                    {site.contact.proposalDaysAfterScoping} business days):
                  </strong>{" "}
                  Full deliverables breakdown, team credentials, and fee
                  structure.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
