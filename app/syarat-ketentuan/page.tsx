import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Syarat & Ketentuan Penggunaan Situs — ${site.brandName}`,
  description: `Syarat dan ketentuan penggunaan situs web dan layanan informasi ${site.legalName}.`,
  alternates: {
    canonical: "/syarat-ketentuan",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-prose">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Syarat & Ketentuan" },
          ]}
        />

        <h1 className="mt-6 font-heading text-h1 font-bold text-navy-900">
          Syarat &amp; Ketentuan Penggunaan Situs
        </h1>
        <p className="mt-3 text-caption text-ink-500">
          Terakhir diperbarui: 17 Oktober 2026 · {site.legalName}
        </p>

        <div className="mt-8 space-y-6 text-body text-ink-900">
          <h2 className="font-heading text-h3 font-bold text-navy-900">
            1. Hubungan Klien–Konsultan
          </h2>
          <p>
            Mengakses situs web ini, menggunakan kalkulator pajak gratis, atau
            mengirimkan formulir pertanyaan awal belum membentuk hubungan hukum
            klien–konsultan pajak secara resmi. Hubungan penugasan profesional
            baru berlaku efektif setelah kedua belah pihak menandatangani Surat
            Perikatan Jasa (Engagement Letter) atau Proposal Tertulis yang
            disetujui.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            2. Penggunaan Tools &amp; Konten Publikasi
          </h2>
          <p>
            Kalender Pajak, Kalkulator PPh 21, Kalkulator PPN, dan Kuis Cek
            Wajib TP Doc disediakan secara gratis untuk tujuan simulasi dan
            edukasi awal. Seluruh hak kekayaan intelektual atas artikel, desain,
            dan materi di situs ini adalah milik {site.legalName}.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            3. Hukum yang Berlaku
          </h2>
          <p>
            Syarat dan ketentuan ini diatur dan ditafsirkan berdasarkan hukum
            Negara Republik Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
