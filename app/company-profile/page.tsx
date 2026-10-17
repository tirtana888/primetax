"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileDown, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FieldWrapper, Input } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { companyProfileGateSchema } from "@/lib/validators";
import { trackEvent } from "@/lib/analytics";

/**
 * Halaman Unduh Company Profile /company-profile sesuai §10.5:
 * Dikendalikan oleh site.flags.companyProfileGate ("light" | "none").
 */
export default function CompanyProfilePage() {
  const router = useRouter();
  const isLightGate = site.flags.companyProfileGate === "light";

  const [fullName, setFullName] = React.useState("");
  const [workEmail, setWorkEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = companyProfileGateSchema.safeParse({
      fullName,
      workEmail,
      companyName,
      consent,
    });

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] || "form");
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "company_profile",
          ...parsed.data,
        }),
      });
      trackEvent("company_profile_download", { gate: "light" });
      router.push("/terima-kasih/unduh");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-site">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Unduh Company Profile" },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Dokumen Kredensial Firma
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Unduh Company Profile {site.brandName}
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Dokumen Company Profile (tersedia dalam Bahasa Indonesia &amp;
              Bahasa Inggris) memuat rincian cakupan layanan, profil &amp;
              sertifikasi Partner, metodologi kerja, serta ringkasan studi kasus
              untuk keperluan pengadaan/vendor onboarding perusahaan Anda.
            </p>

            <ul className="mt-6 space-y-3 text-body-sm text-ink-900">
              {[
                "Profil lisensi praktik & sertifikasi konsultan (BKP A/B/C & Kuasa Hukum Pengadilan Pajak)",
                "Matriks layanan Korporasi/PMA dan UKM",
                "Ringkasan studi kasus restitusi, SP2DK, dan Transfer Pricing",
                "Standar SLA, kerahasiaan data (UU PDP), & tata kelola",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            {isLightGate ? (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-xl border border-ink-300 bg-ink-100/50 p-6 shadow-sm md:p-8"
              >
                <h2 className="font-heading text-h4 font-semibold text-navy-900">
                  Isi 3 data singkat untuk mengunduh PDF
                </h2>

                <FieldWrapper
                  id="cp-name"
                  label="Nama lengkap"
                  required
                  error={errors.fullName}
                >
                  <Input
                    id="cp-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    hasError={Boolean(errors.fullName)}
                  />
                </FieldWrapper>

                <FieldWrapper
                  id="cp-email"
                  label="Email kantor"
                  required
                  error={errors.workEmail}
                >
                  <Input
                    id="cp-email"
                    type="email"
                    placeholder="nama@perusahaan.co.id"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    hasError={Boolean(errors.workEmail)}
                  />
                </FieldWrapper>

                <FieldWrapper
                  id="cp-company"
                  label="Nama perusahaan"
                  required
                  error={errors.companyName}
                >
                  <Input
                    id="cp-company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    hasError={Boolean(errors.companyName)}
                  />
                </FieldWrapper>

                <div>
                  <label className="flex min-h-11 cursor-pointer items-start gap-3 text-body-sm text-ink-700">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-5 w-5 shrink-0 accent-emerald-700"
                    />
                    <span>
                      Saya setuju data saya diproses sesuai{" "}
                      <Link href="/kebijakan-privasi" className="underline">
                        Kebijakan Privasi
                      </Link>
                      . <span className="text-danger-fg">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      role="alert"
                      className="mt-1 text-caption font-medium text-danger-fg"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={submitting}
                >
                  <FileDown className="h-5 w-5" aria-hidden="true" />
                  <span>Unduh Company Profile (PDF)</span>
                </Button>
              </form>
            ) : (
              <div className="rounded-xl border border-ink-300 bg-white p-8 shadow-sm">
                <h2 className="font-heading text-h4 font-semibold text-navy-900">
                  Unduh Langsung
                </h2>
                <div className="mt-6 space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    href={site.downloads.companyProfileId}
                  >
                    Unduh Versi Bahasa Indonesia (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    href={site.downloads.companyProfileEn}
                  >
                    Download English Version (PDF)
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
