import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Kebijakan Privasi (UU PDP) — ${site.brandName}`,
  description: `Kebijakan Privasi dan Pelindungan Data Pribadi ${site.legalName} sesuai Undang-Undang Nomor 27 Tahun 2022 (UU PDP).`,
  alternates: {
    canonical: "/kebijakan-privasi",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-prose">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Kebijakan Privasi" },
          ]}
        />

        <h1 className="mt-6 font-heading text-h1 font-bold text-navy-900">
          Kebijakan Privasi &amp; Pelindungan Data Pribadi
        </h1>
        <p className="mt-3 text-caption text-ink-500">
          Berlaku efektif: 17 Oktober 2026 · Pengendali Data:{" "}
          <strong>{site.legalName}</strong> ({site.brandName})
        </p>

        <div className="mt-8 space-y-6 text-body text-ink-900">
          <p>
            {site.legalName} (&ldquo;kami&rdquo;) berkomitmen melindungi data
            pribadi Anda sesuai dengan Undang-Undang Nomor 27 Tahun 2022 tentang
            Pelindungan Data Pribadi (&ldquo;UU PDP&rdquo;) serta kode etik
            kerahasiaan profesi konsultan pajak di Indonesia.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            1. Data Pribadi yang Kami Kumpulkan
          </h2>
          <p>
            Kami hanya mengumpulkan data yang relevan ketika Anda mengisi
            formulir konsultasi UKM, formulir permintaan proposal (RFP)
            korporasi, mengunduh Company Profile, atau berlangganan buletin:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Identitas dasar dan kontak profesional: nama lengkap, jabatan,
              nama perusahaan/usaha, alamat email kantor/usaha, dan nomor
              telepon/WhatsApp.
            </li>
            <li>
              Informasi konteks kebutuhan layanan: jenis industri, kisaran
              peredaran usaha, dan deskripsi umum kebutuhan perpajakan.
            </li>
            <li>
              Data teknis kunjungan (hanya setelah persetujuan cookie analitik):
              parameter UTM kampanye, halaman pendaratan, dan interaksi fitur.
            </li>
          </ul>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            2. Tujuan Pemrosesan Data
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Menanggapi permintaan konsultasi pajak, menjadwalkan pertemuan
              (scoping call), dan menyusun proposal layanan tertulis.
            </li>
            <li>
              Mengirimkan buletin pajak bulanan atau dokumen yang Anda minta
              (seperti Company Profile) berdasarkan persetujuan eksplisit Anda.
            </li>
            <li>
              Memenuhi kewajiban hukum dan tata kelola profesi konsultan pajak.
            </li>
          </ul>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            3. Masa Retensi &amp; Keamanan Data
          </h2>
          <p>
            Data permintaan konsultasi disimpan secara terbatas di sistem
            manajemen klien internal kami yang terenkripsi selama diperlukan
            untuk tujuan komunikasi bisnis atau sesuai masa retensi peraturan
            perundang-undangan yang berlaku. Kami tidak pernah memperjualbelikan
            data pribadi Anda kepada pihak ketiga mana pun.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            4. Hak Subjek Data (Pasal 5–13 UU PDP)
          </h2>
          <p>
            Anda berhak mendapatkan informasi, mengakses, memperbaiki,
            mengakhiri pemrosesan, menghapus, dan/atau menarik kembali
            persetujuan pemrosesan data pribadi Anda kapan saja dengan
            menghubungi petugas pelindungan data kami.
          </p>

          <h2 className="font-heading text-h3 font-bold text-navy-900">
            5. Kontak Petugas Pelindungan Data (DPO / Privasi)
          </h2>
          <p>
            Untuk permintaan pelaksanaan hak subjek data atau pertanyaan terkait
            privasi, hubungi kami di:{" "}
            <strong className="text-navy-900">
              {site.contact.privacyEmail}
            </strong>{" "}
            atau melalui alamat kantor resmi di {site.contact.address},{" "}
            {site.contact.city}.
          </p>
        </div>
      </div>
    </section>
  );
}
