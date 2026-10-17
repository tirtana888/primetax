"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InsightGrid, formatIndonesianDate } from "@/components/blocks/InsightGrid";
import { NewsletterSection } from "@/components/blocks/NewsletterSection";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/FormFields";
import { insightArticles } from "@/content/insights";
import { getTeamMemberBySlug } from "@/content/team";
import { cn } from "@/lib/utils";

export default function InsightIndexPage() {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("ALL");

  const featuredArticle =
    insightArticles.find((a) => a.featured) || insightArticles[0];
  const featuredAuthor = getTeamMemberBySlug(featuredArticle.authorSlug);

  const filtered = insightArticles.filter((art) => {
    const matchCat =
      activeCategory === "ALL" || art.category === activeCategory;
    const q = query.trim().toLowerCase();
    const matchQuery =
      !q ||
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Insight Pajak" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Pusat Pengetahuan &amp; Regulasi
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Insight pajak
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Ulasan regulasi terbaru (PMK/PER/SE), panduan praktis Coretax dan
              SP2DK, serta buletin pajak bulanan yang disusun oleh tim konsultan
              kami.
            </p>
          </div>

          {/* Artikel Unggulan (Kartu Besar, §8.10) */}
          <article className="mt-10 rounded-xl border-2 border-navy-200 bg-navy-50/50 p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="brand">Artikel Unggulan</Badge>
              <Badge variant="neutral">{featuredArticle.category}</Badge>
              <span className="text-caption text-ink-600 tabular">
                {featuredArticle.readingTimeMinutes} menit baca · Terbit{" "}
                {formatIndonesianDate(featuredArticle.publishedAt)}
              </span>
            </div>

            <h2 className="mt-3 font-heading text-h2 font-bold text-navy-900">
              <Link
                href={`/insight/${featuredArticle.slug}`}
                className="text-navy-900 no-underline hover:text-emerald-700"
              >
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="mt-3 max-w-3xl text-lead text-ink-700">
              {featuredArticle.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-navy-200 pt-4 text-body-sm">
              <span className="text-ink-700">
                Ditulis oleh{" "}
                <strong className="font-semibold text-navy-900">
                  {featuredAuthor ? featuredAuthor.name : "Tim Riset"}
                </strong>
              </span>
              <Link
                href={`/insight/${featuredArticle.slug}`}
                className="font-heading text-btn-sm font-semibold text-emerald-700 no-underline hover:underline"
              >
                Baca artikel lengkap →
              </Link>
            </div>
          </article>

          {/* Tab Kategori + Pencarian (§8.10) */}
          <div className="mt-10 flex flex-col justify-between gap-4 border-b border-ink-200 pb-4 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-4">
              {[
                { id: "ALL", label: "Semua Artikel" },
                { id: "Update Regulasi", label: "Update Regulasi" },
                { id: "Panduan Praktis", label: "Panduan Praktis" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    "cursor-pointer rounded-md px-3.5 py-2 font-heading text-btn-sm font-semibold transition-colors",
                    activeCategory === tab.id
                      ? "bg-navy-900 text-white"
                      : "text-ink-700 hover:bg-navy-50"
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <Link
                href="/insight/buletin"
                className="rounded-md px-3.5 py-2 font-heading text-btn-sm font-semibold text-emerald-700 no-underline hover:bg-emerald-50"
              >
                Arsip Buletin Bulanan →
              </Link>
            </div>

            <div className="relative w-full max-w-xs">
              <label htmlFor="insight-search" className="sr-only">
                Cari artikel pajak
              </label>
              <Search
                className="pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-ink-400"
                aria-hidden="true"
              />
              <Input
                id="insight-search"
                type="search"
                placeholder="Cari SP2DK, Coretax, TP Doc…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="mt-8">
            <InsightGrid articles={filtered} />
          </div>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-site">
          <NewsletterSection />
        </div>
      </section>
    </>
  );
}
