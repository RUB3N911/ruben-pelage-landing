import React from "react"; import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, TrendingUp, Target, Instagram, Linkedin, } from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation"; const whatsapp = "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:"; const instagram = "https://instagram.com/rub3n"; const linkedin = "https://www.linkedin.com/in/rubenpelage";

function Button({ children, href, variant = "primary" }) { const base = "inline-flex items-center justify-center gap-3 rounded-md px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300";

const styles = variant === "primary" ? "bg-[#C99A2E] text-white hover:bg-[#D8B04A] shadow-[0_18px_50px_rgba(201,154,46,0.22)]" : "border border-black/70 bg-transparent text-black hover:bg-black hover:text-white";

return (
  <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
    {children}
  </a>
);
                                                          
function Feature({ icon: Icon, title, text }) { return ( <div className="flex gap-5 border-black/10 px-6 py-6 md:border-r last:border-r-0"> <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/30 text-black"> <Icon size={23} strokeWidth={1.7} /> </div> <div> <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-black">{title}</h3> <p className="mt-2 max-w-xs text-[15px] leading-7 text-black/65">{text}</p> </div> </div> ); }

export default function App() { return ( <main className="min-h-screen bg-[#f5f3ef] text-black"> <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_35%)]" />

{/* HEADER */}
  <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
      <a href="#top" className="flex items-center gap-4">
        <img src="/logo-blanc-ecriture.png" alt="Ruben PELAGE" className="h-14 w-auto" />
        <div className="hidden leading-tight sm:block">
          <p className="font-serif text-2xl tracking-tight">Ruben PELAGE</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/55">
            Création & protection de patrimoine
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 lg:flex">
        <a href="#methode" className="transition hover:text-[#D4AF37]">Méthode</a>
        <a href="#audit" className="transition hover:text-[#D4AF37]">Audit offert</a>
        <a href="#contact" className="transition hover:text-[#D4AF37]">Contact</a>
      </nav>

      <a
        href={calendly}
        target="_blank"
        rel="noreferrer"
        className="hidden rounded-md border border-[#C99A2E] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] transition hover:bg-[#C99A2E] hover:text-black md:inline-flex"
      >
        Réserver un audit
      </a>
    </div>
  </header>

  {/* HERO */}
  <section id="top" className="relative overflow-hidden border-b border-black/10 bg-[#f7f5f0]">
    <div className="mx-auto grid min-h-[780px] max-w-[1500px] items-center gap-8 px-5 pt-10 md:grid-cols-[0.95fr_1.05fr] md:px-10">
      {/* IMAGE */}
      <div className="relative order-2 h-[520px] md:order-1 md:h-[680px]">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f5f0] to-transparent z-10" />
        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="absolute bottom-0 left-1/2 h-full max-h-[720px] w-auto -translate-x-1/2 object-contain grayscale"
        />
      </div>

      {/* CONTENT */}
      <div className="order-1 py-10 md:order-2 md:py-0">
        <div className="mb-8 inline-flex border border-black px-5 py-3 text-xs font-bold uppercase tracking-[0.22em]">
          Consultant. Stratège. Entrepreneur.
        </div>

        <div className="mb-7 h-px w-full max-w-2xl bg-black/35">
          <div className="h-px w-16 bg-[#C99A2E]" />
        </div>

        <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-8xl">
          Stratégie.
          <br />
          Patrimoine.
          <br />
          <span className="text-[#C99A2E]">Décisions.</span>
        </h1>

        <div className="mt-8 max-w-2xl border-l-2 border-[#C99A2E] pl-6">
          <p className="text-lg leading-9 text-black/70 md:text-xl">
            Je t’aide à structurer ton argent, clarifier tes décisions et construire une trajectoire financière solide.
          </p>
          <p className="mt-5 text-lg font-medium text-black">
            Sans complexité. Sans discours inutile.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={calendly}>
            <CalendarDays size={17} /> Réserver un audit
          </Button>
          <Button href={whatsapp} variant="secondary">
            <MessageCircle size={17} /> Discuter sur WhatsApp
          </Button>
        </div>
      </div>
    </div>

    {/* FEATURE STRIP */}
    <div id="methode" className="mx-auto max-w-[1180px] translate-y-1/2 px-5 md:px-0">
      <div className="grid overflow-hidden rounded-sm border border-black/10 bg-white/80 shadow-[0_30px_100px_rgba(0,0,0,0.08)] backdrop-blur-xl md:grid-cols-3">
        <Feature icon={Target} title="Clarté" text="Comprendre ta situation et tes priorités." />
        <Feature icon={ShieldCheck} title="Sécurité" text="Protéger ce qui compte vraiment pour toi." />
        <Feature icon={TrendingUp} title="Croissance" text="Développer ton patrimoine avec stratégie." />
      </div>
    </div>
  </section>

  {/* TEXT SECTION */}
  <section className="mx-auto max-w-5xl px-6 pb-20 pt-36 text-center md:pt-44">
    <p className="mx-auto max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] text-black md:text-5xl">
      Une bonne stratégie financière ne commence pas par un produit. Elle commence par une vision claire.
    </p>
    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/60">
      La méthode Table / Frigo / Congélo permet de remettre chaque euro à sa place : gérer le quotidien, sécuriser les projets et construire le long terme.
    </p>
  </section>

  {/* AUDIT */}
  <section id="audit" className="bg-black px-5 py-24 text-white md:px-10">
    <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Audit offert</p>
        <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Fais le point sur ton argent en 30 minutes.
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
          Un échange simple pour comprendre ta situation, repérer les axes d’amélioration et identifier les premières décisions à prendre.
        </p>
      </div>

      <div className="rounded-sm border border-white/15 bg-white/[0.04] p-8">
        {[
          "Analyse rapide de ta situation",
          "Lecture de tes priorités financières",
          "Repérage des leviers d’optimisation",
          "Premières pistes d’action concrètes",
        ].map((item) => (
          <div key={item} className="flex gap-4 border-b border-white/10 py-4 last:border-b-0">
            <ShieldCheck className="mt-1 shrink-0 text-[#D4AF37]" size={20} />
            <p className="text-white/75">{item}</p>
          </div>
        ))}

        <div className="mt-8 flex flex-col gap-4">
          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-[#C99A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#D8B04A]"
          >
            Réserver mon audit <ArrowRight size={17} />
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            WhatsApp <MessageCircle size={17} />
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer id="contact" className="bg-[#090909] px-5 py-10 text-white md:px-10">
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
      <div className="text-center text-sm text-white/45 md:text-left">
        <p className="text-white/70">© 2026 Ruben PELAGE — Création & protection de patrimoine.</p>
        <p className="mt-1">N° ORIAS : 22005046 · Martinique · France</p>
      </div>

      <div className="flex items-center gap-5">
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

); }
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
