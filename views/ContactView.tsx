import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/blocks/ConsultationForm";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaDescription:
      "Contact PrimeTax to discuss a corporate tax, international tax, transfer pricing, or tax controversy matter.",
    title: "Start With a Focused Conversation",
    intro:
      "Tell us briefly about your business and the matter you are facing. We will respond to arrange an initial discussion.",
    labels: { email: "Email", phone: "Phone", office: "Office", hours: "Hours" },
    note: "Submitting an enquiry does not create an advisory relationship. Please do not send confidential documents until an engagement and a secure exchange channel have been agreed.",
  },
  id: {
    metaDescription:
      "Hubungi PrimeTax untuk mendiskusikan persoalan pajak korporasi, pajak internasional, transfer pricing, atau sengketa pajak.",
    title: "Mulai dengan Percakapan yang Terfokus",
    intro:
      "Ceritakan secara singkat tentang bisnis Anda dan persoalan yang sedang dihadapi. Kami akan menghubungi Anda untuk mengatur diskusi awal.",
    labels: { email: "Email", phone: "Telepon", office: "Kantor", hours: "Jam kerja" },
    note: "Pengiriman permintaan tidak menimbulkan hubungan advisory. Mohon tidak mengirim dokumen rahasia sebelum penugasan dan saluran pertukaran yang aman disepakati.",
  },
};

export function contactMetadata(locale: Locale) {
  return pageMetadata({
    title: t(locale).nav.contact,
    description: copy[locale].metaDescription,
    path: "/contact",
    locale,
  });
}

export function ContactView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const label = t(locale).nav.contact;
  const { contact } = site;
  const address = contact.addressLines.length > 0 ? contact.addressLines.join(", ") : contact.city;

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label, href: "/contact" }]}
        eyebrow={label}
        title={c.title}
        intro={c.intro}
      />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="space-y-8">
              {contact.email && (
                <ContactItem icon={<Mail />} label={c.labels.email}>
                  <a href={`mailto:${contact.email}`} className="link-underline">
                    {contact.email}
                  </a>
                </ContactItem>
              )}
              {contact.phone && (
                <ContactItem icon={<Phone />} label={c.labels.phone}>
                  <a href={contact.phoneHref} className="link-underline">
                    {contact.phone}
                  </a>
                </ContactItem>
              )}
              <ContactItem icon={<MapPin />} label={c.labels.office}>
                {address}
              </ContactItem>
              <ContactItem icon={<Clock />} label={c.labels.hours}>
                {contact.hours[locale]}
              </ContactItem>
            </dl>
            <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-graphite">{c.note}</p>
          </aside>
          <div className="lg:col-span-8">
            <ConsultationForm source="contact_page" />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactElement; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 text-graphite [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.25]" aria-hidden="true">
        {icon}
      </span>
      <div>
        <dt className="text-small text-graphite">{label}</dt>
        <dd className="mt-1">{children}</dd>
      </div>
    </div>
  );
}
