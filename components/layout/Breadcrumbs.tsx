import Link from "next/link";
import { JsonLd } from "@/components/layout/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-small text-graphite">
      <JsonLd data={breadcrumbSchema(trail)} />
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
