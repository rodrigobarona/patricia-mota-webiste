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
- **Enhanced SEO**:
  - OpenGraph metadata with dynamic OG images (`/api/og`)
  - JSON-LD structured data (Person schema)
  - Comprehensive page-specific metadata
  - Sitemap and robots.txt
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

- ✅ Add SEO improvements (OpenGraph, structured data) — **COMPLETED**
- Add blog or news section
- Integrate analytics

### Future: Dynamic Publications API

Currently, publications use **mock data** in `app/publications/page.tsx`. Two recommended approaches for dynamic publication fetching:

#### Option 1: SerpAPI Google Scholar (Recommended for MVP)

**Pros:**

- ✅ **Free tier**: 100 searches/month (sufficient for personal site)
- ✅ Immediate access with API key
- ✅ Comprehensive data: citations, authors, links, snippets
- ✅ Reliable and legal scraping

**Setup:**

```bash
npm install serpapi
```

**Implementation:**

```typescript
// lib/serpapi-service.ts
import { getJson } from "serpapi";

export async function fetchPublications(authorId: string) {
  const results = await getJson({
    engine: "google_scholar_author",
    author_id: authorId, // Patricia's Google Scholar ID
    api_key: process.env.SERPAPI_API_KEY,
  });
  return results.articles;
}
```

**Environment Variable:**

```env
SERPAPI_API_KEY=your_api_key_here
```

**Resources:**

- Sign up: [serpapi.com](https://serpapi.com)
- Docs: [serpapi.com/google-scholar-author-api](https://serpapi.com/google-scholar-author-api)
- Free tier: 100 searches/month, 20 results per search

---

#### Option 2: Semantic Scholar API (Long-term, Requires Application)

**Pros:**

- ✅ Free for academic/research use
- ✅ High-quality metadata
- ✅ AI-powered paper recommendations
- ✅ No rate limits for approved accounts

**Cons:**

- ⏳ Requires application and approval
- 📝 Must justify use case

**Setup (when approved):**

```bash
npm install axios
```

**Implementation:**

```typescript
// lib/semantic-scholar-service.ts
import axios from "axios";

export async function fetchPublications(authorId: string) {
  const response = await axios.get(
    `https://api.semanticscholar.org/graph/v1/author/${authorId}/papers`,
    {
      params: { fields: "title,authors,year,venue,citationCount,url" },
      headers: { "x-api-key": process.env.SEMANTIC_SCHOLAR_API_KEY },
    }
  );
  return response.data.data;
}
```

**Application:** [semanticscholar.org/product/api](https://www.semanticscholar.org/product/api)

---

#### Recommended Approach

1. **Start with SerpAPI** for immediate functionality
2. **Apply for Semantic Scholar API** in parallel
3. **Switch to Semantic Scholar** once approved (better long-term reliability)
4. Add **caching layer** (Redis/Vercel KV) to minimize API calls
5. Implement **revalidation** strategy (ISR or webhook-triggered updates)
