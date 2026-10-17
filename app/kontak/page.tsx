import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactDualClient } from "./ContactDualClient";
import { Accordion } from "@/components/ui/Accordion";
import { buildProfessionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hubungi Kami & Jadwalkan Konsultasi Pajak",
  description:
    "Hubungi tim konsultan pajak kami: jalur cepat WhatsApp & konsultasi gratis 30 menit untuk UKM, atau pengajuan proposal (RFP) & scoping call untuk Korporasi/PMA.",
  alternates: {
    canonical: "/kontak",
    languages: {
      "id-ID": "/kontak",
      en: "/en/contact",
    },
  },
};

export default function ContactPage() {
  const contactFaqs = [
    {
      question: "Berapa lama waktu respons setelah saya mengirim pesan atau form?",
      answer:
        "Untuk jalur WhatsApp UKM di jam kerja, tim kami merespons dalam waktu kurang dari [X] menit. Untuk permintaan proposal korporasi (RFP), Partner kami akan menghubungi Anda maksimal dalam 1 hari kerja.",
    },
    {
      question: "Apakah konsultasi awal menjaga kerahasiaan data perusahaan kami?",
      answer:
        "Ya. Seluruh diskusi awal maupun dokumen yang dibagikan dilindungi oleh kode etik kerahasiaan profesi konsultan pajak serta ketentuan UU Pelindungan Data Pribadi (UU PDP). Untuk korporasi, kami siap menandatangani NDA sebelum pertukaran data.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProfessionalServiceSchema()),
        }}
      />

      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kontak & Jadwalkan Konsultasi" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Konsultasi &amp; Penawaran
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Hubungi kami
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Pilih jalur layanan di bawah ini agar Anda langsung terhubung
              dengan tim konsultan yang tepat.
            </p>
          </div>

          <div className="mt-8">
            <Suspense
              fallback={
                <div className="h-96 rounded-xl bg-ink-200 p-8 text-ink-600">
                  Memuat formulir kontak…
                </div>
              }
            >
              <ContactDualClient />
            </Suspense>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="mb-6 font-heading text-h3 font-bold text-navy-900">
              Pertanyaan seputar waktu respons &amp; kerahasiaan
            </h2>
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
