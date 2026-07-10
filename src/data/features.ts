import { Braces, Bug, FileCode2, type Icon } from '@/lib/icons'

export interface Feature {
  icon: Icon
  title: string
  body: string
}

export const features: Feature[] = [
  {
    icon: Braces,
    title: 'The game&rsquo;s own API, in C#',
    body: 'The SDK mirrors the engine&rsquo;s UnrealScript API, so you work with the game&rsquo;s real classes — pawns, characters, packages — as C# types, with full IntelliSense.',
  },
  {
    icon: Bug,
    title: 'Write and debug in Visual Studio',
    body: 'Open the solution, write your script, and press F5. It&rsquo;s a normal C# project: real breakpoints, real debugging, and fast iteration.',
  },
  {
    icon: FileCode2,
    title: 'Share mods as source',
    body: 'Script mods are just .cs files. Players drop them into BmGame\\Scripts and they run — no build step, no packaging, no installers.',
  },
]
