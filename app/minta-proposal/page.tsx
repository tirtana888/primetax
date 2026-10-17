import type { Metadata } from "next";
import { ShieldCheck, Lock } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RfpForm } from "@/components/blocks/RfpForm";
import { site } from "@/config/site";
import testimonialsData from "@/content/testimonials.json";

export const metadata: Metadata = {
  title: "Minta Proposal (RFP) Layanan Pajak Korporasi & PMA",
  description:
    "Formulir permintaan proposal (Request for Proposal / RFP) layanan konsultan pajak untuk korporasi, grup usaha, dan PMA di Indonesia.",
  alternates: {
    canonical: "/minta-proposal",
    languages: {
      "id-ID": "/minta-proposal",
      en: "/en/request-proposal",
    },
  },
};

/**
 * Halaman Minta Proposal /minta-proposal sesuai spesifikasi §8.15:
 * Kiri: Form RFP multi-langkah (3 langkah)
 * Kanan (desktop): "Apa yang terjadi setelah Anda mengirim" (timeline 3 langkah),
 * badge kerahasiaan/NDA, 1 testimoni korporasi, kontak PIC bisnis.
 */
export default function RequestProposalPage() {
  const corpTestimonial = testimonialsData.find(
    (t) => t.consent === true && t.segment === "korporasi"
  );

  return (
    <section className="bg-ink-100 pt-6 pb-16 lg:pb-24">
      <div className="container-site">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Untuk Korporasi & PMA", href: "/korporasi" },
            { label: "Minta Proposal (RFP)" },
          ]}
        />

        <div className="mt-6 max-w-3xl">
          <p className="font-heading text-eyebrow uppercase text-navy-700">
            Request for Proposal (RFP)
          </p>
          <h1 className="mt-2 font-heading text-h1 font-bold text-navy-900">
            Minta proposal pendampingan pajak korporasi
          </h1>
          <p className="mt-3 text-lead text-ink-700">
            Lengkapi informasi di bawah ini dalam 3 langkah singkat. Data Anda
            tersimpan otomatis selama pengisian dan dijaga kerahasiaannya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Kiri: Form RFP 3 Langkah */}
          <div className="lg:col-span-7">
            <RfpForm />
          </div>

          {/* Kanan (Desktop): Timeline 3 langkah, Badge NDA, Testimoni Korporasi, Kontak PIC (§8.15) */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-h4 font-semibold text-navy-900">
                Apa yang terjadi setelah Anda mengirim?
              </h2>
              <ol className="mt-5 space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-caption font-bold text-white tabular">
                    1
                  </span>
                  <div>
                    <p className="font-heading text-body-sm font-semibold text-navy-900">
                      Telaah awal oleh Partner (≤ 1 hari kerja)
                    </p>
                    <p className="mt-0.5 text-caption text-ink-600">
                      Partner sesuai spesialisasi (Sengketa / TP / Kepatuhan)
                      meninjau profil kebutuhan Anda dan mengirimkan NDA bila
                      diminta.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-caption font-bold text-white tabular">
                    2
                  </span>
                  <div>
                    <p className="font-heading text-body-sm font-semibold text-navy-900">
                      Scoping call 45–60 menit
                    </p>
                    <p className="mt-0.5 text-caption text-ink-600">
                      Diskusi mendalam mengenai posisi kasus, tahun pajak, dan
                      target waktu penyelesaian.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-caption font-bold text-white tabular">
                    3
                  </span>
                  <div>
                    <p className="font-heading text-body-sm font-semibold text-navy-900 tabular">
                      Proposal tertulis (≤{" "}
                      {site.contact.proposalDaysAfterScoping} hari kerja pasca
                      scoping)
                    </p>
                    <p className="mt-0.5 text-caption text-ink-600">
                      Anda menerima dokumen proposal lengkap berisi lingkup
                      deliverables, susunan tim, SLA, dan struktur biaya.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Badge Kerahasiaan & NDA */}
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <Lock
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-heading text-body-sm font-semibold text-navy-900">
                    Jaminan Kerahasiaan &amp; NDA
                  </p>
                  <p className="mt-1 text-caption text-ink-700">
                    Kami tidak pernah membagikan identitas maupun informasi
                    permintaan proposal Anda kepada pihak ketiga mana pun.
                  </p>
                </div>
              </div>
            </div>

            {/* 1 Testimoni Korporasi */}
            {corpTestimonial && (
              <figure className="m-0 rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
                <blockquote className="m-0 font-heading text-body font-medium text-navy-900">
                  “{corpTestimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 border-t border-ink-200 pt-3 text-caption text-ink-600">
                  <strong className="text-navy-900">
                    {corpTestimonial.name}
                  </strong>{" "}
                  · {corpTestimonial.role} ({corpTestimonial.company})
                </figcaption>
              </figure>
            )}

            {/* Kontak PIC Bisnis */}
            <div className="rounded-xl border border-ink-300 bg-white p-5">
              <div className="flex items-center gap-2 font-heading text-body-sm font-semibold text-navy-900">
                <ShieldCheck
                  className="h-4 w-4 text-emerald-700"
                  aria-hidden="true"
                />
                <span>Butuh mengirim dokumen TOR / RFP resmi via email?</span>
              </div>
              <p className="mt-1.5 text-caption text-ink-600">
                Kirimkan langsung ke desk korporasi kami di{" "}
                <strong className="text-navy-900">
                  {site.contact.businessEmail}
                </strong>{" "}
                atau telepon <span className="tabular">{site.contact.phone}</span>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
