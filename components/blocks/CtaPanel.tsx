import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/config/site";

export function CtaPanel({
  title = "Let's Discuss Your Tax Priorities.",
  text = "Start with a focused discussion of your business context, tax concerns, and advisory needs.",
  ctaLabel = site.primaryCta.label,
  href = site.primaryCta.href,
  track = "cta_panel",
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  href?: string;
  track?: string;
}) {
  return (
    <section className="bg-charcoal text-white">
      <div className="container-content grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
        <div className="md:col-span-8">
          <span className="block h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="mt-8 text-h2 text-white">{title}</h2>
          <p className="mt-5 max-w-xl text-lead text-white/70">{text}</p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <ButtonLink href={href} variant="inverse" arrow track={track}>
            {ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
