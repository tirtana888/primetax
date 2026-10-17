import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import {
  caseStudies,
  getCaseStudyBySlug,
  DEFAULT_CASE_STUDY_DISCLAIMER,
} from "@/content/case-studies";
import { services } from "@/content/services";
import { teamMembers } from "@/content/team";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.challenge,
    alternates: {
      canonical: `/studi-kasus/${cs.slug}`,
    },
  };
}

/**
 * Detail Studi Kasus /studi-kasus/[slug] sesuai format wajib §9.4:
 * 1. Hero: badge industri + layanan + segmen · H1 (judul berbentuk hasil) · baris "Klien: [clientLabel] · Durasi: [duration]"
 * 2. Kotak hasil (section navy-900): 1–3 angka besar (Stat, emerald-200) + label
 * 3. Tantangan (H2 + paragraf)
 * 4. Pendekatan (H2 + stepper bernomor)
 * 5. Hasil (H2 + bullet hasil + konteks)
 * 6. Kutipan klien (jika ada)
 * 7. Tim yang menangani (kartu kecil)
 * 8. Disclaimer wajib
 * 9. CTA sesuai segmen + 2 studi kasus terkait.
 */
export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const serviceLabels = cs.services.map(
    (sSlug) => services.find((s) => s.slug === sSlug)?.title || sSlug
  );
  const handlingTeam = teamMembers.filter((m) => cs.team.includes(m.slug));
  const otherCases = caseStudies
    .filter((item) => item.slug !== cs.slug)
    .slice(0, 2);

  return (
    <>
      {/* 1. Hero Studi Kasus (§9.4 #1) */}
      <section className="bg-white pt-6 pb-12 lg:pb-16">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Studi Kasus", href: "/studi-kasus" },
              { label: cs.title },
            ]}
          />

          <div className="mt-6 max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="neutral">{cs.industry}</Badge>
              {serviceLabels.map((lbl) => (
                <Badge key={lbl} variant="brand">
                  {lbl}
                </Badge>
              ))}
              <Badge variant="certification">
                {cs.segment === "ukm" ? "Segmen UKM" : "Segmen Korporasi"}
              </Badge>
            </div>

            <h1 className="font-heading text-h1 font-bold text-navy-900">
              {cs.title}
            </h1>

            <p className="mt-4 font-body text-lead font-medium text-ink-700 tabular">
              Klien: <strong className="text-navy-900">{cs.clientLabel}</strong>{" "}
              · Durasi: <strong className="text-navy-900">{cs.duration}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Kotak Hasil (§9.4 #2) — Section navy-900 (Section Navy 1 dari 2) */}
      <section aria-label="Ringkasan hasil terukur" className="bg-navy-900 py-12 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cs.results.map((res, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-navy-800 bg-navy-800/60 p-6"
              >
                <p className="font-heading text-stat font-extrabold text-emerald-200 tabular">
                  {res.value}
                </p>
                <p className="mt-1.5 text-body font-medium text-white">
                  {res.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4, 5, 6, 8. Tantangan, Pendekatan, Hasil, Kutipan, & Disclaimer (§9.4) */}
      <section className="section bg-white">
        <div className="container-prose space-y-12">
          {/* 3. Tantangan */}
          <div>
            <h2 className="font-heading text-h2 font-bold text-navy-900">
              Tantangan
            </h2>
            <p className="mt-4 text-body text-ink-900">{cs.challenge}</p>
          </div>

          {/* 4. Pendekatan (Stepper Bernomor) */}
          <div>
            <h2 className="font-heading text-h2 font-bold text-navy-900">
              Pendekatan yang ditempuh
            </h2>
            <ol className="mt-6 space-y-4">
              {cs.approach.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 rounded-lg border border-ink-300 bg-ink-100/60 p-5"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-body-sm font-bold text-white tabular">
                    {idx + 1}
                  </span>
                  <p className="m-0 pt-1 text-body text-ink-900">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* 5. Hasil */}
          <div>
            <h2 className="font-heading text-h2 font-bold text-navy-900">
              Hasil
            </h2>
            <ul className="mt-4 space-y-3">
              {cs.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-ink-900">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-navy-900 tabular">
                      {r.value}
                    </strong>{" "}
                    — {r.label} dalam durasi pengerjaan{" "}
                    <span className="tabular">{cs.duration}</span>.
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Kutipan Klien (jika ada) */}
          {cs.quote && (
            <figure className="m-0 rounded-xl border border-navy-200 bg-navy-50 p-6 md:p-8">
              <blockquote className="m-0 font-heading text-lead font-medium text-navy-900">
                “{cs.quote.text}”
              </blockquote>
              <figcaption className="mt-4 text-body-sm font-semibold text-ink-700">
                — {cs.quote.name}, {cs.quote.role}
              </figcaption>
            </figure>
          )}

          {/* 8. Disclaimer Wajib (§9.4 #8) */}
          <div className="flex items-start gap-3 rounded-lg border border-info-border bg-info-bg p-4 text-body-sm text-info-fg">
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="m-0">
              {cs.disclaimer || DEFAULT_CASE_STUDY_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* 7 & 9. Tim yang Menangani + 2 Studi Kasus Terkait (§9.4 #7 & #9) */}
      <section className="section bg-ink-100">
        <div className="container-site space-y-16">
          {handlingTeam.length > 0 && (
            <div>
              <h2 className="mb-6 font-heading text-h3 font-bold text-navy-900">
                Tim yang menangani kasus ini
              </h2>
              <TeamGrid members={handlingTeam} />
            </div>
          )}

          <div>
            <h2 className="mb-6 font-heading text-h3 font-bold text-navy-900">
              Studi kasus terkait lainnya
            </h2>
            <CaseStudyGrid items={otherCases} />
          </div>
        </div>
      </section>

      {/* CTA sesuai segmen (§9.4 #9) — Section Navy 2 dari 2 */}
      <CtaBand mode={cs.segment === "ukm" ? "sme" : "corporate"} />
    </>
  );
}
