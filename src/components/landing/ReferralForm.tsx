"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { referralFormSchema, type ReferralFormData } from "@/lib/validations/schemas";
import { cn } from "@/lib/utils/cn";

interface ReferralFormProps {
  partnerSlug: string;
  referralCode: string;
}

const BRAZILIAN_STATES = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export default function ReferralForm({ partnerSlug, referralCode }: ReferralFormProps) {
  const [formData, setFormData] = useState<Partial<ReferralFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    let processedValue = value;
    if (name === "referredPhone") {
      processedValue = formatPhone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : processedValue,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate with Zod
      const validated = referralFormSchema.parse(formData);

      // Submit to API
      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validated,
          partnerSlug,
          referralCode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao enviar formulário");
      }

      setIsSuccess(true);
      // TODO: Add confetti animation
    } catch (error: any) {
      if (error.errors) {
        // Zod validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ submit: error.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-12 text-center shadow-2xl">
        <div className="mb-6 text-6xl">🎉</div>
        <h2 className="mb-4 text-3xl font-bold text-primary">Cadastro realizado com sucesso!</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Recebemos sua indicação! Em breve nossa equipe entrará em contato para ativar seu
          desconto de 10%.
        </p>
        <p className="text-sm text-muted-foreground">
          Você receberá um email com mais informações nos próximos minutos.
        </p>
      </div>
    );
  }

  return (
    <section id="form" className="bg-gradient-timeline py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Cadastre-se e ganhe seu desconto
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e garanta 10% de desconto no primeiro mês
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            {errors.submit && (
              <div className="mb-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                {errors.submit}
              </div>
            )}

            <div className="space-y-6">
              {/* Nome Completo */}
              <div>
                <label htmlFor="referredName" className="mb-2 block font-medium text-foreground">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="referredName"
                  name="referredName"
                  value={formData.referredName || ""}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.referredName && "border-destructive focus:border-destructive"
                  )}
                  placeholder="João da Silva"
                />
                {errors.referredName && (
                  <p className="mt-1 text-sm text-destructive">{errors.referredName}</p>
                )}
              </div>

              {/* Nome do Petshop */}
              <div>
                <label htmlFor="referredCompany" className="mb-2 block font-medium text-foreground">
                  Nome do Petshop *
                </label>
                <input
                  type="text"
                  id="referredCompany"
                  name="referredCompany"
                  value={formData.referredCompany || ""}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.referredCompany && "border-destructive focus:border-destructive"
                  )}
                  placeholder="PetShop do João"
                />
                {errors.referredCompany && (
                  <p className="mt-1 text-sm text-destructive">{errors.referredCompany}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="referredEmail" className="mb-2 block font-medium text-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  id="referredEmail"
                  name="referredEmail"
                  value={formData.referredEmail || ""}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.referredEmail && "border-destructive focus:border-destructive"
                  )}
                  placeholder="joao@petshop.com"
                />
                {errors.referredEmail && (
                  <p className="mt-1 text-sm text-destructive">{errors.referredEmail}</p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="referredPhone" className="mb-2 block font-medium text-foreground">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="referredPhone"
                  name="referredPhone"
                  value={formData.referredPhone || ""}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    errors.referredPhone && "border-destructive focus:border-destructive"
                  )}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
                {errors.referredPhone && (
                  <p className="mt-1 text-sm text-destructive">{errors.referredPhone}</p>
                )}
              </div>

              {/* Cidade e Estado */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="referredCity" className="mb-2 block font-medium text-foreground">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="referredCity"
                    name="referredCity"
                    value={formData.referredCity || ""}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.referredCity && "border-destructive focus:border-destructive"
                    )}
                    placeholder="São Paulo"
                  />
                  {errors.referredCity && (
                    <p className="mt-1 text-sm text-destructive">{errors.referredCity}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="referredState" className="mb-2 block font-medium text-foreground">
                    Estado *
                  </label>
                  <select
                    id="referredState"
                    name="referredState"
                    value={formData.referredState || ""}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.referredState && "border-destructive focus:border-destructive"
                    )}
                  >
                    <option value="">Selecione</option>
                    {BRAZILIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.referredState && (
                    <p className="mt-1 text-sm text-destructive">{errors.referredState}</p>
                  )}
                </div>
              </div>

              {/* Termos */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms || false}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 flex-shrink-0 rounded border-input text-primary focus:ring-2 focus:ring-primary/20"
                />
                <label htmlFor="acceptTerms" className="text-sm text-muted-foreground">
                  Aceito os{" "}
                  <a href="#" className="text-primary hover:underline">
                    termos de uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-primary hover:underline">
                    política de privacidade
                  </a>
                  . Autorizo o AuZap a entrar em contato.
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-destructive">{errors.acceptTerms}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-secondary py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? "Enviando..." : "Garantir meu desconto"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
