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
  ArrowRight,
} from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.%20Voici%20ma%20situation%20:";
const instagram = "https://instagram.com/__rub3n__";
const linkedin = "https://www.linkedin.com/in/rubenpelage";
const email = "mailto:ruben.pelage@gmail.com";

function Footer({ setPage }) {
  return (
    <footer className="mt-20 border-t border-white/10 pt-8 text-center text-xs text-white/45">
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
        <button onClick={() => setPage("legal")} className="underline underline-offset-4">
          Mentions légales
        </button>
        <button onClick={() => setPage("privacy")} className="underline underline-offset-4">
          Politique de confidentialité
        </button>
      </div>
    </footer>
  );
}

function MethodCard({ icon: Icon, label, title, text, color = "gold" }) {
  const accent =
    color === "teal"
      ? "text-[#65d6d6] bg-[#008080]/20"
      : "text-[#D4AF37] bg-[#D4AF37]/10";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-left transition hover:-translate-y-1 hover:border-[#D4AF37]/30">
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}>
        <Icon size={28} />
      </div>

      <p
        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
          color === "teal" ? "text-[#65d6d6]" : "text-[#D4AF37]"
        }`}
      >
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-white/55">{text}</p>
    </div>
  );
}

function MethodSection() {
  return (
    <section id="methode" className="mx-auto mt-24 max-w-7xl px-6">
      <div className="rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Méthode Table / Frigo / Congélo
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Une mission précise pour chaque euro.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            Transformer le flou financier en structure claire : maîtriser le quotidien,
            sécuriser l’avenir proche et construire durablement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <MethodCard
            icon={Wallet}
            label="Présent"
            title="La Table"
            text="Ce qui finance le quotidien : charges, dépenses, arbitrages et stabilité."
          />

          <MethodCard
            icon={ShieldCheck}
            label="Protection"
            title="Le Frigo"
            color="teal"
            text="Ce qui sécurise l’avenir proche : épargne disponible, imprévus et sérénité."
          />

          <MethodCard
            icon={Snowflake}
            label="Patrimoine"
            title="Le Congélo"
            text="Ce qui construit le long terme : investissement, retraite, transmission et patrimoine."
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-6 text-center">
          <TrendingUp className="mx-auto text-[#D4AF37]" size={34} />

          <p className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
            Un argent sans stratégie crée du stress.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Un argent structuré crée de la liberté, de la vision et des possibilités.
          </p>
        </div>
      </div>
    </section>
  );
}

function LinkButton({ icon: Icon, title, subtitle, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-5 text-left text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
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

function HomePage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060606]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo-blanc-ecriture.png"
              alt="Ruben PELAGE"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-bold">Ruben PELAGE</p>
              <p className="text-xs text-white/45">
                Création & protection de patrimoine
              </p>
            </div>
          </div>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black md:inline-flex"
          >
            Réserver mon audit
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:min-h-[720px] md:grid-cols-[1fr_0.9fr] md:py-24">
        <div className="text-center md:text-left">
          <img
            src="/portrait-ruben.png"
            alt="Ruben PELAGE"
            className="mx-auto h-36 w-36 rounded-full border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:hidden"
          />

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:mt-0 md:text-7xl lg:text-8xl">
            Clarté.
            <br />
            Stratégie.
            <br />
            <span className="text-[#D4AF37]">Patrimoine.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-xl font-medium leading-8 text-white/80 md:mx-0 md:text-2xl">
            J’aide les actifs, familles et entrepreneurs à transformer le flou
            financier en décisions stratégiques.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/50 md:mx-0 md:text-lg">
            Une approche claire, exigeante et pensée pour le long terme.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row md:justify-start">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-4 font-semibold text-black shadow-[0_18px_50px_rgba(212,175,55,0.25)]"
            >
              Contactez-moi <MessageCircle size={18} />
            </a>

            <button
              onClick={() => setPage("more")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white"
            >
              En savoir plus <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-9 flex justify-center gap-7 text-white md:justify-start">
            <a href={instagram} target="_blank" rel="noreferrer">
              <Instagram size={34} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={34} />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={34} />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-8 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <img
              src="/portrait-ruben.png"
              alt="Ruben PELAGE"
              className="relative h-[520px] w-full rounded-[3rem] border border-white/10 object-cover grayscale shadow-[0_35px_100px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </section>

      <MethodSection />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-4">
          <LinkButton
            icon={Phone}
            title="Appel découverte 30 min"
            subtitle="Calendly · Gratuit"
            href={calendly}
          />

          <LinkButton
            icon={Euro}
            title="Aide déclaration d’impôt"
            href={whatsapp}
          />

          <LinkButton
            icon={Rocket}
            title="Audit indépendant"
            subtitle="Gratuit"
            href={whatsapp}
          />

          <LinkButton icon={Globe} title="Site web" href="#" />
        </div>

        <Footer setPage={setPage} />
      </section>
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
          <ArrowLeft size={20} /> Retour
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
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => setPage("home")}
          className="mb-8 flex items-center gap-2 text-white/60"
        >
          <ArrowLeft size={20} /> Retour
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl md:p-10">
          <FileText className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold md:text-4xl">Mentions légales</h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-xl font-semibold text-white">Éditeur du site</h2>
              <p className="mt-3">
                Ruben PELAGE
                <br />
                Conseiller en création et protection de patrimoine
                <br />
                N° ORIAS : 22005046
                <br />
                Site internet : ruben-pelage-landing.vercel.app
                <br />
                Email : ruben.pelage@gmail.com
                <br />
                Téléphone : +596 696 29 89 21
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Activité</h2>
              <p className="mt-3">
                Le site a pour objet la présentation d’activités d’accompagnement,
                d’information et de conseil en création et protection de patrimoine.
                Les informations diffusées sont fournies à titre informatif et ne
                constituent ni un conseil juridique, fiscal ou financier personnalisé,
                ni une offre contractuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Immatriculation ORIAS
              </h2>
              <p className="mt-3">Immatriculé à l’ORIAS sous le numéro : 22005046.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Hébergement</h2>
              <p className="mt-3">
                Site hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L’ensemble des contenus présents sur ce site, notamment les textes,
                images, logo, identité visuelle, éléments graphiques et structure,
                est protégé par le droit de la propriété intellectuelle. Toute
                reproduction, diffusion, modification ou exploitation, totale ou
                partielle, sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Données personnelles</h2>
              <p className="mt-3">
                Les données éventuellement collectées via WhatsApp, Calendly ou tout
                autre moyen de contact sont utilisées uniquement dans le cadre des
                échanges avec les utilisateurs du site. Aucune donnée personnelle
                n’est vendue ou cédée à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Cookies</h2>
              <p className="mt-3">
                Le site peut utiliser des cookies techniques nécessaires à son bon
                fonctionnement ainsi que des outils de mesure d’audience. L’utilisateur
                peut configurer son navigateur afin de refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Responsabilité</h2>
              <p className="mt-3">
                L’éditeur du site ne saurait être tenu responsable d’éventuelles
                interruptions du site, d’erreurs ou omissions dans les contenus, ou
                de dommages directs ou indirects liés à l’utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Email : ruben.pelage@gmail.com
                <br />
                Téléphone : +596 696 29 89 21
              </p>
            </section>
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
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => setPage("home")}
          className="mb-8 flex items-center gap-2 text-white/60"
        >
          <ArrowLeft size={20} /> Retour
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl md:p-10">
          <ShieldCheck className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold md:text-4xl">
            Politique de confidentialité
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
              <p className="mt-3">
                Cette politique de confidentialité informe les utilisateurs sur la
                manière dont leurs données personnelles peuvent être collectées,
                utilisées et protégées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Responsable du traitement
              </h2>
              <p className="mt-3">
                Ruben PELAGE
                <br />
                Conseiller en création et protection de patrimoine
                <br />
                Email : ruben.pelage@gmail.com
                <br />
                Téléphone : +596 696 29 89 21
                <br />
                N° ORIAS : 22005046
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Données collectées</h2>
              <p className="mt-3">
                Les données pouvant être collectées incluent : nom, prénom,
                adresse e-mail, numéro de téléphone, informations communiquées
                volontairement, données transmises via WhatsApp, Calendly ou formulaire
                de contact, ainsi que certaines données techniques comme l’adresse IP,
                le type de navigateur, les données de navigation et les cookies techniques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Finalité de la collecte
              </h2>
              <p className="mt-3">
                Les données collectées sont utilisées pour répondre aux demandes de
                contact, organiser des rendez-vous, fournir des informations ou
                accompagnements personnalisés, assurer le suivi des échanges et améliorer
                l’expérience utilisateur du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Base légale du traitement
              </h2>
              <p className="mt-3">
                Les traitements réalisés reposent sur le consentement de l’utilisateur,
                l’exécution de mesures précontractuelles ou l’intérêt légitime lié à
                l’activité professionnelle présentée sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Conservation des données
              </h2>
              <p className="mt-3">
                Les données personnelles sont conservées uniquement pendant la durée
                nécessaire aux finalités pour lesquelles elles ont été collectées, sauf
                obligation légale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Sécurité des données</h2>
              <p className="mt-3">
                Des mesures raisonnables de sécurité sont mises en œuvre afin de protéger
                les données contre l’accès non autorisé, la perte, la divulgation ou toute
                utilisation abusive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">8. Services tiers</h2>
              <p className="mt-3">
                Le site peut utiliser des services externes tels que Calendly, WhatsApp,
                Instagram, LinkedIn et Vercel. Ces services disposent de leurs propres
                politiques de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">9. Cookies</h2>
              <p className="mt-3">
                Le site peut utiliser des cookies techniques et analytiques afin d’assurer
                son bon fonctionnement, de mesurer l’audience et d’améliorer l’expérience
                utilisateur. L’utilisateur peut désactiver les cookies via les paramètres de
                son navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                10. Droits des utilisateurs
              </h2>
              <p className="mt-3">
                Conformément au RGPD, vous disposez d’un droit d’accès, de rectification,
                de suppression, d’opposition, de limitation du traitement et de portabilité
                des données. Toute demande peut être adressée à : ruben.pelage@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                11. Modification de la politique
              </h2>
              <p className="mt-3">
                Cette politique de confidentialité peut être modifiée à tout moment afin de
                rester conforme aux évolutions légales ou techniques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">12. Contact</h2>
              <p className="mt-3">
                Ruben PELAGE
                <br />
                ruben.pelage@gmail.com
                <br />
                +596 696 29 89 21
              </p>
            </section>
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
