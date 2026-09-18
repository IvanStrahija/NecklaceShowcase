# Necklace Showcase — Tradicionalne ručno rađene ogrlice

Static Astro site (Astro 5 + GSAP/Lenis) showcasing 20 handmade traditional necklaces. JSON-driven, no backend, GitHub Pages ready (`index.html` + CSS + JS only).

- 20 items × 3 photos (132 source photos randomly allocated, 60 unique)
- Each: name (Croatian flower/tree), ID `NKL-001`…`NKL-020`, price 25 €, Vinted CTA, Inquiry via FormSubmit to `kvizazist@gmail.com`
- Static output: `frontend/dist/index.html`, `necklace/<id>/index.html`, `_astro/*.css|*.js`, `images/`, `data/necklaces.json`

## Stack
- Astro 5 `output: static`, `base: /necklace/`, `site: https://kvizazist.github.io`, `trailingSlash: always`
- GSAP + Lenis (client JS, no server)
- Biome (optional)
- No Sanity/Polar — pure JSON

## Develop
```bash
cd frontend
npm install
npm run dev      # http://localhost:4321/necklace/
npm run build    # → frontend/dist
npm run preview  # preview static
```

## Data
- `frontend/src/data/necklaces.json` (source of truth, imported at build) + copied to `frontend/public/data/necklaces.json` for optional fetch
- Edit `vintedUrl` per item, then `git push` → GH Pages redeploys
- `scripts/assign-photos.mjs` regenerates JSON with random 60 photos

## Deploy (GitHub Pages)
- Workflow `.github/workflows/deploy.yml` builds `frontend/dist` on push to `main`
- Settings → Pages → Source: **GitHub Actions**
- For user site `username.github.io` → set `base: '/'`; for project site `username.github.io/necklace` → `base: '/necklace/'`

## Verification (plan.md §11)
- Grid 20 cards with featured photo (BASE_URL), name, ID, 25 €
- Vinted link toggling via `src/utils/vinted.ts`
- Inquiry modal → FormSubmit `kvizazist@gmail.com` with `_subject: Upit za ogrlicu {id} - {name}`, honeypot, `_next: site+base+/hvala/`
- Detail `/necklace/NKL-001/` gallery 3 photos
- Static check: `dist` has only `index.html`, `hvala/`, `necklace/*/`, `_astro/`, `images/`, `data/` — no `_server/` or `api/`

# NecklaceShowcase
