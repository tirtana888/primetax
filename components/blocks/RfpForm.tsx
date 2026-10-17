"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import {
  FieldWrapper,
  Input,
  PhoneInput,
  Select,
  Textarea,
} from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import {
  rfpStep1Schema,
  rfpStep2Schema,
  rfpStep3Schema,
  isFreeEmailDomain,
} from "@/lib/validators";
import { trackEvent } from "@/lib/analytics";
import { getStoredUtmParams } from "@/lib/utm";
import { cn } from "@/lib/utils";

const RFP_SESSION_KEY = "primetax_rfp_draft_v1";

const SERVICE_OPTIONS = [
  "Kepatuhan Pajak Korporasi",
  "SP2DK / Pemeriksaan Pajak",
  "Keberatan / Banding Pengadilan Pajak",
  "Restitusi PPN / PPh",
  "Transfer Pricing (Master/Local File)",
  "Pajak Internasional / GMT (Pilar Dua)",
  "Tax Planning / Tax Due Diligence",
  "Tax Health Check / Diagnostic Review",
  "Kepabeanan & Kawasan Berikat",
  "Lainnya",
];

const INDUSTRY_OPTIONS = [
  "Manufaktur & Kawasan Berikat",
  "Perdagangan & E-commerce",
  "Properti & Konstruksi",
  "Sawit, Perkebunan & Pertambangan",
  "Jasa, Teknologi & Startup",
  "Keuangan & Investasi",
  "Logistik & Kepelabuhanan",
  "Lainnya",
];

/**
 * Form RFP / Minta Proposal Korporasi 3 Langkah (§10.3):
 * - Menyimpan draf sementara di sessionStorage agar tidak hilang saat kembali
 * - Validasi Zod di tiap langkah + peringatan lunak jika domain email gratis (gmail/yahoo)
 * - Mengirim event rfp_step_complete dan rfp_submit.
 */
export function RfpForm({ isEn = false }: { isEn?: boolean }) {
  const router = useRouter();
  const errorSummaryRef = React.useRef<HTMLDivElement>(null);

  const [step, setStep] = React.useState<1 | 2 | 3>(1);

  // Langkah 1
  const [companyName, setCompanyName] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [companyStatus, setCompanyStatus] = React.useState<string>("PMA");
  const [annualRevenue, setAnnualRevenue] = React.useState("");
  const [picName, setPicName] = React.useState("");
  const [picRole, setPicRole] = React.useState("");
  const [workEmail, setWorkEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // Langkah 2
  const [servicesNeeded, setServicesNeeded] = React.useState<string[]>([]);
  const [description, setDescription] = React.useState("");
  const [targetDeadline, setTargetDeadline] = React.useState("");
  const [djpLetterStatus, setDjpLetterStatus] = React.useState<string>("Tidak");

  // Langkah 3
  const [requireNda, setRequireNda] = React.useState<"Ya" | "Tidak">("Ya");
  const [contactPreference, setContactPreference] =
    React.useState<string>("Meeting online");
  const [preferredSchedule, setPreferredSchedule] = React.useState("");
  const [referralSource, setReferralSource] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [honeypot, setHoneypot] = React.useState("");

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);

  // Pulihkan dari sessionStorage
  React.useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(RFP_SESSION_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.companyName) setCompanyName(data.companyName);
        if (data.industry) setIndustry(data.industry);
        if (data.companyStatus) setCompanyStatus(data.companyStatus);
        if (data.annualRevenue) setAnnualRevenue(data.annualRevenue);
        if (data.picName) setPicName(data.picName);
        if (data.picRole) setPicRole(data.picRole);
        if (data.workEmail) setWorkEmail(data.workEmail);
        if (data.phone) setPhone(data.phone);
        if (Array.isArray(data.servicesNeeded))
          setServicesNeeded(data.servicesNeeded);
        if (data.description) setDescription(data.description);
        if (data.targetDeadline) setTargetDeadline(data.targetDeadline);
        if (data.djpLetterStatus) setDjpLetterStatus(data.djpLetterStatus);
        if (data.requireNda) setRequireNda(data.requireNda);
        if (data.contactPreference)
          setContactPreference(data.contactPreference);
        if (data.preferredSchedule)
          setPreferredSchedule(data.preferredSchedule);
        if (data.referralSource) setReferralSource(data.referralSource);
      }
    } catch {
      // ignore
    }
  }, []);

  // Simpan ke sessionStorage saat berubah
  React.useEffect(() => {
    try {
      window.sessionStorage.setItem(
        RFP_SESSION_KEY,
        JSON.stringify({
          companyName,
          industry,
          companyStatus,
          annualRevenue,
          picName,
          picRole,
          workEmail,
          phone,
          servicesNeeded,
          description,
          targetDeadline,
          djpLetterStatus,
          requireNda,
          contactPreference,
          preferredSchedule,
          referralSource,
        })
      );
    } catch {
      // ignore
    }
  }, [
    companyName,
    industry,
    companyStatus,
    annualRevenue,
    picName,
    picRole,
    workEmail,
    phone,
    servicesNeeded,
    description,
    targetDeadline,
    djpLetterStatus,
    requireNda,
    contactPreference,
    preferredSchedule,
    referralSource,
  ]);

  const toggleService = (svc: string) => {
    setServicesNeeded((prev) =>
      prev.includes(svc) ? prev.filter((item) => item !== svc) : [...prev, svc]
    );
  };

  const handleNextStep1 = () => {
    const parsed = rfpStep1Schema.safeParse({
      companyName,
      industry,
      companyStatus,
      annualRevenue: annualRevenue || undefined,
      picName,
      picRole,
      workEmail,
      phone,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] || "step1");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setTimeout(() => errorSummaryRef.current?.focus(), 50);
      return;
    }

    setErrors({});
    trackEvent("rfp_step_complete", { step: 1 });
    setStep(2);
  };

  const handleNextStep2 = () => {
    const parsed = rfpStep2Schema.safeParse({
      servicesNeeded,
      description,
      targetDeadline: targetDeadline || undefined,
      djpLetterStatus: djpLetterStatus || undefined,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] || "step2");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setTimeout(() => errorSummaryRef.current?.focus(), 50);
      return;
    }

    setErrors({});
    trackEvent("rfp_step_complete", { step: 2 });
    setStep(3);
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed3 = rfpStep3Schema.safeParse({
      requireNda,
      contactPreference,
      preferredSchedule: preferredSchedule || undefined,
      referralSource: referralSource || undefined,
      consent,
      honeypot,
    });

    if (!parsed3.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed3.error.issues) {
        const key = String(issue.path[0] || "step3");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setTimeout(() => errorSummaryRef.current?.focus(), 50);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      const utm = getStoredUtmParams();
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "corporate_rfp",
          locale: isEn ? "en" : "id",
          companyName,
          industry,
          companyStatus,
          annualRevenue,
          picName,
          picRole,
          workEmail,
          phone,
          servicesNeeded,
          description,
          targetDeadline,
          djpLetterStatus,
          requireNda,
          contactPreference,
          preferredSchedule,
          referralSource,
          consent,
          utm,
        }),
      });
      trackEvent("rfp_step_complete", { step: 3 });
      trackEvent("rfp_submit", {
        segment: "korporasi",
        industry,
        company_status: companyStatus,
        require_nda: requireNda,
      });
      window.sessionStorage.removeItem(RFP_SESSION_KEY);
      router.push("/terima-kasih/proposal");
    } finally {
      setSubmitting(false);
    }
  };

  const errorKeys = Object.keys(errors);
  const showFreeEmailWarning =
    workEmail.includes("@") && isFreeEmailDomain(workEmail);

  return (
    <form
      onSubmit={handleSubmitFinal}
      noValidate
      className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8"
    >
      {/* Progress Indicator (§10.3) */}
      <div className="mb-8 border-b border-ink-200 pb-5">
        <div className="flex items-center justify-between">
          <span className="font-heading text-eyebrow uppercase text-emerald-700">
            {isEn ? `Step ${step} of 3` : `Langkah ${step} dari 3`}
          </span>
          <span className="text-caption font-medium text-ink-600">
            {step === 1
              ? isEn
                ? "Company & PIC Profile"
                : "Perusahaan & PIC"
              : step === 2
              ? isEn
                ? "Scope & Requirements"
                : "Lingkup Kebutuhan"
              : isEn
              ? "Preferences & NDA"
              : "Preferensi & Persetujuan"}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "h-2 rounded-full transition-colors",
                s <= step ? "bg-emerald-700" : "bg-ink-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Ringkasan Error */}
      {errorKeys.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-lg border border-danger-border bg-danger-bg p-4 text-danger-fg"
        >
          <div className="flex items-center gap-2 font-heading text-body-sm font-semibold">
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              {isEn
                ? `Please review the following ${errorKeys.length} field(s):`
                : `Mohon periksa kembali ${errorKeys.length} isian berikut:`}
            </span>
          </div>
          <ul className="mt-2 list-inside list-disc text-caption">
            {errorKeys.map((k) => (
              <li key={k}>{errors[k]}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* LANGKAH 1 — Perusahaan & PIC */}
      {step === 1 && (
        <div className="space-y-5">
          <FieldWrapper
            id="rfp-companyName"
            label={isEn ? "Company legal name" : "Nama perusahaan"}
            required
            error={errors.companyName}
          >
            <Input
              id="rfp-companyName"
              autoComplete="organization"
              placeholder="PT ..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              hasError={Boolean(errors.companyName)}
            />
          </FieldWrapper>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FieldWrapper
              id="rfp-industry"
              label={isEn ? "Industry sector" : "Industri"}
              required
              error={errors.industry}
            >
              <Select
                id="rfp-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                hasError={Boolean(errors.industry)}
              >
                <option value="">
                  {isEn ? "Select industry…" : "Pilih industri…"}
                </option>
                {INDUSTRY_OPTIONS.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </Select>
            </FieldWrapper>

            <FieldWrapper
              id="rfp-annualRevenue"
              label={
                isEn ? "Annual revenue range" : "Kisaran omzet tahunan"
              }
            >
              <Select
                id="rfp-annualRevenue"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(e.target.value)}
              >
                <option value="">
                  {isEn ? "Select range (optional)…" : "Pilih kisaran…"}
                </option>
                <option value="< Rp 50 M">&lt; Rp 50 miliar</option>
                <option value="Rp 50–500 M">Rp 50–500 miliar</option>
                <option value="Rp 500 M–1 T">Rp 500 miliar–1 triliun</option>
                <option value="> Rp 1 T">&gt; Rp 1 triliun</option>
              </Select>
            </FieldWrapper>
          </div>

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2 font-body text-label font-semibold text-ink-700">
              {isEn ? "Entity status" : "Status perusahaan"}{" "}
              <span className="text-danger-fg">*</span>
            </legend>
            <div className="flex flex-wrap gap-3">
              {["PMA", "PMDN", "BUMN/BUMD", "Tbk", "Lainnya"].map((st) => (
                <label
                  key={st}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3.5 py-2 text-body-sm font-medium transition-colors",
                    companyStatus === st
                      ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                      : "border-ink-400 bg-white text-ink-800 hover:bg-navy-50"
                  )}
                >
                  <input
                    type="radio"
                    name="companyStatus"
                    value={st}
                    checked={companyStatus === st}
                    onChange={(e) => setCompanyStatus(e.target.value)}
                    className="h-4 w-4 accent-emerald-700"
                  />
                  <span>{st}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FieldWrapper
              id="rfp-picName"
              label={isEn ? "Contact person (PIC) name" : "Nama PIC"}
              required
              error={errors.picName}
            >
              <Input
                id="rfp-picName"
                autoComplete="name"
                value={picName}
                onChange={(e) => setPicName(e.target.value)}
                hasError={Boolean(errors.picName)}
              />
            </FieldWrapper>

            <FieldWrapper
              id="rfp-picRole"
              label={isEn ? "Job title / Role" : "Jabatan"}
              required
              error={errors.picRole}
            >
              <Input
                id="rfp-picRole"
                autoComplete="organization-title"
                placeholder="CFO / Tax Manager / Head of Finance"
                value={picRole}
                onChange={(e) => setPicRole(e.target.value)}
                hasError={Boolean(errors.picRole)}
              />
            </FieldWrapper>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <FieldWrapper
                id="rfp-workEmail"
                label={isEn ? "Work email" : "Email kantor"}
                required
                error={errors.workEmail}
              >
                <Input
                  id="rfp-workEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="nama@perusahaan.co.id"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  hasError={Boolean(errors.workEmail)}
                />
              </FieldWrapper>
              {showFreeEmailWarning && !errors.workEmail && (
                <p className="mt-1.5 flex items-start gap-1.5 text-caption text-warning-fg">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    Kami menyarankan menggunakan alamat email resmi perusahaan
                    agar pengiriman proposal dan NDA lebih cepat diverifikasi.
                  </span>
                </p>
              )}
            </div>

            <FieldWrapper
              id="rfp-phone"
              label={isEn ? "Phone / WhatsApp" : "Telepon / WhatsApp"}
              required
              error={errors.phone}
            >
              <PhoneInput
                id="rfp-phone"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                hasError={Boolean(errors.phone)}
              />
            </FieldWrapper>
          </div>

          <div className="pt-4">
            <Button
              type="button"
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleNextStep1}
            >
              {isEn ? "Continue to Step 2 →" : "Lanjut ke Langkah 2 →"}
            </Button>
          </div>
        </div>
      )}

      {/* LANGKAH 2 — Kebutuhan */}
      {step === 2 && (
        <div className="space-y-5">
          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2 font-body text-label font-semibold text-ink-700">
              {isEn ? "Services required" : "Layanan yang dibutuhkan"}{" "}
              <span className="text-danger-fg">*</span>
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((svc) => {
                const checked = servicesNeeded.includes(svc);
                return (
                  <label
                    key={svc}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-md border px-3.5 py-2.5 text-body-sm transition-colors",
                      checked
                        ? "border-emerald-700 bg-emerald-50 font-medium text-emerald-800"
                        : "border-ink-400 bg-white text-ink-800 hover:bg-navy-50"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleService(svc)}
                      className="h-4 w-4 shrink-0 accent-emerald-700"
                    />
                    <span>{svc}</span>
                  </label>
                );
              })}
            </div>
            {errors.servicesNeeded && (
              <p
                role="alert"
                className="mt-1.5 text-caption font-medium text-danger-fg"
              >
                {errors.servicesNeeded}
              </p>
            )}
          </fieldset>

          <FieldWrapper
            id="rfp-description"
            label={
              isEn
                ? "Brief description of your requirements / case context"
                : "Deskripsi kebutuhan / masalah"
            }
            required
            hint="Maksimal 2.000 karakter. Cukup tuliskan gambaran umum dan tahun pajak terkait."
            error={errors.description}
          >
            <Textarea
              id="rfp-description"
              maxLength={2000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              hasError={Boolean(errors.description)}
            />
          </FieldWrapper>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FieldWrapper
              id="rfp-targetDeadline"
              label={isEn ? "Target deadline" : "Tenggat / target waktu"}
            >
              <Input
                id="rfp-targetDeadline"
                type="date"
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
              />
            </FieldWrapper>

            <FieldWrapper
              id="rfp-djpLetter"
              label={
                isEn
                  ? "Any formal letter received from the Tax Office (DJP)?"
                  : "Ada surat dari DJP?"
              }
            >
              <Select
                id="rfp-djpLetter"
                value={djpLetterStatus}
                onChange={(e) => setDjpLetterStatus(e.target.value)}
              >
                <option value="Tidak">Tidak ada</option>
                <option value="SP2DK">SP2DK</option>
                <option value="Surat Pemeriksaan">
                  Surat Perintah Pemeriksaan (SP2 / SPHP)
                </option>
                <option value="SKP">Surat Ketetapan Pajak (SKP)</option>
                <option value="Lainnya">Lainnya</option>
              </Select>
            </FieldWrapper>
          </div>

          <FieldWrapper
            id="rfp-attachment"
            label={
              isEn
                ? "Supporting summary document (PDF/DOCX/XLSX, max 10 MB)"
                : "Lampiran ringkasan (PDF/DOCX/XLSX, maks. 10 MB, maks. 3 file)"
            }
            hint="Catatan keamanan: Jangan unggah dokumen rahasia/sensitif sebelum penandatanganan NDA; cukup ringkasan lingkup."
          >
            <Input
              id="rfp-attachment"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              className="py-2"
            />
          </FieldWrapper>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setStep(1)}
            >
              ← Kembali
            </Button>
            <Button
              type="button"
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleNextStep2}
            >
              {isEn ? "Continue to Step 3 →" : "Lanjut ke Langkah 3 →"}
            </Button>
          </div>
        </div>
      )}

      {/* LANGKAH 3 — Preferensi & Persetujuan */}
      {step === 3 && (
        <div className="space-y-5">
          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2 font-body text-label font-semibold text-ink-700">
              {isEn
                ? "Do you require an NDA prior to detailed discussion?"
                : "Butuh penandatanganan NDA sebelum diskusi detail?"}
            </legend>
            <div className="flex gap-3">
              {(["Ya", "Tidak"] as const).map((val) => (
                <label
                  key={val}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-body-sm font-medium",
                    requireNda === val
                      ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                      : "border-ink-400 bg-white text-ink-800"
                  )}
                >
                  <input
                    type="radio"
                    name="requireNda"
                    value={val}
                    checked={requireNda === val}
                    onChange={() => setRequireNda(val)}
                    className="h-4 w-4 accent-emerald-700"
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2 font-body text-label font-semibold text-ink-700">
              {isEn ? "Preferred contact method" : "Preferensi kontak"}{" "}
              <span className="text-danger-fg">*</span>
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {["Email", "Telepon", "Meeting online", "Meeting di kantor"].map(
                (pref) => (
                  <label
                    key={pref}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3.5 py-2 text-body-sm font-medium",
                      contactPreference === pref
                        ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                        : "border-ink-400 bg-white text-ink-800"
                    )}
                  >
                    <input
                      type="radio"
                      name="contactPreference"
                      value={pref}
                      checked={contactPreference === pref}
                      onChange={(e) => setContactPreference(e.target.value)}
                      className="h-4 w-4 accent-emerald-700"
                    />
                    <span>{pref}</span>
                  </label>
                )
              )}
            </div>
          </fieldset>

          <FieldWrapper
            id="rfp-schedule"
            label="Usulan waktu scoping call 45–60 menit (WIB)"
            hint="Contoh: Kamis pukul 10.00 WIB atau Jumat pukul 14.00 WIB"
          >
            <Input
              id="rfp-schedule"
              placeholder="Hari & jam yang Anda inginkan (WIB)"
              value={preferredSchedule}
              onChange={(e) => setPreferredSchedule(e.target.value)}
            />
          </FieldWrapper>

          <FieldWrapper
            id="rfp-referral"
            label="Dari mana mengetahui kami?"
          >
            <Select
              id="rfp-referral"
              value={referralSource}
              onChange={(e) => setReferralSource(e.target.value)}
            >
              <option value="">Pilih sumber informasi…</option>
              <option value="Pencarian Google">Pencarian Google</option>
              <option value="Artikel / Insight Regulasi">
                Artikel / Insight Regulasi
              </option>
              <option value="Rekomendasi Kolega / Asosiasi">
                Rekomendasi Kolega / Asosiasi
              </option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Webinar / Seminar">Webinar / Seminar</option>
              <option value="Lainnya">Lainnya</option>
            </Select>
          </FieldWrapper>

          <div>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-body-sm text-ink-700">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 rounded-sm border-ink-400 accent-emerald-700"
              />
              <span>
                Saya setuju data saya diproses sesuai{" "}
                <Link href="/kebijakan-privasi" className="underline">
                  Kebijakan Privasi
                </Link>{" "}
                untuk keperluan penyusunan proposal dan konsultasi (UU No.
                27/2022 tentang Pelindungan Data Pribadi).{" "}
                <span className="text-danger-fg">*</span>
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

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setStep(2)}
            >
              ← Kembali
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              isLoading={submitting}
            >
              {isEn ? "Submit Proposal Request" : "Kirim Permintaan Proposal"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
