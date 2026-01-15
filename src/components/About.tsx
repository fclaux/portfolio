import { useScrollReveal } from '../hooks/useScrollReveal'

export const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="a-propos"
      ref={ref}
      className={`glass-panel relative overflow-hidden px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="absolute -left-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
          <span className="text-2xl font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
            À propos
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Construire des expériences utiles et mémorables
          </h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Depuis mes premiers projets étudiants, je m'investis dans des produits numériques qui répondent à de vrais besoins. Je privilégie un design sobre, des performances solides et une collaboration transparente avec l'équipe projet.
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Mon objectif : rejoindre une équipe tech où je peux concevoir des interfaces engageantes, participer aux décisions produit et apporter ma rigueur dans le suivi des fonctionnalités.
          </p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              - Produit centré utilisateur
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              - Architecture front & back maîtrisée
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              - Veille technologique continue
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              - Collaboration et feedback réguliers
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-800/40 to-slate-900/60 shadow-xl backdrop-blur-xl">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
                  ADN Professionnel
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Vision produit
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  Je conçois chaque fonctionnalité comme un service utile et mesurable.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100/20 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Valeurs clés
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  <li>Transparence & pédagogie technique</li>
                  <li>Tests et suivi qualité continus</li>
                  <li>Performance et accessibilité dès la conception</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
