import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ServiceFilterClient } from "./ServiceFilterClient";
import { CtaBand } from "@/components/blocks/CtaBand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Layanan Konsultan Pajak — Kepatuhan, SP2DK, Transfer Pricing & Sengketa",
  description:
    "Daftar lengkap layanan pajak untuk Korporasi/PMA dan UKM: kepatuhan bulanan & tahunan, SP2DK & pemeriksaan, keberatan & Pengadilan Pajak, restitusi, serta Transfer Pricing.",
  alternates: {
    canonical: "/layanan",
    languages: {
      "id-ID": "/layanan",
      en: "/en/services",
    },
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Layanan" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Layanan Perpajakan
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Layanan pajak untuk setiap skala dan kompleksitas bisnis
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Pilih layanan berdasarkan kebutuhan perusahaan Anda—mulai dari
              kepatuhan rutin bulanan untuk UKM hingga pendampingan sengketa dan{" "}
              <em lang="en">transfer pricing</em> untuk korporasi.
            </p>
          </div>

          <div className="mt-10">
            <ServiceFilterClient items={services} />
          </div>
        </div>
      </section>

      <CtaBand mode="dual" />
    </>
  );
}
