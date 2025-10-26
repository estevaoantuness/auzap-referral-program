import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { referralFormSchema } from "@/lib/validations/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data
    const validated = referralFormSchema.parse(body);
    const { partnerSlug, referralCode } = body;

    // Find partner
    const partner = await prisma.partner.findUnique({
      where: { slug: partnerSlug, isActive: true },
    });

    if (!partner) {
      return NextResponse.json({ message: "Parceiro não encontrado" }, { status: 404 });
    }

    // Check if email already exists for this partner
    const existingReferral = await prisma.referral.findFirst({
      where: {
        partnerId: partner.id,
        referredEmail: validated.referredEmail,
      },
    });

    if (existingReferral) {
      return NextResponse.json(
        { message: "Este email já foi indicado por este parceiro" },
        { status: 400 }
      );
    }

    // Get IP and User Agent
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
    const userAgent = request.headers.get("user-agent");

    // Get UTM params from query or body
    const url = new URL(request.url);
    const utmSource = url.searchParams.get("utm_source") || body.utmSource;
    const utmMedium = url.searchParams.get("utm_medium") || body.utmMedium;
    const utmCampaign = url.searchParams.get("utm_campaign") || body.utmCampaign;

    // Create referral
    const referral = await prisma.referral.create({
      data: {
        partnerId: partner.id,
        referredName: validated.referredName,
        referredEmail: validated.referredEmail,
        referredPhone: validated.referredPhone,
        referredCity: validated.referredCity,
        referredState: validated.referredState,
        referredCompany: validated.referredCompany,
        utmSource,
        utmMedium,
        utmCampaign,
        ipAddress: ipAddress || undefined,
        userAgent: userAgent || undefined,
        status: "PENDING",
      },
    });

    // Register analytics event
    await prisma.analytics.create({
      data: {
        partnerId: partner.id,
        eventType: "form_submit",
        eventData: {
          referralId: referral.id,
          email: validated.referredEmail,
        },
        ipAddress: ipAddress || undefined,
        userAgent: userAgent || undefined,
      },
    });

    // TODO: Send emails
    // - Welcome email to referred
    // - Notification email to partner

    return NextResponse.json(
      {
        message: "Indicação criada com sucesso!",
        referralId: referral.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating referral:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          message: "Dados inválidos",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Erro ao processar indicação. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
