import { ArrowRight } from "lucide-react";
import { ServiceGlyph } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import type { Industry } from "@/content/industries";
import type { Insight } from "@/content/insights";
import { getService, type ServiceCategory } from "@/content/services";
import { formatDate, t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  locale,
  className,
}: {
  service: ServiceCategory;
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-card border border-border bg-white p-8 transition-colors duration-200 hover:border-charcoal",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <ServiceGlyph icon={service.icon} />
        <span className="text-small tabular-nums text-graphite">{service.number}</span>
      </div>
      <h3 className="mt-10 text-h3">{service.title}</h3>
      <p className="mt-3 flex-1 text-graphite">{service.cardSummary}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
        {t(locale).common.explore} {service.title}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function IndustryCard({ industry, index, locale }: { industry: Industry; index: number; locale: Locale }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-white p-8">
      <span className="text-small tabular-nums text-graphite">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-6 text-h3">{industry.name}</h3>
      <p className="mt-3 text-graphite">{industry.summary}</p>
      <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-small">
        {industry.issues.map((issue) => (
          <li key={issue} className="flex gap-3">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
            {issue}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-8 text-small">
        {industry.services.map((slug) => {
          const service = getService(slug, locale);
          return service ? (
            <Link key={slug} href={`/services/${slug}`} className="link-underline font-medium">
              {service.title}
            </Link>
          ) : null;
        })}
      </div>
    </article>
  );
}

export function InsightCard({ insight, locale, className }: { insight: Insight; locale: Locale; className?: string }) {
  return (
    <article className={cn("group relative flex h-full flex-col border-t border-charcoal pt-6", className)}>
      <p className="text-label font-medium uppercase text-graphite">
        {t(locale).insight.types[insight.type] ?? insight.type} <span className="mx-1.5 text-gold">·</span>{" "}
        {insight.topic}
      </p>
      <h3 className="mt-4 text-[1.25rem] font-semibold leading-snug">
        <Link
          href={`/insights/${insight.slug}`}
          className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4"
        >
          {insight.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-small text-graphite">{insight.excerpt}</p>
      <p className="mt-6 text-small text-graphite">
        <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time>
        <span className="mx-2" aria-hidden="true">
          ·
        </span>
        {insight.author}
      </p>
    </article>
  );
}
