"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const areas = [...services.map((s) => s.title), "Other / not sure yet"];
const contactMethods = ["Email", "Phone call", "Video meeting"];

// Free-mail domains are allowed but flagged, since the brief asks for a business email.
const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|live|icloud|aol)\./i;

type Status = "idle" | "submitting" | "sent" | "mailto" | "error";
type Errors = Partial<Record<"name" | "email" | "company" | "jobTitle" | "area" | "message" | "consent", string>>;

export function ConsultationForm({ defaultArea, source = "consultation" }: { defaultArea?: string; source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [area, setArea] = useState(defaultArea ?? "");
  const [method, setMethod] = useState(contactMethods[0]);
  const started = useRef(false);

  // Pre-select the area from ?topic=<service-slug> (used by service-page CTAs).
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    const match = services.find((s) => s.slug === topic);
    if (match) setArea(match.title);
  }, []);

  const onFirstInput = () => {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", { form: source });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (data.website) return; // honeypot

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid business email.";
    if (!data.company?.trim()) next.company = "Please enter your company name.";
    if (!data.jobTitle?.trim()) next.jobTitle = "Please enter your job title.";
    if (!data.area) next.area = "Please select an area of interest.";
    if ((data.message ?? "").trim().length < 20) next.message = "Please describe the matter in a few sentences.";
    if (!data.consent) next.consent = "Please confirm you have read the Privacy Policy.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      trackEvent("form_error", { form: source, fields: Object.keys(next).join(",") });
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      company: data.company,
      jobTitle: data.jobTitle,
      areaOfInterest: data.area,
      preferredContact: data.method,
      phone: data.phone || undefined,
      message: data.message,
      source,
      page: window.location.pathname,
      submittedAt: new Date().toISOString(),
    };

    if (!site.leadEndpoint) {
      // No endpoint configured yet: hand the enquiry to the visitor's email client.
      const body = Object.entries(payload)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `Consultation request — ${data.company}`
      )}&body=${encodeURIComponent(body)}`;
      trackEvent("form_submit", { form: source, area: data.area, delivery: "mailto" });
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent("form_submit", { form: source, area: data.area, delivery: "endpoint" });
      setStatus("sent");
    } catch {
      trackEvent("form_error", { form: source, fields: "network" });
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className="rounded-card border border-border bg-white p-8 md:p-10" role="status">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold">
          <Check className="h-5 w-5 text-charcoal" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-h3">{status === "sent" ? "Thank you. Your request has been received." : "Your email is ready to send."}</h3>
        <p className="mt-3 text-graphite">
          {status === "sent"
            ? "A member of our team will review your enquiry and contact you using your preferred method to arrange an initial discussion."
            : `Your email application should have opened with your enquiry pre-filled. Please send it to ${site.contact.email}. If nothing opened, you can email us directly.`}
        </p>
        <Link href="/insights" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
          Read our latest insights <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onInput={onFirstInput}
      className="rounded-card border border-border bg-white p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" error={errors.name} />
        <Field label="Business email" name="email" type="email" autoComplete="email" error={errors.email} hintFn={(v) => (FREE_MAIL.test(v) ? "A company email helps us respond faster." : undefined)} />
        <Field label="Company" name="company" autoComplete="organization" error={errors.company} />
        <Field label="Job title" name="jobTitle" autoComplete="organization-title" error={errors.jobTitle} />

        <div className="md:col-span-2">
          <Label htmlFor="area">Area of interest</Label>
          <select
            id="area"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            aria-invalid={!!errors.area}
            aria-describedby={errors.area ? "area-error" : undefined}
            className={inputClass(!!errors.area)}
          >
            <option value="" disabled>
              Select an area
            </option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <FieldError id="area-error" message={errors.area} />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message">Brief description of the issue</Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby="message-note"
            className={cn(inputClass(!!errors.message), "h-auto py-3")}
          />
          <FieldError id="message-error" message={errors.message} />
          <p id="message-note" className="mt-2 flex gap-2 text-xs text-graphite">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            Please do not include tax returns, taxpayer identification numbers, financial statements, or other
            confidential documents. We will arrange a secure channel once an engagement is agreed.
          </p>
        </div>

        <fieldset className="md:col-span-2">
          <legend className="mb-3 text-sm font-medium">Preferred contact method</legend>
          <div className="flex flex-wrap gap-3">
            {contactMethods.map((m) => (
              <label
                key={m}
                className={cn(
                  "inline-flex h-10 cursor-pointer items-center rounded-button border px-4 text-sm transition-colors",
                  method === m ? "border-charcoal bg-charcoal text-white" : "border-border hover:border-charcoal"
                )}
              >
                <input
                  type="radio"
                  name="method"
                  value={m}
                  checked={method === m}
                  onChange={() => setMethod(m)}
                  className="sr-only"
                />
                {m}
              </label>
            ))}
          </div>
        </fieldset>

        {method === "Phone call" && (
          <div className="md:col-span-2">
            <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
          </div>
        )}

        {/* Honeypot: hidden from people, often filled by bots. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="flex gap-3 text-sm text-graphite">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 accent-charcoal" />
            <span>
              I agree that PrimeTax may use these details to respond to my enquiry, as described in the{" "}
              <Link href="/privacy-policy" className="underline decoration-gold underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          <FieldError id="consent-error" message={errors.consent} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-error" role="alert">
          Something went wrong while sending your request. Please try again or email{" "}
          <a href={`mailto:${site.contact.email}`} className="underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-button bg-charcoal px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-charcoal-soft disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Request"}
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "block h-12 w-full rounded-button border bg-white px-4 text-[0.9375rem] text-charcoal transition-colors focus:border-charcoal focus:outline-none",
    invalid ? "border-error" : "border-border"
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
      {children}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-error">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  hintFn,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  hintFn?: (value: string) => string | undefined;
}) {
  const [hint, setHint] = useState<string>();
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        onBlur={hintFn ? (e) => setHint(hintFn(e.target.value)) : undefined}
        className={inputClass(!!error)}
      />
      <FieldError id={`${name}-error`} message={error} />
      {!error && hint && <p className="mt-2 text-xs text-graphite">{hint}</p>}
    </div>
  );
}
