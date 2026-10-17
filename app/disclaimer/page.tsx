import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Disclaimer Informasi Perpajakan — ${site.brandName}`,
  description: `Sanggahan (disclaimer) atas informasi artikel, studi kasus, dan kalkulator pajak di situs ${site.brandName}.`,
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-prose">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Disclaimer" },
          ]}
        />

        <h1 className="mt-6 font-heading text-h1 font-bold text-navy-900">
          Disclaimer (Sanggahan)
        </h1>
        <p className="mt-3 text-caption text-ink-500">
          Berlaku efektif: 17 Oktober 2026 · {site.legalName}
        </p>

        <div className="mt-8 space-y-6 text-body text-ink-900">
          <h2 className="font-heading text-h3 font-bold text-navy-900">
            1. Bukan Nasihat Pajak untuk Kasus Spesifik
          </h2>
          <p>
            Seluruh artikel Insight, buletin bulanan, daftar periksa
            (checklist), dan materi informasi di situs {site.brandName} disusun
            sebagai informasi umum berdasarkan peraturan perpajakan yang berlaku
            pada tanggal penerbitannya. Materi tersebut tidak dimaksudkan
            sebagai pengganti konsultasi atau opini pajak tertulis atas fakta
            transaksi spesifik perusahaan Anda.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            2. Tidak Ada Jaminan Hasil Sengketa
          </h2>
          <p>
            Sesuai kode etik profesi konsultan pajak dan kuasa hukum Pengadilan
            Pajak, {site.brandName} tidak pernah menjanjikan atau menjamin hasil
            akhir dari proses SP2DK, Pemeriksaan Pajak, Keberatan, maupun
            Banding di Pengadilan Pajak. Studi kasus yang ditampilkan di situs
            ini merupakan ilustrasi hasil faktual masa lalu yang sangat
            bergantung pada kelengkapan dokumen dan fakta hukum masing-masing
            perkara.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            3. Estimasi Kalkulator &amp; Kalender Pajak
          </h2>
          <p>
            Hasil perhitungan pada Kalkulator PPh 21, Kalkulator PPN, dan Kuis
            TP Doc bersifat estimasi awal. Pastikan selalu mengonfirmasi
            perhitungan akhir sebelum melakukan penyetoran dan pelaporan SPT.
          </p>
        </div>
      </div>
    </section>
  );
}
