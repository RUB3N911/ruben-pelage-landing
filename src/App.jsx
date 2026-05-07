import React from "react";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  Wallet,
  ShieldCheck,
  Snowflake,
  Phone,
} from "lucide-react";

const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.";

const calendly =
  "https://calendly.com/ruben-pelage/consultation";

const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://linkedin.com/in/rubenpelage";
const email = "mailto:contact@pelageruben.com";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-4">
          <img
            src="/logo-blanc-ecriture.png"
            alt="Ruben PELAGE"
            className="h-12"
          />

          <div>
            <p className="text-lg font-bold text-white">
              Ruben PELAGE
            </p>

            <p className="text-xs text-white/45">
              Création & protection de patrimoine
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-white/60 hover:text-white">
            Accueil
          </a>

          <a
            href="/methode"
            className="text-white/60 hover:text-white"
          >
            Méthode
          </a>

          <a
            href="/audit"
            className="text-white/60 hover:text-white"
          >
            Audit
          </a>

          <a
            href="/contact"
            className="text-white/60 hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href={calendly}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black md:inline-flex"
        >
          Réserver mon audit
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-sm text-white/45">
      <div className="flex justify-center gap-6 text-white">
        <a href={instagram} target="_blank" rel="noreferrer">
          <Instagram />
        </a>

        <a href={linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
        </a>

        <a href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle />
        </a>

        <a href={email}>
          <Mail />
        </a>
      </div>

      <p className="mt-6">
        © 2026 Ruben PELAGE · N° ORIAS : 22005046
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <a href="/mentions-legales" className="underline">
          Mentions légales
        </a>

        <a href="/confidentialite" className="underline">
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Clarté · Stratégie · Patrimoine
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          Ton argent doit avoir une stratégie.
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-9 text-white/70">
          J’aide les actifs, familles et entrepreneurs à
          transformer le flou financier en décisions
          stratégiques grâce à une approche claire,
          exigeante et pensée pour le long terme.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black"
          >
            Contactez-moi
            <MessageCircle size={18} />
          </a>

          <a
            href="/audit"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white"
          >
            En savoir plus
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="relative rounded-[2.5rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        />
      </div>
    </section>
  );
}

function MethodCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-white/60">
        {text}
      </p>
    </div>
  );
}

function MethodePage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Méthode Table / Frigo / Congélo
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Une structure claire pour ton argent.
          </h1>

          <p className="mt-8 text-xl leading-9 text-white/65">
            Une méthode pensée pour reprendre le contrôle,
            sécuriser ton avenir et construire un patrimoine
            durable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <MethodCard
            icon={Wallet}
            title="La Table"
            text="Le quotidien : charges, dépenses, équilibre et stabilité financière."
          />

          <MethodCard
            icon={ShieldCheck}
            title="Le Frigo"
            text="La sécurité : épargne, imprévus, sérénité et protection."
          />

          <MethodCard
            icon={Snowflake}
            title="Le Congélo"
            text="Le long terme : investissement, retraite, patrimoine et transmission."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AuditPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Audit financier offert
        </p>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          30 minutes pour faire le point.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/65">
          Un échange stratégique pour identifier les
          blocages, clarifier les priorités et définir des
          axes d’optimisation adaptés à votre situation.
        </p>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 text-left md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-bold">
              Ce que nous analysons
            </h3>

            <ul className="mt-6 space-y-4 text-white/65">
              <li>• Budget et organisation financière</li>
              <li>• Épargne et sécurité</li>
              <li>• Fiscalité</li>
              <li>• Protection du foyer</li>
              <li>• Vision patrimoniale</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-8">
            <h3 className="text-2xl font-bold">
              Réserver un audit
            </h3>

            <p className="mt-4 leading-8 text-white/70">
              Échange offert en visio ou par téléphone.
            </p>

            <a
              href={calendly}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Parlons de votre situation.
          </h1>

          <p className="mt-8 text-xl leading-9 text-white/65">
            Chaque stratégie commence par une conversation
            claire.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <MessageCircle className="text-[#D4AF37]" />

            <h3 className="mt-6 text-2xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-3 text-white/60">
              Échange rapide et direct.
            </p>
          </a>

          <a
            href={email}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <Mail className="text-[#D4AF37]" />

            <h3 className="mt-6 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-3 text-white/60">
              contact@pelageruben.com
            </p>
          </a>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <Phone className="text-[#D4AF37]" />

            <h3 className="mt-6 text-2xl font-bold">
              Audit offert
            </h3>

            <p className="mt-3 text-white/60">
              Réserver un échange stratégique.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path === "/methode") return <MethodePage />;
  if (path === "/audit") return <AuditPage />;
  if (path === "/contact") return <ContactPage />;

  return <HomePage />;
}
