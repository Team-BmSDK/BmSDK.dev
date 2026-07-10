import { Braces, Bug, FileCode2, type Icon } from '@/lib/icons'

export interface Feature {
  icon: Icon
  title: string
  body: string
}

export const features: Feature[] = [
  {
    icon: Braces,
    title: 'Full game API',
    body: 'The SDK mirrors the engine&rsquo;s UnrealScript API, so you get to work with the game&rsquo;s built-in classes (pawns, characters, packages) through C# with full IntelliSense support.',
  },
  {
    icon: Bug,
    title: 'Write/debug in Visual Studio',
    body: 'BmSDK is intended to work natively with Visual Studio (and Visual Studio Code) - debugging works out-of-the-box with the provided solution files.',
  },
  {
    icon: FileCode2,
    title: 'Share mods as source',
    body: 'Script mods are just .cs files. Players can drop them into BmGame\\Scripts and have them run out-of-the-box with no building/packaging needed.',
  },
]
