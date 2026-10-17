import type { Metadata } from "next";
import {
  Eye,
  SearchCheck,
  Clock,
  ShieldCheck,
  Award,
  MapPin,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { PhotoPlaceholder } from "@/components/blocks/PhotoPlaceholder";
import { CtaBand } from "@/components/blocks/CtaBand";
import { site } from "@/config/site";
import { teamMembers } from "@/content/team";
import awardsData from "@/content/awards.json";

export const metadata: Metadata = {
  title: `Tentang ${site.brandName} — Visi, Kredensial & Tata Kelola`,
  description: `Profil ${site.brandName}, nilai-nilai brand, kredensial konsultan pajak bersertifikat BKP & Kuasa Hukum Pengadilan Pajak, serta komitmen integritas.`,
  alternates: {
    canonical: "/tentang",
  },
};

export default function AboutPage() {
  const currentYear = 2026;
  const recentAwards = awardsData.filter((a) => a.year >= currentYear - 3);
  const partners = teamMembers.filter((m) => m.level === "Partner");

  const brandPillars = [
    {
      title: "Jelas",
      desc: "Tanpa jargon yang tidak perlu, harga dan proses kerja terbuka sejak hari pertama.",
      icon: Eye,
    },
    {
      title: "Teliti",
      desc: "Setiap angka dicek dua kali, setiap rekomendasi berdasar regulasi perpajakan yang berlaku.",
      icon: SearchCheck,
    },
    {
      title: "Tepat waktu",
      desc: "Tenggat pajak adalah janji, bukan sekadar target.",
      icon: Clock,
    },
    {
      title: "Berintegritas",
      desc: "Independen, menjaga kerahasiaan klien, dan tidak pernah menjanjikan hasil sengketa yang tidak bisa dijamin.",
      icon: ShieldCheck,
    },
  ];

  const governanceItems = [
    {
      title: "Independensi Profesional",
      desc: "Kami beroperasi secara independen dari Kantor Akuntan Publik (KAP) sehingga bebas dari benturan kepentingan audit laporan keuangan saat mendampingi klien.",
    },
    {
      title: "Kerahasiaan Klien & NDA",
      desc: "Seluruh dokumen keuangan, kontrak komersial, dan data perpajakan klien dijaga di bawah ikatan kerahasiaan profesi dan Non-Disclosure Agreement (NDA) tertulis.",
    },
    {
      title: "Kebijakan Anti-Suap & Gratifikasi",
      desc: "Kami menerapkan prinsip nol-toleransi terhadap segala bentuk suap, gratifikasi, atau praktik tidak etis. Seluruh pendampingan ditempuh murni melalui argumen hukum dan pembuktian dokumen resmi.",
    },
    {
      title: "Perlindungan Data Pribadi (UU PDP)",
      desc: "Pengelolaan data klien dan pemangku kepentingan mematuhi ketentuan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.",
    },
  ];

  return (
    <>
      {/* 1 & 2. Hero + Cerita Singkat & Visi-Misi (§8.13 #1 & #2) */}
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tentang Kami" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Profil Firma
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Tentang {site.brandName}
            </h1>
            <p className="mt-4 text-lead text-ink-700">
              Kami menggabungkan wibawa dan ketelitian firma konsultan pajak
              mapan dengan kejelasan layanan modern—melayani korporasi/PMA
              maupun UKM/startup di Indonesia melalui dua jalur layanan yang
              terfokus.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-ink-300 bg-navy-50/50 p-6 md:p-8">
              <p className="font-heading text-eyebrow uppercase text-navy-700">
                Visi Kami
              </p>
              <p className="mt-3 font-heading text-h4 font-semibold text-navy-900">
                {site.about.vision}
              </p>
              <p className="mt-2 text-body-sm text-ink-600">
                Menjadi mitra konsultan pajak paling tepercaya dan transparan
                bagi pelaku usaha di Indonesia—mulai dari rintisan UKM hingga
                grup multinasional.
              </p>
            </div>

            <div className="rounded-xl border border-ink-300 bg-emerald-50/50 p-6 md:p-8">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Misi Kami
              </p>
              <p className="mt-3 font-heading text-h4 font-semibold text-navy-900">
                {site.about.mission}
              </p>
              <p className="mt-2 text-body-sm text-ink-600">
                Menghadirkan kepatuhan pajak yang tepat waktu, mitigasi risiko
                berbasis bukti dan regulasi, serta komunikasi yang jernih tanpa
                jargon yang membingungkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Empat Pilar Brand (§1.4 & §8.13 #3) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Pilar &amp; Nilai Kerja
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Empat prinsip yang mendasari setiap pekerjaan kami
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-h4 font-semibold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-600">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Angka Kunci (§8.13 #4) — Section Navy 1 dari 2 */}
      <TrustStrip variant="general" currentYear={currentYear} />

      {/* 5 & 6. Pimpinan + Sertifikasi, Afiliasi & Penghargaan (§8.13 #5 & #6) */}
      <section className="section bg-white">
        <div className="container-site space-y-16">
          <div>
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Kepemimpinan
            </p>
            <h2 className="mt-2 mb-8 font-heading text-h2 font-bold text-navy-900">
              Partner pimpinan praktik
            </h2>
            <TeamGrid members={partners} />
          </div>

          {/* Kredensial Agregat & Penghargaan <= 3 Tahun (§9.2 & §9.3) */}
          <div className="rounded-xl border border-ink-300 bg-navy-50/50 p-6 md:p-8">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Kredensial Resmi
            </p>
            <h2 className="mt-2 font-heading text-h3 font-bold text-navy-900">
              Sertifikasi profesi &amp; izin praktik
            </h2>
            <p className="mt-2 text-body text-ink-700 tabular">
              [X] konsultan bersertifikat BKP (Tingkat A, B, dan C) · [X] Kuasa
              Hukum Pengadilan Pajak berizin resmi · Nomor Izin Praktik:{" "}
              <strong>{site.practiceLicenseNumber}</strong>.
            </p>

            {recentAwards.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {recentAwards.map((aw, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-ink-300 bg-white p-5 shadow-xs"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-h5 font-semibold text-navy-900">
                      {aw.title}
                    </h3>
                    <p className="mt-1 text-caption font-medium text-ink-600 tabular">
                      {aw.issuer} · {aw.year}
                    </p>
                    <p className="mt-1 text-caption text-ink-500">
                      {aw.category}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Integritas & Tata Kelola Ringkas (§8.13 #7) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Tata Kelola &amp; Etika Profesi
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Komitmen integritas, independensi &amp; pelindungan data
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {governanceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-h4 font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-ink-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Kantor (§8.13 #8) */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <PhotoPlaceholder
                label="[FOTO KANTOR]"
                ratio="16:9"
                caption={`Ruang rapat dan kantor operasional ${site.brandName} di ${site.contact.city}.`}
              />
            </div>

            <div className="lg:col-span-6">
              <p className="font-heading text-eyebrow uppercase text-emerald-700">
                Lokasi Kantor
              </p>
              <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
                Kunjungi kantor kami di {site.contact.city}
              </h2>
              <p className="mt-3 text-body text-ink-700">
                {site.contact.address}, {site.contact.city}
              </p>
              <p className="mt-2 text-body-sm text-ink-600 tabular">
                Jam operasional: {site.contact.hours.days},{" "}
                {site.contact.hours.label} WIB
              </p>

              <div className="mt-6">
                <a
                  href={site.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-btn-md font-semibold text-emerald-700 underline"
                >
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span>Buka di Google Maps ({site.contact.mapsUrl})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Band Dual (§8.13 #9) — Section Navy 2 dari 2 */}
      <CtaBand mode="dual" />
    </>
  );
}
