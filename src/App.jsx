import React, { useState } from "react";
import {
  CalendarDays,
  MessageCircle,
  Instagram,
  Linkedin,
  Phone,
  Euro,
  Rocket,
  Globe,
  MoreVertical,
  ArrowLeft,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";

function LinkButton({ icon: Icon, title, subtitle, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-2xl bg-white px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-5">
        <Icon size={34} strokeWidth={2.4} />
        <div>
          <p className="text-lg font-semibold leading-tight">{title}</p>
          {subtitle && <p className="mt-1 text-sm text-black/45">{subtitle}</p>}
        </div>
      </div>
      <MoreVertical className="text-black/45" />
    </a>
  );
}

function Home({ onMore }) {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-6 py-10 text-center text-black">
      <div className="mx-auto max-w-xl">
        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />

        <h1 className="mt-8 text-4xl font-bold tracking-tight">Ruben PELAGE</h1>

        <p className="mx-auto mt-4 max-w-lg text-2xl font-medium leading-snug">
          Conseiller — J’aide les actifs, familles et entrepreneurs à structurer,
          protéger et développer leur patrimoine.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a href={instagram} target="_blank" rel="noreferrer">
            <Instagram size={42} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={42} />
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={42} />
          </a>
        </div>

        <div className="mt-12 space-y-5">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-black px-6 py-5 text-lg font-semibold text-white shadow-xl"
          >
            Contactez-moi
          </a>

          <button
            onClick={onMore}
            className="w-full rounded-2xl border border-black px-6 py-5 text-lg font-semibold"
          >
            En savoir plus
          </button>
        </div>

        <p className="mt-10 text-sm text-black/40">N° ORIAS : 22005046</p>
      </div>
    </main>
  );
}

function MorePage({ onBack }) {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-6 py-8 text-black">
      <div className="mx-auto max-w-xl">
        <button onClick={onBack} className="mb-6 flex items-center gap-2 text-black/60">
          <ArrowLeft size={20} /> Retour
        </button>

        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-36 w-36 rounded-full object-cover"
        />

        <h1 className="mt-7 text-center text-4xl font-bold">Ruben PELAGE</h1>

        <p className="mx-auto mt-4 max-w-lg text-center text-2xl font-medium leading-snug">
          Création & protection de patrimoine.  
          Méthode Table / Frigo / Congélo.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a href={instagram} target="_blank" rel="noreferrer">
            <Instagram size={42} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={42} />
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={42} />
          </a>
        </div>

        <div className="mt-12 space-y-5">
          <LinkButton
            icon={Phone}
            title="Appel découverte 30 min - GRATUIT"
            subtitle="Calendly · Ruben PELAGE"
            href={calendly}
          />

          <LinkButton
            icon={Euro}
            title="Besoin d’aide pour votre déclaration d’impôt ?"
            href={whatsapp}
          />

          <LinkButton
            icon={Rocket}
            title="Audit financier pour indépendant - GRATUIT"
            href={whatsapp}
          />

          <LinkButton
            icon={Globe}
            title="Site web"
            href="https://project-w7cqu.vercel.app"
          />
        </div>

        <p className="mt-10 text-center text-xs text-black/40">
          © 2026 Ruben PELAGE — N° ORIAS : 22005046
        </p>
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return page === "home" ? (
    <Home onMore={() => setPage("more")} />
  ) : (
    <MorePage onBack={() => setPage("home")} />
  );
}            <p className="mt-4 leading-7 text-black/60">
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
