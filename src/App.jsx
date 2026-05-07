import React from "react";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  ShieldCheck,
  PiggyBank,
  Snowflake,
  TrendingUp,
  Instagram,
  Linkedin,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp = "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black overflow-hidden">
      <header className="border-b border-black/10 bg-[#f5f3ef]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <img src="/logo-blanc-ecriture.png" alt="Ruben PELAGE" className="h-14" />
            <div>
              <p className="font-serif text-2xl">Ruben PELAGE</p>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Création & protection de patrimoine
              </p>
            </div>
          </div>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex border border-black px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
          >
            Réserver un audit
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="relative h-[560px] md:h-[660px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] to-transparent z-10" />
          <img
            src="/portrait-ruben.png"
            alt="Ruben PELAGE"
            className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 object-contain grayscale"
          />
        </div>

        <div>
          <div className="inline-flex border border-black px-4 py-2 text-xs uppercase tracking-[0.2em] mb-8">
            Consultant. Stratège. Entrepreneur.
          </div>

          <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Stratégie.
            <br />
            Patrimoine.
            <br />
            <span className="text-[#C99A2E]">Décisions.</span>
          </h1>

          <div className="mt-8 border-l-2 border-[#C99A2E] pl-6">
            <p className="text-xl leading-9 text-black/70">
              Je t’aide à structurer ton argent, clarifier tes décisions et construire une trajectoire financière solide.
            </p>
            <p className="mt-5 text-lg font-medium">
              Sans complexité. Sans discours inutile.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C99A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#d9b04c] transition"
            >
              <CalendarDays size={16} />
              Réserver un audit
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-black px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-black/10 bg-white/60 p-8">
            <ShieldCheck className="mb-6 text-[#C99A2E]" />
            <h3 className="font-serif text-3xl">Protéger</h3>
            <p className="mt-4 leading-7 text-black/60">
              Sécuriser ton foyer, anticiper les imprévus et éviter les angles morts.
            </p>
          </div>

          <div className="border border-black/10 bg-white/60 p-8">
            <PiggyBank className="mb-6 text-[#C99A2E]" />
            <h3 className="font-serif text-3xl">Optimiser</h3>
            <p className="mt-4 leading-7 text-black/60">
              Organiser ton argent, réduire les fuites et mieux utiliser chaque euro.
            </p>
          </div>

          <div className="border border-black/10 bg-white/60 p-8">
            <TrendingUp className="mb-6 text-[#C99A2E]" />
            <h3 className="font-serif text-3xl">Développer</h3>
            <p className="mt-4 leading-7 text-black/60">
              Construire une trajectoire patrimoniale claire, cohérente et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C99A2E]">
            Méthode Table / Frigo / Congélo
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Remettre chaque euro à sa vraie place.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-white/[0.04] p-8">
              <ShieldCheck className="mb-6 text-[#C99A2E]" />
              <h3 className="text-2xl font-serif">La Table</h3>
              <p className="mt-4 leading-7 text-white/60">
                Le quotidien : charges, dépenses, budget, arbitrages.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-8">
              <PiggyBank className="mb-6 text-[#C99A2E]" />
              <h3 className="text-2xl font-serif">Le Frigo</h3>
              <p className="mt-4 leading-7 text-white/60">
                La sécurité : épargne disponible, imprévus, projets courts.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-8">
              <Snowflake className="mb-6 text-[#C99A2E]" />
              <h3 className="text-2xl font-serif">Le Congélo</h3>
              <p className="mt-4 leading-7 text-white/60">
                Le long terme : retraite, investissement, patrimoine, transmission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C99A2E]">
              Audit offert
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
              Fais le point sur ton argent en 30 minutes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/60">
              Un échange simple pour comprendre ta situation, repérer les axes d’amélioration et identifier les premières décisions à prendre.
            </p>
          </div>

          <div className="border border-black/10 bg-white/60 p-8">
            <div className="space-y-5 text-black/70">
              <p>✓ Analyse rapide de ta situation</p>
              <p>✓ Lecture de tes priorités financières</p>
              <p>✓ Repérage des leviers d’optimisation</p>
              <p>✓ Premières pistes d’action concrètes</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C99A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#d9b04c] transition"
              >
                Réserver mon audit <ArrowRight size={16} />
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-black px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
              >
                Me contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-black/50">
            <p>© 2026 Ruben PELAGE — Création & protection de patrimoine.</p>
            <p className="mt-1">N° ORIAS : 22005046 · Martinique · France</p>
          </div>

          <div className="flex gap-5">
            <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-[#C99A2E] transition">
              <Instagram />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C99A2E] transition">
              <Linkedin />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#C99A2E] transition">
              <MessageCircle />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
