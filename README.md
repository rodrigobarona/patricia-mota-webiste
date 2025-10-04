# Patricia Mota, PT, PhD — Personal Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

## Overview

This is the source code for the personal website of **Patrícia Mota, PT, PhD** — Women’s Health Researcher, Clinical Gait Researcher, University Professor, and Co‑founder & CEO of Eleva.care.

- **Official website**: [patriciamota.com](https://patriciamota.com)
- **Framework**: Next.js App Router (React 19)
- **Styling**: Tailwind CSS + tailwindcss-animate
- **UI**: Radix UI primitives with custom components (shadcn-inspired)
- **Theming**: next-themes, Google Fonts (Playfair Display, Inter)

## Project Structure

```txt
app/
  layout.tsx            # Site chrome, header/footer, metadata
  page.tsx              # Home page (hero, Eleva section, featured pubs, experience, CTA)
  about/page.tsx        # About profile
  research/page.tsx     # Research overview
  publications/         # Publications index and loading state
    page.tsx            # Interactive publications list (search, tabs, mock data)
    loading.tsx
  teaching/page.tsx     # Teaching overview
  contact/page.tsx      # Contact details and CTA
  eleva/page.tsx        # Eleva.care info
components/
  theme-provider.tsx    # Theme provider wrapper (next-themes)
  ui/*                  # Reusable UI components (buttons, cards, tabs, etc.)
public/
  patricia-mota-pt-phd-profile.webp
  eleva-care-home.png
styles/
  globals.css           # Tailwind layers and CSS variables
```

## Key Features

- **Accessible Navigation** with mobile drawer and social links (LinkedIn, Google Scholar, X, Instagram)
- **Publications** page with search and filtering across Journal/Conference/Book tabs (mocked dataset, ready for backend API)
- **Responsive Design** with modern UI patterns, gradients, and subtle animations
- **SEO Metadata** in `app/layout.tsx`
- **Static Export Friendly**: images unoptimized by config for simple hosting (can be adjusted)

## Getting Started

```bash
pnpm install
pnpm dev
```

- Development server: `http://localhost:3000`
- Production build: `pnpm build` then `pnpm start`

## Configuration

- Tailwind: `tailwind.config.ts`
- Next.js config: `next.config.mjs` (lint/type checks ignored during build, images unoptimized)
- Fonts: Playfair Display and Inter via `next/font/google`

## Tech Stack

- next@15
- react@19, react-dom@19
- tailwindcss@3, tailwindcss-animate
- radix-ui components
- next-themes
- lucide-react icons

## Content Ownership

All content and assets belong to **Patrícia Mota**. © {current year} Patrícia Mota. All rights reserved.

## Roadmap Ideas

- Replace mocked publications with a backend API (e.g., Google Scholar proxy)
- Add SEO improvements (OpenGraph, structured data)
- Add blog or news section
- Integrate analytics
