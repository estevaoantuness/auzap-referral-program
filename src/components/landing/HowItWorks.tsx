import { UserPlus, Settings, Rocket } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, icon, title, description, isLast = false }: StepProps) {
  return (
    <div className="group relative flex flex-col items-start gap-6 md:flex-row">
      {/* Number Circle */}
      <div className="relative flex-shrink-0">
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {number}
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="absolute left-1/2 top-16 hidden h-24 w-0.5 -translate-x-1/2 bg-gradient-to-b from-secondary/50 to-primary/30 md:block" />
        )}
      </div>

      {/* Content */}
      <div className="hover-lift flex-1 rounded-2xl bg-white p-6 shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Cadastre-se com o link",
      description:
        "Use o link de indicação do seu parceiro para criar sua conta e garantir automaticamente o desconto especial de 10% no primeiro mês.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Configure seu sistema",
      description:
        "Nossa equipe te ajuda a configurar tudo em poucos minutos. Conecte seu WhatsApp, importe seus contatos e personalize suas mensagens.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Comece a vender mais",
      description:
        "Pronto! Agora é só aproveitar todas as funcionalidades e ver suas vendas crescerem com automação inteligente e atendimento profissional.",
    },
  ];

  return (
    <section className="bg-gradient-timeline py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Como funciona?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Em apenas 3 passos simples você está pronto para transformar seu negócio
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
