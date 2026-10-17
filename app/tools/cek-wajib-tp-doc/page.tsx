import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TpDocQuiz } from "@/components/tools/TpDocQuiz";
import { CtaBand } from "@/components/blocks/CtaBand";

export const metadata: Metadata = {
  title: "Cek Wajib TP Doc (Master File & Local File) — Kuis Diagnostik PMK 172/2023",
  description:
    "Cek dalam 1 menit apakah perusahaan Anda wajib menyelenggarakan Dokumen Induk (Master File) dan Dokumen Lokal (Local File) Transfer Pricing sesuai PMK 172/2023.",
  alternates: {
    canonical: "/tools/cek-wajib-tp-doc",
  },
};

export default function TpDocQuizPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tools Gratis", href: "/tools" },
              { label: "Cek Wajib TP Doc" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Diagnostik Risiko Pajak
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Cek Risiko: Apakah saya wajib menyusun TP Doc?
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Jawab 5 pertanyaan singkat di bawah ini untuk menguji apakah
              perusahaan Anda wajib menyelenggarakan Dokumen Penentuan Harga
              Transfer (Master File &amp; Local File) sesuai PMK Nomor 172 Tahun
              2023.
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <TpDocQuiz />
          </div>

          <div className="mt-14 max-w-180 space-y-6">
            <h2 className="font-heading text-h3 font-bold text-navy-900">
              Ketentuan ambang batas (threshold) TP Documentation dalam PMK
              172/2023
            </h2>
            <p className="text-body text-ink-900">
              PMK Nomor 172 Tahun 2023 mewajibkan Wajib Pajak yang melakukan
              Transaksi yang Dipengaruhi Hubungan Istimewa (transaksi afiliasi)
              untuk menyelenggarakan dan menyimpan Dokumen Penentuan Harga
              Transfer berupa Dokumen Induk (Master File) dan Dokumen Lokal
              (Local File) apabila memenuhi salah satu kriteria ambang batas
              peredaran bruto tahun sebelumnya (&gt; Rp 50 miliar) atau nilai
              transaksi afiliasi (&gt; Rp 20 miliar untuk barang berwujud, atau
              &gt; Rp 5 miliar untuk masing-masing penyediaan jasa, pembayaran
              bunga, pemanfaatan barang tidak berwujud/royalti, atau transaksi
              afiliasi lainnya), maupun transaksi dengan pihak afiliasi di
              negara/yurisdiksi dengan tarif PPh lebih rendah dari tarif Pasal
              17 UU PPh.
            </p>
            <p className="text-body text-ink-900">
              Penting untuk dicatat bahwa apabila tahun buku wajib pajak kurang
              dari 12 bulan, nilai peredaran bruto dan/atau nilai transaksi
              afiliasi dihitung dengan cara disetahunkan. Dokumen Induk dan
              Dokumen Lokal wajib tersedia paling lama 4 (empat) bulan setelah
              akhir Tahun Pajak.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-ink-300 bg-ink-100 p-4 text-caption text-ink-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="m-0">
                <strong>Disclaimer:</strong> Hasil kuis ini bersifat indikasi
                awal berdasarkan informasi yang Anda pilih dan bukan opini pajak
                tertulis. Konsultasikan untuk kepastian perhitungan disetahunkan
                dan kewajiban Laporan Per Negara (CbCR).
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand mode="corporate" />
    </>
  );
}
