import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Pph21Calculator } from "@/components/tools/Pph21Calculator";
import { CtaBand } from "@/components/blocks/CtaBand";

export const metadata: Metadata = {
  title: "Kalkulator PPh 21 TER 2026 — Hitung Potongan Pajak Gaji Bulanan & Desember",
  description:
    "Kalkulator PPh Pasal 21 gratis dengan metode Tarif Efektif Rata-rata (TER A, B, C) sesuai PP 58/2023 & PMK 168/2023 lengkap dengan simulasi masa pajak Desember.",
  alternates: {
    canonical: "/tools/kalkulator-pph-21",
  },
};

export default function Pph21CalculatorPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tools Gratis", href: "/tools" },
              { label: "Kalkulator PPh 21" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tools Pajak Gratis
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Kalkulator PPh 21 TER 2026
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Hitung estimasi potongan PPh Pasal 21 karyawan tetap setiap bulan
              (Januari–November) dengan skema Tarif Efektif Rata-rata (TER) dan
              lihat perbandingan perhitungan masa pajak terakhir (Desember).
            </p>
          </div>

          <div className="mt-8">
            <Pph21Calculator />
          </div>

          <div className="mt-14 max-w-180 space-y-6">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Cara kerja perhitungan PPh 21 skema TER &amp; dasar hukumnya
            </h2>
            <p className="text-body text-ink-900">
              Berdasarkan Peraturan Pemerintah Nomor 58 Tahun 2023 dan Peraturan
              Menteri Keuangan Nomor 168 Tahun 2023, pemotongan PPh Pasal 21
              bagi Pegawai Tetap dibagi menjadi dua mekanisme: masa pajak selain
              masa pajak terakhir (Januari sampai dengan November) menggunakan
              Tarif Efektif Bulanan (TER Kategori A, B, atau C) dikalikan jumlah
              penghasilan bruto sebulan.
            </p>
            <p className="text-body text-ink-900">
              Sementara itu, pada masa pajak terakhir (bulan Desember atau bulan
              saat pegawai berhenti bekerja), pemberi kerja tetap menghitung
              total PPh Pasal 21 terutang dalam satu tahun pajak menggunakan
              tarif progresif Pasal 17 ayat (1) huruf a UU PPh atas Penghasilan
              Kena Pajak (penghasilan neto setahun dikurangi PTKP), lalu
              dikurangi dengan akumulasi PPh Pasal 21 yang telah dipotong pada
              masa Januari–November.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-ink-300 bg-ink-100 p-4 text-caption text-ink-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="m-0">
                <strong>Disclaimer:</strong> Hasil bersifat estimasi. Perhitungan
                aktual dapat dipengaruhi oleh komponen iuran pensiun/JHT yang
                dibayar pegawai, tunjangan tidak teratur (THR/bonus), zakat
                wajib, atau masa kerja kurang dari 12 bulan. Konsultasikan untuk
                kepastian.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        mode="sme"
        waContext={{ type: "tool", toolName: "Kalkulator PPh 21" }}
      />
    </>
  );
}
