"use client";

import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/components/ui/Link";
import { t } from "@/lib/i18n";

export default function NotFound() {
  const d = t(useLocale());
  return (
    <section className="container-content flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 text-h1">{d.notFound.title}</h1>
      <p className="mt-5 max-w-xl text-lead text-graphite">{d.notFound.text}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/" arrow>
          {d.cta.returnHome}
        </ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          {d.cta.viewServices}
        </ButtonLink>
      </div>
    </section>
  );
}
