import { links } from './site'

export interface NavLink {
  label: string
  href: string
}

export const headerNav: NavLink[] = [
  { label: 'Arkham City', href: links.city.repo },
  { label: 'Arkham Knight', href: links.knight.repo },
  { label: 'Wiki', href: links.city.wiki },
  { label: 'Releases', href: links.city.releases },
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Games',
    links: [
      { label: 'Arkham City', href: links.city.repo },
      { label: 'Arkham Knight', href: links.knight.repo },
    ],
  },
  {
    title: 'Docs',
    links: [
      { label: 'Wiki', href: links.city.wiki },
      { label: 'Your first mod', href: links.city.firstMod },
      { label: 'Building BmSDK', href: links.city.building },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Releases', href: links.city.releases },
      { label: 'GitHub', href: links.city.repo },
      { label: 'Licence', href: links.city.licence },
    ],
  },
]
