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

// Mock function - will be replaced with real DB call
async function getPartnerBySlug(slug: string) {
  // TODO: Replace with actual Prisma query
  // const partner = await prisma.partner.findUnique({
  //   where: { slug, isActive: true }
  // });

  // Mock data for development
  const mockPartners: Record<string, any> = {
    "joao-silva": {
      name: "João Silva",
      slug: "joao-silva",
      city: "São Paulo",
      state: "SP",
      photoUrl: null,
      testimonial:
        "O AuZap revolucionou meu petshop! Consegui aumentar minhas vendas em 45% nos primeiros 3 meses.",
      referralCode: "JOAO2024",
      isActive: true,
    },
    "maria-santos": {
      name: "Maria Santos",
      slug: "maria-santos",
      city: "Rio de Janeiro",
      state: "RJ",
      photoUrl: null,
      testimonial:
        "Sistema incrível! Meus clientes adoram o atendimento automatizado e eu economizo muito tempo.",
      referralCode: "MARIA2024",
      isActive: true,
    },
  };

  return mockPartners[slug] || null;
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
