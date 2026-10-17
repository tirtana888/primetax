import type { Metadata } from "next";
import {
  ShieldAlert,
  FileCheck2,
  Building,
  Factory,
  ShoppingBag,
  Cpu,
  Pickaxe,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { teamMembers } from "@/content/team";
import { insightArticles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Konsultan Pajak Korporasi & PMA — Mitigasi Risiko & Sengketa",
  description:
    "Pendampingan pajak strategis untuk korporasi dan PMA di Indonesia: kepatuhan, transfer pricing PMK 172/2023, Pajak Minimum Global (GMT), SP2DK, pemeriksaan, hingga Pengadilan Pajak.",
  alternates: {
    canonical: "/korporasi",
    languages: {
      "id-ID": "/korporasi",
      en: "/en/corporate",
    },
  },
};

/**
 * Landing Korporasi /korporasi sesuai spesifikasi §8.4:
 * - TANPA harga paket dan TANPA FAB WhatsApp
 * - CTA Primer: "Minta Proposal" | CTA Sekunder: "Unduh Company Profile"
 * - Mencakup 11 section lengkap: Hero, TrustStrip korporasi, Tantangan, Layanan korporasi,
 *   Industri, Model kerja & SLA, Studi kasus korporasi, Tim senior, Insight CFO, FAQ korporasi, CTA band.
 */
export default function CorporateLandingPage() {
  const corporateServices = services.filter(
    (s) => s.segment === "korporasi" || s.segment === "both"
  );
  const corporateCases = caseStudies.filter((c) => c.segment === "korporasi");
  const seniorTeam = teamMembers.filter(
    (m) => m.level === "Partner" || m.level === "Manager"
  );
  const cfoInsights = insightArticles
    .filter((a) => a.segment === "korporasi" || a.segment === "both")
    .slice(0, 3);

  const challenges = [
    {
      problem: "Menerima SP2DK atau pemeriksaan dengan koreksi material",
      solution:
        "Rekonsiliasi ekualisasi menyeluruh, penyusunan tanggapan tertulis berdasar regulasi, dan pendampingan langsung oleh konsultan BKP hingga pembahasan akhir (PHP).",
    },
    {
      problem: "Risiko koreksi Transfer Pricing & tenggat 4 bulan PMK 172/2023",
      solution:
        "Penyusunan Master File, Local File, CbCR, dan dokumentasi pengujian pendahuluan (benefit test) atas jasa manajemen, royalti, dan pinjaman intragrup.",
    },
    {
      problem: "Kesiapan Pajak Minimum Global (GMT / Pilar Dua) untuk grup MNE",
      solution:
        "Penilaian dampak ETR GloBE, QDMTT, evaluasi fasilitas tax holiday/KEK, dan kesiapan pelaporan GIR untuk entitas konstituen di Indonesia.",
    },
    {
      problem: "Restitusi PPN / PPh tertahan dan mengikat modal kerja",
      solution:
        "Pre-refund diagnostic review atas Faktur Masukan serta arus uang/barang sebelum pengajuan, ditambah pendampingan pemeriksaan lebih bayar hingga dana cair.",
    },
    {
      problem: "Transisi sistem Coretax pada volume transaksi grup yang besar",
      solution:
        "Penataan otorisasi role/impersonate pengurus, otomasi upload XML e-Faktur & e-Bupot Unifikasi, serta rekonsiliasi berkala Taxpayer Ledger.",
    },
    {
      problem: "Eksposur pajak tersembunyi dalam transaksi M&A atau restrukturisasi",
      solution:
        "Tax Due Diligence komprehensif, perancangan klausul tax indemnity di SPA, dan pendampingan permohonan merger/spin-off dengan nilai buku.",
    },
  ];

  const slaRows = [
    {
      aspect: "Waktu respons komunikasi kerja",
      standard: "< 1 hari kerja (SLA tertulis dalam perjanjian kerja)",
    },
    {
      aspect: "Penanggung jawab proyek (PIC)",
      standard:
        "1 Partner penanggung jawab + 1 Senior Manager tetap selama masa penugasan",
    },
    {
      aspect: "Kerahasiaan & perlindungan data",
      standard:
        "Penandatanganan NDA sebelum pertukaran data & kepatuhan penuh pada UU No. 27/2022 (UU PDP)",
    },
    {
      aspect: "Pelaporan ke manajemen / CFO",
      standard:
        "Laporan berkala posisi risiko pajak (risk exposure matrix) dan status progres deliverables",
    },
    {
      aspect: "Independensi & kepatuhan etik",
      standard:
        "Independen dari KAP (tanpa benturan kepentingan audit) & kebijakan anti-suap/gratifikasi tegas",
    },
  ];

  const corporateFaqs = [
    {
      question: "Bagaimana proses pengajuan Request for Proposal (RFP) di PrimeTax?",
      answer:
        "Setelah Anda mengisi form Minta Proposal, Partner kami akan meninjau kebutuhan Anda dalam 1 hari kerja, menjadwalkan scoping call selama 45–60 menit (online atau tatap muka), lalu mengirimkan proposal teknis beserta struktur biaya tertulis dalam [X] hari kerja setelah scoping.",
    },
    {
      question: "Apakah PrimeTax bersedia menandatangani NDA sebelum diskusi awal?",
      answer:
        "Ya. Kami menyediakan draf Non-Disclosure Agreement (NDA) standar atau siap meninjau format NDA dari departemen legal perusahaan Anda sebelum dokumen atau rincian kasus dibagikan.",
    },
    {
      question: "Bagaimana struktur fee untuk layanan korporasi?",
      answer:
        "Seluruh layanan korporasi disusun berbasis proposal tertulis yang disesuaikan dengan kompleksitas transaksi, jumlah entitas, dan ruang lingkup pekerjaan—baik dalam skema retainer bulanan/tahunan maupun fixed project fee.",
    },
    {
      question: "Apakah komunikasi dan laporan dapat disajikan dalam Bahasa Inggris untuk kantor pusat / regional?",
      answer:
        "Ya. Seluruh deliverable analisis, laporan Tax Due Diligence, executive summary, maupun rapat bersama manajemen regional/kantor pusat PMA dapat disajikan dalam Bahasa Inggris dan Bahasa Indonesia.",
    },
  ];

  return (
    <>
      {/* 1. Hero Korporasi (§8.4 #1) — Latar #FFF */}
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Untuk Korporasi & PMA" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-navy-700">
              Untuk Korporasi &amp; PMA
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Siap diperiksa. Siap bersengketa. Siap bertumbuh.
            </h1>
            <p className="mt-2 font-heading text-h5 font-medium text-emerald-700">
              <span lang="en">Audit-ready. Dispute-ready. Growth-ready.</span>
            </p>
            <p className="mt-4 text-lead text-ink-700">
              Pendampingan pajak strategis untuk korporasi dan PMA, dari
              kepatuhan, <em lang="en">transfer pricing</em>, hingga sengketa di
              Pengadilan Pajak—didukung advisor berpengalaman{" "}
              {site.about.seniorBackground} dan SLA tertulis.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="/minta-proposal">
                Minta Proposal
              </Button>
              <Button variant="secondary" size="lg" href="/company-profile">
                Unduh Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip Korporasi (§8.4 #2) — Latar navy-900 (Section Navy 1 dari 2) */}
      <TrustStrip variant="corporate" />

      {/* 3. Tantangan yang Kami Selesaikan (§8.4 #3) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Mitigasi Risiko &amp; Tata Kelola
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Tantangan perpajakan korporasi yang kami selesaikan
            </h2>
            <p className="mt-3 text-lead text-ink-600">
              Pendekatan kami menggabungkan ketelitian pengawasan regulasi
              dengan kesiapan bukti sejak sebelum pemeriksaan dimulai.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-lg border border-ink-300 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-caption font-semibold text-danger-fg">
                    <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                    <span>Risiko / Tantangan</span>
                  </div>
                  <h3 className="font-heading text-h4 font-semibold text-navy-900">
                    {item.problem}
                  </h3>
                </div>
                <div className="mt-5 border-t border-ink-200 pt-4">
                  <div className="mb-1.5 inline-flex items-center gap-1.5 text-caption font-semibold text-emerald-700">
                    <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                    <span>Pendekatan Kami</span>
                  </div>
                  <p className="text-body-sm text-ink-700">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Layanan Korporasi (§8.4 #4) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Cakupan Layanan Korporasi
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Solusi komprehensif untuk setiap siklus pajak perusahaan
            </h2>
          </div>

          <div className="mt-10">
            <ServiceGrid items={corporateServices} />
          </div>
        </div>
      </section>

      {/* 5 & 6. Industri + Model Kerja & SLA (§8.4 #5 & #6) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Industri yang dilayani */}
            <div className="lg:col-span-5">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Spesialisasi Sektor
              </p>
              <h2 className="mt-3 font-heading text-h3 font-bold text-navy-900">
                Industri yang kami layani
              </h2>
              <p className="mt-2 text-body-sm text-ink-600">
                Setiap sektor memiliki karakteristik pengakuan pendapatan,
                fasilitas kepabeanan/PPN, dan titik rawan pemeriksaan yang
                berbeda.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  {
                    icon: Factory,
                    name: "Manufaktur & Kawasan Berikat / KEK",
                    desc: "Restitusi PPN ekspor, IT Inventory kepabeanan, & TP transaksi komponen afiliasi.",
                  },
                  {
                    icon: ShoppingBag,
                    name: "Perdagangan Besar, Ritel & E-commerce",
                    desc: "Ekualisasi omzet multi-cabang, rabat/insentif distributor, & PPh potong/pungut.",
                  },
                  {
                    icon: Building,
                    name: "Properti, Real Estat & Konstruksi",
                    desc: "PPh Final Pasal 4(2), pengakuan pendapatan bertahap, & restitusi PPN masa konstruksi.",
                  },
                  {
                    icon: Pickaxe,
                    name: "Sawit, Perkebunan & Pertambangan",
                    desc: "Pajak ekspor, harga patokan komoditas afiliasi, & kepatuhan PPN/PPh sektoral.",
                  },
                  {
                    icon: Cpu,
                    name: "Jasa, Teknologi & Grup Startup",
                    desc: "Lisensi perangkat lunak lintas negara (PPh 26/P3B), ESOP, & due diligence pendanaan.",
                  },
                ].map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <li
                      key={ind.name}
                      className="flex items-start gap-3.5 rounded-lg border border-ink-200 bg-navy-50/40 p-4"
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-heading text-h6 font-semibold text-navy-900">
                          {ind.name}
                        </p>
                        <p className="mt-0.5 text-caption text-ink-600">
                          {ind.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tabel Model Kerja & SLA */}
            <div className="lg:col-span-7">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Tata Kelola Penugasan
              </p>
              <h2 className="mt-3 font-heading text-h3 font-bold text-navy-900">
                Model kerja, kerahasiaan &amp; SLA tertulis
              </h2>
              <p className="mt-2 text-body-sm text-ink-600">
                Kami menerapkan standar tata kelola firma profesional agar tim
                manajemen dan komite audit mendapatkan kepastian waktu serta
                kualitas dokumentasi.
              </p>

              <div className="mt-6 overflow-x-auto rounded-lg border border-ink-300 bg-white shadow-xs">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Standar SLA dan tata kelola layanan korporasi
                  </caption>
                  <thead>
                    <tr className="border-b border-navy-200 bg-navy-50 font-body text-label font-semibold text-navy-900">
                      <th scope="col" className="px-4 py-3.5">
                        Aspek Layanan
                      </th>
                      <th scope="col" className="px-4 py-3.5">
                        Komitmen &amp; Standar PrimeTax
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-200 text-body-sm">
                    {slaRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-navy-50/50">
                        <th
                          scope="row"
                          className="px-4 py-3.5 font-semibold text-navy-900"
                        >
                          {row.aspect}
                        </th>
                        <td className="px-4 py-3.5 text-ink-700">
                          {row.standard}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Studi Kasus Korporasi (§8.4 #7) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Rekam Jejak Korporasi
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Studi kasus pendampingan korporasi &amp; PMA
            </h2>
          </div>

          <div className="mt-10">
            <CaseStudyGrid items={corporateCases} />
          </div>
        </div>
      </section>

      {/* 8. Tim Senior (§8.4 #8) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Kepemimpinan Praktik
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Partner &amp; Senior Manager yang mendampingi Anda
            </h2>
            <p className="mt-3 text-lead text-ink-600">
              Berpengalaman {site.about.seniorBackground} dengan sertifikasi
              resmi BKP dan Izin Kuasa Hukum Pengadilan Pajak.
            </p>
          </div>

          <div className="mt-10">
            <TeamGrid members={seniorTeam} />
          </div>
        </div>
      </section>

      {/* 9. Insight untuk CFO (§8.4 #9) — Latar ink-100 */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Publikasi &amp; Kajian
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Insight regulasi untuk CFO &amp; Tax Manager
            </h2>
          </div>

          <div className="mt-10">
            <InsightGrid articles={cfoInsights} />
          </div>
        </div>
      </section>

      {/* 10. FAQ Korporasi (§8.4 #10) — Latar #FFF */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Pertanyaan Umum Korporasi
            </p>
            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              Hal yang sering ditanyakan sebelum pengajuan RFP
            </h2>
          </div>

          <Accordion items={corporateFaqs} />
        </div>
      </section>

      {/* 11. CTA Band Korporasi (§8.4 #11) — Latar navy-900 (Section Navy 2 dari 2) */}
      <CtaBand mode="corporate" />
    </>
  );
}
