import Link from "next/link";
import {
  ArrowRight,
  FileLock2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { HeroVideo } from "@/components/blocks/HeroVideo";
import { SectorStrip } from "@/components/blocks/SectorStrip";
import { PathCards } from "@/components/blocks/PathCards";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import {
  TestimonialSection,
  getVisibleTestimonials,
} from "@/components/blocks/TestimonialSection";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { NewsletterSection } from "@/components/blocks/NewsletterSection";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button, WaButton } from "@/components/ui/Button";
import { filterReady } from "@/lib/content";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { teamMembers } from "@/content/team";
import { insightArticles } from "@/content/insights";
import { buildProfessionalServiceSchema } from "@/lib/schema";

export default function HomePage() {
  const coreServices = services.slice(0, 6);
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const coreTeam = teamMembers.slice(0, 4);
  const latestInsights = insightArticles.slice(0, 3);
  const hasTestimonials = getVisibleTestimonials("all", 3).length > 0;
  const hasTeam = filterReady(coreTeam, (m) => [m.name]).length > 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProfessionalServiceSchema()),
        }}
      />

      {/* Section 1: Hero — video udara Bundaran HI + overlay navy; satu pesan, dua CTA */}
      <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-navy-950 text-white md:min-h-[38rem] lg:min-h-[42rem]">
        <HeroVideo />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-950/70 to-transparent"
        />

        <div className="container-site py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-300">
              Konsultan Pajak Korporasi &amp; UKM
            </p>
            <h1 className="mt-4 font-heading text-display font-extrabold text-white">
              Pajak bisnis Anda, siap diperiksa kapan pun.
            </h1>
            <p className="mt-5 max-w-xl text-lead text-navy-100">
              Tim konsultan bersertifikat dengan PIC jelas, laporan berkala, dan
              biaya tertulis sejak awal.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" href="/minta-proposal">
                Minta Proposal
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <WaButton
                waContext={{ type: "general" }}
                ctaLocation="hero"
                segment="both"
                size="lg"
                className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/15"
              >
                Konsultasi via WhatsApp
              </WaButton>
            </div>

            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-navy-100">
              <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <span>Bersertifikat BKP A/B/C</span>
              <span aria-hidden="true" className="text-navy-200/60">•</span>
              <span>Kuasa Hukum Pajak</span>
              <span aria-hidden="true" className="text-navy-200/60">•</span>
              <span>Respons &lt; 1 hari kerja</span>
            </p>
          </div>
        </div>
      </section>

      <SectorStrip />

      {/* Section 2: Path Cards — dua jalur dengan identitas visual berbeda */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Dua Jalur Layanan
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Pilih jalur yang sesuai dengan bisnis Anda
            </h2>
          </div>
          <div className="mt-10 lg:mt-12">
            <PathCards />
          </div>
        </div>
      </section>

      {/* Section 3: Trust Strip (§8.3 #3) — Latar navy-900 (Section Navy 1 dari 2) */}
      <TrustStrip variant="general" />

      {/* Section 4: Layanan (§8.3 #4) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Layanan
              </p>
              <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
                Semua kebutuhan pajak bisnis, satu tim.
              </h2>
              <p className="mt-3 max-w-2xl text-lead text-ink-600">
                Mulai dari kepatuhan bulanan di Coretax, dokumentasi Transfer
                Pricing, hingga pendampingan SP2DK dan persidangan Pengadilan
                Pajak.
              </p>
            </div>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-1.5 font-heading text-btn-md font-semibold text-emerald-700 no-underline hover:text-emerald-800 hover:underline"
            >
              <span>Lihat semua layanan</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 lg:mt-12">
            <ServiceGrid items={coreServices} featuredFirst mobileRail />
          </div>
        </div>
      </section>

      {/* Section 5: Cara Kami Bekerja (§8.3 #5) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Transparansi Proses
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Cara kami bekerja sejak hari pertama
            </h2>
            <p className="mt-3 text-lead text-ink-600">
              Tanpa tebak-tebakan. Anda selalu mengetahui tahapan kerja, PIC
              yang bertanggung jawab, dan jadwal penyelesaian dokumen.
            </p>
          </div>

          <div className="mt-8 lg:mt-12">
            <ProcessTimeline
              steps={[
                {
                  title: "Konsultasi awal",
                  duration: "Hari 1",
                  description:
                    "Gratis 30 menit via WhatsApp/online untuk UKM, atau scoping call 45–60 menit (dengan NDA) untuk korporasi.",
                },
                {
                  title: "Diagnostik & pemetaan",
                  duration: "Minggu 1",
                  description:
                    "Kami menelaah surat DJP, laporan keuangan, atau profil transaksi usaha Anda untuk memetakan kebutuhan.",
                },
                {
                  title: "Rencana & penawaran tertulis",
                  duration: "Minggu 1–2",
                  description:
                    "Anda menerima lingkup kerja, jadwal deliverables, dan penawaran biaya yang jelas sebelum pekerjaan dimulai.",
                },
                {
                  title: "Eksekusi & pelaporan rutin",
                  duration: "Berjalan",
                  description:
                    "Pengerjaan dengan cek silang dua lapis, pelaporan tepat sebelum tenggat, dan laporan berkala ke manajemen.",
                },
              ]}
            />
          </div>

          {/* Kerahasiaan data — pertanyaan pertama tim legal/procurement korporasi */}
          <div className="mt-12 grid grid-cols-1 gap-6 rounded-xl border border-ink-200 bg-white p-6 sm:grid-cols-3 md:p-8 lg:mt-16">
            {[
              {
                icon: FileLock2,
                title: "NDA sebelum diskusi",
                desc: "Perjanjian kerahasiaan ditandatangani sebelum dokumen apa pun dibagikan.",
              },
              {
                icon: UserCheck,
                title: "Akses dokumen terbatas",
                desc: "Hanya PIC dan tim yang ditugaskan yang dapat membuka dokumen Anda.",
              },
              {
                icon: ShieldCheck,
                title: "Sesuai UU PDP",
                desc: "Data pribadi diproses sesuai UU No. 27/2022 tentang Pelindungan Data Pribadi.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-navy-700" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-h6 font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-body-sm text-ink-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Studi Kasus Unggulan (§8.3 #6) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Bukti Hasil
              </p>
              <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
                Studi kasus dengan hasil terukur
              </h2>
              <p className="mt-3 max-w-2xl text-lead text-ink-600">
                Bagaimana kami mendampingi perusahaan manufaktur, distribusi,
                PMA, dan UKM menyelesaikan isu perpajakan secara terukur.
              </p>
            </div>
            <Link
              href="/studi-kasus"
              className="inline-flex items-center gap-1.5 font-heading text-btn-md font-semibold text-emerald-700 no-underline hover:text-emerald-800 hover:underline"
            >
              <span>Lihat semua studi kasus</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 lg:mt-12">
            <CaseStudyGrid items={featuredCaseStudies} mobileRail />
          </div>
        </div>
      </section>

      {/* Section 7: Testimoni (§8.3 #7) — Latar ink-100; disembunyikan bila belum ada testimoni final */}
      {hasTestimonials && (
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Suara Klien
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Dipercaya oleh CFO korporasi dan pemilik UKM
            </h2>
          </div>

          <div className="mt-8 lg:mt-12">
            <TestimonialSection segment="all" limit={3} mobileRail />
          </div>
        </div>
      </section>
      )}

      {/* Section 8: Tim Inti (§8.3 #8) — disembunyikan di produksi sampai profil tim final */}
      {hasTeam && (
      <section className="section border-t border-ink-200 bg-white">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Tim Bersertifikat
              </p>
              <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
                Ditangani langsung oleh konsultan berizin resmi
              </h2>
              <p className="mt-3 max-w-2xl text-lead text-ink-600">
                Partner dan manajer kami memegang sertifikasi BKP A/B/C dan Izin
                Kuasa Hukum Pengadilan Pajak dengan pengalaman mendalam.
              </p>
            </div>
            <Link
              href="/tim"
              className="inline-flex items-center gap-1.5 font-heading text-btn-md font-semibold text-emerald-700 no-underline hover:text-emerald-800 hover:underline"
            >
              <span>Kenali tim kami</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 lg:mt-12">
            <TeamGrid members={coreTeam} />
          </div>
        </div>
      </section>
      )}

      {/* Section 10: Insight + Buletin (digabung) — Latar ink-100 */}
      <section className="section border-t border-ink-200 bg-ink-100">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Insight &amp; Regulasi
              </p>
              <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
                Update regulasi dan panduan praktis terbaru
              </h2>
              <p className="mt-3 max-w-2xl text-lead text-ink-600">
                Ulasan PMK, PER, dan panduan langkah demi langkah yang ditulis
                oleh tim konsultan kami.
              </p>
            </div>
            <Link
              href="/insight"
              className="inline-flex items-center gap-1.5 font-heading text-btn-md font-semibold text-emerald-700 no-underline hover:text-emerald-800 hover:underline"
            >
              <span>Lihat semua artikel</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 lg:mt-12">
            <InsightGrid articles={latestInsights} mobileRail />
          </div>

          <div className="mt-10 lg:mt-12">
            <NewsletterSection />
          </div>
        </div>
      </section>

      {/* Section 12: CTA Band Dual (§8.3 #12) — Latar navy-900 (Section Navy 2 dari 2) */}
      <CtaBand mode="dual" />
    </>
  );
}
