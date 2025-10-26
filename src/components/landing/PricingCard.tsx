"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCard() {
  const features = [
    "WhatsApp ilimitado",
    "Gestão de clientes",
    "Automação de mensagens",
    "Relatórios em tempo real",
    "Suporte prioritário",
    "Treinamento completo",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-3xl border-4 border-secondary/20 bg-white shadow-2xl transition-shadow duration-300 hover:shadow-3xl">
            {/* Badge */}
            <div className="bg-secondary px-6 py-3 text-center text-lg font-bold text-white">
              🎉 Oferta Exclusiva de Indicação
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Pricing */}
              <div className="mb-8 text-center">
                <div className="mb-2 text-lg text-muted-foreground line-through">
                  De R$ 350/mês
                </div>
                <div className="mb-2 text-5xl font-bold text-primary md:text-6xl">
                  R$ 315
                  <span className="text-2xl font-normal text-muted-foreground">/mês</span>
                </div>
                <div className="text-lg font-semibold text-[hsl(var(--success))]">
                  💰 Economize R$ 35 no primeiro mês!
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                onClick={scrollToTop}
                className="w-full rounded-full bg-secondary py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl"
              >
                Garantir meu desconto agora
              </Button>

              {/* Trust Badge */}
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Sem fidelidade • Cancele quando quiser</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🔒</span>
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-muted-foreground">
            <p className="text-sm">
              * Desconto válido apenas para o primeiro mês através do link de indicação.
              <br />A partir do segundo mês, o valor será de R$ 350/mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
