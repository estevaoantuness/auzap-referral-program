import { Dog, MessageSquare, TrendingUp, BarChart, HeartHandshake, Zap } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="hover-lift group rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: <Dog className="h-7 w-7" />,
      title: "Automação de Mensagens",
      description:
        "Envie mensagens automáticas de boas-vindas, lembretes de consultas e promoções personalizadas para seus clientes.",
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: "Gestão de Clientes",
      description:
        "Organize todos os seus contatos em um só lugar, com histórico completo de conversas e informações dos pets.",
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Aumento de Vendas",
      description:
        "Recupere vendas perdidas com mensagens estratégicas e aumente o ticket médio com campanhas direcionadas.",
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Relatórios Detalhados",
      description:
        "Acompanhe métricas de performance em tempo real e tome decisões baseadas em dados concretos.",
    },
    {
      icon: <HeartHandshake className="h-7 w-7" />,
      title: "Suporte Dedicado",
      description:
        "Conte com nossa equipe especializada disponível para te ajudar sempre que precisar, com atendimento prioritário.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Integração Fácil",
      description:
        "Configure tudo em minutos sem complicação. Não é necessário conhecimento técnico para começar a usar.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Por que escolher o AuZap?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Tudo que você precisa para transformar seu atendimento e vender mais
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
