import type { Metadata } from "next";
import { FileText, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { NewsletterSection } from "@/components/blocks/NewsletterSection";
import { Button } from "@/components/ui/Button";
import { bulletins } from "@/content/insights";

export const metadata: Metadata = {
  title: "Arsip Buletin Pajak Bulanan (PDF)",
  description:
    "Arsip buletin pajak bulanan berisi ringkasan regulasi terbaru dan 3 aksi kepatuhan penting setiap bulan untuk tim finance.",
  alternates: {
    canonical: "/insight/buletin",
  },
};

export default function BulletinArchivePage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Insight", href: "/insight" },
              { label: "Buletin Bulanan" },
            ]}
          />

          <div className="mt-6 mb-10">
            <NewsletterSection />
          </div>

          <h1 className="font-heading text-h1 font-bold text-navy-900">
            Arsip buletin pajak bulanan
          </h1>
          <p className="mt-3 max-w-2xl text-lead text-ink-600">
            Unduh edisi buletin bulanan kami dalam format PDF untuk dibagikan
            kepada tim finance dan akuntansi perusahaan Anda.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {bulletins.map((b) => (
              <div
                key={b.id}
                className="flex flex-col justify-between rounded-xl border border-ink-300 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-sm bg-navy-50 px-3 py-1 font-heading text-caption font-semibold text-navy-900">
                    <FileText className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                    <span>Edisi {b.monthLabel}</span>
                  </div>
                  <h2 className="font-heading text-h4 font-semibold text-navy-900">
                    {b.title}
                  </h2>
                  <ul className="mt-4 space-y-2 text-body-sm text-ink-700">
                    {b.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                          aria-hidden="true"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-ink-200 pt-4">
                  <Button variant="outline" size="md" href={b.pdfUrl}>
                    Unduh PDF ({b.monthLabel})
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
