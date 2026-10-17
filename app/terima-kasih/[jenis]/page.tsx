import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileDown } from "lucide-react";
import { Button, WaButton } from "@/components/ui/Button";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { site } from "@/config/site";
import { insightArticles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Terima Kasih — Permintaan Anda Telah Kami Terima",
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return [
    { jenis: "konsultasi" },
    { jenis: "proposal" },
    { jenis: "unduh" },
    { jenis: "buletin" },
  ];
}

/**
 * Halaman Terima Kasih /terima-kasih/[jenis] sesuai spesifikasi §8.17 & §10.3:
 * - Wajib noindex (§8.17, §11.3, Lampiran B)
 * - Pesan konfirmasi spesifik + apa yang terjadi selanjutnya + estimasi waktu respons + konten lanjutan.
 */
export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ jenis: string }>;
}) {
  const { jenis } = await params;
  const validTypes = ["konsultasi", "proposal", "unduh", "buletin"];
  if (!validTypes.includes(jenis)) notFound();

  const recentArticles = insightArticles.slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-2xl rounded-xl border border-success-border bg-success-bg/50 p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>

          {jenis === "konsultasi" && (
            <>
              <h1 className="font-heading text-h2 font-bold text-navy-900">
                Terima kasih, permintaan konsultasi UKM Anda telah kami terima
              </h1>
              <p className="mt-3 text-body text-ink-700 tabular">
                Tim konsultan UKM kami akan menghubungi nomor WhatsApp Anda
                dalam waktu &lt; {site.contact.responseMinutesSme} menit di jam
                kerja ({site.contact.hours.days}, {site.contact.hours.label}{" "}
                WIB).
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <WaButton
                  waContext={{ type: "sme" }}
                  ctaLocation="hero"
                  segment="ukm"
                  size="lg"
                >
                  Lanjut Chat WhatsApp Sekarang
                </WaButton>
                <Button variant="outline" size="lg" href="/harga">
                  Lihat Rincian Paket UKM
                </Button>
              </div>
            </>
          )}

          {jenis === "proposal" && (
            <>
              <h1 className="font-heading text-h2 font-bold text-navy-900">
                Permintaan Proposal (RFP) Anda telah kami terima
              </h1>
              <p className="mt-3 text-body text-ink-700">
                Email konfirmasi otomatis telah dikirimkan ke alamat email
                kantor Anda. Berikut tahapan selanjutnya:
              </p>
              <ol className="mx-auto mt-6 max-w-lg space-y-2.5 rounded-lg border border-ink-300 bg-white p-5 text-left text-body-sm text-ink-900">
                <li>
                  <strong>1. Kami tinjau (≤ 1 hari kerja):</strong> Partner
                  spesialis menelaah kebutuhan Anda dan menyiapkan NDA.
                </li>
                <li>
                  <strong>2. Scoping call 45–60 menit:</strong> Diskusi teknis
                  mengenai ruang lingkup dan tahun pajak.
                </li>
                <li className="tabular">
                  <strong>
                    3. Proposal tertulis (≤{" "}
                    {site.contact.proposalDaysAfterScoping} hari kerja setelah
                    scoping):
                  </strong>{" "}
                  Pengiriman dokumen proposal resmi beserta SLA dan struktur
                  biaya.
                </li>
              </ol>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button
                  variant="secondary"
                  size="md"
                  href={site.downloads.companyProfileId}
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  <span>Unduh Company Profile (ID)</span>
                </Button>
                <Button variant="outline" size="md" href="/korporasi">
                  Kembali ke Halaman Korporasi
                </Button>
              </div>
            </>
          )}

          {jenis === "unduh" && (
            <>
              <h1 className="font-heading text-h2 font-bold text-navy-900">
                Company Profile siap diunduh
              </h1>
              <p className="mt-3 text-body text-ink-700">
                Silakan klik tombol di bawah ini untuk mengunduh dokumen Company
                Profile {site.brandName} dalam Bahasa Indonesia atau Bahasa
                Inggris.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={site.downloads.companyProfileId}
                >
                  <FileDown className="h-5 w-5" aria-hidden="true" />
                  <span>Company Profile — Bahasa Indonesia (PDF)</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={site.downloads.companyProfileEn}
                >
                  <FileDown className="h-5 w-5" aria-hidden="true" />
                  <span>Company Profile — English (PDF)</span>
                </Button>
              </div>
            </>
          )}

          {jenis === "buletin" && (
            <>
              <h1 className="font-heading text-h2 font-bold text-navy-900">
                Terima kasih telah berlangganan Buletin Pajak Bulanan
              </h1>
              <p className="mt-3 text-body text-ink-700">
                Silakan periksa kotak masuk email Anda untuk konfirmasi
                pendaftaran. Anda akan menerima ringkasan regulasi terbaru dan 3
                aksi pajak penting setiap awal bulan.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="primary" size="md" href="/insight/buletin">
                  Lihat Arsip Buletin Bulanan
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/tools/kalender-pajak"
                >
                  Buka Kalender Pajak 2026
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 font-heading text-h3 font-bold text-navy-900">
            Bacaan &amp; panduan relevan sembari menunggu tim kami
          </h2>
          <InsightGrid articles={recentArticles} />
        </div>
      </div>
    </section>
  );
}
