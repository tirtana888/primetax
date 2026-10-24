import { PageHero } from "@/components/blocks/PageHero";
import { formatDate } from "@/lib/utils";

export function LegalPage({
  title,
  path,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero breadcrumbs={[{ label: title, href: path }]} title={title} intro={intro} />
      <div className="container-content py-16 md:py-20">
        <p className="text-small text-graphite">Last updated: {formatDate(updated)}</p>
        <div className="prose-primetax mt-10 max-w-[44rem]">{children}</div>
      </div>
    </>
  );
}
