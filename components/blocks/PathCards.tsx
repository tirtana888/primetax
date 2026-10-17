import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2, Store } from "lucide-react";
import { Button, WaButton } from "@/components/ui/Button";
import { site } from "@/config/site";
import { photos, type StockPhoto } from "@/content/photos";
import { isReady } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Komponen PathCards (Dua Jalur) sesuai §6.3 & §8.3:
 * Kartu A — "Korporasi / PMA": navy gelap (kesan enterprise, formal).
 * Kartu B — "UKM / Startup": terang dengan aksen emerald (kesan ramah, mudah).
 * Bobot visual tetap setara (ukuran, radius, padding sama); hanya identitas warna yang berbeda.
 * Urutan di mobile dapat dikendalikan melalui site.flags.mobilePathOrder (§11.2).
 */
function Bullet({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0",
          inverse ? "text-emerald-300" : "text-emerald-700"
        )}
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

function CardPhoto({ photo, tint }: { photo: StockPhoto; tint: string }) {
  return (
    <div className="relative -mx-5 -mt-5 mb-6 h-32 overflow-hidden sm:h-40 md:-mx-10 md:-mt-10 md:mb-7 md:h-52">
      <Image
        src={`${photo.src}?w=1200&q=75&fit=crop`}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className={cn("absolute inset-0", tint)} />
    </div>
  );
}

export function PathCards() {
  const smeFirstOnMobile = site.flags.mobilePathOrder[0] !== "korporasi";
  const showPrice = isReady(site.pricing.starterFrom);

  const corporateCard = (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-5 text-white shadow-lg ring-1 ring-navy-800 transition-transform duration-200 hover:-translate-y-1 md:p-10",
        smeFirstOnMobile ? "order-2 lg:order-1" : "order-1"
      )}
    >
      <div className="relative">
        <CardPhoto
          photo={photos.businessMeeting}
          tint="bg-gradient-to-t from-navy-900 via-navy-900/30 to-navy-900/10"
        />
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-eyebrow uppercase text-emerald-300">
            Korporasi &amp; PMA
          </p>
        </div>
        <h3 className="mt-4 font-heading text-h3 font-bold text-white">
          Pendampingan strategis &amp; mitigasi risiko pajak
        </h3>
        <p className="mt-2 hidden text-body-sm text-navy-200 sm:block">
          Untuk CFO, Head of Tax, dan tim finance perusahaan nasional maupun
          grup multinasional.
        </p>
        <ul className="mt-6 space-y-3.5 text-body-sm text-navy-50">
          <Bullet inverse>
            Transfer pricing (Master/Local File PMK 172/2023) &amp; Pajak
            Minimum Global (Pilar Dua)
          </Bullet>
          <Bullet inverse>
            Pendampingan SP2DK, pemeriksaan, restitusi, hingga sengketa di
            Pengadilan Pajak
          </Bullet>
          <Bullet inverse>
            SLA tertulis, PIC partner senior, &amp; laporan posisi risiko rutin
            ke manajemen
          </Bullet>
        </ul>
      </div>

      <div className="relative mt-8 space-y-4 border-t border-white/10 pt-6">
        <Button variant="primary" size="lg" fullWidth href="/minta-proposal">
          Minta Proposal
        </Button>
        <div className="flex flex-wrap items-center justify-between gap-2 text-caption text-navy-200">
          <span>NDA sebelum diskusi · Scoping 45–60 menit</span>
          <Link
            href="/korporasi"
            className="inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-200 no-underline hover:text-white hover:underline"
          >
            <span>Solusi korporasi</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );

  const smeCard = (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-200 bg-white p-5 shadow-md transition-transform duration-200 hover:-translate-y-1 md:p-10",
        smeFirstOnMobile ? "order-1 lg:order-2" : "order-2"
      )}
    >
      <div>
        <CardPhoto
          photo={photos.smeConsultation}
          tint="border-b-4 border-emerald-500"
        />
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
            <Store className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-eyebrow uppercase text-emerald-700">
            UKM &amp; Startup
          </p>
        </div>
        <h3 className="mt-4 font-heading text-h3 font-bold text-navy-900">
          Pajak beres tiap bulan, biaya jelas di depan
        </h3>
        <p className="mt-2 hidden text-body-sm text-ink-600 sm:block">
          Untuk pemilik usaha, toko online/ritel, dan startup yang ingin fokus
          mengembangkan bisnis.
        </p>
        <ul className="mt-6 space-y-3.5 text-body-sm text-ink-900">
          <Bullet>
            {showPrice ? (
              <span className="tabular">
                Paket bulanan transparan mulai{" "}
                <strong className="font-semibold">
                  Rp {site.pricing.starterFrom}/bulan
                </strong>
              </span>
            ) : (
              "Paket bulanan dengan harga transparan, tanpa biaya tersembunyi"
            )}
          </Bullet>
          <Bullet>
            Tanya jawab langsung via WhatsApp, tanpa istilah pajak yang rumit
          </Bullet>
          <Bullet>
            SPT Masa &amp; Tahunan, PPh 21 karyawan, PPN &amp; e-Faktur di
            Coretax
          </Bullet>
        </ul>
      </div>

      <div className="mt-8 space-y-4 border-t border-ink-200 pt-6">
        <WaButton
          waContext={{ type: "sme" }}
          ctaLocation="card"
          segment="ukm"
          size="lg"
          fullWidth
        >
          Konsultasi Gratis via WhatsApp
        </WaButton>
        <div className="flex flex-wrap items-center justify-between gap-2 text-caption text-ink-600">
          <span>Gratis 30 menit · Tanpa komitmen</span>
          <Link
            href="/harga"
            className="inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-700 no-underline hover:text-emerald-800 hover:underline"
          >
            <span>Lihat paket &amp; harga</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      {corporateCard}
      {smeCard}
    </div>
  );
}
