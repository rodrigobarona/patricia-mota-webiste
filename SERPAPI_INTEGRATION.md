# SerpAPI Google Scholar Integration

## Overview

This website dynamically fetches publication data from Google Scholar using **SerpAPI**, providing real-time updates to Patricia Mota's research portfolio.

## Implementation Details

### Architecture

```
┌─────────────────────┐
│  Google Scholar     │
│  (Patricia's        │
│   Profile)          │
└──────────┬──────────┘
           │
           │ SerpAPI
           ▼
┌─────────────────────┐
│  lib/serpapi-       │
│  service.ts         │
│  (Data Fetching)    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  app/actions/       │
│  publications.ts    │
│  (Server Actions    │
│   + Caching)        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  app/publications/  │
│  page.tsx           │
│  (SSR + ISR)        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  publications-      │
│  client.tsx         │
│  (Client UI)        │
└─────────────────────┘
```

### Key Files

#### 1. **`lib/types/publication.ts`**

- TypeScript types for publication data
- Interfaces for SerpAPI responses
- Type transformations

#### 2. **`lib/serpapi-service.ts`**

- Core integration with SerpAPI
- `fetchPublications()` - Fetches all publications
- `fetchAuthorInfo()` - Fetches author statistics
- Data transformation logic
- Publication type detection (journal/conference/book)

#### 3. **`app/actions/publications.ts`**

- Server actions with `"use server"` directive
- Next.js `unstable_cache` for data caching
- Revalidation strategies:
  - Publications: 24 hours
  - Author info: 7 days

#### 4. **`app/publications/page.tsx`**

- Server component (SSR + ISR)
- Fetches data at build time and on-demand
- Uses `Suspense` for loading states
- `revalidate: 86400` (24 hours)

#### 5. **`app/publications/publications-client.tsx`**

- Client component for interactivity
- Search functionality
- Tab filtering (All/Journals/Conferences/Books)
- Responsive UI with shadcn/ui components

## Configuration

### Environment Variables

Create `.env.local` in project root:

```env
SERPAPI_API_KEY=your_api_key_here
```

### Google Scholar Author ID

Located in `lib/serpapi-service.ts`:

```typescript
const AUTHOR_ID = "fNJsrScAAAAJ"; // Patricia Mota's Google Scholar ID
```

To find this ID:

1. Visit Patricia's Google Scholar profile
2. Extract from URL: `https://scholar.google.com/citations?user=AUTHOR_ID`

## Features

### ✅ Automatic Data Fetching

- Publications fetched from Google Scholar automatically
- No manual data entry required

### ✅ Caching Strategy

- **Publications**: Cached for 24 hours
- **Author Info**: Cached for 7 days
- Uses Next.js built-in caching (`unstable_cache`)

### ✅ Incremental Static Regeneration (ISR)

- Page regenerates every 24 hours
- Always serves fast, cached data
- Background updates ensure freshness

### ✅ Publication Type Detection

Automatically categorizes publications:

- **Journals**: Academic journals, research articles
- **Conferences**: Conference papers, proceedings
- **Books**: Book chapters, monographs

### ✅ Rich Metadata

- Title, authors, venue, year
- Citation counts
- Direct links to papers
- Google Scholar citation IDs

### ✅ Search & Filter

- Client-side search across all fields
- Filter by publication type (tabs)
- Real-time results

## API Usage

### SerpAPI Free Tier

- **100 searches/month**
- **20 results per search**
- Sufficient for personal websites

### Estimated Usage

With current caching:

- ~1 search per day (24-hour cache)
- ~30 searches per month
- Well within free tier limits

## Deployment

### Vercel (Recommended)

1. Add environment variable in Vercel dashboard:

   ```
   SERPAPI_API_KEY=your_key_here
   ```

2. Deploy:

   ```bash
   git push origin main
   ```

3. Vercel automatically:
   - Builds with ISR enabled
   - Caches publications for 24h
   - Regenerates on-demand

### Other Platforms

Ensure:

- Node.js 18+ runtime
- Environment variables set
- ISR/caching support

## Monitoring

### Check API Usage

Visit [SerpAPI Dashboard](https://serpapi.com/dashboard) to monitor:

- Monthly search count
- Remaining quota
- API key status

### Cache Status

View in Next.js build output:

```bash
pnpm build
```

Look for:

```
● /publications (ISR: 86400 Seconds)
```

## Troubleshooting

### "Failed to fetch publications"

**Cause**: Missing or invalid API key

**Solution**:

1. Check `.env.local` exists
2. Verify API key is correct
3. Restart dev server: `pnpm dev`

### No publications showing

**Cause**: Wrong Author ID

**Solution**:

1. Update `AUTHOR_ID` in `lib/serpapi-service.ts`
2. Find correct ID from Google Scholar profile URL

### Rate limit exceeded

**Cause**: >100 searches/month

**Solution**:

1. Increase cache duration
2. Upgrade SerpAPI plan
3. Check for unnecessary API calls

## Future Enhancements

### Potential Improvements

1. **Admin Panel**

   - Force cache refresh
   - Manually trigger updates

2. **Enhanced Filtering**

   - Filter by year range
   - Sort by citations
   - Filter by keywords

3. **Analytics**

   - Track which papers are viewed most
   - Citation growth over time

4. **Semantic Scholar Migration**
   - Apply for Semantic Scholar API
   - Switch for better long-term reliability
   - Keep SerpAPI as fallback

## Cost Analysis

### Current Setup (Free)

- SerpAPI Free: $0/month
- ~30 searches/month used
- 70 searches remaining

### If Scaling Needed

- SerpAPI Paid: $50-75/month for unlimited
- Semantic Scholar: Free (requires application)

## References

- [SerpAPI Documentation](https://serpapi.com/google-scholar-api)
- [Google Scholar Author API](https://serpapi.com/google-scholar-author-api)
- [Next.js Caching](https://nextjs.org/docs/app/building-your-application/caching)
- [Next.js ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
