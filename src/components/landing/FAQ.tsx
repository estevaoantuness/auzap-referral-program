"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-2xl border-none bg-white shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-primary/5 hover:no-underline"
      >
        <span className="pr-4 text-lg font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4 leading-relaxed text-muted-foreground">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o desconto de indicação?",
      answer:
        "Ao se cadastrar através do link de indicação de um parceiro, você automaticamente recebe 10% de desconto no primeiro mês. Isso significa que você pagará R$ 315 ao invés de R$ 350. O desconto é aplicado automaticamente, sem necessidade de cupom.",
    },
    {
      question: "Quanto tempo leva para configurar?",
      answer:
        "A configuração é super rápida! Em média, nossos clientes levam apenas 15-20 minutos para ter tudo funcionando. Nossa equipe de suporte está disponível para te guiar em cada passo, desde a conexão do WhatsApp até o envio da primeira mensagem automatizada.",
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer:
        "Não! O AuZap foi desenvolvido para ser extremamente intuitivo e fácil de usar. Se você sabe usar o WhatsApp, já sabe usar o AuZap. Além disso, oferecemos treinamento completo e nossa equipe está sempre disponível para te ajudar com qualquer dúvida.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim, não há qualquer tipo de fidelidade ou multa por cancelamento. Você pode cancelar sua assinatura a qualquer momento, diretamente pelo painel de controle. Acreditamos que você deve permanecer conosco porque ama o serviço, não porque está preso a um contrato.",
    },
    {
      question: "O suporte está incluído?",
      answer:
        "Sim! O suporte está 100% incluído no seu plano. Nossa equipe está disponível de segunda a sexta, das 9h às 18h, via WhatsApp, e-mail e chat. Além disso, você terá acesso a uma base de conhecimento completa com tutoriais em vídeo e artigos detalhados.",
    },
    {
      question: "Funciona em qualquer celular?",
      answer:
        "Sim, o AuZap funciona em qualquer smartphone ou computador com acesso à internet. Você pode acessar o sistema pelo navegador ou pelo aplicativo. Além disso, é totalmente compatível com Android e iOS, e sincroniza automaticamente em todos os seus dispositivos.",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa saber sobre o AuZap
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-md">
            <h3 className="mb-2 text-xl font-bold text-foreground">Ainda tem dúvidas?</h3>
            <p className="mb-4 text-muted-foreground">Nossa equipe está pronta para te ajudar!</p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
