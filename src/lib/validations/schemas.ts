import { z } from "zod";

export const referralFormSchema = z.object({
  referredName: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  referredEmail: z.string().email("Email inválido"),
  referredPhone: z
    .string()
    .min(14, "Telefone inválido")
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato inválido. Use (XX) XXXXX-XXXX"),
  referredCompany: z.string().min(3, "Nome do petshop deve ter no mínimo 3 caracteres"),
  referredCity: z.string().min(3, "Cidade inválida"),
  referredState: z.string().length(2, "Estado inválido (use sigla: SP, RJ, etc)"),
  acceptTerms: z.boolean().refine((val) => val === true, "Você deve aceitar os termos"),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  phone: z.string().min(14, "Telefone inválido"),
  city: z.string().min(3, "Cidade inválida"),
  state: z.string().length(2, "Estado inválido"),
  petshopName: z.string().min(3, "Nome do petshop inválido"),
});

export const profileUpdateSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  phone: z.string().min(14, "Telefone inválido"),
  city: z.string().min(3, "Cidade inválida"),
  state: z.string().length(2, "Estado inválido"),
  testimonial: z.string().max(500, "Depoimento muito longo (máximo 500 caracteres)").optional(),
});

export type ReferralFormData = z.infer<typeof referralFormSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;
