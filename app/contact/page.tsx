import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/blocks/ConsultationForm";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact PrimeTax to discuss a corporate tax, international tax, transfer pricing, or tax controversy matter.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = site;
  const address = contact.addressLines.length > 0 ? contact.addressLines.join(", ") : contact.city;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="Start With a Focused Conversation"
        intro="Tell us briefly about your business and the matter you are facing. We will respond to arrange an initial discussion."
      />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="space-y-8">
              {contact.email && (
                <ContactItem icon={<Mail />} label="Email">
                  <a href={`mailto:${contact.email}`} className="link-underline">
                    {contact.email}
                  </a>
                </ContactItem>
              )}
              {contact.phone && (
                <ContactItem icon={<Phone />} label="Phone">
                  <a href={contact.phoneHref} className="link-underline">
                    {contact.phone}
                  </a>
                </ContactItem>
              )}
              <ContactItem icon={<MapPin />} label="Office">
                {address}
              </ContactItem>
              <ContactItem icon={<Clock />} label="Hours">
                {contact.hours}
              </ContactItem>
            </dl>
            <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-graphite">
              Submitting an enquiry does not create an advisory relationship. Please do not send confidential
              documents until an engagement and a secure exchange channel have been agreed.
            </p>
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
