import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-black flex items-center justify-center">
      <div className="text-center px-6">
        <img
          src="/logo-blanc-ecriture.png"
          alt="Ruben PELAGE"
          className="h-20 mx-auto mb-8"
        />

        <h1 className="text-5xl font-serif mb-4">
          Stratégie. Patrimoine. Décisions.
        </h1>

        <p className="text-lg text-black/60 mb-8">
          Je t’aide à structurer ton argent et construire une trajectoire financière solide.
        </p>

        <a
          href="https://calendly.com/ruben-pelage/consultation"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#C99A2E] text-white px-6 py-4 rounded-md font-bold"
        >
          Réserver un audit
        </a>
      </div>
    </main>
  );
}
