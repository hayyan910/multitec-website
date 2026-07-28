# Multitec Maldives — Company Website

Static marketing website for **Multitec Maldives Pvt. Ltd.**, a professional electrical engineering company based in Malé, Republic of Maldives.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 7](https://astro.build) (static output) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [DaisyUI 5](https://daisyui.com) |
| Language | TypeScript (strict mode) |
| Contact form | [Web3Forms](https://web3forms.com) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) |

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Home — hero, services snapshot, featured projects, CTA |
| `/about` | `src/pages/about.astro` | Company story, values, certifications |
| `/services` | `src/pages/services.astro` | Full services grid |
| `/projects` | `src/pages/projects/index.astro` | Project listing, grouped by category |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` | Individual project detail (static paths) |
| `/contact` | `src/pages/contact.astro` | Web3Forms contact form + contact details |

---

## Project Structure

```
src/
├── components/
│   ├── Header.astro        # Sticky nav with mobile hamburger
│   └── Footer.astro        # Links, contact details, copyright
├── data/
│   └── projects.ts         # Project records — edit here to add/remove projects
├── layouts/
│   └── BaseLayout.astro    # HTML shell: <head>, skip-link, Header, Footer
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── services.astro
│   ├── contact.astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   └── global.css          # Tailwind v4 entry-point + DaisyUI 'multitec' theme
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

---

## Brand

| Token | Value | Usage |
|---|---|---|
| Primary red | `#E31E24` → `oklch(58.5% 0.226 26.6)` | Buttons, links, accents |
| Neutral black | `oklch(9% 0 0)` | Header, footer, hero backgrounds |
| Base white | `oklch(100% 0 0)` | Page background, card surfaces |

The DaisyUI theme is named **`multitec`** and is defined in `src/styles/global.css` via `@plugin "daisyui/theme"`. It is applied globally via `data-theme="multitec"` on the `<html>` element in `BaseLayout.astro`.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output → dist/
npm run preview    # preview the production build locally
```

---

## Adding a Project

Open `src/data/projects.ts` and append a new entry to the `projects` array:

```ts
{
  slug: 'your-project-slug',       // URL: /projects/your-project-slug
  title: 'Project Title',
  description: 'One-paragraph summary.',
  category: 'Commercial',          // used to group on the listing page
  client: 'Client Name',           // optional
  year: 2024,
  featured: true,                  // show on home page?
  body: '<p>Rich HTML detail...</p>', // optional; shown on the detail page
},
```

No other files need changing — `getStaticPaths` in `[slug].astro` derives routes automatically from this array.

---

## Contact Form Setup

1. Go to [web3forms.com](https://web3forms.com) and create a free access key for `info@multitec.mv`.
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro` with your key.

---

## Deployment (Cloudflare Pages)

1. Push the repository to GitHub.
2. In Cloudflare Pages, connect the repo.
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Update the `site` value in `astro.config.mjs` to the live domain before go-live.

---

## Accessibility

- WCAG AA contrast ratios enforced via DaisyUI theme tokens.
- Skip-to-content link on every page (visible on keyboard focus).
- All interactive elements have visible focus rings.
- `aria-current="page"` applied to the active nav link.
- `aria-required` and explicit `<label>` elements on all form fields.
- Semantic HTML throughout (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<section>`, `<address>`, `<dl>`).
