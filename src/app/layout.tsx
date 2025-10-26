import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuZap - Programa de Indicação para Petshops",
  description: "Indique e ganhe! Programa de indicação exclusivo para petshops",
  keywords: ["petshop", "indicação", "desconto", "automação", "whatsapp"],
  authors: [{ name: "AuZap" }],
  creator: "AuZap",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://auzap.com",
    title: "AuZap - Programa de Indicação para Petshops",
    description: "Indique e ganhe! Programa de indicação exclusivo para petshops",
    siteName: "AuZap",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuZap - Programa de Indicação para Petshops",
    description: "Indique e ganhe! Programa de indicação exclusivo para petshops",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
