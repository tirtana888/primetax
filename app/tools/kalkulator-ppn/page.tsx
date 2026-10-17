import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PpnCalculator } from "@/components/tools/PpnCalculator";
import { CtaBand } from "@/components/blocks/CtaBand";

export const metadata: Metadata = {
  title: "Kalkulator PPN & DPP Nilai Lain (11/12) — Hitung Exclude & Include PPN",
  description:
    "Kalkulator PPN gratis untuk menghitung Dasar Pengenaan Pajak (DPP Nilai Lain 11/12) dan PPN 11% / 12% sesuai PMK 131/2024.",
  alternates: {
    canonical: "/tools/kalkulator-ppn",
  },
};

export default function PpnCalculatorPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tools Gratis", href: "/tools" },
              { label: "Kalkulator PPN" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tools Pajak Gratis
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Kalkulator PPN &amp; DPP Nilai Lain
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Hitung cepat nilai Dasar Pengenaan Pajak (DPP), PPN terutang, dan
              total tagihan untuk transaksi barang/jasa umum maupun skema
              besaran tertentu di Coretax.
            </p>
          </div>

          <div className="mt-8">
            <PpnCalculator />
          </div>

          <div className="mt-14 max-w-180 space-y-6">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Memahami mekanisme DPP Nilai Lain (11/12) di Faktur Pajak Coretax
            </h2>
            <p className="text-body text-ink-900">
              Sesuai ketentuan Undang-Undang Harmonisasi Peraturan Perpajakan
              (UU HPP) dan PMK Nomor 131 Tahun 2024, penyerahan Barang Kena
              Pajak (BKP) dan/atau Jasa Kena Pajak (JKP) non-mewah menggunakan
              Dasar Pengenaan Pajak (DPP) berupa Nilai Lain sebesar 11/12 dari
              Harga Jual atau Penggantian, yang kemudian dikalikan tarif PPN
              12%—sehingga menghasilkan beban PPN efektif sebesar 11% dari harga
              jual.
            </p>
            <p className="text-body text-ink-900">
              Dalam pembuatan e-Faktur di sistem Coretax, Pengusaha Kena Pajak
              (PKP) perlu memastikan kode transaksi faktur yang dipilih sesuai
              agar nilai DPP Nilai Lain dan PPN terhitung secara otomatis dan
              konsisten dengan invoice komersial.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-ink-300 bg-ink-100 p-4 text-caption text-ink-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="m-0">
                <strong>Disclaimer:</strong> Hasil bersifat estimasi. Konsultasikan
                untuk kepastian perlakuan PPN atas jenis barang/jasa spesifik
                perusahaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        mode="sme"
        waContext={{ type: "tool", toolName: "Kalkulator PPN" }}
      />
    </>
  );
}
