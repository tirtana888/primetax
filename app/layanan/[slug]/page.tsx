import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertTriangle, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button, WaButton } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { DisputeFlowDiagram } from "@/components/blocks/DisputeFlowDiagram";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { Accordion } from "@/components/ui/Accordion";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import { services, getServiceBySlug } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { teamMembers } from "@/content/team";
import { insightArticles } from "@/content/insights";
import { buildServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
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
    title: svc.title,
    description: svc.shortDescription,
    alternates: {
      canonical: `/layanan/${svc.slug}`,
      languages: {
        "id-ID": `/layanan/${svc.slug}`,
        en: `/en/services/${svc.enSlug}`,
      },
    },
  };
}

/**
 * Halaman Detail Layanan /layanan/[slug] sesuai spesifikasi §8.7 (11 blok lengkap):
 * 1. Hero (Breadcrumb, H1, lead, CTA sesuai tabel §8.7, badge segmen)
 * 2. Untuk siapa (3–4 bullet)
 * 3. Masalah umum (kartu tanda bahaya/pemicu)
 * 4. Lingkup layanan (daftar deliverable konkret)
 * 5. Proses (Timeline langkah + estimasi durasi)
 * 6. Diagram alur (jika relevan: SP2DK -> Pengadilan Pajak)
 * 7. Studi kasus terkait
 * 8. Tim yang menangani
 * 9. FAQ layanan (schema FAQPage)
 * 10. Insight terkait
 * 11. CTA band
 */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const relatedCases = caseStudies.filter((c) =>
    c.services.includes(svc.slug)
  );
  const displayCases =
    relatedCases.length > 0 ? relatedCases : caseStudies.slice(0, 2);

  const relatedTeam = teamMembers.slice(0, 3);
  const relatedInsights = insightArticles
    .filter((a) => a.tags.some((t) => svc.tags.includes(t)))
    .slice(0, 3);
  const displayInsights =
    relatedInsights.length > 0
      ? relatedInsights
      : insightArticles.slice(0, 3);

  const segmentBadgeLabel =
    svc.segment === "korporasi"
      ? "Untuk Korporasi & PMA"
      : svc.segment === "ukm"
      ? "Untuk UKM & Startup"
      : "Untuk Korporasi & UKM";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildServiceSchema({
              name: svc.title,
              description: svc.shortDescription,
              slug: svc.slug,
            })
          ),
        }}
      />

      {/* 1. Hero Layanan (§8.7 #1) */}
      <section className="bg-white pt-6 pb-16 lg:pb-20">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Layanan", href: "/layanan" },
              { label: svc.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge
                variant={svc.segment === "ukm" ? "brand" : "neutral"}
                size="md"
              >
                {segmentBadgeLabel}
              </Badge>
            </div>

            <h1 className="font-heading text-h1 font-bold text-navy-900">
              {svc.title}
            </h1>
            <p className="mt-4 text-lead text-ink-700">{svc.lead}</p>

            {/* CTA sesuai matriks tabel §8.7 */}
            <div className="mt-8">
              {svc.ctaMode === "sme" && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <WaButton
                    waContext={{ type: "service", serviceName: svc.title }}
                    ctaLocation="hero"
                    segment="ukm"
                    size="lg"
                  >
                    Konsultasi via WhatsApp
                  </WaButton>
                  <Button variant="outline" size="lg" href="/harga">
                    Lihat Paket
                  </Button>
                </div>
              )}

              {svc.ctaMode === "dual" && (
                <div className="space-y-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <WaButton
                      waContext={{ type: "service", serviceName: svc.title }}
                      ctaLocation="hero"
                      segment="ukm"
                      size="lg"
                    >
                      UKM: Chat via WhatsApp
                    </WaButton>
                    <Button variant="secondary" size="lg" href="/minta-proposal">
                      Korporasi: Minta Proposal
                    </Button>
                    <Button variant="outline" size="lg" href="/kontak">
                      Jadwalkan Konsultasi
                    </Button>
                  </div>
                </div>
              )}

              {svc.ctaMode === "corporate" && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" size="lg" href="/minta-proposal">
                    Minta Proposal
                  </Button>
                  <Button variant="secondary" size="lg" href="/company-profile">
                    Unduh Company Profile
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Untuk Siapa + Masalah Umum (§8.7 #2 & #3) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* 2. Untuk Siapa */}
            <div className="lg:col-span-5">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Profil Klien
              </p>
              <h2 className="mt-2 font-heading text-h3 font-bold text-navy-900">
                Untuk siapa layanan ini dirancang?
              </h2>
              <ul className="mt-5 space-y-3.5 rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
                {svc.whoFor.map((item, idx) => (
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

            {/* 3. Masalah Umum / Pemicu */}
            <div className="lg:col-span-7">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Tanda Bahaya &amp; Pemicu
              </p>
              <h2 className="mt-2 font-heading text-h3 font-bold text-navy-900">
                Masalah umum yang sering dihadapi wajib pajak
              </h2>
              <div className="mt-5 space-y-4">
                {svc.commonProblems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-ink-300 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className="mt-0.5 h-5 w-5 shrink-0 text-warning-fg"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-heading text-h5 font-semibold text-navy-900">
                          {prob.title}
                        </h3>
                        <p className="mt-1 text-body-sm text-ink-600">
                          {prob.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4, 5 & 6. Lingkup Layanan (Deliverables) + Proses + Diagram Alur (§8.7 #4, #5, #6) */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Deliverables Konkret
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Lingkup layanan &amp; hasil kerja yang Anda terima
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {svc.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-ink-300 bg-navy-50/40 p-5"
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

          {/* 5. Proses & Estimasi Durasi */}
          <div className="mt-16">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tahapan Kerja
            </p>
            <h2 className="mt-2 mb-8 font-heading text-h2 font-bold text-navy-900">
              Alur pengerjaan &amp; estimasi waktu
            </h2>
            <ProcessTimeline
              steps={svc.processSteps.map((p) => ({
                title: p.step,
                duration: p.duration,
                description: p.description,
              }))}
            />
          </div>

          {/* 6. Diagram Alur Sengketa (jika relevan) */}
          {svc.showDisputeDiagram && (
            <div className="mt-14">
              <DisputeFlowDiagram />
            </div>
          )}
        </div>
      </section>

      {/* 7. Studi Kasus Terkait (§8.7 #7) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <p className="font-heading text-eyebrow uppercase text-emerald-700">
            Studi Kasus Terkait
          </p>
          <h2 className="mt-2 mb-8 font-heading text-h2 font-bold text-navy-900">
            Contoh penyelesaian kasus serupa
          </h2>
          <CaseStudyGrid items={displayCases} />
        </div>
      </section>

      {/* 8. Tim yang Menangani (§8.7 #8) */}
      <section className="section bg-white">
        <div className="container-site">
          <p className="font-heading text-eyebrow uppercase text-emerald-700">
            Tim Spesialis
          </p>
          <h2 className="mt-2 mb-8 font-heading text-h2 font-bold text-navy-900">
            Partner &amp; manajer yang menangani layanan ini
          </h2>
          <TeamGrid members={relatedTeam} />
        </div>
      </section>

      {/* 9. FAQ Layanan (§8.7 #9) */}
      <section className="section bg-ink-100">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tanya Jawab Layanan
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Pertanyaan yang sering diajukan
            </h2>
          </div>
          <Accordion items={svc.faqs} />
        </div>
      </section>

      {/* 10. Insight Terkait (§8.7 #10) */}
      <section className="section bg-white">
        <div className="container-site">
          <p className="font-heading text-eyebrow uppercase text-emerald-700">
            Bacaan Terkait
          </p>
          <h2 className="mt-2 mb-8 font-heading text-h2 font-bold text-navy-900">
            Insight &amp; panduan regulasi terkait
          </h2>
          <InsightGrid articles={displayInsights} />
        </div>
      </section>

      {/* 11. CTA Band (§8.7 #11) */}
      <CtaBand
        mode={
          svc.ctaMode === "corporate"
            ? "corporate"
            : svc.ctaMode === "sme"
            ? "sme"
            : "dual"
        }
        waContext={{ type: "service", serviceName: svc.title }}
      />
    </>
  );
}
