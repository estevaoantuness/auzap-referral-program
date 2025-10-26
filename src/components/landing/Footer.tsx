import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(221,83%,20%)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="text-3xl">🐾</div>
              <h3 className="text-2xl font-bold">AuZap</h3>
            </div>
            <p className="leading-relaxed text-white/80">
              Transforme seu petshop com WhatsApp. A plataforma mais completa para gestão e
              automação do seu negócio.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 transition-colors hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 transition-colors hover:text-white">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 transition-colors hover:text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 transition-colors hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact & Social */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Conecte-se</h4>
            <div className="mb-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:contato@auzap.com.br"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>contato@auzap.com.br</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} AuZap. Todos os direitos reservados.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-white">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
