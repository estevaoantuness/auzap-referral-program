import { Star } from "lucide-react";
import Image from "next/image";

interface FeaturedTestimonialProps {
  name: string;
  city: string;
  quote?: string;
  photoUrl?: string;
  year?: string;
}

export default function FeaturedTestimonial({
  name,
  city,
  quote = "O AuZap revolucionou meu petshop! Consegui aumentar minhas vendas em 45% nos primeiros 3 meses. O sistema é intuitivo e o suporte é excepcional. Recomendo para todos os donos de petshop que querem crescer de verdade.",
  photoUrl,
  year = "2023",
}: FeaturedTestimonialProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-xl md:p-12">
            <div className="flex flex-col items-start gap-8 md:flex-row">
              {/* Photo */}
              <div className="flex-shrink-0">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={`Foto de ${name}`}
                    width={96}
                    height={96}
                    className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg md:h-24 md:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-primary/20 text-3xl shadow-lg md:h-24 md:w-24">
                    🐾
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative">
                  <span className="absolute -left-2 -top-4 text-6xl text-primary opacity-20">"</span>
                  <p className="relative z-10 mb-6 text-lg leading-relaxed text-foreground italic md:text-xl">
                    {quote}
                  </p>
                </blockquote>

                {/* Author info */}
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <div className="text-lg font-bold text-foreground">{name}</div>
                    <div className="text-muted-foreground">{city}</div>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Parceiro desde {year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
