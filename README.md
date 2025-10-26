# 🐾 AuZap Referral Program

Sistema completo de programa de indicação para petshops com landing page personalizada e dashboard de gestão de recompensas.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.2-2D3748?logo=prisma)

## 📋 Sobre o Projeto

Sistema de indicação B2B que permite petshops indicarem outros estabelecimentos e ganharem recompensas progressivas. Cada parceiro possui:

- **Landing page personalizada** (`/indique/[slug]`) com link único
- **Dashboard completo** (`/painel/[partnerId]`) para acompanhar indicações e recompensas
- **Sistema de recompensas progressivo** (1, 2, 3, 5, 10 indicações)
- **Tracking completo** com analytics e conversões

## ✨ Features Principais

### Landing Page Dinâmica
- ✅ Personalização por parceiro (foto, nome, depoimento)
- ✅ Design moderno e responsivo
- ✅ Formulário de cadastro com validações
- ✅ Rastreamento de referências (cookies + UTM params)
- ✅ Gerada com **Lovable** e adaptada para Next.js 14

### Dashboard do Parceiro
- 📊 Overview com estatísticas em tempo real
- 📝 Gestão completa de indicações
- 🎁 Timeline de recompensas desbloqueadas
- 🔗 Geração de link único + QR Code
- 📱 Templates prontos para redes sociais
- 📧 Notificações por email

### Sistema de Recompensas
| Indicações | Recompensa |
|-----------|------------|
| 1 | 10% desconto por 1 mês |
| 2 | 20% desconto por 1 mês |
| 3 | 30% desconto por 1 mês |
| 5 | 50% desconto por 6 meses |
| 10 | 100% grátis por 6 meses + VIP |

## 🛠️ Stack Tecnológica

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Banco de Dados**: [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Autenticação**: [NextAuth.js](https://next-auth.js.org/)
- **Email**: [SendGrid](https://sendgrid.com/) + [React Email](https://react.email/)
- **Validação**: [Zod](https://zod.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: [Vercel](https://vercel.com/)

## 📁 Estrutura do Projeto

```
auzap-referral-program/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── migrations/            # Migrações
│   └── seed.ts               # Dados de exemplo
├── public/
│   ├── images/               # Imagens estáticas
│   └── icons/                # Ícones
├── src/
│   ├── app/
│   │   ├── api/              # API Routes
│   │   │   ├── auth/         # Autenticação
│   │   │   ├── partners/     # Endpoints de parceiros
│   │   │   ├── referrals/    # Endpoints de indicações
│   │   │   ├── rewards/      # Sistema de recompensas
│   │   │   ├── webhooks/     # Webhooks externos
│   │   │   ├── analytics/    # Tracking
│   │   │   ├── upload/       # Upload de imagens
│   │   │   └── qrcode/       # Geração de QR Code
│   │   ├── indique/[slug]/   # Landing page personalizada
│   │   ├── painel/[partnerId]/ # Dashboard do parceiro
│   │   └── (auth)/           # Páginas de autenticação
│   ├── components/
│   │   ├── ui/               # Componentes base
│   │   ├── landing/          # Componentes da landing
│   │   ├── dashboard/        # Componentes do dashboard
│   │   └── shared/           # Componentes compartilhados
│   ├── lib/
│   │   ├── db/               # Prisma client e queries
│   │   ├── utils/            # Funções auxiliares
│   │   ├── validations/      # Schemas Zod
│   │   └── hooks/            # Custom hooks
│   ├── styles/
│   │   └── globals.css       # Estilos globais
│   └── types/
│       └── index.d.ts        # TypeScript types
├── .env.example              # Template de variáveis
└── LOVABLE_PROMPT.md         # Prompt para o Lovable
```

## 🚀 Getting Started

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta no Supabase (ou outro PostgreSQL)
- Conta no SendGrid

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/estevaoantuness/auzap-referral-program.git
cd auzap-referral-program
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="seu-secret-aqui"
SENDGRID_API_KEY="sua-api-key"
# ... demais variáveis
```

4. **Configure o banco de dados**
```bash
npm run db:push        # Cria as tabelas
npm run db:seed        # Popula dados de exemplo (opcional)
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint
npm run typecheck    # Verifica tipos TypeScript
npm run format       # Formata código com Prettier
npm run db:generate  # Gera Prisma Client
npm run db:push      # Sincroniza schema com DB
npm run db:studio    # Abre Prisma Studio
npm run db:seed      # Popula banco com dados de teste
```

## 🎨 Usando o Lovable

Este projeto utiliza [Lovable](https://lovable.dev) para acelerar a criação de componentes visuais da landing page.

**Passo a passo:**

1. Abra o arquivo `LOVABLE_PROMPT.md`
2. Copie o prompt completo
3. Cole no Lovable e gere os componentes
4. Copie os componentes gerados
5. Adapte para Next.js 14 (instruções no arquivo)

## 🗄️ Schema do Banco de Dados

### Principais Models

- **User**: Usuários do sistema (parceiros)
- **Partner**: Parceiros cadastrados
- **Referral**: Indicações realizadas
- **Reward**: Recompensas desbloqueadas
- **Analytics**: Eventos de tracking

Ver schema completo em `prisma/schema.prisma`

## 🔐 Autenticação

Sistema de autenticação com NextAuth.js:
- Login com email/senha
- Proteção de rotas do dashboard
- Sessions com JWT
- Middleware de autorização

## 📧 Emails Transacionais

Templates de email com React Email:
- ✉️ Boas-vindas para indicado
- 🔔 Notificação de nova indicação
- 🎁 Recompensa desbloqueada
- ✅ Conversão confirmada

## 📊 Analytics

Tracking completo de eventos:
- Visualizações da landing page
- Cliques no link de indicação
- Início e conclusão do formulário
- Conversões
- Compartilhamentos

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Conecte seu repositório no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático! 🎉

### Variáveis de Ambiente em Produção

Configure todas as variáveis do `.env.example` no dashboard da Vercel.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/MinhaFeature`
3. Commit: `git commit -m 'feat: adiciona MinhaFeature'`
4. Push: `git push origin feature/MinhaFeature`
5. Abra um Pull Request

### Conventional Commits

Use o padrão de commits:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Estevão Antunes**
- GitHub: [@estevaoantuness](https://github.com/estevaoantuness)

## 🙏 Agradecimentos

- [Lovable](https://lovable.dev) pela aceleração na criação de componentes
- [Next.js](https://nextjs.org/) pelo framework incrível
- [Vercel](https://vercel.com/) pela plataforma de deploy

---

⭐ Se este projeto foi útil, deixe uma estrela!
