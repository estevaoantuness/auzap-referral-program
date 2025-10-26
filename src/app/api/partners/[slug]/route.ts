import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const partner = await prisma.partner.findUnique({
      where: {
        slug: params.slug,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        city: true,
        state: true,
        photoUrl: true,
        testimonial: true,
        referralCode: true,
      },
    });

    if (!partner) {
      return NextResponse.json({ message: "Parceiro não encontrado" }, { status: 404 });
    }

    // Register page view
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
    const userAgent = request.headers.get("user-agent");

    await prisma.analytics.create({
      data: {
        partnerId: partner.id,
        eventType: "page_view",
        eventData: {
          page: "landing",
          slug: params.slug,
        },
        ipAddress: ipAddress || undefined,
        userAgent: userAgent || undefined,
      },
    });

    return NextResponse.json(partner, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error fetching partner:", error);
    return NextResponse.json({ message: "Erro ao buscar parceiro" }, { status: 500 });
  }
}
