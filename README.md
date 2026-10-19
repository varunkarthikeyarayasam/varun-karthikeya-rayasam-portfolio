# Varun Karthikeya Rayasam — Portfolio

A single-page, light editorial portfolio built with React 18, TypeScript, Vite 6, and Tailwind CSS 3. The hero name is sampled into canvas particles; other motion uses CSS, IntersectionObserver, and small dependency-free hooks.

## Commands

```bash
npm ci
npm run dev       # local preview at http://localhost:5173
npm run build     # TypeScript project check and production build in dist/
npm run lint      # TypeScript check
npm run preview   # serve the production build locally
```

## Project structure

- `src/data/portfolioData.ts` — profile, navigation, selected work, and planned ideas.
- `src/components/ParticleName.tsx` — responsive particle sampling, pointer response, visibility pause, and reduced-motion handling.
- `src/components/` — page sections, responsive navigation, and shared reveal/visual components.
- `src/lib/motion.ts` — scroll reveal, pointer drift, and parallax helpers.
- `src/index.css` — palette, type, layout, focus, and motion styles.
- `public/` — favicon and files served publicly. Project visuals are labelled conceptual illustrations.

## Content and asset notes

The featured work is VYSE, KAIROS, and AGNIVAAN AI. KAIROS and AGNIVAAN AI are demo-stage prototypes with no public links. Five ideas in the exploring section are labelled Planned. A résumé PDF was not included in the supplied project files, so no download link is configured.

The supplied VYSE screenshot exposed a student profile and made unverified transit and attendance claims. The supplied KAIROS image showed an API-key-required watermark and live indicators; the AGNIVAAN image showed unverified live/API status. Those images were omitted from public assets and replaced with clearly labelled conceptual illustrations.

## Vercel

Use the Vite framework preset, build command `npm run build`, and output directory `dist`. No environment variables are needed. Add a canonical URL and social preview image only after the final public domain and approved image are known.
