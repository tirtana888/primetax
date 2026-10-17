import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  FileWarning,
  Calculator,
  MailWarning,
  Building2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PricingTable } from "@/components/blocks/PricingTable";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { TestimonialSection } from "@/components/blocks/TestimonialSection";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button, WaButton } from "@/components/ui/Button";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import pricingData from "@/content/pricing.json";

export const metadata: Metadata = {
  title: "Konsultan Pajak UKM & Startup — Paket Bulanan Harga Jelas",
  description:
    "Paket pajak bulanan untuk UKM dan startup di Indonesia: SPT Masa & Tahunan, PPh 21 karyawan, PPN & e-Faktur Coretax. Harga transparan, tanya langsung via WhatsApp.",
  alternates: {
    canonical: "/ukm",
  },
};

/**
 * Landing UKM /ukm sesuai spesifikasi §8.5:
 * 1. Hero: H1 "Pajak beres tiap bulan. Anda fokus jualan." + CTA WhatsApp + Lihat Paket + baris kecil waktu respons
 * 2. Masalah yang sering dialami UKM
 * 3. Preview paket (3 kartu dari /harga) + link "Bandingkan paket lengkap →"
 * 4. Cara mulai dalam 3 langkah
 * 5. Testimoni pemilik UKM
 * 6. Studi kasus UKM
 * 7. Tools gratis (Kalender Pajak, Kalkulator PPh 21)
 * 8. FAQ UKM
 * 9. CTA band
 */
export default function SmeLandingPage() {
  const smeCases = caseStudies.filter((c) => c.segment === "ukm");

  const smeProblems = [
    {
      icon: Clock,
      title: "Telat lapor SPT & kena denda administrasi",
      desc: "Sibuk mengurus operasional dan penjualan membuat tanggal setor/lapor terlewat tiap bulan.",
    },
    {
      icon: FileWarning,
      title: "Bingung transisi ke Coretax & e-Faktur PPN",
      desc: "Pengaturan akses pengurus/drafter dan pembuatan faktur pajak atau bukti potong unifikasi terasa rumit.",
    },
    {
      icon: Calculator,
      title: "Perhitungan PPh 21 TER karyawan & masa Desember",
      desc: "Khawatir salah potong pajak gaji/THR karyawan atau lonjakan potongan pajak di akhir tahun.",
    },
    {
      icon: MailWarning,
      title: "Menerima surat klarifikasi / SP2DK dari kantor pajak",
      desc: "Panik menerima surat dari KPP karena omzet rekening/marketplace berbeda dengan SPT.",
    },
    {
      icon: Building2,
      title: "Belum punya PT / NPWP Badan / status PKP",
      desc: "Ingin ikut tender klien korporasi tetapi terkendala syarat badan hukum dan faktur pajak PKP.",
    },
  ];

  return (
    <>
      {/* 1. Hero UKM (§8.5 #1) — Latar #FFF */}
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Untuk UKM & Startup" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Untuk UKM &amp; Startup
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Pajak beres tiap bulan. Anda fokus jualan.
            </h1>
            <p className="mt-4 text-lead text-ink-700">
              Paket pajak bulanan untuk UKM dan startup: SPT, PPh 21, PPN &amp;
              e-Faktur Coretax. Harga jelas, tanya langsung lewat WhatsApp tanpa
              jargon yang membingungkan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaButton
                waContext={{ type: "sme" }}
                ctaLocation="hero"
                segment="ukm"
                size="lg"
              >
                Konsultasi Gratis 30 Menit via WhatsApp
              </WaButton>
              <Button variant="outline" size="lg" href="/harga">
                <span className="tabular">
                  Lihat Paket mulai Rp {site.pricing.starterFrom}/bulan
                </span>
              </Button>
            </div>

            <p className="mt-3 text-caption font-medium text-ink-600 tabular">
              Balasan di jam kerja &lt; {site.contact.responseMinutesSme} menit
              · Tanpa komitmen
            </p>
          </div>
        </div>
      </section>

      {/* 2. Masalah yang Sering Dialami UKM (§8.5 #2) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Masalah Umum Pemilik Usaha
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Jangan biarkan urusan administrasi pajak menyita waktu jualan Anda
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {smeProblems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-ink-300 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-h4 font-semibold text-navy-900">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-600">{prob.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Preview Paket (§8.5 #3) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Transparansi Harga
              </p>
              <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
                Pilih paket bulanan sesuai tahap usaha Anda
              </h2>
              <p className="mt-2 max-w-2xl text-lead text-ink-600">
                Harga terbuka sejak awal. Tanpa biaya tersembunyi.
              </p>
            </div>
            <Link
              href="/harga"
              className="inline-flex items-center gap-1.5 font-heading text-btn-md font-semibold text-emerald-700 no-underline hover:underline"
            >
              <span>Bandingkan paket lengkap</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10">
            <PricingTable previewOnly />
          </div>
        </div>
      </section>

      {/* 4. Cara Mulai dalam 3 Langkah (§8.5 #4) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Onboarding Cepat
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Cara mulai dalam 3 langkah mudah
            </h2>
          </div>

          <div className="mt-10">
            <ProcessTimeline
              steps={[
                {
                  title: "Chat WhatsApp (Gratis 30 Menit)",
                  duration: "Langkah 1",
                  description:
                    "Ceritakan jenis usaha, kisaran omzet, dan kebutuhan pajak Anda saat ini tanpa komitmen apa pun.",
                },
                {
                  title: "Kami cek kebutuhan & kirim penawaran",
                  duration: "Langkah 2",
                  description:
                    "Dalam 1 hari kerja, kami merekomendasikan paket yang paling pas beserta daftar dokumen sederhana.",
                },
                {
                  title: "Mulai bulan ini — pajak beres",
                  duration: "Langkah 3",
                  description:
                    "Tim konsultan kami langsung mendampingi rekap bulanan, kode billing, dan pelaporan SPT tepat waktu.",
                },
                {
                  title: "Laporan & pengingat rutin",
                  duration: "Setiap Bulan",
                  description:
                    "Anda menerima arsip bukti lapor (BPE) resmi dan pengingat tenggat setiap bulan lewat WhatsApp.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 5 & 6. Testimoni & Studi Kasus UKM (§8.5 #5 & #6) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Bukti &amp; Testimoni UKM
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Apa kata pemilik usaha yang sudah kami bantu
            </h2>
          </div>

          <div className="mt-8">
            <TestimonialSection segment="ukm" limit={3} />
          </div>

          {smeCases.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-6 font-heading text-h3 font-semibold text-navy-900">
                Studi kasus UKM &amp; ritel e-commerce
              </h3>
              <CaseStudyGrid items={smeCases} />
            </div>
          )}
        </div>
      </section>

      {/* 7. Tools Gratis untuk UKM (§8.5 #7) — Latar navy-50 */}
      <section className="section bg-navy-50">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tools Gratis UKM
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Cek jadwal tenggat &amp; hitung estimasi pajak secara instan
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-h4 font-semibold text-navy-900">
                  Kalender Pajak 2026
                </h3>
                <p className="mt-2 text-body-sm text-ink-600">
                  Jangan sampai telat setor atau lapor. Lihat seluruh tanggal
                  jatuh tempo PPh Masa, PPN, dan SPT Tahunan serta tambahkan ke
                  Google Calendar.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="md"
                  href="/tools/kalender-pajak"
                >
                  Buka Kalender Pajak →
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-h4 font-semibold text-navy-900">
                  Kalkulator PPh 21 TER Karyawan
                </h3>
                <p className="mt-2 text-body-sm text-ink-600">
                  Hitung cepat potongan pajak gaji karyawan bulanan dengan skema
                  Tarif Efektif Rata-rata (TER) dan simulasi bulan Desember.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="md"
                  href="/tools/kalkulator-pph-21"
                >
                  Hitung PPh 21 Gratis →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ UKM (§8.5 #8) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Pertanyaan Umum UKM
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Jawaban jelas sebelum Anda mulai
            </h2>
          </div>

          <Accordion items={pricingData.faqs} />
        </div>
      </section>

      {/* 9. CTA Band UKM (§8.5 #9) — Latar navy-900 */}
      <CtaBand mode="sme" />
    </>
  );
}
