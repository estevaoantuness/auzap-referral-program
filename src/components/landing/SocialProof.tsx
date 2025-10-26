"use client";

import { Users, MessageCircle, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface StatCardProps {
  icon: React.ReactNode;
  endValue: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatCard({ icon, endValue, suffix = "", label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = endValue / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, endValue, delay]);

  return (
    <div id={`stat-${label}`} className="hover-lift rounded-2xl bg-white p-8 text-center shadow-lg">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <StatCard
            icon={<Users className="h-8 w-8" />}
            endValue={500}
            suffix="+"
            label="Clientes Ativos"
            delay={0}
          />
          <StatCard
            icon={<MessageCircle className="h-8 w-8" />}
            endValue={1}
            suffix="M+"
            label="Mensagens Enviadas"
            delay={200}
          />
          <StatCard
            icon={<Heart className="h-8 w-8" />}
            endValue={98}
            suffix="%"
            label="de Satisfação"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
