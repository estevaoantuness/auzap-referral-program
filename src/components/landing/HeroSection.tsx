"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  partnerName: string;
  partnerPhotoUrl?: string;
}

export default function HeroSection({ partnerName, partnerPhotoUrl }: HeroSectionProps) {
  const scrollToContact = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating paw prints decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 animate-float text-6xl text-white/10">🐾</div>
        <div
          className="absolute right-20 top-40 animate-float text-5xl text-white/10"
          style={{ animationDelay: "1s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-32 left-1/4 animate-float text-7xl text-white/10"
          style={{ animationDelay: "2s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-20 right-1/3 animate-float text-4xl text-white/10"
          style={{ animationDelay: "0.5s" }}
        >
          🐾
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary-light))] px-6 py-2 font-medium text-primary">
            <span>✨</span>
            <span>Você foi indicado por {partnerName}</span>
          </div>

          {/* Partner Photo */}
          <div className="animate-fade-in mb-8" style={{ animationDelay: "0.2s" }}>
            {partnerPhotoUrl ? (
              <Image
                src={partnerPhotoUrl}
                alt={`Foto de ${partnerName}`}
                width={192}
                height={192}
                className="mx-auto h-48 w-48 animate-pulse-glow rounded-full border-4 border-white object-cover shadow-xl"
              />
            ) : (
              <div className="mx-auto flex h-48 w-48 animate-pulse-glow items-center justify-center rounded-full border-4 border-white bg-primary/20 text-6xl shadow-xl">
                🐾
              </div>
            )}
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.4s" }}
          >
            Junte-se a {partnerName} e transforme seu negócio!
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in mb-10 text-xl font-light text-white/90 md:text-2xl lg:text-3xl"
            style={{ animationDelay: "0.6s" }}
          >
            Ganhe <span className="font-bold">10% de desconto</span> no primeiro mês
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full bg-secondary px-8 py-6 text-lg font-semibold text-secondary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-2xl"
            >
              Quero meu desconto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="animate-fade-in mt-16 flex flex-wrap justify-center gap-8 text-white/80"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Avaliação 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span className="font-medium">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span className="font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
