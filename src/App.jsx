import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const calendly = "https://calendly.com/ruben-pelage/consultation";
const whatsapp = "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20point%20sur%20ma%20situation%20financière.";

function Button({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[#D4AF37] text-black hover:bg-[#e6c45c] transition-all"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/logo-blanc-ecriture.png" className="h-10" />
          <span className="text-sm tracking-wide text-white/80">
            Ruben PELAGE
          </span>
        </div>

        <Button href={calendly}>Audit offert</Button>
      </header>

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
            Tu gagnes de l’argent.
            <br />
            Mais tu n’as pas encore de stratégie.
          </h1>

          <p className="mt-6 text-white/50 text-lg">
            Je t’aide à structurer ton argent pour protéger ton présent
            et construire ton futur.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={calendly}>
              Réserver un audit <ArrowRight size={16} />
            </Button>

            <a
              href={whatsapp}
              target="_blank"
              className="text-white/60 hover:text-white transition"
            >
              WhatsApp <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-white/30 pb-6">
        Ruben PELAGE — N° ORIAS : 22005046
      </footer>
    </main>
  );
}
