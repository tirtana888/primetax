import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TaxCalendarWidget } from "@/components/tools/TaxCalendar";
import { CtaBand } from "@/components/blocks/CtaBand";

export const metadata: Metadata = {
  title: "Kalender Pajak 2026 — Jadwal Batas Setor & Lapor SPT Masa/Tahunan",
  description:
    "Jadwal lengkap tenggat penyetoran dan pelaporan pajak 2026 (PPh 21, PPh Unifikasi, PPN, SPT Tahunan OP & Badan) di sistem Coretax lengkap dengan pengingat Google Calendar.",
  alternates: {
    canonical: "/tools/kalender-pajak",
  },
};

export default function TaxCalendarPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tools Gratis", href: "/tools" },
              { label: "Kalender Pajak" },
            ]}
          />

          {/* 1. H1 + Lead singkat (§8.11 #1) */}
          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tools Pajak Gratis
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Kalender Pajak 2026: Jadwal batas setor &amp; lapor SPT
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Pantau tenggat penyetoran dan pelaporan pajak bulanan maupun
              tahunan untuk Wajib Pajak Orang Pribadi, Badan, dan PKP. Simpan
              langsung ke Google Calendar atau unduh file <code>.ics</code>.
            </p>
          </div>

          {/* 2. Widget Tool di atas lipatan (§8.11 #2) */}
          <div className="mt-8">
            <TaxCalendarWidget />
          </div>

          {/* 3 & 4. Penjelasan Cara Kerja & Dasar Hukum + Disclaimer (§8.11 #3 & #4) */}
          <div className="mt-14 max-w-180 space-y-6">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Ketentuan batas waktu penyetoran dan pelaporan pajak di era Coretax
            </h2>
            <p className="text-body text-ink-900">
              Kepatuhan terhadap tenggat waktu penyetoran dan pelaporan Surat
              Pemberitahuan (SPT) merupakan cara paling sederhana untuk
              menghindari sanksi administrasi berupa denda keterlambatan lapor
              (Pasal 7 UU KUP) maupun sanksi bunga keterlambatan bayar (Pasal 9
              UU KUP).
            </p>
            <p className="text-body text-ink-900">
              Seiring berlakunya PMK Nomor 81 Tahun 2024 tentang Ketentuan
              Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi
              Perpajakan (Coretax), tanggal jatuh tempo penyetoran dan pelaporan
              untuk berbagai jenis pajak masa diselaraskan: penyetoran PPh masa
              umumnya paling lambat tanggal 15 bulan berikutnya, pelaporan SPT
              Masa PPh paling lambat tanggal 20 bulan berikutnya, serta
              penyetoran dan pelaporan SPT Masa PPN paling lambat akhir bulan
              berikutnya setelah masa pajak berakhir.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-ink-300 bg-ink-100 p-4 text-caption text-ink-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="m-0">
                <strong>Disclaimer:</strong> Hasil dan jadwal bersifat estimasi
                informasi umum. Apabila tanggal jatuh tempo bertepatan dengan
                hari libur nasional atau kebijakan khusus DJP, ketentuannya
                mengacu pada pengumuman resmi Direktorat Jenderal Pajak.
                Konsultasikan untuk kepastian.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        mode="sme"
        waContext={{ type: "tool", toolName: "Kalender Pajak" }}
      />
    </>
  );
}
