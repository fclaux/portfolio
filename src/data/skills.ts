export type Skill = {
  readonly name: string
  readonly description?: string
}

export type SkillCategory = {
  readonly title: string
  readonly skills: Skill[]
}

export const skillsByCategory: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Figma' },
      { name: 'Agilité & Scrum' },
    ],
  },
]
