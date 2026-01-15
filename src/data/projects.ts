export type Project = {
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly liveUrl: string
  readonly repoUrl: string
  readonly badge: string
  readonly gradientFrom: string
  readonly gradientTo: string
}

export const projects: Project[] = [
  {
    title: 'Free-go',
    description:
      'Planificateur de repas collaboratif qui simplifie la gestion des menus et des courses pour les colocations et familles.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://example.com/free-go',
    repoUrl: 'https://github.com/florianclaux',
    badge: 'Projet collaboratif',
    gradientFrom: 'from-sky-400/70',
    gradientTo: 'to-indigo-500/60',
  },
  {
    title: 'McMMO XP Calculator',
    description:
      "Calculateur d'expérience pour Minecraft permettant d'anticiper la progression et d'optimiser les sessions de jeu.",
    tags: ['Next.js', 'Tailwind CSS', 'API Routes'],
    liveUrl: 'https://fclaux.github.io/valderion-mcmmo/',
    repoUrl: 'https://github.com/fclaux/valderion-mcmmo',
  badge: 'Gaming & data',
    gradientFrom: 'from-emerald-400/70',
    gradientTo: 'to-cyan-500/60',
  },
  {
    title: 'Barber shop',
    description:
      "Site only front d'un barber shop.",
    tags: ['HTML', 'CSS', 'JS', 'Natif'],
    liveUrl: 'https://fclaux.github.io/Test-Site-Github/',
    repoUrl: 'https://github.com/fclaux/Test-Site-Github',
  badge: 'Front & design',
    gradientFrom: 'from-yellow-400/70',
    gradientTo: 'to-orange-500/60',
  },
  {
    title: 'Portfolio personnel',
    description:
      'Site vitrine moderne qui présente mes projets phares, mon expertise et mes engagements associatifs.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com/portfolio',
    repoUrl: 'https://github.com/florianclaux',
    badge: 'Design system',
    gradientFrom: 'from-rose-400/70',
    gradientTo: 'to-purple-500/60',
  },
]
