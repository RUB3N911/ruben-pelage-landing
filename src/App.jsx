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

const calendly =
  "https://calendly.com/ruben-pelage/consultation";

const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:";

const instagram =
  "https://instagram.com/__rub3n__";

const linkedin =
  "https://www.linkedin.com/in/rubenpelage";

function LinkButton({
  icon: Icon,
  title,
  subtitle,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-3xl bg-white px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-5">
        <Icon size={34} strokeWidth={2.3} />

        <div>
          <p className="text-lg font-semibold leading-tight">
            {title}
          </p>

          {subtitle && (
            <p className="mt-1 text-sm text-black/45">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <MoreVertical className="text-black/40" />
    </a>
  );
}

function HomePage({ onMore }) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] px-6 py-10 text-black">
      <div className="mx-auto max-w-xl text-center">
        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />

        <h1 className="mt-8 text-5xl font-bold tracking-tight">
          Ruben PELAGE
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-2xl font-medium leading-snug">
          Conseiller — J’aide les actifs,
          familles et entrepreneurs à
          structurer, protéger et développer
          leur patrimoine.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={42} />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={42} />
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={42} />
          </a>
        </div>

        <div className="mt-12 space-y-5">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl bg-black px-6 py-5 text-lg font-semibold text-white shadow-xl"
          >
            Contactez-moi
          </a>

          <button
            onClick={onMore}
            className="w-full rounded-3xl border border-black px-6 py-5 text-lg font-semibold"
          >
            En savoir plus
          </button>
        </div>

        <p className="mt-10 text-sm text-black/40">
          N° ORIAS : 22005046
        </p>
      </div>
    </main>
  );
}

function MorePage({ onBack }) {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-6 py-8 text-black">
      <div className="mx-auto max-w-xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-black/60"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-36 w-36 rounded-full object-cover"
        />

        <h1 className="mt-7 text-center text-4xl font-bold">
          Ruben PELAGE
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-center text-2xl font-medium leading-snug">
          Création & protection de patrimoine.
          <br />
          Méthode Table / Frigo / Congélo.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={42} />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={42} />
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
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
    <HomePage onMore={() => setPage("more")} />
  ) : (
    <MorePage onBack={() => setPage("home")} />
  );
}
