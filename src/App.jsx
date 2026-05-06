import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  PiggyBank,
  Snowflake,
  Wallet,
  TrendingUp,
  CheckCircle2,
  CalendarDays,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp = "https://wa.me/596696298921";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";

function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#D4AF37] text-black hover:bg-[#f0d36f]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex items-center justify-between">
          <img src="/logo-blanc-ecriture.png" alt="Ruben PELAGE" className="h-20 w-auto" />

          <div className="hidden gap-3 md:flex">
            <Button href={calendly}>Réserver un audit</Button>
          </div>
        </header>

        <div className="grid items-center gap-12 py-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Création & protection de patrimoine
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Ton argent travaille… ou tu travailles pour lui ?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              J’accompagne les actifs, familles et entrepreneurs à structurer leur argent avec une méthode simple :
              protéger le présent, préparer les projets et construire le patrimoine de demain.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={calendly}>
                Réserver un audit offert <ArrowRight size={18} />
              </Button>
              <Button href={whatsapp} variant="secondary">
                WhatsApp <MessageCircle size={18} />
              </Button>
            </div>
          </motion.div>

          <Card>
            <p className="text-sm text-white/45">Méthode propriétaire</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#D4AF37]">
              Table / Frigo / Congélo
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <Wallet className="mb-3 text-[#D4AF37]" />
                <h3 className="font-semibold">La Table</h3>
                <p className="text-white/55">Maîtriser les dépenses du quotidien.</p>
              </div>

              <div>
                <ShieldCheck className="mb-3 text-[#D4AF37]" />
                <h3 className="font-semibold">Le Frigo</h3>
                <p className="text-white/55">Sécuriser l’épargne disponible.</p>
              </div>

              <div>
                <Snowflake className="mb-3 text-[#D4AF37]" />
                <h3 className="font-semibold">Le Congélo</h3>
                <p className="text-white/55">Construire le patrimoine long terme.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <Card>
            <ShieldCheck className="mb-5 text-[#D4AF37]" />
            <h3 className="text-xl font-semibold">Protéger</h3>
            <p className="mt-3 text-white/55">Sécuriser la famille et éviter les angles morts.</p>
          </Card>

          <Card>
            <PiggyBank className="mb-5 text-[#D4AF37]" />
            <h3 className="text-xl font-semibold">Optimiser</h3>
            <p className="mt-3 text-white/55">Réduire les fuites et mieux utiliser chaque euro.</p>
          </Card>

          <Card>
            <TrendingUp className="mb-5 text-[#D4AF37]" />
            <h3 className="text-xl font-semibold">Développer</h3>
            <p className="mt-3 text-white/55">Construire une trajectoire patrimoniale cohérente.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#151515] to-[#080808] p-8 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Audit offert
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Fais le point sur ton argent en 30 minutes.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Un échange simple pour comprendre ta situation, repérer les axes d’amélioration
            et voir si une stratégie patrimoniale peut t’aider à passer un cap.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Analyse rapide de ta situation",
              "Repérage des fuites financières",
              "Projection sur tes objectifs",
              "Plan d’action priorisé",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="text-[#D4AF37]" />
                <p className="text-white/70">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={calendly}>
              Réserver mon audit <CalendarDays size={18} />
            </Button>
            <Button href={whatsapp} variant="secondary">
              Me contacter sur WhatsApp <MessageCircle size={18} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ruben PELAGE — N° ORIAS : 22005046</p>

          <div className="flex gap-4">
            <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-[#D4AF37]">
              <Instagram />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[#D4AF37]">
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
