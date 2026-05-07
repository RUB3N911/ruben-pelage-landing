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
      className="flex items-center justify-between rounded-3xl bg-white px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-5">
        <Icon size={34} strokeWidth={2.3} />
        <div>
          <p className="text-lg font-semibold leading-tight">{title}</p>
          {subtitle && <p className="mt-1 text-sm text-black/45">{subtitle}</p>}
        </div>
      </div>
      <MoreVertical className="text-black/40" />
    </a>
  );
}

function Footer({ goLegal, goPrivacy }) {
  return (
    <footer className="mt-14 border-t border-black/10 pt-8 text-center text-xs text-black/45">
      <div className="flex justify-center gap-6 text-black/70">
        <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={24} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <MessageCircle size={24} />
        </a>
        <a href={email} aria-label="Email">
          <Mail size={24} />
        </a>
      </div>

      <p className="mt-6 font-medium text-black/60">© 2026 Ruben PELAGE</p>
      <p className="mt-1">Création & protection de patrimoine · N° ORIAS : 22005046</p>
      <p className="mt-1">Martinique · France</p>

      <div className="mt-5 flex justify-center gap-4">
        <button onClick={goLegal} className="underline underline-offset-4">
          Mentions légales
        </button>
        <button onClick={goPrivacy} className="underline underline-offset-4">
          Politique de confidentialité
        </button>
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] px-6 py-10 text-black">
      <div className="mx-auto max-w-xl text-center">
        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-40 w-40 rounded-full object-cover"
        />

        <h1 className="mt-8 text-5xl font-bold tracking-tight">Ruben PELAGE</h1>

        <p className="mx-auto mt-5 max-w-lg text-2xl font-medium leading-snug">
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
            className="block rounded-3xl bg-black px-6 py-5 text-lg font-semibold text-white shadow-xl"
          >
            Contactez-moi
          </a>

          <button
            onClick={() => setPage("more")}
            className="w-full rounded-3xl border border-black px-6 py-5 text-lg font-semibold"
          >
            En savoir plus
          </button>
        </div>

        <Footer
          goLegal={() => setPage("legal")}
          goPrivacy={() => setPage("privacy")}
        />
      </div>
    </main>
  );
}

function MorePage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-6 py-8 text-black">
      <div className="mx-auto max-w-xl">
        <button onClick={() => setPage("home")} className="mb-6 flex items-center gap-2 text-black/60">
          <ArrowLeft size={20} />
          Retour
        </button>

        <img
          src="/portrait-ruben.png"
          alt="Ruben PELAGE"
          className="mx-auto h-36 w-36 rounded-full object-cover"
        />

        <h1 className="mt-7 text-center text-4xl font-bold">Ruben PELAGE</h1>

        <p className="mx-auto mt-4 max-w-lg text-center text-2xl font-medium leading-snug">
          Création & protection de patrimoine.
          <br />
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

        <Footer
          goLegal={() => setPage("legal")}
          goPrivacy={() => setPage("privacy")}
        />
      </div>
    </main>
  );
}

function LegalPage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] px-6 py-8 text-black">
      <div className="mx-auto max-w-2xl">
        <button onClick={() => setPage("home")} className="mb-8 flex items-center gap-2 text-black/60">
          <ArrowLeft size={20} />
          Retour
        </button>

        <div className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <FileText className="mb-5" size={34} />
          <h1 className="text-3xl font-bold">Mentions légales</h1>

          <div className="mt-8 space-y-7 text-sm leading-7 text-black/70">
            <div>
              <h2 className="text-lg font-semibold text-black">Éditeur du site</h2>
              <p className="mt-2">
                Ruben PELAGE — Conseiller en création et protection de patrimoine.
                <br />
                N° ORIAS : 22005046
                <br />
                Email : ruben.pelage@gmail.com
                <br />
                Téléphone : +596 696 29 89 21
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Activité</h2>
              <p className="mt-2">
                Le site présente une activité d’information, d’accompagnement et de conseil
                en création et protection de patrimoine. Les informations diffusées sont
                fournies à titre informatif et ne constituent pas un conseil personnalisé
                sans analyse préalable de la situation.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Immatriculation ORIAS</h2>
              <p className="mt-2">
                Immatriculé à l’ORIAS sous le numéro : 22005046.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Hébergement</h2>
              <p className="mt-2">
                Site hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Propriété intellectuelle</h2>
              <p className="mt-2">
                Les textes, images, logos, éléments graphiques et contenus du site sont protégés.
                Toute reproduction ou utilisation sans autorisation préalable est interdite.
              </p>
            </div>
          </div>
        </div>

        <Footer
          goLegal={() => setPage("legal")}
          goPrivacy={() => setPage("privacy")}
        />
      </div>
    </main>
  );
}

function PrivacyPage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] px-6 py-8 text-black">
      <div className="mx-auto max-w-2xl">
        <button onClick={() => setPage("home")} className="mb-8 flex items-center gap-2 text-black/60">
          <ArrowLeft size={20} />
          Retour
        </button>

        <div className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <ShieldCheck className="mb-5" size={34} />
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>

          <div className="mt-8 space-y-7 text-sm leading-7 text-black/70">
            <div>
              <h2 className="text-lg font-semibold text-black">Responsable du traitement</h2>
              <p className="mt-2">
                Ruben PELAGE
                <br />
                Email : ruben.pelage@gmail.com
                <br />
                Téléphone : +596 696 29 89 21
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Données collectées</h2>
              <p className="mt-2">
                Les données pouvant être collectées incluent : nom, prénom, adresse e-mail,
                numéro de téléphone et informations communiquées volontairement lors des échanges.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Utilisation des données</h2>
              <p className="mt-2">
                Les données sont utilisées pour répondre aux demandes de contact,
                organiser des rendez-vous, assurer le suivi des échanges et proposer
                un accompagnement adapté.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Services tiers</h2>
              <p className="mt-2">
                Le site peut utiliser des services externes comme Calendly, WhatsApp,
                Instagram, LinkedIn ou Vercel. Ces services disposent de leurs propres
                politiques de confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Vos droits</h2>
              <p className="mt-2">
                Conformément au RGPD, vous pouvez demander l’accès, la rectification
                ou la suppression de vos données personnelles en écrivant à :
                ruben.pelage@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Conservation</h2>
              <p className="mt-2">
                Les données sont conservées uniquement pendant la durée nécessaire aux finalités
                pour lesquelles elles ont été collectées, sauf obligation légale contraire.
              </p>
            </div>
          </div>
        </div>

        <Footer
          goLegal={() => setPage("legal")}
          goPrivacy={() => setPage("privacy")}
        />
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
