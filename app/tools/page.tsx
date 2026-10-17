import type { Metadata } from "next";
import { Calendar, Calculator, Receipt, CheckSquare } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/blocks/CtaBand";

export const metadata: Metadata = {
  title: "Tools Pajak Gratis — Kalender Pajak, Kalkulator PPh 21, PPN & Cek TP Doc",
  description:
    "Kumpulan alat bantu pajak gratis tanpa login: Kalender Pajak 2026, Kalkulator PPh 21 TER, Kalkulator PPN DPP Nilai Lain, dan Kuis Cek Wajib TP Doc PMK 172/2023.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsIndexPage() {
  const tools = [
    {
      title: "Kalender Pajak 2026",
      desc: "Jadwal lengkap batas setor dan lapor SPT Masa (PPh 21, PPh Unifikasi, PPN) serta SPT Tahunan OP/Badan. Dilengkapi filter Wajib Pajak dan tombol simpan ke Google Calendar / .ics.",
      href: "/tools/kalender-pajak",
      icon: Calendar,
      badge: "Gratis · Tanpa Login",
    },
    {
      title: "Kalkulator PPh 21 TER 2026",
      desc: "Hitung estimasi potongan PPh Pasal 21 karyawan bulanan menggunakan Tarif Efektif Rata-rata (TER A/B/C) sesuai PP 58/2023 & PMK 168/2023 serta simulasi masa pajak Desember.",
      href: "/tools/kalkulator-pph-21",
      icon: Calculator,
      badge: "Gratis · Tanpa Login",
    },
    {
      title: "Kalkulator PPN & DPP Nilai Lain",
      desc: "Hitung cepat Dasar Pengenaan Pajak (DPP Nilai Lain 11/12) dan nilai PPN untuk harga sebelum PPN (exclude) maupun sudah termasuk PPN (include).",
      href: "/tools/kalkulator-ppn",
      icon: Receipt,
      badge: "Gratis · Tanpa Login",
    },
    {
      title: "Cek Risiko: Apakah Saya Wajib TP Doc?",
      desc: "Kuis interaktif 5 pertanyaan berdasarkan ambang batas PMK 172/2023 untuk mengecek kewajiban penyelenggaraan Dokumen Induk (Master File) dan Dokumen Lokal (Local File).",
      href: "/tools/cek-wajib-tp-doc",
      icon: CheckSquare,
      badge: "Diagnostik Cepat",
    },
  ];

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tools Gratis" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Gratis, Tanpa Login
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Tools pajak gratis untuk staf finance &amp; pemilik bisnis
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Seluruh kalkulator dan kalender di bawah ini dapat langsung
              digunakan secara gratis tanpa perlu membuat akun.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.href}
                  className="flex flex-col justify-between rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-sm bg-navy-50 px-2.5 py-1 text-caption font-semibold text-navy-800">
                        {t.badge}
                      </span>
                    </div>
                    <h2 className="font-heading text-h3 font-semibold text-navy-900">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-body text-ink-600">{t.desc}</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="primary" size="md" href={t.href}>
                      Gunakan Gratis →
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand mode="dual" />
    </>
  );
}
