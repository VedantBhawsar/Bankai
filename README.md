# Bankai — Modern Digital Banking Landing Page

> **The Next Big Thing In Digital Money Transfer**

Bankai is a sleek, fully responsive landing page for a modern digital banking and money-transfer application. Built with React, TypeScript, and Tailwind CSS, it showcases the app's core value propositions, walks visitors through getting started, answers common questions, and drives downloads on both iOS and Android.

---

## ✨ Features

| Section | Description |
|---|---|
| **Hero** | Bold headline, App Store & Google Play CTAs, social proof (4.8 ★ · 10 k+ users) |
| **Features** | Instant fee-free payments, cash-flow management, no unwanted subscriptions |
| **How It Works** | 4-step guide — Download → Choose Payment → Make Payment → Get Services |
| **FAQ** | Accordion-style answers to the most common questions |
| **Download** | Final CTA section with app-store buttons |
| **Footer** | About, Pricing, Media, and Contact links |

Additional highlights:

- 🔒 Secure transaction messaging throughout
- 📱 Mobile-first, fully responsive layout
- ⚡ Optimised images with lazy-loading
- 🔍 SEO-ready — Open Graph, Twitter Cards, JSON-LD structured data, sitemap & robots.txt
- ♿ Accessible markup (`aria-labelledby`, `role="main"`, semantic HTML)
- 🎨 Dark-mode–compatible design tokens via CSS variables

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Vite](https://vitejs.dev) | 5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | latest | Accessible component primitives |
| [Radix UI](https://www.radix-ui.com) | various | Headless UI components |
| [React Router](https://reactrouter.com) | 6 | Client-side routing |
| [Lucide React](https://lucide.dev) | 0.46 | Icon set |
| [TanStack Query](https://tanstack.com/query) | 5 | Async state management |

---

## 📁 Project Structure

```
Bankai/
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Images used in the UI
│   ├── components/
│   │   ├── ui/              # shadcn/ui component library
│   │   ├── Analytics.tsx    # Analytics integration
│   │   ├── DownloadSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LazyImage.tsx
│   │   ├── SEOHead.tsx
│   │   └── StepsSection.tsx
│   ├── config/
│   │   └── seo.ts           # Centralised SEO configuration
│   ├── hooks/               # Custom React hooks
│   ├── pages/
│   │   ├── Index.tsx        # Home page (assembles all sections)
│   │   └── NotFound.tsx     # 404 page
│   ├── utils/
│   │   └── seo.ts           # SEO helpers (structured data generators)
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html               # HTML entry point (meta tags, fonts, JSON-LD)
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18 (use [nvm](https://github.com/nvm-sh/nvm) to manage versions)
- npm ≥ 9 (bundled with Node.js) **or** [Bun](https://bun.sh)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/VedantBhawsar/Bankai.git
cd Bankai

# 2. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:8080` with hot-module replacement.

### Production Build

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---
