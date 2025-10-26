# 🧪 Guia de Teste - AuZap Referral Program

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- PostgreSQL rodando (pode usar Supabase online)

## 🚀 Passo a Passo para Testar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Banco de Dados

#### Opção A: Supabase (Recomendado - Grátis)

1. Acesse https://supabase.com
2. Crie um novo projeto
3. Vá em **Settings** → **Database**
4. Copie a **Connection String** (URI)

#### Opção B: PostgreSQL Local

```bash
# Certifique-se que o PostgreSQL está rodando
psql -U postgres

# Criar database
CREATE DATABASE auzap_referral;
```

### 3. Configurar Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto:

```bash
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/auzap_referral?schema=public"

# Se usar Supabase, cole a connection string deles:
# DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="development-secret-change-in-production"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Configurar Banco de Dados

```bash
# Gerar Prisma Client
npm run db:generate

# Criar as tabelas no banco
npm run db:push

# Popular com dados de exemplo
npm run db:seed
```

**Saída esperada do seed:**
```
🌱 Starting seed...
🗑️  Cleared existing data
✅ Created partner: João Silva (joao-silva)
  📝 Created 3 referrals for João Silva
  🎁 Created reward for João Silva
✅ Created partner: Maria Santos (maria-santos)
  📝 Created 3 referrals for Maria Santos
...
✨ Seed completed successfully!
```

### 5. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Servidor rodará em: http://localhost:3000

---

## 📋 Checklist de Testes

### ✅ Teste 1: Landing Page - João Silva

1. Acesse: http://localhost:3000/indique/joao-silva
2. Verifique:
   - [ ] Hero exibe "Você foi indicado por João Silva"
   - [ ] Foto do parceiro (placeholder 🐾)
   - [ ] Animações funcionam (paw prints flutuando)
   - [ ] Social Proof: contadores animam até os números
   - [ ] Grid de benefícios: 6 cards com hover effect
   - [ ] Depoimento do João aparece corretamente
   - [ ] Timeline "Como funciona" com 3 passos
   - [ ] Pricing card mostra R$ 315/mês (desconto de R$ 350)
   - [ ] FAQ: accordion abre/fecha
   - [ ] Footer com links

### ✅ Teste 2: Landing Page - Maria Santos

1. Acesse: http://localhost:3000/indique/maria-santos
2. Verifique:
   - [ ] Hero exibe "Você foi indicado por Maria Santos"
   - [ ] Depoimento da Maria aparece
   - [ ] Cidade: Rio de Janeiro, RJ

### ✅ Teste 3: Slug Inexistente (404)

1. Acesse: http://localhost:3000/indique/parceiro-nao-existe
2. Verifique:
   - [ ] Mostra página 404 customizada
   - [ ] Emoji de paw print
   - [ ] Botão "Voltar para home"

### ✅ Teste 4: Formulário de Cadastro

1. Acesse: http://localhost:3000/indique/joao-silva
2. Role até o formulário "Cadastre-se e ganhe seu desconto"
3. **Teste de Validação** - Deixe campos vazios e clique "Garantir meu desconto":
   - [ ] Mostra erros em vermelho
4. **Teste de Máscara** - Digite no campo Telefone:
   - Digite: `11987654321`
   - [ ] Formata para: `(11) 98765-4321`
5. **Teste de Envio** - Preencha todos os campos:
   - Nome: Teste da Silva
   - Petshop: PetShop Teste
   - Email: teste@teste.com
   - Telefone: (11) 98765-4321
   - Cidade: São Paulo
   - Estado: SP
   - Marque o checkbox de termos
   - Clique "Garantir meu desconto"
   - [ ] Mostra tela de sucesso com 🎉
   - [ ] Mensagem: "Cadastro realizado com sucesso!"

### ✅ Teste 5: Verificar Dados no Banco

Abra o Prisma Studio para ver os dados:

```bash
npm run db:studio
```

Abre em: http://localhost:5555

Verifique:
- [ ] Tabela `Partner`: 5 parceiros criados
- [ ] Tabela `Referral`: Veja a indicação que você acabou de criar
- [ ] Tabela `Analytics`: Eventos de page_view e form_submit

### ✅ Teste 6: API - Buscar Parceiro

Teste a API diretamente:

```bash
# No terminal
curl http://localhost:3000/api/partners/joao-silva
```

Deve retornar JSON com dados do parceiro.

### ✅ Teste 7: API - Criar Indicação

```bash
curl -X POST http://localhost:3000/api/referrals \
  -H "Content-Type: application/json" \
  -d '{
    "partnerSlug": "joao-silva",
    "referralCode": "JOAO2024",
    "referredName": "API Test",
    "referredEmail": "apitest@test.com",
    "referredPhone": "(11) 91234-5678",
    "referredCity": "São Paulo",
    "referredState": "SP",
    "referredCompany": "API Pet Shop",
    "acceptTerms": true
  }'
```

Deve retornar:
```json
{
  "message": "Indicação criada com sucesso!",
  "referralId": "..."
}
```

### ✅ Teste 8: Responsividade

1. Abra as DevTools (F12)
2. Alterne entre dispositivos:
   - [ ] Desktop (1920x1080): Layout em 3 colunas
   - [ ] Tablet (768px): Layout em 2 colunas
   - [ ] Mobile (375px): Layout em 1 coluna, menu adaptado

### ✅ Teste 9: Performance

1. Abra Lighthouse (DevTools → Lighthouse)
2. Rode audit em modo Desktop
3. Verifique scores:
   - [ ] Performance > 85
   - [ ] Accessibility > 90
   - [ ] Best Practices > 90
   - [ ] SEO > 90

---

## 🐛 Problemas Comuns

### Erro: "Can't reach database server"

**Solução:**
- Verifique se o PostgreSQL está rodando
- Confira a `DATABASE_URL` no `.env`
- Se usar Supabase, verifique se copiou a connection string correta

### Erro: "Module not found"

**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Prisma Client is not configured"

**Solução:**
```bash
npm run db:generate
```

### Formulário não envia / Erro 500

**Solução:**
- Abra o console do navegador (F12)
- Veja os detalhes do erro
- Verifique se o banco está conectado
- Rode `npm run db:push` novamente

---

## 📊 Dados de Exemplo (Seed)

### Parceiros Criados:

1. **João Silva** → `/indique/joao-silva`
   - Email: joao@petshopjoao.com
   - Cidade: São Paulo, SP
   - 3 indicações (1 convertida)

2. **Maria Santos** → `/indique/maria-santos`
   - Email: maria@petlove.com
   - Cidade: Rio de Janeiro, RJ
   - 3 indicações

3. **Pedro Oliveira** → `/indique/pedro-oliveira`
   - Email: pedro@bichodomato.com
   - Cidade: Belo Horizonte, MG

4. **Ana Costa** → `/indique/ana-costa`
   - Email: ana@petparadise.com
   - Cidade: Curitiba, PR

5. **Carlos Mendes** → `/indique/carlos-mendes`
   - Email: carlos@caoecia.com
   - Cidade: Porto Alegre, RS

**Senha de todos:** `senha123`

---

## ✅ Tudo Funcionando?

Se todos os testes passaram, o sistema está pronto! 🎉

**Próximos passos:**
- Dashboard do parceiro
- Autenticação
- Emails automáticos
- Deploy na Vercel

---

## 📞 Suporte

Encontrou algum problema? Abra uma issue no GitHub:
https://github.com/estevaoantuness/auzap-referral-program/issues
