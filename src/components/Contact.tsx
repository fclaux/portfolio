import type { FormEventHandler } from 'react'
import { socialLinks } from '../data/socials'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
} as const

export const Contact = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`glass-panel px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
            Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Construisons un projet ensemble
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300">
            Une idée, un besoin, une question ? Je suis disponible pour discuter d'opportunités, d'accompagnements techniques ou de collaborations associatives.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = contactIconMap[social.platform]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 dark:text-slate-200"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-inner backdrop-blur-xl dark:border-white/10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Nom complet
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-normal text-slate-900 shadow-inner outline-none transition-colors focus:border-sky-400 focus:bg-white/20 dark:text-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="vous@example.com"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-normal text-slate-900 shadow-inner outline-none transition-colors focus:border-sky-400 focus:bg-white/20 dark:text-white"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              placeholder="Décrivez votre projet ou votre besoin..."
              rows={6}
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-normal text-slate-900 shadow-inner outline-none transition-colors focus:border-sky-400 focus:bg-white/20 dark:text-white"
              required
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Réponse sous 48h avec un premier échange par visio ou téléphone.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
