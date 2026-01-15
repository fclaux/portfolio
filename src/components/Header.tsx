import { useEffect, useState } from 'react'
import { navigationItems } from '../data/navigation'
import { socialLinks } from '../data/socials'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import ThemeToggle from './ThemeToggle'

type HeaderProps = {
  readonly isDark: boolean
  readonly onToggleTheme: () => void
}

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
} as const

export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const { body } = document

    if (isMenuOpen) {
      body.style.setProperty('overflow', 'hidden')
    } else {
      body.style.removeProperty('overflow')
    }

    return () => {
      body.style.removeProperty('overflow')
    }
  }, [isMenuOpen])

  const handleNavigate = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-6xl px-6 pt-6">
      <div className="glass-panel flex items-center justify-between gap-4 px-6 py-4">
        <a href="#accueil" className="text-lg font-semibold tracking-tight">
          Florian Claux
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.platform]
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-800 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20 dark:text-slate-100"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-900 transition-colors hover:bg-white/20 dark:text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="sr-only">Ouvrir la navigation</span>
          <svg
            aria-hidden={true}
            className={`h-5 w-5 transition-transform ${isMenuOpen ? 'rotate-45' : ''}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            fill="none"
            strokeLinecap="round"
          >
            <path d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} mt-3 overflow-hidden transition-opacity duration-300`}
      >
        <div className="glass-panel flex flex-col gap-4 px-6 py-6">
          <nav className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className="text-base font-medium text-slate-800 transition-colors duration-300 hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.platform]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-white/20 dark:text-slate-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
