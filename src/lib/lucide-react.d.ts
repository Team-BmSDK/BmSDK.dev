// lucide-react ships types only for its main entry, but icons.ts imports the deep
// `.mjs` paths to avoid the CJS entry breaking Astro's SSR. Type those modules so
// the imports resolve (mirrors the Icon type in icons.ts).
declare module 'lucide-react/dist/esm/icons/*.mjs' {
  import type { ComponentType, SVGProps } from 'react'
  const Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>
  export default Icon
}
