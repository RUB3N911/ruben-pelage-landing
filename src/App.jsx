import React from "react";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const calendly =
  "https://calendly.com/ruben-pelage/consultation";

const whatsapp =
  "https://wa.me/596696298921?text=Bonjour%20Ruben,%20je%20souhaite%20faire%20un%20audit%20financier.";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black overflow-hidden">

      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">
            <img
              src="/logo-blanc-ecriture.png"
              alt="Ruben PELAGE"
              className="h-14"
            />

            <div>
              <p className="font-serif text-2xl">
                Ruben PELAGE
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Création & protection de patrimoine
              </p>
            </div>
          </div>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex border border-black px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
          >
            Réserver un audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative h-[600px]">

          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] to-transparent z-10" />

          <img
            src="/portrait-ruben.png"
            alt="Ruben PELAGE"
            className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 object-contain grayscale"
          />
        </div>

        {/* CONTENT */}
        <div>

          <div className="inline-flex border border-black px-4 py-2 text-xs uppercase tracking-[0.2em] mb-8">
            Consultant. Stratège. Entrepreneur.
          </div>

          <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Stratégie.
            <br />
            Patrimoine.
            <br />
            <span className="text-[#C99A2E]">
              Décisions.
            </span>
          </h1>

          <div className="mt-8 border-l-2 border-[#C99A2E] pl-6">
            <p className="text-xl leading-9 text-black/70">
              Je t’aide à structurer ton argent,
              clarifier tes décisions et construire
              une trajectoire financière solide.
            </p>

            <p className="mt-5 text-lg font-medium">
              Sans complexité. Sans discours inutile.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href={calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C99A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#d9b04c] transition"
            >
              <CalendarDays size={16} />
              Réserver un audit
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-black px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
