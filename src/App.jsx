import React, { useState } from "react";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Phone,
  Euro,
  Rocket,
  Globe,
  MoreVertical,
  ArrowLeft,
  Mail,
  FileText,
  ShieldCheck,
  Wallet,
  Snowflake,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";
const email = "mailto:ruben.pelage@gmail.com";

function LinkButton({ icon: Icon, title, subtitle, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
    >
      <div className="flex items-center gap-5">
        <Icon size={34} strokeWidth={2.3} className="text-[#D4AF37]" />
        <div>
          <p className="text-lg font-semibold leading-tight">{title}</p>
          {subtitle && <p className="mt-1 text-sm text-white/45">{subtitle}</p>}
        </div>
      </div>
      <MoreVertical className="text-white/35" />
    </a>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/45">
      <div className="flex justify-center gap-6 text-white/70">
        <a href={instagram} target="_blank" rel="noreferrer">
          <Instagram size={24} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={24} />
        </a>
        <a href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={24} />
        </a>
        <a href={email}>
          <Mail size={24} />
        </a>
      </div>

      <p className="mt-6 font-medium text-white/65">© 2026 Ruben PELAGE</p>
      <p className="mt-1">
        Création & protection de patrimoine · N° ORIAS : 22005046
      </p>
      <p className="mt-1">Martinique · France</p>

      <div className="mt-5 flex justify-center gap-4">
        <button
          onClick={() => setPage("legal")}
          className="underline underline-offset-4"
        >
          Mentions légales
        </button>
        <button
          onClick={() => setPage("privacy")}
          className="underline underline-offset-4"
        >
          Politique de confidentialité
        </button>
      </div>
    </footer>
  );
}

function MethodSection() {
  return (
    <section className="mt-14 rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] px-6 py-10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Méthode Table / Frigo / Congélo
        </p>

        <h2 className="mx-auto mt-5 max-w-md text-4xl font-bold leading-tight">
          Une mission précise pour chaque euro.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/55">
          Transformer le flou financier en structure claire : vivre, sécuriser
          et construire durablement.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <Wallet size={28} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Présent
              </p>
              <h3 className="mt-2 text-2xl font-bold">La Table</h3>
              <p className="mt-3 leading-7 text-white/55">
                Ce qui finance le quotidien : charges, dépenses, arbitrages et
                stabilité.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#008080]/20 text-[#65d6d6]">
              <ShieldCheck size={28} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#65d6d6]">
                Protection
              </p>
              <h3 className="mt-2 text-2xl font-bold">Le Frigo</h3>
              <p className="mt-3 leading-7 text-white/55">
                Ce qui sécurise l’avenir proche : épargne disponible, imprévus
                et sérénité.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <Snowflake size={28} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Patrimoine
              </p>
              <h3 className="mt-2 text-2xl font-bold">Le Congélo</h3>
              <p className="mt-3 leading-7 text-white/55">
                Ce qui construit le long terme : investissement, retraite,
                transmission et patrimoine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-6 text-center">
        <TrendingUp className="mx-auto text-[#D4AF37]" size={34} />
        <p className="mt-4 text-xl font-semibold leading-snug">
          Un argent sans stratégie crée du stress.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-white/55">
          Un argent structuré crée de la liberté, de la vision et des
          possibilités.
        </p>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-10 text-white">
      <div className="mx-auto max-w-xl text-center">
        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-40 w-40 rounded-full border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        />

        <h1 className="mt-8 text-5xl font-bold tracking-tight">
          Ruben PELAGE
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-2xl font-medium leading-snug text-white/90">
          J’aide les actifs, familles et entrepreneurs à transformer le flou
          financier en décisions stratégiques.
        </p>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/50">
          Une approche claire, exigeante et pensée pour le long terme.
        </p>

        <div className="mt-8 flex justify-center gap-8 text-white">
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
            className="block rounded-3xl bg-[#D4AF37] px-6 py-5 text-lg font-semibold text-black shadow-[0_18px_50px_rgba(212,175,55,0.25)]"
          >
            Contactez-moi
          </a>

          <button
            onClick={() => setPage("more")}
            className="w-full rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-5 text-lg font-semibold text-white"
          >
            En savoir plus
          </button>
        </div>

        <MethodSection />

        <Footer setPage={setPage} />
      </div>
    </main>
  );
}

function MorePage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-xl">
        <button
          onClick={() => setPage("home")}
          className="mb-6 flex items-center gap-2 text-white/60"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-36 w-36 rounded-full border border-white/10 object-cover"
        />

        <h1 className="mt-7 text-center text-4xl font-bold">Ruben PELAGE</h1>

        <p className="mx-auto mt-5 max-w-lg text-center text-xl font-medium leading-snug text-white/80">
          Mes liens utiles pour prendre rendez-vous ou avancer sur ta stratégie
          financière.
        </p>

        <div className="mt-10 space-y-5">
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

          <LinkButton icon={Globe} title="Site web" href="#" />
        </div>

        <Footer setPage={setPage} />
      </div>
    </main>
  );
}

function LegalPage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => setPage("home")}
          className="mb-8 flex items-center gap-2 text-white/60"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl">
          <FileText className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold">Mentions légales</h1>

          <div className="mt-8 space-y-7 text-sm leading-7 text-white/65">
            <p>
              <strong className="text-white">Éditeur :</strong> Ruben PELAGE —
              Conseiller en création et protection de patrimoine.
            </p>
            <p>
              <strong className="text-white">N° ORIAS :</strong> 22005046
            </p>
            <p>
              <strong className="text-white">Email :</strong>{" "}
              ruben.pelage@gmail.com
              <br />
              <strong className="text-white">Téléphone :</strong> +596 696 29
              89 21
            </p>
            <p>
              <strong className="text-white">Hébergement :</strong> Vercel Inc.,
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>
            <p>
              Les contenus du site sont protégés par le droit de la propriété
              intellectuelle. Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>

        <Footer setPage={setPage} />
      </div>
    </main>
  );
}

function PrivacyPage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => setPage("home")}
          className="mb-8 flex items-center gap-2 text-white/60"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl">
          <ShieldCheck className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>

          <div className="mt-8 space-y-7 text-sm leading-7 text-white/65">
            <p>
              Les données pouvant être collectées incluent : nom, prénom,
              adresse e-mail, numéro de téléphone et informations communiquées
              volontairement.
            </p>
            <p>
              Elles sont utilisées uniquement pour répondre aux demandes de
              contact, organiser les rendez-vous et assurer le suivi des
              échanges.
            </p>
            <p>
              Aucune donnée personnelle n’est vendue ou transmise à des tiers à
              des fins commerciales.
            </p>
            <p>
              Conformément au RGPD, vous pouvez demander l’accès, la
              rectification ou la suppression de vos données à :
              ruben.pelage@gmail.com.
            </p>
          </div>
        </div>

        <Footer setPage={setPage} />
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "more") return <MorePage setPage={setPage} />;
  if (page === "legal") return <LegalPage setPage={setPage} />;
  if (page === "privacy") return <PrivacyPage setPage={setPage} />;

  return <HomePage setPage={setPage} />;
}
