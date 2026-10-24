"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Lock } from "lucide-react";
import { Link, useLocale } from "@/components/ui/Link";
import { site } from "@/config/site";
import { getServices } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const contactMethods = ["email", "phone", "video"] as const;
type ContactMethod = (typeof contactMethods)[number];

// Free-mail domains are allowed but flagged, since the brief asks for a business email.
const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|live|icloud|aol)\./i;

type Status = "idle" | "submitting" | "sent" | "mailto" | "error";
type Errors = Partial<Record<"name" | "email" | "company" | "jobTitle" | "area" | "message" | "consent", string>>;

export function ConsultationForm({ defaultArea, source = "consultation" }: { defaultArea?: string; source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [area, setArea] = useState(defaultArea ?? "");
  const [method, setMethod] = useState<ContactMethod>("email");
  const locale = useLocale();
  const d = t(locale).form;
  const services = getServices(locale);
  const areas = [...services.map((s) => s.title), d.otherArea];
  const started = useRef(false);

  // Pre-select the area from ?topic=<service-slug> (used by service-page CTAs).
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    const match = services.find((s) => s.slug === topic);
    if (match) setArea(match.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!data.name?.trim()) next.name = d.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = d.errors.email;
    if (!data.company?.trim()) next.company = d.errors.company;
    if (!data.jobTitle?.trim()) next.jobTitle = d.errors.jobTitle;
    if (!data.area) next.area = d.errors.area;
    if ((data.message ?? "").trim().length < 20) next.message = d.errors.message;
    if (!data.consent) next.consent = d.errors.consent;
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
      language: locale,
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
        `${d.mailSubject} — ${data.company}`
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
        <h3 className="mt-6 text-h3">{status === "sent" ? d.sentTitle : d.mailtoTitle}</h3>
        <p className="mt-3 text-graphite">
          {status === "sent" ? d.sentText : d.mailtoText(site.contact.email)}
        </p>
        <Link href="/insights" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
          {t(locale).cta.readInsights} <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
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
        <Field label={d.name} name="name" autoComplete="name" error={errors.name} />
        <Field
          label={d.email}
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
          hintFn={(v) => (FREE_MAIL.test(v) ? d.freeMail : undefined)}
        />
        <Field label={d.company} name="company" autoComplete="organization" error={errors.company} />
        <Field label={d.jobTitle} name="jobTitle" autoComplete="organization-title" error={errors.jobTitle} />

        <div className="md:col-span-2">
          <Label htmlFor="area">{d.area}</Label>
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
              {d.selectArea}
            </option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <FieldError id="area-error" message={errors.area} />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message">{d.message}</Label>
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
            {d.messageNote}
          </p>
        </div>

        <fieldset className="md:col-span-2">
          <legend className="mb-3 text-sm font-medium">{d.method}</legend>
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
                {d.methods[m]}
              </label>
            ))}
          </div>
        </fieldset>

        {method === "phone" && (
          <div className="md:col-span-2">
            <Field label={d.phone} name="phone" type="tel" autoComplete="tel" />
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
              {d.consentA}{" "}
              <Link href="/privacy-policy" className="underline decoration-gold underline-offset-2">
                {d.consentLink}
              </Link>
              .
            </span>
          </label>
          <FieldError id="consent-error" message={errors.consent} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-error" role="alert">
          {d.errors.network}{" "}
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
        {status === "submitting" ? d.sending : d.submit}
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
