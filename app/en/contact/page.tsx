import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact ${site.brandName} — Indonesian Tax Consultants`,
  description: `Contact ${site.brandName} for corporate tax advisory, transfer pricing, and tax controversy representation in Indonesia.`,
  alternates: {
    canonical: "/en/contact",
    languages: {
      "id-ID": "/kontak",
      en: "/en/contact",
    },
  },
};

export default function EnglishContactPage() {
  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-site">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Contact Us" },
          ]}
        />

        <div className="mt-6 max-w-3xl">
          <p className="font-heading text-eyebrow uppercase text-emerald-700">
            Get in Touch
          </p>
          <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
            Contact our advisory team
          </h1>
          <p className="mt-4 text-lead text-ink-600">
            Reach out to schedule a 45–60 minute corporate scoping call or
            submit a formal Request for Proposal (RFP).
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-ink-300 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Corporate &amp; Foreign Investment Desk
            </h2>
            <p className="mt-2 text-body text-ink-600">
              For multinational groups, PMA entities, and corporate tax
              inquiries, submit your scope directly via our RFP portal or
              download our credentials.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/en/request-proposal">
                Request Proposal (RFP)
              </Button>
              <Button variant="secondary" size="lg" href="/company-profile">
                Download Company Profile
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-ink-300 bg-navy-50/50 p-8">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Office Information
            </h2>
            <dl className="mt-5 space-y-3 text-body-sm text-ink-700">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-navy-900">Address</dt>
                  <dd>
                    {site.contact.address}, {site.contact.city}, Indonesia
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-navy-900">Telephone</dt>
                  <dd className="tabular">{site.contact.phone}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-navy-900">
                    Corporate Email
                  </dt>
                  <dd>{site.contact.businessEmail}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-navy-900">
                    Business Hours
                  </dt>
                  <dd className="tabular">
                    Monday–Friday, {site.contact.hours.label} WIB (UTC+7)
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
