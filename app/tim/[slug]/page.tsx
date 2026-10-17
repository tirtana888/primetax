import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PhotoPlaceholder } from "@/components/blocks/PhotoPlaceholder";
import { Badge, CertificationBadge } from "@/components/ui/Badge";
import { InsightGrid } from "@/components/blocks/InsightGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import {
  teamMembers,
  getTeamMemberBySlug,
  CERTIFICATION_LABELS,
} from "@/content/team";
import { insightArticles } from "@/content/insights";
import { buildPersonSchema } from "@/lib/schema";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role}`,
    description: member.backgroundSummary,
    alternates: {
      canonical: `/tim/${member.slug}`,
    },
  };
}

export default async function TeamMemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const authoredArticles = insightArticles.filter(
    (a) => a.authorSlug === member.slug
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildPersonSchema({
              name: member.name,
              role: member.role,
              slug: member.slug,
              certifications: member.certifications.map(
                (c) => CERTIFICATION_LABELS[c] || c
              ),
            })
          ),
        }}
      />

      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tim Kami", href: "/tim" },
              { label: member.name },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <PhotoPlaceholder label={member.photoPlaceholder} ratio="4:5" />
            </div>

            <div className="lg:col-span-8">
              <Badge variant="neutral">{member.level}</Badge>
              <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
                {member.name}
              </h1>
              <p className="mt-1 font-heading text-h4 font-medium text-emerald-700">
                {member.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {member.certifications.map((cert) => (
                  <CertificationBadge key={cert} code={cert} />
                ))}
              </div>

              <div className="mt-6 max-w-2xl space-y-4 text-body text-ink-900">
                <p>{member.bio}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-ink-200 pt-6 sm:grid-cols-2">
                <div>
                  <h2 className="font-heading text-h5 font-semibold text-navy-900">
                    Bidang Keahlian
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.expertise.map((exp) => (
                      <Badge key={exp} variant="brand" size="sm">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-h5 font-semibold text-navy-900">
                    Pendidikan &amp; Lisensi
                  </h2>
                  <ul className="mt-3 list-inside list-disc space-y-1.5 text-body-sm text-ink-700">
                    {member.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-btn-sm font-semibold text-emerald-700 underline"
                >
                  Profil LinkedIn ({member.linkedinUrl}) →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {authoredArticles.length > 0 && (
        <section className="section bg-ink-100">
          <div className="container-site">
            <h2 className="mb-8 font-heading text-h2 font-bold text-navy-900">
              Artikel yang ditulis oleh {member.name}
            </h2>
            <InsightGrid articles={authoredArticles} />
          </div>
        </section>
      )}

      <CtaBand mode="dual" />
    </>
  );
}
