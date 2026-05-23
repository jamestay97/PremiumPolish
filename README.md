# Prestige Polish LLC — Landing Page

A futuristic, fully responsive single-page website for **Prestige Polish LLC** — premium pressure washing and mobile carwash services in the Bronx, NY.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons
- Google Fonts: **Inter** + **Orbitron**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Photos

Place images in `public/images/`:

| File | Used in |
|------|---------|
| `hero-work.jpg` | Hero section |
| `pressure-washing.jpg` | Pressure Washing service card |
| `mobile-carwash.jpg` | Mobile Carwash service card |
| `gallery-1.jpg` – `gallery-4.jpg` | About section gallery |

Recommended size: **1200×800px** or larger (JPG or WebP).

## Deploy

### Vercel (recommended for Next.js)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Deploy — no extra config needed.

### GitHub Pages (static export)

For static hosting, add `output: 'export'` to `next.config.ts` and run `npm run build`. The `out/` folder can be published via GitHub Pages.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── AnimatedSection.tsx
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── Footer.tsx
public/
└── images/          ← drop your photos here
```

## License

Private — © Prestige Polish LLC.
