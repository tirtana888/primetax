import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PhotoPlaceholder } from "@/components/blocks/PhotoPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Karier di ${site.brandName} — Bergabung dengan Tim Konsultan Pajak`,
  description: `Lowongan kerja konsultan pajak, spesialis transfer pricing, dan tax associate di ${site.brandName}.`,
  alternates: {
    canonical: "/karier",
  },
};

export default function CareerPage() {
  const openings = [
    {
      title: "Senior Tax Consultant — Corporate & Controversy",
      type: "Full-time · Hybrid",
      location: site.contact.city,
      requirements:
        "Minimal 3–5 tahun pengalaman di konsultan pajak, memegang BKP A/B, terbiasa menangani ekualisasi SP2DK dan pemeriksaan.",
    },
    {
      title: "Transfer Pricing Associate / Senior Associate",
      type: "Full-time",
      location: site.contact.city,
      requirements:
        "Pengalaman menyusun Local File & Master File sesuai PMK 172/2023 serta pencarian pembanding database komersial.",
    },
    {
      title: "SME Tax Compliance Specialist (Coretax)",
      type: "Full-time",
      location: site.contact.city,
      requirements:
        "Menguasai pelaporan SPT Masa PPh 21 TER, PPh Unifikasi, e-Faktur Coretax, dan komunikatif mendampingi klien UKM.",
    },
  ];

  return (
    <section className="bg-white pt-6 pb-16 lg:pb-24">
      <div className="container-site">
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Karier" },
          ]}
        />

        <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Karier &amp; Pengembangan
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Tumbuh bersama {site.brandName}
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Kami mendukung setiap konsultan untuk meraih sertifikasi BKP
              A/B/C, mengikuti pelatihan regulasi berkala, dan menangani kasus
              lintas industri dengan bimbingan langsung dari Partner.
            </p>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder
              label="[FOTO TIM KERJA / KANTOR]"
              ratio="16:9"
              caption="Sesi diskusi regulasi mingguan bersama tim konsultan."
            />
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 font-heading text-h2 font-bold text-navy-900">
            Posisi yang sedang dibuka
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col justify-between rounded-xl border border-ink-300 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant="brand" size="sm">
                      {job.type}
                    </Badge>
                    <Badge variant="neutral" size="sm">
                      {job.location}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-h4 font-semibold text-navy-900">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-600">
                    {job.requirements}
                  </p>
                </div>
                <div className="mt-6 border-t border-ink-200 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                      `Lamaran: ${job.title}`
                    )}`}
                  >
                    Kirim CV ke {site.contact.email}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
