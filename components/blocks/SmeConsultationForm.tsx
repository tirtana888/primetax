"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import {
  FieldWrapper,
  Input,
  PhoneInput,
  Select,
  Textarea,
} from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { smeFormSchema } from "@/lib/validators";
import { trackEvent } from "@/lib/analytics";
import { getStoredUtmParams } from "@/lib/utm";

export function SmeConsultationForm() {
  const router = useRouter();
  const errorSummaryRef = React.useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [businessType, setBusinessType] = React.useState("");
  const [annualRevenue, setAnnualRevenue] = React.useState("");
  const [currentNeed, setCurrentNeed] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [honeypot, setHoneypot] = React.useState("");

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const handleFocusFirstTime = () => {
    if (!started) {
      setStarted(true);
      trackEvent("form_start", { form_type: "sme_consultation" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = smeFormSchema.safeParse({
      fullName,
      whatsapp,
      email: email || undefined,
      businessName: businessName || undefined,
      businessType: businessType || undefined,
      annualRevenue: annualRevenue || undefined,
      currentNeed: currentNeed || undefined,
      message: message || undefined,
      consent,
      honeypot,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] || "form");
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
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
          formType: "sme_consultation",
          ...parsed.data,
          utm,
        }),
      });
      trackEvent("form_submit", {
        form_type: "sme_consultation",
        segment: "ukm",
        need: parsed.data.currentNeed,
      });

      const query = new URLSearchParams({
        nama: parsed.data.fullName,
        kebutuhan: parsed.data.currentNeed,
      });
      router.push(`/terima-kasih/konsultasi?${query.toString()}`);
    } finally {
      setSubmitting(false);
    }
  };

  const errorKeys = Object.keys(errors);

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFocusFirstTime}
      noValidate
      className="space-y-5 rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8"
    >
      <div>
        <h3 className="font-heading text-h4 font-semibold text-navy-900">
          Form singkat konsultasi UKM
        </h3>
        <p className="mt-1 text-body-sm text-ink-600">
          Isi data singkat di bawah ini, tim konsultan UKM kami akan langsung
          menghubungi Anda lewat WhatsApp.
        </p>
      </div>

      {/* Ringkasan error di atas form (§11.1) */}
      {errorKeys.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-danger-border bg-danger-bg p-4 text-danger-fg"
        >
          <div className="flex items-center gap-2 font-heading text-body-sm font-semibold">
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Mohon periksa kembali {errorKeys.length} isian berikut:</span>
          </div>
          <ul className="mt-2 list-inside list-disc text-caption">
            {errorKeys.map((k) => (
              <li key={k}>{errors[k]}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot anti-spam tersembunyi (§6.2) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="sme-hp">Jangan diisi</label>
        <input
          id="sme-hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldWrapper
          id="sme-fullName"
          label="Nama lengkap"
          required
          error={errors.fullName}
        >
          <Input
            id="sme-fullName"
            name="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            hasError={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "sme-fullName-error" : undefined}
          />
        </FieldWrapper>

        <FieldWrapper
          id="sme-whatsapp"
          label="Nomor WhatsApp"
          required
          error={errors.whatsapp}
        >
          <PhoneInput
            id="sme-whatsapp"
            name="whatsapp"
            autoComplete="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            hasError={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "sme-whatsapp-error" : undefined}
          />
        </FieldWrapper>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldWrapper
          id="sme-email"
          label="Email"
          error={errors.email}
        >
          <Input
            id="sme-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nama@usaha.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={Boolean(errors.email)}
          />
        </FieldWrapper>

        <FieldWrapper
          id="sme-businessName"
          label="Nama usaha / PT / CV"
          error={errors.businessName}
        >
          <Input
            id="sme-businessName"
            name="businessName"
            autoComplete="organization"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </FieldWrapper>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldWrapper
          id="sme-businessType"
          label="Jenis usaha"
          required
          error={errors.businessType}
        >
          <Select
            id="sme-businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            hasError={Boolean(errors.businessType)}
          >
            <option value="">Pilih jenis usaha…</option>
            <option value="Perdagangan / Toko Online">
              Perdagangan / Toko Online
            </option>
            <option value="Jasa">Jasa</option>
            <option value="F&B / Kuliner">F&amp;B / Kuliner</option>
            <option value="Manufaktur Kecil">Manufaktur Kecil</option>
            <option value="Startup Teknologi">Startup Teknologi</option>
            <option value="Lainnya">Lainnya</option>
          </Select>
        </FieldWrapper>

        <FieldWrapper
          id="sme-annualRevenue"
          label="Kisaran omzet tahunan"
          required
          error={errors.annualRevenue}
        >
          <Select
            id="sme-annualRevenue"
            value={annualRevenue}
            onChange={(e) => setAnnualRevenue(e.target.value)}
            hasError={Boolean(errors.annualRevenue)}
          >
            <option value="">Pilih kisaran omzet…</option>
            <option value="< Rp 500 juta">&lt; Rp 500 juta</option>
            <option value="Rp 500 juta–4,8 miliar">
              Rp 500 juta–4,8 miliar
            </option>
            <option value="> Rp 4,8 miliar">&gt; Rp 4,8 miliar (Wajib PKP)</option>
            <option value="Belum tahu">Belum tahu</option>
          </Select>
        </FieldWrapper>
      </div>

      <FieldWrapper
        id="sme-currentNeed"
        label="Kebutuhan sekarang"
        required
        error={errors.currentNeed}
      >
        <Select
          id="sme-currentNeed"
          value={currentNeed}
          onChange={(e) => setCurrentNeed(e.target.value)}
          hasError={Boolean(errors.currentNeed)}
        >
          <option value="">Pilih masalah / kebutuhan utama…</option>
          <option value="Lapor SPT">Lapor SPT Bulanan / Tahunan</option>
          <option value="PPh 21 karyawan">PPh 21 karyawan</option>
          <option value="PPN & e-Faktur/Coretax">
            PPN &amp; e-Faktur / Coretax
          </option>
          <option value="Dapat SP2DK">Dapat surat SP2DK dari KPP</option>
          <option value="Restitusi">Restitusi pajak</option>
          <option value="Pendirian PT/NPWP/PKP">
            Pendirian PT / NPWP / Pengukuhan PKP
          </option>
          <option value="Lainnya">Lainnya</option>
        </Select>
      </FieldWrapper>

      <FieldWrapper
        id="sme-message"
        label="Cerita singkat"
        hint="Maksimal 1.000 karakter"
        error={errors.message}
      >
        <Textarea
          id="sme-message"
          maxLength={1000}
          placeholder="Ceritakan singkat kondisi pajak usaha Anda saat ini..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FieldWrapper>

      {/* Persetujuan Data UU PDP (§6.2) */}
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
            untuk keperluan konsultasi (UU No. 27/2022 tentang Pelindungan Data
            Pribadi).{" "}
            <span className="text-danger-fg" aria-hidden="true">
              *
            </span>
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1 text-caption font-medium text-danger-fg">
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
        Kirim &amp; Hubungi Saya via WhatsApp
      </Button>
    </form>
  );
}
