export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-primary-600">AuZap Referral Program</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sistema de indicação para petshops em construção...
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="font-bold text-primary-600">Landing Page</h2>
            <p className="mt-2 text-sm text-gray-500">
              Acesse: <code className="rounded bg-gray-100 p-1">/indique/[slug]</code>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="font-bold text-primary-600">Dashboard</h2>
            <p className="mt-2 text-sm text-gray-500">
              Acesse: <code className="rounded bg-gray-100 p-1">/painel/[partnerId]</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
