# Agents

## Project Snapshot

- Framework: Next.js App Router with Payload CMS 3, React 19, TypeScript, Postgres adapter.
- Frontend pages live in `src/app/(frontend)/`; the current public home is `src/app/(frontend)/page.tsx`.
- Frontend global styles live in `src/app/(frontend)/styles.css` and are imported by `src/app/(frontend)/layout.tsx`.
- Payload admin/API routes live in `src/app/(payload)/`; Payload config is `src/payload.config.ts`.
- Payload collections live in `src/collections/`.
- Tests live in `tests/` with Playwright e2e coverage for the frontend.
- Asset status: there is no `public/` asset set yet; media uploads are handled by the Payload `media` collection.

Use the Payload CMS skill at `.agents/skills/payload/` when touching Payload config, collections, hooks, access rules, or Payload APIs.

## Current Conventions

- Imports use the `@/*` alias for `src/*` where useful; Payload config also has `@payload-config`.
- Components/pages are TypeScript/TSX, use named constants near the top, and prefer simple typed props.
- The current home is a client component because it uses state, DOM events, refs, and GSAP.
- Styling is plain CSS with custom properties in `:root`; reuse existing variables before adding new ones.
- Export route pages as default exports. Future reusable components should use named exports.
- No barrel/index file exists for frontend components yet.

## Visual Style

- Palette: warm paper tones (`--paper`, `--paper-deep`), dark ink (`--ink`), soft ink, muted gold, vermilion, and restrained teal.
- Typography: system sans for general UI; serif stack (`Iowan Old Style`, `Palatino Linotype`, Palatino, Georgia) for brand and editorial hero text.
- Layout: editorial, full-viewport, minimal, with a strong typographic left side and symbolic geometric composition on the right.
- Details: thin rules, 1px borders, subtle grids/textures, geometric symbols, generous spacing, restrained color transitions.
- Responsive behavior: desktop two-column composition; under `980px` it stacks sigil above copy; under `620px` nav becomes a compact grid and type scales down.
- Motion: GSAP fades copy between fragments; CSS breathes the sigil and animates the core. Respect `prefers-reduced-motion`.

## Reusable Components

- Existing reusable section components: none yet.
- Existing base to study: `src/app/(frontend)/page.tsx` for narrative structure and `src/app/(frontend)/styles.css` for visual language.
- Create new frontend section components under `src/components/sections/`.
- Export each new section component as a named export from its file.
- If several section components are added, create `src/components/sections/index.ts` as a barrel and re-export named components there.
- Import section components with `@/components/sections` when a barrel exists, otherwise import from the specific component file.

## Design Direction For New Sections

New sections must stay editorial, symbolic, minimal, sober, elegant, and coherent with the current home.

Avoid:

- modern SaaS-style cards
- loud gradients
- heavy shadows
- gratuitous border radius
- generic startup landing-page layouts
- invasive animations
- unnecessary new libraries

## Reusable Section Components To Build

- `EditorialSection`: narrative typographic section with eyebrow, title, body copy, and optional secondary content.
- `QuoteSection`: spacious section with a central quote, number/fragment, and optional source.
- `SymbolSection`: text plus a geometric composition, preferably built with CSS or SVG.
- `IndexSection`: vertical list of principles/chapters with number, title, description, and hover/focus state.
- `ChapterGrid`: editorial grid of navigable chapters, similar to a book index.

All of these components should be reusable through props.

## Implementation Rules

- New components must be reusable through props and should not hardcode content, except for examples/demo content if the project already provides such a pattern.
- Follow the project conventions for naming, TypeScript props, imports, exports, and plain CSS styling.
- Reuse existing colors, font stacks, spacing logic, transitions, and responsive breakpoints before introducing new tokens.
- Keep all new sections responsive.
- Keep animations subtle and respect `prefers-reduced-motion`.
- Prefer CSS or SVG for geometric symbols.
- Use external images or raster assets only when they are genuinely necessary.
- Before adding dependencies, verify that React, Next.js, CSS, GSAP, or existing project tools are not already sufficient.
- Do not modify APIs, routing, Payload architecture, or global app architecture unless explicitly requested.
