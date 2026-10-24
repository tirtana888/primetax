import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { team } from "@/content/team";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaDescription: "The PrimeTax advisory team: corporate tax, international tax, transfer pricing, and tax controversy.",
    title: "The People Behind the Analysis",
    intro: "Our advisors combine technical tax knowledge with an understanding of how finance leaders make decisions.",
    emptyTitle: "Team profiles will be published shortly.",
    emptyText:
      "We publish profiles only after each advisor’s background and credentials have been verified. In the meantime, we are glad to introduce the advisor relevant to your matter during an initial discussion.",
  },
  id: {
    metaDescription: "Tim advisory PrimeTax: pajak korporasi, pajak internasional, transfer pricing, dan sengketa pajak.",
    title: "Orang-Orang di Balik Analisis Kami",
    intro: "Para advisor kami memadukan pengetahuan teknis perpajakan dengan pemahaman tentang cara pimpinan keuangan mengambil keputusan.",
    emptyTitle: "Profil tim akan segera dipublikasikan.",
    emptyText:
      "Kami hanya mempublikasikan profil setelah latar belakang dan kredensial setiap advisor terverifikasi. Sementara itu, kami dengan senang hati memperkenalkan advisor yang relevan dengan persoalan Anda dalam diskusi awal.",
  },
};

export function teamMetadata(locale: Locale) {
  return pageMetadata({ title: t(locale).nav.team, description: copy[locale].metaDescription, path: "/team", locale });
}

export function TeamView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const label = t(locale).nav.team;

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label, href: "/team" }]}
        eyebrow={label}
        title={c.title}
        intro={c.intro}
      />

      <Section tone="warm">
        {team.length > 0 ? (
          <div data-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="flex flex-col rounded-card border border-border bg-white">
                {m.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="aspect-[4/5] w-full rounded-t-card object-cover grayscale"
                  />
                )}
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-h3">{m.name}</h2>
                  <p className="mt-1 text-small text-graphite">{m.role}</p>
                  <p className="mt-5 text-small">{m.bio}</p>
                  {m.credentials.length > 0 && (
                    <p className="mt-auto border-t border-border pt-5 text-xs text-graphite">
                      {m.credentials.join(" · ")}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-card border border-border bg-white p-10 text-center md:p-14">
            <span className="mx-auto block h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="mt-8 text-h3">{c.emptyTitle}</h2>
            <p className="mt-4 text-graphite">{c.emptyText}</p>
          </div>
        )}
      </Section>

      <CtaPanel locale={locale} track="team_final" />
    </>
  );
}
