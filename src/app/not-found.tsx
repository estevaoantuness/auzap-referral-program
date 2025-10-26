import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="text-center">
        <div className="mb-8 text-8xl">🐾</div>
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-white/90">Página não encontrada</h2>
        <p className="mb-8 text-lg text-white/80">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-secondary/90"
        >
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
