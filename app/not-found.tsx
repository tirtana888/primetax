import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container-narrow text-center">
        <p className="font-heading text-eyebrow uppercase text-emerald-700">
          Error 404
        </p>
        <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lead text-ink-600">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan atau alamat URL
          yang dimasukkan kurang tepat.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/">
            Kembali ke Beranda
          </Button>
          <Button variant="outline" size="lg" href="/layanan">
            Lihat Semua Layanan
          </Button>
          <Button variant="outline" size="lg" href="/kontak">
            Hubungi Kami
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          <Link
            href="/korporasi"
            className="rounded-lg border border-ink-300 bg-ink-100 p-5 no-underline hover:border-navy-200"
          >
            <p className="font-heading text-h5 font-semibold text-navy-900">
              Jalur Korporasi &amp; PMA →
            </p>
            <p className="mt-1 text-body-sm text-ink-600">
              Transfer pricing, SP2DK, pemeriksaan, restitusi, &amp; sengketa.
            </p>
          </Link>
          <Link
            href="/ukm"
            className="rounded-lg border border-ink-300 bg-ink-100 p-5 no-underline hover:border-navy-200"
          >
            <p className="font-heading text-h5 font-semibold text-navy-900">
              Jalur UKM &amp; Startup →
            </p>
            <p className="mt-1 text-body-sm text-ink-600">
              Paket bulanan dengan harga jelas &amp; konsultasi via WhatsApp.
            </p>
          </Link>
          <Link
            href="/insight"
            className="rounded-lg border border-ink-300 bg-ink-100 p-5 no-underline hover:border-navy-200"
          >
            <p className="font-heading text-h5 font-semibold text-navy-900">
              Insight &amp; Tools Pajak →
            </p>
            <p className="mt-1 text-body-sm text-ink-600">
              Update PMK terbaru, Kalender Pajak, &amp; Kalkulator PPh 21.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
