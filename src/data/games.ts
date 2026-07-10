import { Building2, Skull, type Icon } from '@/lib/icons'
import { links } from './site'

export interface Game {
  icon: Icon
  name: string
  description: string
  repo: string
  releases: string
}

export const games: Game[] = [
  {
    icon: Building2,
    name: 'Arkham City',
    description:
      'A full C# scripting SDK for Batman: Arkham City, based on the game’s own UnrealScript API.',
    repo: links.city.repo,
    releases: links.city.releases,
  },
  {
    icon: Skull,
    name: 'Arkham Knight',
    description:
      'The same scripting workflow for Batman: Arkham Knight, running on modern .NET.',
    repo: links.knight.repo,
    releases: links.knight.releases,
  },
]
