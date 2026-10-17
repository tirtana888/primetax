import { Button, WaButton } from "@/components/ui/Button";
import { site } from "@/config/site";
import type { WaContext } from "@/lib/whatsapp";

export interface CtaBandProps {
  mode?: "dual" | "corporate" | "sme" | "en-corporate";
  title?: string;
  lead?: string;
  waContext?: WaContext;
}

/**
 * Komponen CtaBand (section navy-900 di akhir halaman) sesuai §8.2, §8.3, §10.0.
 */
export function CtaBand({
  mode = "dual",
  title,
  lead,
  waContext = { type: "sme" },
}: CtaBandProps) {
  if (mode === "en-corporate") {
    return (
      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="container-site text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-h2 font-bold text-white">
            {title || "Audit-ready. Dispute-ready. Growth-ready."}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lead text-navy-200">
            {lead ||
              "Discuss your corporate tax, transfer pricing, or tax dispute requirements with our senior advisors."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/en/request-proposal">
              Request Proposal
            </Button>
            <Button variant="outline-inverse" size="lg" href="/company-profile">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (mode === "corporate") {
    return (
      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="container-site text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-h2 font-bold text-white">
            {title || "Siap mendiskusikan kebutuhan pajak korporasi Anda?"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lead text-navy-200">
            {lead ||
              "Kami siap menandatangani NDA sebelum diskusi awal dan menyusun proposal tertulis sesuai lingkup kebutuhan perusahaan Anda."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/minta-proposal">
              Minta Proposal
            </Button>
            <Button
              variant="outline-inverse"
              size="lg"
              href="/kontak?segmen=korporasi"
            >
              Jadwalkan Scoping Call 45–60 Menit
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (mode === "sme") {
    return (
      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="container-site text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-h2 font-bold text-white">
            {title || "Pajak beres tiap bulan. Anda fokus jualan."}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lead text-navy-200">
            {lead ||
              "Konsultasikan kebutuhan SPT, PPh 21, PPN, atau Coretax usaha Anda selama 30 menit gratis via WhatsApp."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WaButton
              waContext={waContext}
              ctaLocation="cta_band"
              segment="ukm"
              size="lg"
            >
              Konsultasi Gratis 30 Menit via WhatsApp
            </WaButton>
            <Button variant="outline-inverse" size="lg" href="/harga">
              <span className="tabular">
                Lihat Paket mulai Rp {site.pricing.starterFrom}/bulan
              </span>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Default: Dual CTA Band (§8.3 #12)
  return (
    <section className="bg-navy-900 py-16 text-white lg:py-20">
      <div className="container-site text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-h2 font-bold text-white">
          {title || "Mulai dari jalur yang sesuai untuk bisnis Anda."}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lead text-navy-200">
          {lead ||
            "Pilih konsultasi cepat via WhatsApp untuk paket bulanan UKM, atau ajukan permintaan proposal (RFP) untuk pendampingan korporasi."}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WaButton
            waContext={waContext}
            ctaLocation="cta_band"
            segment="ukm"
            size="lg"
          >
            Konsultasi UKM via WhatsApp
          </WaButton>
          <Button variant="outline-inverse" size="lg" href="/minta-proposal">
            Minta Proposal Korporasi
          </Button>
        </div>
      </div>
    </section>
  );
}
