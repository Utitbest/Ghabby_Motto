# Fiba Motors — Next.js clone

A pixel-faithful rebuild of [fibamotors.com](https://fibamotors.com) — a used-car
dealership in Girne (Kyrenia), North Cyprus — built with **Next.js (App Router) +
React** and **plain CSS Modules** (no Tailwind). Icons are from
**@tabler/icons-react**. Every component/function lives in its own file.

All interface text is in **English** (the original site is in Turkish — every
label, heading, form, route and message has been translated).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Images

The site uses the **exact same images as the live site**, hosted on Cloudflare R2
(`r2.galerimplus.com`). Every image URL is kept in one file:

- `src/data/images.js` — the logo + all 17 vehicle photos (raw R2 links)
- `src/data/listings.js` — the full inventory (imports the image URLs above)

Images are set to `unoptimized` in `next.config.js` so the browser loads them
straight from R2, the same way the original site's CDN assets are hotlinked.
If you'd rather have Next optimize/proxy them, remove `unoptimized: true`
(the `remotePatterns` allow-entry for R2 is already there).

## Structure

```
src/
├─ app/
│  ├─ layout.js                 # top bar + header + footer + mobile call bar
│  ├─ page.js                   # home
│  ├─ vehicles/page.js          # vehicle listing (filters + sort)
│  ├─ vehicles/[slug]/page.js   # vehicle detail (17 static pages)
│  ├─ about/page.js             # about
│  ├─ contact/page.js           # contact
│  └─ not-found.js
├─ components/                  # one component per file (+ its .module.css)
│  ├─ TopBar, Header, Footer, MobileCallBar
│  ├─ Hero, HomeSearch, HomeListings, AboutStrip, TradeIn
│  ├─ CarCard, VehiclesBrowser
│  └─ ContactForm
├─ data/
│  ├─ images.js                 # all original R2 image links
│  ├─ listings.js               # 17 vehicles
│  └─ site.js                   # contact details, nav, WhatsApp helpers
└─ styles/globals.css           # design tokens (colors, radii, buttons)
```

## Notes on fidelity

- English copy (translated from the Turkish original), prices in **£**, and all
  17 vehicles match the live site 1:1.
- Contact / trade-in forms open a pre-filled **WhatsApp** message, exactly like
  the original (which routes everything through wa.me).
- Design tokens (indigo `#6366f1` accent, Outfit font, `#111317` top bar,
  `#f6f7f8` page, 16px card radius) were read from the live site's computed CSS.
- The vehicle list has working make / fuel / transmission filters, sorting,
  and a "show more" pager — same controls the original exposes.
- Routes: `/`, `/vehicles`, `/vehicles/[slug]`, `/about`, `/contact`.
