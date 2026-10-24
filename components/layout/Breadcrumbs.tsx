import { JsonLd } from "@/components/layout/JsonLd";
import { Link } from "@/components/ui/Link";
import { localizePath, t, type Locale } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";

/** `items` use locale-neutral hrefs; links and schema URLs are localised. */
export function Breadcrumbs({ items, locale }: { items: { label: string; href: string }[]; locale: Locale }) {
  const d = t(locale);
  const trail = [{ label: d.nav.home, href: "/" }, ...items];
  return (
    <nav aria-label={d.common.breadcrumb} className="text-small text-graphite">
      <JsonLd data={breadcrumbSchema(trail.map((i) => ({ ...i, href: localizePath(i.href, locale) })))} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item, i) =>
          i === trail.length - 1 ? (
            <li key={item.href} aria-current="page" className="text-charcoal">
              {item.label}
            </li>
          ) : (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="hover:text-charcoal">
                {item.label}
              </Link>
              <span aria-hidden="true" className="text-graphite/50">
                /
              </span>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
