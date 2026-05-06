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
  Sparkles,
  Lock,
  Target,
  BarChart3,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp = "https://wa.me/596696298921";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";

function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080808]";
  const styles =
    variant === "primary"
      ? "bg-[#D4AF37] text-black hover:bg-[#f2d678] hover:shadow-[0_0_50px_rgba(212,175,55,0.28)] focus:ring-[#D4AF37]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:ring-white/30";

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
      <Sparkles size={14} />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white selection:bg-[#D4AF37] selection:text-black">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[130px]" />
        <div className="absolute right-[-180px] top-[320px] h-[520px] w-[520px] rounded-full bg-[#008080]/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo-blanc-ecriture.png" alt="Ruben PELAGE" className="h-14 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a href="#methode" className="transition hover:text-white">Méthode</a>
            <a href="#audit" className="transition hover:text-white">Audit</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button href={calendly}>Réserver mon audit</Button>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pb-28 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <Label>Personal branding financier premium</Label>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl lg:text-8xl">
            Ton argent doit avoir une stratégie.
            <span className="block bg-gradient-to-r from-[#D4AF37] via-[#f4dc91] to-white bg-clip-text text-transparent">
              Pas seulement un compte bancaire.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            J’accompagne les actifs, familles et entrepreneurs à structurer leur argent, protéger leur foyer et construire une trajectoire patrimoniale claire grâce à la méthode Table / Frigo / Congélo.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={calendly}>
              Réserver un audit offert <ArrowRight size={18} />
            </Button>
            <Button href={whatsapp} variant="secondary">
              Écrire sur WhatsApp <MessageCircle size={18} />
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold text-[#D4AF37]">3</p>
              <p className="mt-1 text-xs text-white/45">piliers simples</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#D4AF37]">30 min</p>
              <p className="mt-1 text-xs text-white/45">audit offert</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#D4AF37]">ORIAS</p>
              <p className="mt-1 text-xs text-white/45">22005046</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-br from-[#D4AF37]/35 via-white/5 to-[#008080]/25 blur-2xl" />
          <Card className="relative overflow-hidden p-8">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">Diagnostic patrimonial</p>
                <p className="mt-1 text-3xl font-semibold">Clarté financière</p>
              </div>
              <div className="rounded-2xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
                <BarChart3 />
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Table", "Budget, charges, dépenses", "72%", Wallet],
                ["Frigo", "Sécurité, projets, réserve", "48%", ShieldCheck],
                ["Congélo", "Investissement, retraite, transmission", "31%", Snowflake],
              ].map(([title, text, value, Icon]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white/5 p-3 text-[#D4AF37]"><Icon size={20} /></div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-sm text-white/45">{text}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-[#D4AF37]">{value}</p>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#008080] to-[#D4AF37]" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {[
            [Lock, "Protéger", "Prévoir les imprévus, protéger la famille et éviter les angles morts."],
            [PiggyBank, "Optimiser", "Réduire les fuites, organiser l’épargne et mieux utiliser chaque euro."],
            [TrendingUp, "Développer", "Construire une trajectoire patrimoniale cohérente, lisible et durable."],
          ].map(([Icon, title, text]) => (
            <Card key={title} className="transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25">
              <Icon className="mb-6 text-[#D4AF37]" size={32} />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/55">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="methode" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-3xl">
          <Label>La méthode</Label>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            Une méthode simple pour remettre chaque euro à sa place.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Table / Frigo / Congélo transforme une situation floue en plan clair : vivre sereinement, sécuriser les projets, construire le long terme.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [Wallet, "01", "La Table", "Les dépenses du quotidien : loyer, assurances, transport, abonnements, alimentation."],
            [ShieldCheck, "02", "Le Frigo", "L’épargne disponible : sécurité, imprévus, projets courts, tranquillité."],
            [Snowflake, "03", "Le Congélo", "Le long terme : retraite, enfants, investissement, protection du patrimoine."],
          ].map(([Icon, number, title, text]) => (
            <Card key={title} className="group transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25">
              <div className="mb-10 flex items-center justify-between">
                <div className="rounded-2xl bg-white/5 p-4 text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-black">
                  <Icon size={28} />
                </div>
                <span className="text-sm text-white/30">{number}</span>
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/55">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8 md:p-10">
            <Label>Positionnement</Label>
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Un accompagnement clair, humain et orienté action.
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              Mon rôle n’est pas de complexifier ton argent. C’est de t’aider à prendre de meilleures décisions, avec une vision globale et des priorités concrètes.
            </p>
          </Card>

          <div className="grid gap-4">
            {[
              "Analyse de ta situation financière actuelle",
              "Identification des fuites financières et angles morts",
              "Clarification de tes objectifs personnels et familiaux",
              "Plan d’action priorisé : maintenant, 12 mois, long terme",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <CheckCircle2 className="shrink-0 text-[#D4AF37]" />
                <p className="text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#151515] via-[#0b0b0b] to-[#050505] p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-[110px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#008080]/15 blur-[110px]" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_0.8fr]">
            <div>
              <Label>Audit offert</Label>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Fais le point sur ton argent en 30 minutes.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Un échange simple pour comprendre ta situation, repérer les axes d’amélioration et voir si une stratégie patrimoniale peut t’aider à passer un cap.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={calendly}>
                  Réserver mon audit <CalendarDays size={18} />
                </Button>
                <Button href={whatsapp} variant="secondary">
                  WhatsApp <MessageCircle size={18} />
                </Button>
              </div>
            </div>

            <Card className="bg-black/30">
              <p className="text-sm uppercase tracking-[0.22em] text-[#D4AF37]">Inclus dans l’échange</p>
              <div className="mt-6 space-y-4">
                {[
                  "Analyse rapide de ta situation",
                  "Lecture de tes priorités financières",
                  "Repérage des leviers d’optimisation",
                  "Premières pistes d’action concrètes",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#D4AF37]" size={18} />
                    <p className="text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-white/70">© 2026 Ruben PELAGE — Création & protection de patrimoine.</p>
            <p className="mt-1">N° ORIAS : 22005046 · Martinique · France</p>
          </div>
          <div className="flex items-center gap-4">
            <a href={instagram} target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]" aria-label="Instagram">
              <Instagram />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]" aria-label="WhatsApp">
              <MessageCircle />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
