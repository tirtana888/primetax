"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/FormFields";
import { trackEvent } from "@/lib/analytics";

export function NewsletterSection() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "newsletter", email }),
      });
      trackEvent("newsletter_signup", { location: "inline_section" });
      setEmail("");
      router.push("/terima-kasih/buletin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div className="max-w-xl">
        <p className="font-heading text-eyebrow uppercase text-emerald-700">
          Buletin Pajak Bulanan
        </p>
        <h2 className="mt-2 font-heading text-h3 font-bold text-navy-900">
          Ringkasan regulasi terbaru + 3 aksi yang perlu Anda lakukan setiap bulan.
        </h2>
        <p className="mt-2 text-body-sm text-ink-600">
          Dikirim 1× sebulan dalam format ringkas dan PDF siap unduh. Dengan
          berlangganan, Anda setuju dengan{" "}
          <Link href="/kebijakan-privasi" className="underline">
            Kebijakan Privasi
          </Link>{" "}
          kami.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:mt-0"
      >
        <label htmlFor="section-newsletter-email" className="sr-only">
          Alamat email
        </label>
        <Input
          id="section-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@perusahaan.co.id"
          className="flex-1"
        />
        <Button type="submit" variant="primary" size="md" isLoading={loading}>
          Berlangganan
        </Button>
      </form>
    </div>
  );
}
