function LegalPage({ setPage }) {
  return (
    <main className="min-h-screen bg-[#060606] px-6 py-8 text-white">
      <div className="mx-auto max-w-3xl">
        <button onClick={() => setPage("home")} className="mb-8 flex items-center gap-2 text-white/60">
          <ArrowLeft size={20} /> Retour
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl md:p-10">
          <FileText className="mb-5 text-[#D4AF37]" size={34} />
          <h1 className="text-3xl font-bold md:text-4xl">Mentions légales</h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-xl font-semibold text-white">Éditeur du site</h2>
              <p className="mt-3">
                Ruben PELAGE<br />
                Conseiller en création et protection de patrimoine<br />
                N° ORIAS : 22005046<br />
                Site internet : ruben-pelage-landing.vercel.app<br />
                Email : ruben.pelage@gmail.com<br />
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
              <h2 className="text-xl font-semibold text-white">Immatriculation ORIAS</h2>
              <p className="mt-3">
                Immatriculé à l’ORIAS sous le numéro : 22005046.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Hébergement</h2>
              <p className="mt-3">
                Site hébergé par Vercel Inc.<br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Propriété intellectuelle</h2>
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
                Email : ruben.pelage@gmail.com<br />
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
