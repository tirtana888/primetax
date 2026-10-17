import {
  Building2,
  Cpu,
  Factory,
  Globe2,
  Landmark,
  Truck,
} from "lucide-react";

/**
 * Strip "sektor yang kami dampingi" tepat di bawah hero.
 * Pengganti sementara deret logo klien sampai ada izin publikasi logo.
 */
const sectors = [
  { label: "Manufaktur", icon: Factory },
  { label: "Distribusi & Ritel", icon: Truck },
  { label: "PMA & Multinasional", icon: Globe2 },
  { label: "Teknologi & Startup", icon: Cpu },
  { label: "Properti & Konstruksi", icon: Building2 },
  { label: "Jasa Keuangan", icon: Landmark },
];

export function SectorStrip() {
  return (
    <section
      aria-label="Sektor industri yang kami dampingi"
      className="border-b border-ink-200 bg-white py-8 lg:py-10"
    >
      <div className="container-site flex flex-col gap-5">
        <p className="font-heading text-eyebrow uppercase text-ink-500">
          Mendampingi bisnis di berbagai sektor
        </p>
        <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-x-6">
          {sectors.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-body-sm font-semibold whitespace-nowrap text-navy-800"
            >
              <Icon className="h-5 w-5 shrink-0 text-navy-600" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
