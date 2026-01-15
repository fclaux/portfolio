export type NavigationItem = {
  readonly id: string
  readonly label: string
}

export const navigationItems: NavigationItem[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'contact', label: 'Contact' },
]
