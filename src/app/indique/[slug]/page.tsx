import { notFound } from "next/navigation";
import { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import BenefitsGrid from "@/components/landing/BenefitsGrid";
import FeaturedTestimonial from "@/components/landing/FeaturedTestimonial";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingCard from "@/components/landing/PricingCard";
import FAQ from "@/components/landing/FAQ";
import ReferralForm from "@/components/landing/ReferralForm";
import Footer from "@/components/landing/Footer";

interface PageProps {
  params: { slug: string };
}

import { prisma } from "@/lib/db/prisma";

async function getPartnerBySlug(slug: string) {
  try {
    const partner = await prisma.partner.findUnique({
      where: { slug, isActive: true },
      select: {
        name: true,
        slug: true,
        city: true,
        state: true,
        photoUrl: true,
        testimonial: true,
        referralCode: true,
      },
    });

    return partner;
  } catch (error) {
    console.error("Error fetching partner:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const partner = await getPartnerBySlug(params.slug);

  if (!partner) {
    return {
      title: "Parceiro não encontrado - AuZap",
    };
  }

  return {
    title: `Indicação de ${partner.name} - AuZap`,
    description: `${partner.name} de ${partner.city}/${partner.state} te indicou o AuZap! Ganhe 10% de desconto no primeiro mês.`,
    openGraph: {
      title: `Você foi indicado por ${partner.name}!`,
      description: "Ganhe 10% de desconto no primeiro mês do AuZap",
      images: partner.photoUrl ? [partner.photoUrl] : [],
    },
  };
}

export default async function ReferralLandingPage({ params }: PageProps) {
  const partner = await getPartnerBySlug(params.slug);

  if (!partner) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeroSection partnerName={partner.name} partnerPhotoUrl={partner.photoUrl} />

      <SocialProof />

      <BenefitsGrid />

      <FeaturedTestimonial
        name={partner.name}
        city={`${partner.city}, ${partner.state}`}
        quote={partner.testimonial}
        photoUrl={partner.photoUrl}
        year="2023"
      />

      <HowItWorks />

      <PricingCard />

      <ReferralForm partnerSlug={partner.slug} referralCode={partner.referralCode} />

      <FAQ />

      <Footer />
    </main>
  );
}
