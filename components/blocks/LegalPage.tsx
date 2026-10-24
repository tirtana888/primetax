import { PageHero } from "@/components/blocks/PageHero";
import { formatDate, t, type Locale } from "@/lib/i18n";

export function LegalPage({
  locale,
  title,
  path,
  updated,
  intro,
  children,
}: {
  locale: Locale;
  title: string;
  path: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero locale={locale} breadcrumbs={[{ label: title, href: path }]} title={title} intro={intro} />
      <div className="container-content py-16 md:py-20">
        <p className="text-small text-graphite">
          {t(locale).legal.lastUpdated}: {formatDate(updated, locale)}
        </p>
        <div className="prose-primetax mt-10 max-w-[44rem]">{children}</div>
      </div>
    </>
  );
}
