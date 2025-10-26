# Prompt Otimizado para Lovable

## Instruções
Copie o prompt abaixo e cole no Lovable para gerar os componentes da landing page.

---

## PROMPT PARA O LOVABLE:

```
Create a modern, professional referral landing page for a pet business (petshop) referral program called "AuZap" with these exact sections and styling:

**DESIGN SYSTEM:**
- Primary color: Blue #2563eb (rgb(37, 99, 235))
- Secondary color: Orange #f97316 (rgb(249, 115, 22))
- Font: Inter (Google Fonts)
- Mobile-first, fully responsive
- Smooth animations and transitions
- Clean, modern aesthetic

**1. HERO SECTION** (Full viewport height)
- Centered layout with gradient background (blue to light blue)
- Circular partner photo (200px diameter, white border, shadow)
- Small badge above photo: "Você foi indicado por [Nome do Parceiro]" (light blue bg, blue text)
- Main headline (h1, bold, 48px): "Junte-se a [Nome do Parceiro] e transforme seu negócio!"
- Subheadline (24px, lighter): "Ganhe 10% de desconto no primeiro mês"
- Large CTA button (orange bg, white text): "Quero meu desconto" with arrow icon
- Floating paw prints decoration in background
- Smooth fade-in animation on load

**2. SOCIAL PROOF SECTION**
- White background
- 3 stat cards in a row (mobile: stack)
- Each card: Large number (blue), description below
  - "500+ Clientes Ativos"
  - "1M+ Mensagens Enviadas"
  - "98% de Satisfação"
- Animated counter effect (numbers count up)
- Small icons above each number (Users, MessageCircle, Heart)

**3. BENEFITS GRID**
- Light gray background
- Title (h2, centered): "Por que escolher o AuZap?"
- Grid of 6 benefit cards (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each card:
  - Icon (lucide-react): Dog, MessageSquare, TrendingUp, BarChart, HeartHandshake, Zap
  - Title (bold, 18px)
  - Description (2-3 lines)
  - Hover effect: slight lift and shadow
  - Benefits:
    1. Automação de Mensagens (Dog icon)
    2. Gestão de Clientes (MessageSquare)
    3. Aumento de Vendas (TrendingUp)
    4. Relatórios Detalhados (BarChart)
    5. Suporte Dedicado (HeartHandshake)
    6. Integração Fácil (Zap)

**4. FEATURED TESTIMONIAL**
- White background
- Large card with border and shadow
- Partner photo (circular, 80px, left side)
- 5 gold stars rating
- Quote text (italic, 20px, with decorative quote marks)
- Partner name and city below (bold name, gray city)
- "Parceiro desde 2023" badge

**5. HOW IT WORKS TIMELINE**
- Light blue gradient background
- Title (h2, centered): "Como funciona?"
- 3-step vertical timeline with connecting line
- Each step:
  - Large number circle (orange bg, white text)
  - Icon (UserPlus, Settings, Rocket)
  - Title (bold)
  - Description
  - Steps:
    1. "Cadastre-se com o link" - Sign up using referral link
    2. "Configure seu sistema" - Set up your account
    3. "Comece a vender mais" - Start growing your business

**6. PRICING HIGHLIGHT CARD**
- White background
- Centered large card with orange accent border
- "Oferta Exclusiva" badge (orange bg)
- Original price: R$ 350/mês (strikethrough, gray)
- Discount price: R$ 315/mês (large, blue, bold)
- "Economize R$ 35 no primeiro mês!" (green text, small)
- Checkmark list of 6 features:
  - WhatsApp ilimitado
  - Gestão de clientes
  - Automação de mensagens
  - Relatórios em tempo real
  - Suporte prioritário
  - Treinamento completo
- CTA button: "Garantir desconto" (orange, large)

**7. FAQ ACCORDION**
- Light gray background
- Title (h2, centered): "Perguntas Frequentes"
- 6 FAQ items in accordion (ChevronDown icon)
- Questions:
  1. "Como funciona o desconto de indicação?"
  2. "Quanto tempo leva para configurar?"
  3. "Preciso de conhecimento técnico?"
  4. "Posso cancelar quando quiser?"
  5. "O suporte está incluído?"
  6. "Funciona em qualquer celular?"
- Smooth expand/collapse animation
- Blue background when expanded

**8. FOOTER**
- Dark blue background (#1e3a8a)
- White text
- 3 columns layout:
  - Column 1: AuZap logo (white), tagline "Transforme seu petshop com WhatsApp"
  - Column 2: Links (Sobre, Preços, Contato, Blog)
  - Column 3: Redes sociais icons (Instagram, Facebook, LinkedIn), email contact
- Bottom bar: Copyright © 2025 AuZap. Todos os direitos reservados.

**ADDITIONAL REQUIREMENTS:**
- All text in Brazilian Portuguese
- Pet-friendly theme (subtle paw prints, dog/cat elements)
- Smooth scroll behavior
- Responsive images
- Accessible (ARIA labels, keyboard navigation)
- Fast load times
- SEO-friendly structure (proper H tags)

Use React components, Tailwind CSS, and lucide-react for icons. Make it production-ready!
```

---

## Após gerar no Lovable

1. **Copie todos os componentes** gerados pelo Lovable
2. **Crie um arquivo** chamado `LOVABLE_COMPONENTS.md` e cole todo o código
3. **Me avise** quando tiver o código, que vou adaptá-lo para nosso projeto Next.js 14

## Componentes esperados do Lovable:

Provavelmente o Lovable vai gerar algo como:

- `HeroSection.tsx` ou `Hero.tsx`
- `SocialProof.tsx` ou `Stats.tsx`
- `BenefitsGrid.tsx` ou `Features.tsx`
- `Testimonial.tsx`
- `HowItWorks.tsx` ou `Steps.tsx`
- `PricingCard.tsx` ou `Pricing.tsx`
- `FAQ.tsx`
- `Footer.tsx`

Pode também gerar uma página completa com tudo junto. Nesse caso, vamos separar em componentes modulares.
