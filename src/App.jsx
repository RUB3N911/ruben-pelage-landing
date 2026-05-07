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
  FileText,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";

const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.";

const calendly = "https://calendly.com/ruben-pelage/consultation";

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
            <p className="text-lg font-bold text-white">Ruben PELAGE</p>
            <p className="text-xs text-white/45">
              Création & protection de patrimoine
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-white/60 hover:text-white">Accueil</a>
          <a href="/methode" className="text-white/60 hover:text-white">Méthode</a>
          <a href="/audit" className="text-white/60 hover:text-white">Audit</a>
          <a href="/contact" className="text-white/60 hover:text-white">Contact</a>
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
        <a href={instagram} target="_blank" rel="noreferrer"><Instagram /></a>
        <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
        <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /></a>
        <a href={email}><Mail /></a>
      </div>

      <p className="mt-6">© 2026 Ruben PELAGE · N° ORIAS : 22005046</p>

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

function BackButton() {
  return (
    <a href="/" className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-white">
      <ArrowLeft size={20} />
      Retour
    </a>
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
          J’aide les actifs, familles et entrepreneurs à transformer le flou
          financier en décisions stratégiques grâce à une approche claire,
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

function MethodCard({ icon: Icon, label, title, text, color = "gold", delay = "0ms" }) {
  const isTeal = color === "teal";

  return (
    <div
      style={{ animationDelay: delay }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 opacity-0 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 animate-[fadeUp_0.8s_ease_forwards] hover:-translate-y-2 hover:border-[#D4AF37]/40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div
        className={`relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${
          isTeal ? "bg-[#008080]/20 text-[#65d6d6]" : "bg-[#D4AF37]/10 text-[#D4AF37]"
        } transition duration-500 group-hover:scale-110`}
      >
        <Icon size={30} />
      </div>

      <p
        className={`relative text-xs font-semibold uppercase tracking-[0.35em] ${
          isTeal ? "text-[#65d6d6]" : "text-[#D4AF37]"
        }`}
      >
        {label}
      </p>

      <h3 className="relative mt-4 text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="relative mt-5 leading-8 text-white/60">
        {text}
      </p>
    </div>
  );
}

function MethodePage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              opacity: .35;
              transform: scale(1);
            }
            50% {
              opacity: .75;
              transform: scale(1.04);
            }
          }

          @keyframes lineGrow {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}
      </style>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#0d0d0d] px-6 py-16 shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:px-12">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px] animate-[glowPulse_5s_ease-in-out_infinite]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Méthode Table / Frigo / Congélo
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Une mission précise pour chaque euro.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
              Transformer le flou financier en structure claire : maîtriser le quotidien,
              sécuriser l’avenir proche et construire durablement.
            </p>

            <div className="mx-auto mt-10 h-px max-w-xl origin-left bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-[lineGrow_1.2s_ease_forwards]" />
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            <MethodCard
              icon={Wallet}
              label="Présent"
              title="La Table"
              delay="100ms"
              text="Ce qui finance le quotidien : charges, dépenses, arbitrages et stabilité."
            />

            <MethodCard
              icon={ShieldCheck}
              label="Protection"
              title="Le Frigo"
              color="teal"
              delay="300ms"
              text="Ce qui sécurise l’avenir proche : épargne disponible, imprévus et sérénité."
            />

            <MethodCard
              icon={Snowflake}
              label="Patrimoine"
              title="Le Congélo"
              delay="500ms"
              text="Ce qui construit le long terme : investissement, retraite, transmission et patrimoine."
            />
          </div>

          <div
            style={{ animationDelay: "700ms" }}
            className="relative mx-auto mt-14 max-w-3xl rounded-[2rem] border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-8 text-center opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
          >
            <TrendingUp className="mx-auto text-[#D4AF37]" size={38} />

            <p className="mt-5 text-2xl font-bold leading-snug">
              Un argent sans stratégie crée du stress.
            </p>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-white/60">
              Un argent structuré crée de la liberté, de la vision et des possibilités.
            </p>
          </div>
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
          Un échange stratégique pour identifier les blocages, clarifier les
          priorités et définir des axes d’optimisation adaptés à votre situation.
        </p>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 text-left md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-bold">Ce que nous analysons</h3>

            <ul className="mt-6 space-y-4 text-white/65">
              <li>• Budget et organisation financière</li>
              <li>• Épargne et sécurité</li>
              <li>• Fiscalité</li>
              <li>• Protection du foyer</li>
              <li>• Vision patrimoniale</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-8">
            <h3 className="text-2xl font-bold">Réserver un audit</h3>

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
            Chaque stratégie commence par une conversation claire.
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
            <h3 className="mt-6 text-2xl font-bold">WhatsApp</h3>
            <p className="mt-3 text-white/60">Échange rapide et direct.</p>
          </a>

          <a
            href={email}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <Mail className="text-[#D4AF37]" />
            <h3 className="mt-6 text-2xl font-bold">Email</h3>
            <p className="mt-3 text-white/60">contact@pelageruben.com</p>
          </a>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <Phone className="text-[#D4AF37]" />
            <h3 className="mt-6 text-2xl font-bold">Audit offert</h3>
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

function LegalPage() {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-3xl">
        <BackButton />

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl md:p-10">
          <FileText className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold md:text-4xl">Mentions légales</h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-xl font-semibold text-white">
                Éditeur du site
              </h2>
              <p className="mt-3">
                Ruben PELAGE
                <br />
                Conseiller en création et protection de patrimoine
                <br />
                N° ORIAS : 22005046
                <br />
                Site internet : pelageruben.com
                <br />
                Email : contact@pelageruben.com
                <br />
                Téléphone : +596 696 29 89 21
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Activité</h2>
              <p className="mt-3">
                Le site a pour objet la présentation d’activités
                d’accompagnement, d’information et de conseil en création et
                protection de patrimoine. Les informations diffusées sont
                fournies à titre informatif et ne constituent ni un conseil
                juridique, fiscal ou financier personnalisé, ni une offre
                contractuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Immatriculation ORIAS
              </h2>
              <p className="mt-3">
                Immatriculé à l’ORIAS sous le numéro : 22005046.
              </p>
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
                L’ensemble des contenus présents sur ce site, notamment les
                textes, images, logo, identité visuelle, éléments graphiques et
                structure, est protégé par le droit de la propriété
                intellectuelle. Toute reproduction, diffusion, modification ou
                exploitation, totale ou partielle, sans autorisation écrite
                préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Données personnelles
              </h2>
              <p className="mt-3">
                Les données éventuellement collectées via WhatsApp, Calendly ou
                tout autre moyen de contact sont utilisées uniquement dans le
                cadre des échanges avec les utilisateurs du site. Aucune donnée
                personnelle n’est vendue ou cédée à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Cookies</h2>
              <p className="mt-3">
                Le site peut utiliser des cookies techniques nécessaires à son
                bon fonctionnement ainsi que des outils de mesure d’audience.
                L’utilisateur peut configurer son navigateur afin de refuser les
                cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Responsabilité
              </h2>
              <p className="mt-3">
                L’éditeur du site ne saurait être tenu responsable d’éventuelles
                interruptions du site, d’erreurs ou omissions dans les contenus,
                ou de dommages directs ou indirects liés à l’utilisation du
                site.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-3xl">
        <BackButton />

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl md:p-10">
          <ShieldCheck className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold md:text-4xl">
            Politique de confidentialité
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="mt-3">
                Cette politique de confidentialité informe les utilisateurs sur
                la manière dont leurs données personnelles peuvent être
                collectées, utilisées et protégées.
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
                Email : contact@pelageruben.com
                <br />
                Téléphone : +596 696 29 89 21
                <br />
                N° ORIAS : 22005046
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Données collectées
              </h2>
              <p className="mt-3">
                Les données pouvant être collectées incluent : nom, prénom,
                adresse e-mail, numéro de téléphone, informations communiquées
                volontairement, données transmises via WhatsApp, Calendly ou
                formulaire de contact, ainsi que certaines données techniques
                comme l’adresse IP, le type de navigateur, les données de
                navigation et les cookies techniques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Finalité de la collecte
              </h2>
              <p className="mt-3">
                Les données collectées sont utilisées pour répondre aux demandes
                de contact, organiser des rendez-vous, fournir des informations
                ou accompagnements personnalisés, assurer le suivi des échanges
                et améliorer l’expérience utilisateur du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Droits des utilisateurs
              </h2>
              <p className="mt-3">
                Conformément au RGPD, vous disposez d’un droit d’accès, de
                rectification, de suppression, d’opposition, de limitation du
                traitement et de portabilité des données. Toute demande peut être
                adressée à : contact@pelageruben.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Contact</h2>
              <p className="mt-3">
                Ruben PELAGE
                <br />
                contact@pelageruben.com
                <br />
                +596 696 29 89 21
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
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
  if (path === "/mentions-legales") return <LegalPage />;
  if (path === "/confidentialite") return <PrivacyPage />;

  return <HomePage />;
}
