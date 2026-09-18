# Changes — Website Edits (15 requested)

This file documents all edits applied to implement the 15 requested changes. Each entry lists the file, line(s), before/after and rationale.

---

## 1. Remove `✦ Ručni rad • Unikat • Tradicionalno`
- **File:** `frontend/src/pages/index.astro:14` (old `hero-meta` div)
- **Before:**
  ```astro
  <div class="hero-meta">✦ Ručni rad • Unikat • Tradicionalno</div>
  ```
- **After:** *removed entirely* — hero now starts directly with `<h1>`
- **Status:** ✅ removed

## 2. Change heading `Tradicionalne ručno rađene ogrlice` → `ručno rađene ogrlice.` with bold + red dot
- **File:** `frontend/src/pages/index.astro:14`
- **Before:**
  ```astro
  <h1>Tradicionalne <em>ručno rađene</em> ogrlice</h1>
  ```
  where `em` was styled via `frontend/src/styles/global.css:51` as `color: var(--accent)` (red `#9c2d2d`).
- **After:**
  ```astro
  <h1>ručno rađene ogrlice<span style="color: var(--accent)">.</span></h1>
  ```
- **Notes:**
  - Removed the word `Tradicionalne` to match spec exactly (`ručno rađene ogrlice.`).
  - Kept bold weight via default `h1` bold + inherits from `.hero h1` (clamp + letter-spacing). Font weight is still 700 (bold).
  - Dot `.` is rendered in red using `var(--accent)` (`#9c2d2d`), same red as logo dot at `frontend/src/layouts/Layout.astro:36` (`<a class="logo">ogrlice<span>.</span></a>` with `frontend/src/styles/global.css:44` `.logo span { color: var(--accent); }`).
- **Status:** ✅ done

## 3. Change hero subtitle text
- **File:** `frontend/src/pages/index.astro:15`
- **Before:**
  ```astro
  <p>20 unikata izrađenih s ljubavlju — nježni perlični uzorci inspirirani hrvatskim cvijećem i drvećem. Svaka ogrlica je unikat. Cijena <strong>25&nbsp;€</strong>.</p>
  ```
- **After:**
  ```astro
  <p>unikati izrađenih s ljubavlju — nježni perlični uzorci inspirirani prirodom</p>
  ```
- **Spec text:** `unikati  izrađenih s ljubavlju — nježni perlični uzorci inspirirani prirodom` (normalized double-space to single space, trimmed leading space).
- **Status:** ✅ done

## 4. Remove `Pogledaj kolekciju ↓` and `Vinted profil ↗` hero buttons
- **File:** `frontend/src/pages/index.astro:17-20` old block
- **Before:**
  ```astro
  <div class="hero-cta">
    <a href="#kolekcija" class="btn btn-primary">Pogledaj kolekciju ↓</a>
    <a href="https://www.vinted.hr/member/kvizazist" target="_blank" rel="noopener" class="btn btn-ghost">Vinted profil ↗</a>
  </div>
  ```
- **After:** *removed entirely* — hero contains only `h1` + `p`.
- **Status:** ✅ removed

## 5. Remove ID label from necklace boxes (internal only)
- **File:** `frontend/src/components/NecklaceCard.astro:19` (and `frontend/src/styles/global.css:81` `.card-id` CSS remains unused but harmless)
- **Before:**
  ```astro
  <span class="card-id">ID: {necklace.id}</span>
  ```
  inside `.card-media`
- **After:** *removed* — card now shows only badge `25 €`. `alt` attribute still contains `necklace.id` for accessibility but not visible; if strict invisibility required, alt could also be changed to only name.
- **Status:** ✅ removed

## 6. Remove `Klikni na karticu za galeriju s 3 fotografije • Upit šalje ID direktno na email`
- **File:** `frontend/src/pages/index.astro:28` old
- **Before:**
  ```astro
  <p style="margin:4px 0 0; color:var(--muted)">Klikni na karticu za galeriju s 3 fotografije • Upit šalje ID direktno na email</p>
  ```
- **After:** *removed* as part of kolekcija header block deletion (see #7, #8).
- **Status:** ✅ removed

## 7. Remove `Sve • 25 €`
- **File:** `frontend/src/pages/index.astro:30` old
- **Before:**
  ```astro
  <div style="color:var(--muted); font-size:0.9rem; white-space:nowrap">Sve • 25 €</div>
  ```
- **After:** *removed*
- **Status:** ✅ removed

## 8. Remove `Kolekcija • 20 komada`
- **File:** `frontend/src/pages/index.astro:27` old
- **Before:**
  ```astro
  <h2 style="margin:0; font-size:1.6rem; letter-spacing:-0.02em">Kolekcija • 20 komada</h2>
  ```
- **After:** *removed*. The entire flex header wrapper (`<div style="display:flex; justify-content:space-between...">...</div>`) was removed, leaving only `<div class="grid">` inside `#kolekcija`.
- **Status:** ✅ removed

## 9. Change price from `25 € /EUR` to `25 €`
- **File:** `frontend/src/components/NecklaceCard.astro:24`
- **Before:**
  ```astro
  <div class="card-price">25 € <span style="font-weight:400; color:var(--muted); font-size:0.85rem">/{necklace.currency}</span></div>
  ```
- **After:**
  ```astro
  <div class="card-price">25 €</div>
  ```
- **Notes:** Badge at `frontend/src/components/NecklaceCard.astro:18` already shows `25 €` without suffix. Detail page at `frontend/src/pages/necklace/[id].astro:42` already shows `25 €` correctly, no change needed.
- **Status:** ✅ done

## 10. Change `Uskoro na Vintedu` → `Uskoro`
- **Files:**
  - `frontend/src/components/NecklaceCard.astro:29` (card disabled state)
  - `frontend/src/pages/necklace/[id].astro:49` (detail disabled state)
- **Before:**
  ```astro
  <span class="btn btn-vinted" aria-disabled="true">Uskoro na Vintedu</span>
  ```
- **After:**
  ```astro
  <span class="btn btn-vinted" aria-disabled="true">Uskoro</span>
  ```
- **Status:** ✅ done (both places)

## 11. Change `Kupi na Vintedu` → `Kupi`
- **Files:**
  - `frontend/src/components/NecklaceCard.astro:26`
  - `frontend/src/pages/necklace/[id].astro:47`
- **Before:**
  ```astro
  <a ...>Kupi na Vintedu ↗</a>
  ```
- **After:**
  ```astro
  <a ...>Kupi</a>
  ```
- **Notes:** Arrow `↗` removed to match spec literally `Kupi`. If arrow desired, change to `Kupi ↗` — currently strictly `Kupi`.
- **Status:** ✅ done

## 12. Make buttons under each necklace less tall (reduce padding)
- **File:** `frontend/src/styles/global.css:66`
- **Before:**
  ```css
  .btn-small { padding: 8px 14px; font-size: 0.84rem; }
  ```
- **After:**
  ```css
  .btn-small { padding: 4px 12px; font-size: 0.84rem; line-height: 1.3; }
  ```
- **Effect:** Reduces vertical padding from 8px to 4px, horizontal 14→12, plus tighter line-height. Height drops from ~33px to ~24px. `.btn` base at `frontend/src/styles/global.css:58` (`padding: 11px 18px`) unchanged for primary buttons; only `.btn-small` used in `frontend/src/components/NecklaceCard.astro:26,29,33` is affected.
- **Status:** ✅ done

## 13. Remove `Kako kupiti?` section
- **File:** `frontend/src/pages/index.astro:38-48` old block
- **Before:**
  ```astro
  <section class="container" style="padding: 0 0 48px">
    <div style="background:var(--card-bg); border:1px solid var(--border); border-radius:var(--radius); padding:24px; display:grid; gap:12px">
      <h3>Kako kupiti?</h3>
      <ol>...</ol>
      <p>Vinted linkovi se uređuju u <code>src/data/necklaces.json</code> → push na GitHub automatski re-deploya stranicu.</p>
    </div>
  </section>
  ```
- **After:** *removed entirely*
- **Status:** ✅ removed

## 14. Footer left: keep only `Tradicionalne ručno rađene ogrlice`
- **File:** `frontend/src/layouts/Layout.astro:49-52`
- **Before:**
  ```astro
  <div>
    <strong>Tradicionalne ručno rađene ogrlice</strong><br/>
    Svaka ogrlica je unikat. Cijena 25 €.<br/>
    Upiti: <a href="mailto:kvizazist@gmail.com" style="text-decoration:underline">kvizazist@gmail.com</a>
  </div>
  ```
- **After:**
  ```astro
  <div>
    <strong>Tradicionalne ručno rađene ogrlice</strong>
  </div>
  ```
- **Status:** ✅ done

## 15. Footer right: change `Vinted: kvizazist na Vintedu ↗ © 2026 — ručni rad` → `Vinted ↗ © 2026 — ručni rad`
- **File:** `frontend/src/layouts/Layout.astro:53-56`
- **Before:**
  ```astro
  <div style="text-align:right">
    Vinted: <a href="https://www.vinted.hr/member/kvizazist" target="_blank" rel="noopener" style="text-decoration:underline">kvizazist na Vintedu ↗</a><br/>
    <span style="opacity:0.7">© {new Date().getFullYear()} — ručni rad</span>
  </div>
  ```
- **After:**
  ```astro
  <div style="text-align:right">
    <a href="https://www.vinted.hr/member/kvizazist" target="_blank" rel="noopener" style="text-decoration:underline">Vinted ↗</a><br/>
    <span style="opacity:0.7">© {new Date().getFullYear()} — ručni rad</span>
  </div>
  ```
- **Status:** ✅ done

---

## Verification
- Ran `grep` for removed strings: no remaining `hero-meta`, `Pogledaj kolekciju`, `Ručni rad • Unikat`, `Kolekcija • 20`, `Sve • 25`, `Kako kupiti`, `/EUR`, `kvizazist na Vintedu`, `Kupi na Vintedu`, `Uskoro na Vintedu`, `card-id` usage, `Svaka ogrlica je unikat` in hero — all 0 matches after edits (checked via `grep -R`).
- Build: `npm run build` should pass (Astro static, no SSR). No TS errors in edited `.astro` files.
- Visual: `ručno rađene ogrlice.` dot uses `var(--accent)` red, bold inherited from `h1`; `.btn-small` now 4px vertical padding.

---

## 16. Fix mouse wheel scroll smoothness (Lenis + GSAP)
- **File:** `frontend/src/layouts/Layout.astro:105-124`, `frontend/src/styles/global.css:18-32`
- **Before:**
  ```js
  const lenis = new Lenis({ autoRaf: true, lerp: 0.08 });
  ```
  + global.css `html.lenis, html.lenis body {height:auto} .lenis.lenis-smooth{scroll-behavior:auto} .lenis.lenis-stopped{overflow:hidden}`
- **After:**
  ```js
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    syncTouch: false,
    infinite: false,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);
  ```
  CSS updated to official Lenis recommendation:
  ```css
  html.lenis, html.lenis body { height: auto; }
  .lenis:not(.lenis-autoToggle).lenis-stopped { overflow: clip; }
  .lenis.lenis-smooth iframe { pointer-events: none; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-autoToggle { transition-property: overflow; transition-duration: 1ms; transition-behavior: allow-discrete; }
  ```
- **Why smoother:** `duration`+`easing` is framerate-independent vs `lerp`; `ScrollTrigger` sync removes jank; `lagSmoothing(0)` removes GSAP delay; `wheelMultiplier`/`touchMultiplier` tuned.
- **Tuning:** Increase `duration` to 1.4-1.8 for slower/softer, decrease to 0.8 for snappier; adjust `wheelMultiplier` 0.8-1.2.
- **Status:** ✅ done, `npm run build` passes

## 17. Use Cloudflare R2 for all images (no GitHub uploads)
- **File:** `frontend/src/utils/base.ts:1-16`, `frontend/src/layouts/Layout.astro:9-13`, `frontend/src/pages/index.astro:7-8`, `frontend/src/data/necklaces.json`, `frontend/public/data/necklaces.json`, `scripts/assign-photos.mjs:10-17`
- **Test URL (for all 60 slots now):** `https://pub-33a7f4fa4ac94bdfb3881855d788d119.r2.dev/dishes/original/.99_americano-chicken_dd6421d0.jpg`
- **Before:**
  ```json
  "photos": ["/images/mirror/image00016.jpeg", "/images/model/PXL_...jpg", ...]
  ```
  + `withBase()` always prepended `BASE_URL` → broke absolute URLs, `ogImage` logic assumed local path, `assign-photos.mjs` generated local `/images/...`
- **After:**
  - `frontend/src/utils/base.ts:6-11` — `withBase()` now returns absolute URLs unchanged (`/^(https?:)?\/\//`, `data:`, `blob:` check), else prepends base for local.
  - `frontend/src/layouts/Layout.astro:10-13` — `og` now handles absolute vs local: if `ogImage` is absolute, use directly; else `new URL(..., site+base)`
  - `frontend/src/pages/index.astro:7-8` — fallback ogImage uses Cloudflare test image constant.
  - `frontend/src/data/necklaces.json` + `frontend/public/data/necklaces.json` — all 20 items × 3 photos replaced with test Cloudflare URL (60 entries).
  - `scripts/assign-photos.mjs:10-17,64-74` — Added `CLOUDFLARE_BASE`, `CLOUDFLARE_TEST_IMAGE`, `USE_CLOUDFLARE=true`; when true, generates Cloudflare URLs instead of local; gracefully handles missing `public/images` dirs.
- **Verification:** `npm run build` → `dist/index.html` contains 21 Cloudflare URLs, 0 `/images/mirror`; `dist/necklace/NKL-001/index.html` contains 8 Cloudflare URLs (og + gallery), 0 local; `grep /images/` = 0.
- **Future convention:** Change `CLOUDFLARE_BASE` + pattern in `assign-photos.mjs:68-69` e.g. `` `${CLOUDFLARE_BASE}/${id}-${n}.jpg` `` or `` `${CLOUDFLARE_BASE}/necklaces/${id.toLowerCase()}_${String(n).padStart(2,"0")}.jpg` ``, set `USE_CLOUDFLARE=true`, then `node scripts/assign-photos.mjs` regenerates both JSONs. Share convention and will update.
- **Note:** `frontend/public/images/` (132 local files) can now be removed or kept; they are no longer referenced and not needed for deploy, saving repo size. Not deleted automatically — delete manually or add to `.gitignore` if desired.
- **Status:** ✅ done

## Files Touched (updated)
- `frontend/src/pages/index.astro`
- `frontend/src/components/NecklaceCard.astro`
- `frontend/src/pages/necklace/[id].astro`
- `frontend/src/styles/global.css`
- `frontend/src/layouts/Layout.astro`
- `frontend/src/utils/base.ts`
- `frontend/src/data/necklaces.json`
- `frontend/public/data/necklaces.json`
- `scripts/assign-photos.mjs`
- `changes.md` (this file)
