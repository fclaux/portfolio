export type SocialPlatform = 'github' | 'linkedin' | 'email'

export type SocialLink = {
  readonly platform: SocialPlatform
  readonly label: string
  readonly url: string
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/fclaux',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/florian-claux-605537294/',
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:florian.claux@etu.unilim.fr',
  },
]
