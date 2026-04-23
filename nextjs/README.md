# ipllaserstore — Next.js

Landing page en Next.js 14 (App Router, TypeScript, CSS Modules).

## Estructura

```
app/
  globals.css      Tokens de diseño + base
  layout.tsx       Fonts (Fraunces/Inter/JetBrains) + <I18nProvider>
  page.tsx         Composición de secciones
components/
  Nav, Hero, Marquee, Benefits, Product, HowItWorks,
  Results, Blog, CTA, Footer, SectionHead
  ui/              Button, LangSwitch
lib/
  i18n.tsx         Contexto ES/EN + useT() + <RichText/>
  useReveal.ts     Hook de IntersectionObserver
public/assets/     hero, antes, despues, producto-*, logo.svg
```

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Integración en un proyecto existente

1. Copia `components/`, `lib/`, `app/globals.css` y `public/assets/` a tu proyecto.
2. En tu `app/layout.tsx` carga las fuentes con `next/font` y envuelve los
   hijos en `<I18nProvider>` (ver `app/layout.tsx` aquí).
3. En tu página, importa los componentes desde `@/components/...`.

## Notas

- **Idioma**: el toggle ES/EN vive en el `<Nav>` (`LangSwitch`). Se conserva en
  memoria mientras el usuario navega.
- **Carrito**: el botón "Añadir al carrito" es visual (contador local). Conecta
  tu lógica en `Product.tsx > addToCart()`.
- **Parallax / reveal**: respetan `prefers-reduced-motion`.
- **Imágenes**: servidas vía `next/image` (AVIF/WebP automáticos).
- **Blog**: los 4 posts son estáticos en `Blog.tsx`. Para `/blog/[slug]`
  conviértelos en un array compartido y crea la ruta dinámica.
