import { useScrollReveal } from '../hooks/useScrollReveal'

export const Engagement = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="engagement"
      ref={ref}
      className={`glass-panel relative overflow-hidden px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="absolute -top-16 right-10 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 left-4 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />

  <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
          <span className="text-2xl font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
            Engagement associatif
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Membre actif de mon club de Jiu-Jitsu Brésilien
          </h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            J'accompagne l'organisation des stages, la promotion du club et le suivi des nouveaux adhérents. Cet investissement nourrit mon sens du collectif et mon exigence dans la préparation de chaque événement.
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Sur le tatami comme en développement, je valorise la progression continue, la rigueur technique et l'entraide. Ces valeurs guident ma manière de travailler en équipe.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Rôle
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Coordinateur événements & communication
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Valeurs cultivées
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                <li>Esprit d'équipe</li>
                <li>Résilience</li>
                <li>Persévérance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-square overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-emerald-400/40 via-white/10 to-sky-500/30 shadow-2xl backdrop-blur-xl dark:border-white/10">
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Clube BJJ
              </span>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/10 text-4xl font-black tracking-tight">
                JJ
              </div>
              <p className="text-sm text-white/80">
                Sessions hebdomadaires, préparation aux compétitions locales et ateliers d'initiation pour les nouveaux pratiquants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engagement
