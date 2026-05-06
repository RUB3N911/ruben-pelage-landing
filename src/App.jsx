import React from "react"; import { motion } from "framer-motion"; import { ArrowRight, ShieldCheck, PiggyBank, Snowflake, Wallet, TrendingUp, CheckCircle2, CalendarDays, Users, Sparkles, Quote, Menu, } from "lucide-react";

const Button = ({ children, variant = "primary" }) => { const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080808]"; const variants = { primary: "bg-[#D4AF37] text-[#101010] hover:bg-[#f0d36f] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] focus:ring-[#D4AF37]", secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:ring-white/30", };

return <button className={`${base} ${variants[variant]}`}>{children}</button>; };
const SectionLabel = ({ children }) => (

  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
    <Sparkles size={14} />
    {children}
  </div>
);const Card = ({ children, className = "" }) => (

  <div
    className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl ${className}`}
  >
    {children}
  </div>
);export default function PersonalBrandLandingPage() { return ( <main className="min-h-screen bg-[#080808] text-white selection:bg-[#D4AF37] selection:text-black"> <div className="fixed inset-0 -z-10 overflow-hidden"> <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#008080]/20 blur-[120px]" /> <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[110px]" /> </div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/75 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37] text-sm font-black text-black">
          P
        </div>
        <div>
          <p className="text-sm font-bold tracking-[0.25em]">PELAGE</p>
          <p className="text-xs text-white/50">Création & protection de patrimoine</p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
        <a href="#methode" className="hover:text-white transition">Méthode</a>
        <a href="#expertise" className="hover:text-white transition">Expertise</a>
        <a href="#audit" className="hover:text-white transition">Audit offert</a>
      </nav>

      <div className="hidden md:block">
        <Button>Réserver mon audit</Button>
      </div>

      <button className="rounded-full border border-white/10 p-2 md:hidden">
        <Menu size={20} />
      </button>
    </div>
  </header>

  <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-28 md:pt-24">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SectionLabel>Personal branding financier</SectionLabel>
      <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
        Ton argent travaille… ou tu travailles pour lui ?
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
        J’accompagne les actifs, familles et entrepreneurs à structurer leur argent avec une méthode simple : protéger le présent, préparer les projets et construire le patrimoine de demain.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Button>
          Réserver un audit offert <ArrowRight size={18} />
        </Button>
        <Button variant="secondary">Découvrir la méthode</Button>
      </div>

      <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
        <div>
          <p className="text-2xl font-semibold text-[#D4AF37]">3</p>
          <p className="mt-1 text-xs text-white/50">piliers financiers</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-[#D4AF37]">360°</p>
          <p className="mt-1 text-xs text-white/50">vision globale</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-[#D4AF37]">1:1</p>
          <p className="mt-1 text-xs text-white/50">accompagnement humain</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
    >
      <Card className="relative overflow-hidden p-8">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-white/45">Diagnostic patrimonial</p>
            <p className="mt-1 text-2xl font-semibold">Clarté financière</p>
          </div>
          <div className="rounded-2xl bg-[#008080]/20 p-3 text-[#7fffd4]">
            <Wallet />
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["Table", "Maîtriser les dépenses du quotidien", "72%"],
            ["Frigo", "Sécuriser l’épargne disponible", "48%"],
            ["Congélo", "Construire le patrimoine long terme", "31%"],
          ].map(([title, text, value]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-white/45">{text}</p>
                </div>
                <p className="text-sm font-semibold text-[#D4AF37]">{value}</p>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#008080] to-[#D4AF37]"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  </section>

  <section className="border-y border-white/10 bg-white/[0.02] py-16">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          [ShieldCheck, "Protéger", "Prévoir les imprévus, sécuriser la famille et éviter les angles morts."],
          [PiggyBank, "Optimiser", "Organiser l’épargne, réduire les fuites et mieux utiliser chaque euro."],
          [TrendingUp, "Développer", "Construire une trajectoire patrimoniale cohérente et durable."],
        ].map(([Icon, title, text]) => (
          <Card key={title}>
            <Icon className="mb-6 text-[#D4AF37]" size={32} />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-white/55">{text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>

  <section id="methode" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
    <div className="max-w-3xl">
      <SectionLabel>La méthode</SectionLabel>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
        Une stratégie simple pour reprendre le contrôle.
      </h2>
      <p className="mt-6 text-lg leading-8 text-white/60">
        La méthode Table / Frigo / Congélo permet de donner une mission précise à ton argent : vivre, sécuriser, construire.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        [Wallet, "01", "La Table", "Ton argent du quotidien : budget, charges, dépenses, arbitrages."],
        [ShieldCheck, "02", "Le Frigo", "Ton argent de sécurité : épargne disponible, projets courts, sérénité."],
        [Snowflake, "03", "Le Congélo", "Ton argent long terme : retraite, enfants, investissement, patrimoine."],
      ].map(([Icon, number, title, text]) => (
        <Card key={title} className="group hover:-translate-y-1 transition duration-300">
          <div className="mb-10 flex items-center justify-between">
            <div className="rounded-2xl bg-white/5 p-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition">
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

  <section id="expertise" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
      <Card className="p-8 md:p-10">
        <SectionLabel>Positionnement</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-[-0.04em]">
          Un accompagnement clair, humain et orienté action.
        </h2>
        <p className="mt-6 leading-8 text-white/60">
          L’objectif n’est pas de vendre un produit. L’objectif est de comprendre ta situation, identifier les pertes invisibles et construire un plan cohérent avec tes priorités.
        </p>
      </Card>

      <div className="grid gap-4">
        {[
          "Analyse de ta situation financière actuelle",
          "Lecture claire de tes objectifs personnels et familiaux",
          "Identification des leviers d’épargne, protection et optimisation",
          "Plan d’action simple avec priorités immédiates",
        ].map((item) => (
          <div key={item} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <CheckCircle2 className="shrink-0 text-[#D4AF37]" />
            <p className="text-white/75">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-[#0d0d0d] py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <Quote className="mb-6 text-[#D4AF37]" />
          <p className="leading-7 text-white/70">
            “J’ai enfin compris où partait mon argent et comment le structurer sans me sentir perdu.”
          </p>
          <p className="mt-6 text-sm text-white/40">— Client accompagné</p>
        </Card>
        <Card>
          <Quote className="mb-6 text-[#D4AF37]" />
          <p className="leading-7 text-white/70">
            “La méthode est simple, visuelle et applicable immédiatement. Ça change tout.”
          </p>
          <p className="mt-6 text-sm text-white/40">— Actif, 32 ans</p>
        </Card>
        <Card>
          <Quote className="mb-6 text-[#D4AF37]" />
          <p className="leading-7 text-white/70">
            “Je pensais avoir besoin de plus d’argent. J’avais surtout besoin d’une stratégie.”
          </p>
          <p className="mt-6 text-sm text-white/40">— Entrepreneur</p>
        </Card>
      </div>
    </div>
  </section>

  <section id="audit" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#151515] to-[#080808] p-8 md:p-14">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[100px]" />
      <div className="relative grid items-center gap-10 md:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionLabel>Audit offert</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Fais le point sur ton argent en 30 minutes.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Un échange simple pour comprendre ta situation, repérer les axes d’amélioration et voir si une stratégie patrimoniale peut t’aider à passer un cap.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>
              Réserver mon audit <CalendarDays size={18} />
            </Button>
            <Button variant="secondary">
              Me contacter <Users size={18} />
            </Button>
          </div>
        </div>

        <Card className="bg-black/30">
          <p className="text-sm uppercase tracking-[0.22em] text-[#D4AF37]">Inclus</p>
          <div className="mt-6 space-y-4">
            {[
              "Analyse rapide de ta situation",
              "Repérage des fuites financières",
              "Projection sur tes objectifs",
              "Plan d’action priorisé",
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

  <footer className="border-t border-white/10 py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between md:px-8">
      <p>© 2026 PELAGE — Création & protection de patrimoine.</p>
      <p>Martinique · France · Accompagnement personnalisé</p>
    </div>
  </footer>
</main>

); }
