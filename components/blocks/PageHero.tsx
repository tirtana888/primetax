import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function PageHero({
  locale,
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
  aside,
  className,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border bg-white", className)}>
      <div className="container-content pt-10 pb-16 md:pt-12 md:pb-24">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} locale={locale} />}
        <div className={cn("grid gap-12", aside && "lg:grid-cols-12 lg:items-end")}>
          <div className={cn("max-w-3xl", breadcrumbs && "mt-12 md:mt-16", aside && "lg:col-span-7")}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className={cn("text-h1", eyebrow && "mt-5")}>{title}</h1>
            {intro && <p className="mt-6 text-lead text-graphite">{intro}</p>}
            {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
