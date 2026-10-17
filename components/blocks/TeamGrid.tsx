import Link from "next/link";
import { PhotoPlaceholder } from "@/components/blocks/PhotoPlaceholder";
import { CertificationBadge } from "@/components/ui/Badge";
import { showPlaceholders } from "@/lib/content";
import type { TeamMember } from "@/content/team";

/** Avatar inisial — dipakai di produksi selama foto resmi tim belum tersedia. */
function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/[\[\]]/g, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-navy-900 font-serif text-[2.5rem] text-white"
    >
      {initials}
    </div>
  );
}

/**
 * Grid tim. Mobile: kartu horizontal ringkas (foto kecil di kiri) agar 4 anggota
 * tidak memakan ribuan piksel scroll. Tablet ke atas: kartu vertikal.
 */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {members.map((member) => (
        <article
          key={member.slug}
          className="group relative flex gap-4 rounded-xl border border-ink-200 bg-white p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md sm:flex-col sm:gap-0 sm:p-5"
        >
          <div className="w-24 shrink-0 sm:mb-4 sm:w-full">
            {showPlaceholders ? (
              <PhotoPlaceholder label={member.photoPlaceholder} ratio="4:5" />
            ) : (
              <InitialsAvatar name={member.name} />
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="font-heading text-h5 font-semibold text-navy-900">
              <Link
                href={`/tim/${member.slug}`}
                className="text-navy-900 no-underline after:absolute after:inset-0 hover:text-emerald-700"
              >
                {member.name}
              </Link>
            </h3>
            <p className="mt-1 text-body-sm text-ink-600">{member.role}</p>
            <p className="mt-2 hidden text-caption text-ink-600 sm:block">
              {member.backgroundSummary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {member.certifications.slice(0, 3).map((cert) => (
                <CertificationBadge key={cert} code={cert} />
              ))}
            </div>
            <div className="mt-auto hidden pt-4 text-caption font-semibold text-emerald-700 sm:block">
              Lihat profil &amp; kredensial →
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
