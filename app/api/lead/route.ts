import { NextResponse } from "next/server";
import {
  smeFormSchema,
  rfpFullSchema,
  companyProfileGateSchema,
  newsletterSchema,
} from "@/lib/validators";
import { site } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, honeypot } = body;

    // Anti-spam honeypot check (§6.2)
    if (honeypot && String(honeypot).length > 0) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    if (formType === "sme_consultation") {
      const parsed = smeFormSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      return NextResponse.json({
        ok: true,
        leadType: "sme_consultation",
        notifyTo: site.contact.whatsapp,
        receivedAt: new Date().toISOString(),
      });
    }

    if (formType === "corporate_rfp") {
      const parsed = rfpFullSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      return NextResponse.json({
        ok: true,
        leadType: "corporate_rfp",
        notifyEmail: site.contact.businessEmail,
        confirmationTo: parsed.data.workEmail,
        receivedAt: new Date().toISOString(),
      });
    }

    if (formType === "company_profile") {
      const parsed = companyProfileGateSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      return NextResponse.json({
        ok: true,
        leadType: "company_profile",
        downloadUrl: site.downloads.companyProfileId,
        receivedAt: new Date().toISOString(),
      });
    }

    if (formType === "newsletter") {
      const parsed = newsletterSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      return NextResponse.json({
        ok: true,
        leadType: "newsletter",
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true, receivedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Terjadi kesalahan saat memproses permintaan." },
      { status: 500 }
    );
  }
}
