import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateSlug, generateReferralCode } from "../src/lib/utils/slug";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing data
  await prisma.analytics.deleteMany();
  await prisma.reward.deleteMany();
  await prisma.referral.deleteMany();
  await prisma.user.deleteMany();
  await prisma.partner.deleteMany();

  console.log("🗑️  Cleared existing data");

  // Create partners
  const partners = [
    {
      name: "João Silva",
      email: "joao@petshopjoao.com",
      phone: "(11) 98765-4321",
      city: "São Paulo",
      state: "SP",
      testimonial:
        "O AuZap revolucionou meu petshop! Consegui aumentar minhas vendas em 45% nos primeiros 3 meses. O sistema é intuitivo e o suporte é excepcional.",
    },
    {
      name: "Maria Santos",
      email: "maria@petlove.com",
      phone: "(21) 99876-5432",
      city: "Rio de Janeiro",
      state: "RJ",
      testimonial:
        "Sistema incrível! Meus clientes adoram o atendimento automatizado e eu economizo muito tempo. Recomendo de olhos fechados!",
    },
    {
      name: "Pedro Oliveira",
      email: "pedro@bichodomato.com",
      phone: "(31) 97654-3210",
      city: "Belo Horizonte",
      state: "MG",
      testimonial:
        "Melhor investimento que fiz para meu petshop. A automação de mensagens aumentou meu ticket médio em 30%.",
    },
    {
      name: "Ana Costa",
      email: "ana@petparadise.com",
      phone: "(41) 96543-2109",
      city: "Curitiba",
      state: "PR",
      testimonial:
        "Fantástico! Recuperei vendas que eu achava perdidas com as mensagens automáticas. Meus clientes amam!",
    },
    {
      name: "Carlos Mendes",
      email: "carlos@caoecia.com",
      phone: "(51) 95432-1098",
      city: "Porto Alegre",
      state: "RS",
      testimonial:
        "O AuZap mudou completamente a forma como me comunico com meus clientes. Resultados impressionantes!",
    },
  ];

  for (const partnerData of partners) {
    const slug = generateSlug(partnerData.name);
    const referralCode = generateReferralCode();
    const hashedPassword = await bcrypt.hash("senha123", 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: partnerData.name,
        email: partnerData.email,
        password: hashedPassword,
        role: "PARTNER",
      },
    });

    // Create partner
    const partner = await prisma.partner.create({
      data: {
        name: partnerData.name,
        slug,
        email: partnerData.email,
        phone: partnerData.phone,
        city: partnerData.city,
        state: partnerData.state,
        testimonial: partnerData.testimonial,
        referralCode,
        isActive: true,
        user: {
          connect: { id: user.id },
        },
      },
    });

    console.log(`✅ Created partner: ${partner.name} (${slug})`);

    // Create some referrals for first 2 partners
    if (partners.indexOf(partnerData) < 2) {
      const referralsData = [
        {
          referredName: "Lucas Ferreira",
          referredEmail: "lucas@petshoplucas.com",
          referredPhone: "(11) 91234-5678",
          referredCity: "São Paulo",
          referredState: "SP",
          referredCompany: "PetShop do Lucas",
          status: "CONVERTED" as const,
        },
        {
          referredName: "Julia Almeida",
          referredEmail: "julia@petjulia.com",
          referredPhone: "(21) 92345-6789",
          referredCity: "Rio de Janeiro",
          referredState: "RJ",
          referredCompany: "Pet Julia",
          status: "CONTACTED" as const,
        },
        {
          referredName: "Roberto Lima",
          referredEmail: "roberto@petroberto.com",
          referredPhone: "(31) 93456-7890",
          referredCity: "Belo Horizonte",
          referredState: "MG",
          referredCompany: "Roberto Pet Shop",
          status: "PENDING" as const,
        },
      ];

      for (const refData of referralsData) {
        await prisma.referral.create({
          data: {
            ...refData,
            partnerId: partner.id,
          },
        });
      }

      console.log(`  📝 Created ${referralsData.length} referrals for ${partner.name}`);

      // Create reward for first partner (3 referrals)
      if (partners.indexOf(partnerData) === 0) {
        await prisma.reward.create({
          data: {
            partnerId: partner.id,
            referralCount: 1,
            rewardType: "DISCOUNT_10",
            discountPercent: 10,
            monthsDuration: 1,
            status: "APPLIED",
          },
        });

        console.log(`  🎁 Created reward for ${partner.name}`);
      }
    }
  }

  console.log("\n✨ Seed completed successfully!");
  console.log("\n📍 Test URLs:");
  console.log("   - http://localhost:3000/indique/joao-silva");
  console.log("   - http://localhost:3000/indique/maria-santos");
  console.log("   - http://localhost:3000/indique/pedro-oliveira");
  console.log("\n🔑 Login credentials (all partners):");
  console.log("   Email: [partner-email]");
  console.log("   Password: senha123");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
