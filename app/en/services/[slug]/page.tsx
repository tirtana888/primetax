import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DisputeFlowDiagram } from "@/components/blocks/DisputeFlowDiagram";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button } from "@/components/ui/Button";
import { services, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.enSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: svc.enTitle,
    description: svc.enShortDescription,
    alternates: {
      canonical: `/en/services/${svc.enSlug}`,
      languages: {
        "id-ID": `/layanan/${svc.slug}`,
        en: `/en/services/${svc.enSlug}`,
      },
    },
  };
}

export default async function EnglishServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-20">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Services", href: "/en/services" },
              { label: svc.enTitle },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Indonesian Tax Practice
            </p>
            <h1 className="mt-2 font-heading text-h1 font-bold text-navy-900">
              {svc.enTitle}
            </h1>
            <p className="mt-4 text-lead text-ink-700">{svc.enLead}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="/en/request-proposal">
                Request Proposal
              </Button>
              <Button variant="outline" size="lg" href="/en/contact">
                Schedule Scoping Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Who this service is for
            </h2>
            <ul className="mt-5 space-y-3 rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
              {svc.enWhoFor.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-body-sm text-ink-900"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Key deliverables &amp; scope of work
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3.5">
              {svc.enDeliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-ink-300 bg-white p-5 shadow-xs"
                >
                  <FileCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <span className="font-body text-body-sm font-medium text-ink-900">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {svc.showDisputeDiagram && (
        <section className="section bg-white">
          <div className="container-site">
            <DisputeFlowDiagram isEn />
          </div>
        </section>
      )}

      <CtaBand mode="en-corporate" />
    </>
  );
}
