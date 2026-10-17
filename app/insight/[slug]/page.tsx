import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, CheckCircle2, Info } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge, CertificationBadge } from "@/components/ui/Badge";
import { Button, WaButton } from "@/components/ui/Button";
import { InsightGrid, formatIndonesianDate } from "@/components/blocks/InsightGrid";
import {
  insightArticles,
  getInsightBySlug,
} from "@/content/insights";
import { getTeamMemberBySlug } from "@/content/team";
import { buildArticleSchema } from "@/lib/schema";
import { buildWaLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const art = getInsightBySlug(slug);
  if (!art) return {};

  return {
    title: art.title,
    description: art.excerpt,
    alternates: {
      canonical: `/insight/${art.slug}`,
    },
  };
}

/**
 * Detail Artikel Insight /insight/[slug] sesuai spesifikasi §8.10:
 * 1. Breadcrumb · badge kategori · H1 · lead/ringkasan
 * 2. Meta: penulis (nama + jabatan, link ke profil), tanggal terbit, tanggal diperbarui, waktu baca
 * 3. Kotak "Ringkasan cepat" (3–5 bullet) di atas
 * 4. Kotak "Dasar regulasi" (callout info): daftar PMK/PER/SE yang dibahas
 * 5. Daftar isi otomatis (sticky di desktop >= 1280px, kolom kanan)
 * 6. Isi (container-prose 720px), heading h2/h3
 * 7. CTA kontekstual di tengah & akhir artikel: soft CTA "Diskusikan kasus Anda dengan advisor senior" (korporasi) / WhatsApp (UKM)
 * 8. Kotak penulis · tombol bagikan (LinkedIn, WhatsApp, salin tautan) · 3 artikel terkait
 * 9. Disclaimer kecil wajib.
 */
export default async function InsightArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const author = getTeamMemberBySlug(article.authorSlug);
  const related = insightArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const isCorporateArticle = article.segment === "korporasi";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: article.title,
              description: article.excerpt,
              slug: article.slug,
              publishedAt: article.publishedAt,
              updatedAt: article.updatedAt,
              authorName: author ? author.name : "Tim Riset",
              authorSlug: article.authorSlug,
            })
          ),
        }}
      />

      <article className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Insight", href: "/insight" },
              { label: article.title },
            ]}
          />

          {/* 1 & 2. Header Artikel & Meta Penulis + Tanggal */}
          <header className="mt-6 max-w-3xl border-b border-ink-200 pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge
                variant={
                  article.category === "Update Regulasi" ? "info" : "brand"
                }
              >
                {article.category}
              </Badge>
              <span className="text-caption font-medium text-ink-600 tabular">
                {article.readingTimeMinutes} menit baca
              </span>
            </div>

            <h1 className="font-heading text-h1 font-bold text-navy-900">
              {article.title}
            </h1>
            <p className="mt-4 text-lead text-ink-700">{article.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-ink-600">
              {author && (
                <div>
                  <span>Penulis: </span>
                  <Link
                    href={`/tim/${author.slug}`}
                    className="font-semibold text-navy-900 underline hover:text-emerald-700"
                  >
                    {author.name}
                  </Link>{" "}
                  <span>({author.role})</span>
                </div>
              )}
              <div className="tabular">
                <span>Terbit: </span>
                <time dateTime={article.publishedAt} className="font-medium text-ink-900">
                  {formatIndonesianDate(article.publishedAt)}
                </time>
              </div>
              <div className="tabular">
                <span>Diperbarui: </span>
                <time dateTime={article.updatedAt} className="font-medium text-ink-900">
                  {formatIndonesianDate(article.updatedAt)}
                </time>
              </div>
            </div>
          </header>

          {/* Grid Konten + Daftar Isi Sticky di Desktop (§8.10 #5) */}
          <div className="mt-10 grid grid-cols-1 gap-12 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <div className="max-w-180 space-y-8">
                {/* 3. Kotak "Ringkasan cepat" (§8.10 #3) */}
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6">
                  <h2 className="font-heading text-h5 font-semibold text-navy-900">
                    Ringkasan cepat
                  </h2>
                  <ul className="mt-3 space-y-2.5 text-body-sm text-ink-900">
                    {article.quickSummary.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                          aria-hidden="true"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Kotak "Dasar regulasi" (§8.10 #4) */}
                <div className="rounded-xl border border-info-border bg-info-bg p-5 text-info-fg">
                  <div className="flex items-center gap-2 font-heading text-body-sm font-semibold">
                    <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>Dasar regulasi yang dibahas:</span>
                  </div>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-body-sm">
                    {article.regulationBasis.map((reg, i) => (
                      <li key={i}>{reg}</li>
                    ))}
                  </ul>
                </div>

                {/* 6. Isi Artikel (Prosa) + 7. Soft CTA Kontekstual di Tengah */}
                <div className="space-y-8">
                  {article.sections.map((sec, idx) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-24">
                      <h2 className="font-heading text-h3 font-bold text-navy-900">
                        {sec.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-body text-ink-900">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                      {sec.bullets && (
                        <ul className="mt-4 list-inside list-disc space-y-2 text-body text-ink-900">
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {/* Soft CTA di tengah artikel setelah section pertama (§8.10 #7) */}
                      {idx === 0 && (
                        <div className="mt-8 rounded-lg border border-navy-200 bg-navy-50 p-5 md:flex md:items-center md:justify-between md:gap-6">
                          <div>
                            <p className="font-heading text-h5 font-semibold text-navy-900">
                              {isCorporateArticle
                                ? "Diskusikan kasus Anda dengan advisor senior"
                                : "Butuh bantuan menerapkan aturan ini di usaha Anda?"}
                            </p>
                            <p className="mt-1 text-body-sm text-ink-600">
                              {isCorporateArticle
                                ? "Jadwalkan diskusi rahasia (dengan NDA) bersama Partner kami."
                                : "Tanyakan langsung ke konsultan UKM kami lewat WhatsApp."}
                            </p>
                          </div>
                          <div className="mt-4 shrink-0 md:mt-0">
                            {isCorporateArticle ? (
                              <Button
                                variant="secondary"
                                size="md"
                                href="/minta-proposal"
                              >
                                Diskusikan dengan Advisor Senior
                              </Button>
                            ) : (
                              <WaButton
                                waContext={{
                                  type: "article",
                                  articleTitle: article.title,
                                }}
                                ctaLocation="article"
                                size="md"
                              >
                                Tanya via WhatsApp
                              </WaButton>
                            )}
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* 9. Disclaimer Wajib (§8.10 #9) */}
                <div className="flex items-start gap-3 rounded-lg border border-ink-300 bg-ink-100 p-4 text-caption text-ink-600">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink-500"
                    aria-hidden="true"
                  />
                  <p className="m-0">
                    <strong>Disclaimer:</strong> Artikel ini bersifat informasi
                    umum dan bukan nasihat pajak untuk kasus spesifik. Ketentuan
                    perpajakan dapat berubah sesuai peraturan pelaksanaan
                    terbaru.
                  </p>
                </div>

                {/* 8. Kotak Penulis & Bagikan (§8.10 #8) */}
                {author && (
                  <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-xs">
                    <p className="font-heading text-eyebrow uppercase text-emerald-700">
                      Tentang Penulis
                    </p>
                    <h3 className="mt-1 font-heading text-h4 font-semibold text-navy-900">
                      <Link
                        href={`/tim/${author.slug}`}
                        className="text-navy-900 no-underline hover:text-emerald-700"
                      >
                        {author.name}
                      </Link>
                    </h3>
                    <p className="text-body-sm font-medium text-ink-600">
                      {author.role}
                    </p>
                    <p className="mt-2 text-body-sm text-ink-700">
                      {author.backgroundSummary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {author.certifications.map((c) => (
                        <CertificationBadge key={c} code={c} />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-200 pt-6">
                  <span className="font-heading text-body-sm font-semibold text-navy-900">
                    Bagikan artikel ini:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={buildWaLink({
                        type: "custom",
                        message: `Artikel pajak menarik: "${article.title}"`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-ink-300 px-3.5 py-2 text-caption font-semibold text-navy-900 no-underline hover:bg-navy-50"
                    >
                      Bagikan ke WhatsApp
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        `https://[DOMAIN]/insight/${article.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-ink-300 px-3.5 py-2 text-caption font-semibold text-navy-900 no-underline hover:bg-navy-50"
                    >
                      Bagikan ke LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Daftar Isi Otomatis Sticky di Desktop (§8.10 #5) */}
            <aside className="xl:col-span-4">
              <div className="sticky top-24 space-y-6">
                <nav
                  aria-label="Daftar isi artikel"
                  className="rounded-xl border border-ink-300 bg-ink-100/60 p-6"
                >
                  <p className="font-heading text-eyebrow uppercase text-navy-900">
                    Daftar Isi
                  </p>
                  <ol className="mt-3 space-y-2.5 text-body-sm">
                    {article.sections.map((sec) => (
                      <li key={sec.id}>
                        <a
                          href={`#${sec.id}`}
                          className="text-ink-700 no-underline hover:text-emerald-700 hover:underline"
                        >
                          {sec.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                {/* CTA Akhir di Sidebar */}
                <div className="rounded-xl bg-navy-900 p-6 text-white">
                  <h3 className="font-heading text-h5 font-semibold text-white">
                    {isCorporateArticle
                      ? "Diskusikan kasus Anda dengan advisor senior"
                      : "Konsultasi pajak gratis 30 menit"}
                  </h3>
                  <p className="mt-2 text-body-sm text-navy-200">
                    {isCorporateArticle
                      ? "Dapatkan telaah awal atas posisi risiko perusahaan Anda bersama Partner kami."
                      : "Tanya jawab langsung lewat WhatsApp untuk kebutuhan SPT, PPN, atau SP2DK."}
                  </p>
                  <div className="mt-5">
                    {isCorporateArticle ? (
                      <Button
                        variant="primary"
                        size="md"
                        fullWidth
                        href="/minta-proposal"
                      >
                        Minta Proposal
                      </Button>
                    ) : (
                      <WaButton
                        waContext={{
                          type: "article",
                          articleTitle: article.title,
                        }}
                        ctaLocation="article"
                        size="md"
                        fullWidth
                      >
                        Chat via WhatsApp
                      </WaButton>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Artikel Terkait (§8.10 #8) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-h2 font-bold text-navy-900">
            Artikel terkait lainnya
          </h2>
          <InsightGrid articles={related} />
        </div>
      </section>
    </>
  );
}
