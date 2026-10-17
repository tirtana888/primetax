import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { NewsletterSection } from "@/components/blocks/NewsletterSection";
import { insightArticles } from "@/content/insights";

const CATEGORY_MAP: Record<
  string,
  { title: "Update Regulasi" | "Panduan Praktis"; desc: string }
> = {
  "update-regulasi": {
    title: "Update Regulasi",
    desc: "Kajian PMK, PER, dan Surat Edaran terbaru beserta dampaknya bagi wajib pajak badan dan orang pribadi.",
  },
  "panduan-praktis": {
    title: "Panduan Praktis",
    desc: "Langkah demi langkah teknis mengenai Coretax, tanggapan SP2DK, perhitungan PPh 21 TER, dan pengukuhan PKP.",
  },
};

export function generateStaticParams() {
  return [{ kategori: "update-regulasi" }, { kategori: "panduan-praktis" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];
  if (!cat) return {};
  return {
    title: `${cat.title} — Insight Pajak`,
    description: cat.desc,
  };
}

export default async function InsightCategoryPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];
  if (!cat) notFound();

  const articles = insightArticles.filter((a) => a.category === cat.title);

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Insight", href: "/insight" },
              { label: cat.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Kategori Insight
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              {cat.title}
            </h1>
            <p className="mt-4 text-lead text-ink-600">{cat.desc}</p>
          </div>

          <div className="mt-10">
            <InsightGrid articles={articles} />
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
