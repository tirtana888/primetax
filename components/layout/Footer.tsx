"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { isReady } from "@/lib/content";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";

/** Ganti dengan nama afiliasi resmi (mis. "Anggota IKPI") setelah dikonfirmasi. */
const AFFILIATION_LABEL = "[LOGO AFILIASI RESMI — mis. IKPI]";

export function Footer() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "newsletter",
          email,
        }),
      });
      trackEvent("newsletter_signup", { location: "footer" });
      setEmail("");
      router.push("/terima-kasih/buletin");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy-950 pt-20 pb-8 text-navy-200">
      <div className="container-site">
        {/* Baris Newsletter di atas garis (§6.5) */}
        <div className="mb-12 rounded-xl border border-navy-800 bg-navy-900 p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div className="mb-4 md:mb-0">
            <h2 className="font-heading text-h4 font-semibold text-white">
              {isEn
                ? "Monthly tax bulletin: regulatory summary + 3 key actions each month."
                : "Buletin pajak bulanan, 3 aksi penting tiap bulan."}
            </h2>
            <p className="mt-1 text-caption text-navy-200">
              {isEn
                ? "By subscribing, you agree to our Privacy Policy."
                : "Dengan berlangganan, Anda setuju dengan Kebijakan Privasi kami."}
            </p>
          </div>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              {isEn ? "Email address" : "Alamat email"}
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isEn ? "Your work email" : "Alamat email Anda"}
              className="h-11 flex-1 rounded-md border border-navy-700 bg-navy-950 px-3.5 font-body text-body-sm text-white placeholder:text-navy-200/70 focus:border-emerald-300"
            />
            <Button type="submit" variant="primary" size="md" isLoading={submitting}>
              {isEn ? "Subscribe" : "Berlangganan"}
            </Button>
          </form>
        </div>

        {/* Grid 12 Kolom (§6.5) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Kolom 1 (4 kolom) */}
          <div className="md:col-span-4">
            <Logo tone="inverse" href={isEn ? "/en" : "/"} />
            <p className="mt-3 text-body-sm text-navy-200">
              {site.tagline} —{" "}
              {isEn
                ? "Certified Indonesian tax consultants serving corporations, foreign investments (PMA), and SMEs."
                : "Pajak bisnis Anda ditangani dengan jelas, tepat waktu, dan siap diperiksa."}
            </p>
            <dl className="mt-5 space-y-2 text-body-sm text-navy-200">
              {/* Baris kontak hanya tampil bila datanya sudah final (placeholder disembunyikan di produksi) */}
              {[
                { label: "", value: `${site.contact.address}, ${site.contact.city}`, srLabel: "Alamat Kantor" },
                { label: "Telepon", value: site.contact.phone },
                { label: "WhatsApp", value: site.contact.whatsapp },
                { label: "Email", value: site.contact.email },
                { label: "Jam Operasional", value: `${site.contact.hours.days}, ${site.contact.hours.label} WIB` },
                { label: "Izin Praktik", value: site.practiceLicenseNumber },
              ]
                .filter((row) => isReady(row.value))
                .map((row) => (
                  <div key={row.label || row.srLabel}>
                    {row.label ? (
                      <dt className="inline font-semibold text-white">{row.label}: </dt>
                    ) : (
                      <dt className="sr-only">{row.srLabel}</dt>
                    )}
                    <dd className={row.label ? "inline tabular" : undefined}>{row.value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {/* Kolom 2: Layanan (2 kolom) */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-heading text-h6 font-semibold text-white">
              {isEn ? "Services" : "Layanan"}
            </h3>
            <ul className="space-y-2 text-body-sm">
              {services.slice(0, 8).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={isEn ? `/en/services/${svc.enSlug}` : `/layanan/${svc.slug}`}
                    className="text-navy-200 no-underline transition-colors hover:text-emerald-200 hover:underline"
                  >
                    {isEn ? svc.enTitle : svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Untuk Bisnis (2 kolom) */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-heading text-h6 font-semibold text-white">
              {isEn ? "For Business" : "Untuk Bisnis"}
            </h3>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link
                  href={isEn ? "/en/corporate" : "/korporasi"}
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  {isEn ? "Corporate & PMA" : "Korporasi & PMA"}
                </Link>
              </li>
              <li>
                <Link
                  href="/ukm"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  UKM & Startup
                </Link>
              </li>
              <li>
                <Link
                  href="/harga"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Harga UKM
                </Link>
              </li>
              <li>
                <Link
                  href={isEn ? "/en/request-proposal" : "/minta-proposal"}
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  {isEn ? "Request Proposal (RFP)" : "Minta Proposal"}
                </Link>
              </li>
              <li>
                <Link
                  href="/company-profile"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Unduh Company Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sumber Daya (2 kolom) */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-heading text-h6 font-semibold text-white">
              {isEn ? "Resources" : "Sumber Daya"}
            </h3>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link
                  href="/insight"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Insight Pajak
                </Link>
              </li>
              <li>
                <Link
                  href="/studi-kasus"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Tools Gratis
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/kalender-pajak"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Kalender Pajak
                </Link>
              </li>
              <li>
                <Link
                  href="/insight/buletin"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Buletin Bulanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Perusahaan (2 kolom) */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-heading text-h6 font-semibold text-white">
              {isEn ? "Company" : "Perusahaan"}
            </h3>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link
                  href="/tentang"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/tim"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Tim & Kredensial
                </Link>
              </li>
              <li>
                <Link
                  href="/karier"
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  Karier
                </Link>
              </li>
              <li>
                <Link
                  href={isEn ? "/en/contact" : "/kontak"}
                  className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
                >
                  {isEn ? "Contact" : "Kontak"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Badge Kepercayaan (§6.5) */}
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-navy-800 pt-6">
          <span className="text-caption font-semibold uppercase tracking-wider text-navy-200">
            Kredensial & Afiliasi:
          </span>
          <span className="inline-flex h-8 items-center rounded-sm border border-navy-700 px-3 text-caption font-medium text-white">
            Konsultan Pajak Bersertifikat (BKP A/B/C)
          </span>
          <span className="inline-flex h-8 items-center rounded-sm border border-navy-700 px-3 text-caption font-medium text-white">
            Kuasa Hukum Pengadilan Pajak
          </span>
          {isReady(AFFILIATION_LABEL) && (
            <span className="inline-flex h-8 items-center rounded-sm border border-navy-700 px-3 text-caption font-medium text-white">
              {AFFILIATION_LABEL}
            </span>
          )}
        </div>

        {/* Garis Bawah Legal & Sosial (§6.5) */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-navy-800 pt-6 text-caption text-navy-200 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 {site.legalName}. Hak cipta dilindungi.</span>
            <Link
              href="/kebijakan-privasi"
              className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/disclaimer"
              className="text-navy-200 no-underline hover:text-emerald-200 hover:underline"
            >
              Disclaimer
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="text-navy-200 no-underline hover:text-emerald-200"
            >
              LinkedIn
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="text-navy-200 no-underline hover:text-emerald-200"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              aria-label="YouTube"
              className="text-navy-200 no-underline hover:text-emerald-200"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
