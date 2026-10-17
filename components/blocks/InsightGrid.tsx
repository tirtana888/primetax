import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { getTeamMemberBySlug } from "@/content/team";
import type { InsightArticle } from "@/content/insights";
import { cn } from "@/lib/utils";
import { isReady } from "@/lib/content";
import { railContainer, railItem } from "@/components/ui/rail";

export function formatIndonesianDate(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(d);
  } catch {
    return isoDate;
  }
}

export function InsightGrid({
  articles,
  mobileRail = false,
}: {
  articles: InsightArticle[];
  mobileRail?: boolean;
}) {
  return (
    <div
      className={cn(
        mobileRail ? railContainer : "grid grid-cols-1",
        "gap-6 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {articles.map((article) => {
        const author = getTeamMemberBySlug(article.authorSlug);
        return (
          <article
            key={article.slug}
            className={cn(
              mobileRail && railItem,
              "group relative flex flex-col justify-between rounded-xl border border-ink-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md"
            )}
          >
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    article.category === "Update Regulasi" ? "info" : "brand"
                  }
                  size="sm"
                >
                  {article.category}
                </Badge>
                <span className="text-caption text-ink-500 tabular">
                  {article.readingTimeMinutes} menit baca
                </span>
              </div>

              <h3 className="line-clamp-3 font-heading text-h4 font-semibold text-navy-900">
                <Link
                  href={`/insight/${article.slug}`}
                  className="text-navy-900 no-underline after:absolute after:inset-0 hover:text-emerald-700"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="mt-2 line-clamp-3 text-body-sm text-ink-600">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-ink-200 pt-4 text-caption text-ink-600">
              <span className="truncate">
                Oleh {author && isReady(author.name) ? author.name : "Tim Riset PrimeTax"}
              </span>
              <time
                dateTime={article.publishedAt}
                className="shrink-0 font-medium text-ink-700 tabular"
              >
                {formatIndonesianDate(article.publishedAt)}
              </time>
            </div>
          </article>
        );
      })}
    </div>
  );
}
