import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Engagement from './components/Engagement'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50/70 to-indigo-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900/70 dark:to-slate-950 dark:text-slate-100">
      {/* Decorative gradients placed behind the layout to support the glassmorphism aesthetic */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-12 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 right-12 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" aria-hidden="true" />
      </div>

      <Header isDark={theme === 'dark'} onToggleTheme={toggleTheme} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-28 md:gap-28 md:pb-32 md:pt-36">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Engagement />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
