"use server";

/**
 * Server Actions for Publications
 * Fetches and caches publication data from Google Scholar via SerpAPI
 */

import { fetchPublications, fetchAuthorInfo } from "@/lib/serpapi-service";
import type { Publication } from "@/lib/types/publication";
import { unstable_cache } from "next/cache";

/**
 * Cached function to fetch publications
 * Revalidates every 24 hours
 */
const getCachedPublications = unstable_cache(
  async (): Promise<Publication[]> => {
    return await fetchPublications();
  },
  ["publications-data"],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ["publications"],
  }
);

/**
 * Cached function to fetch author info
 * Revalidates every 7 days
 */
const getCachedAuthorInfo = unstable_cache(
  async () => {
    return await fetchAuthorInfo();
  },
  ["author-info"],
  {
    revalidate: 604800, // 7 days in seconds
    tags: ["author"],
  }
);

/**
 * Get all publications with caching
 */
export async function getPublications(): Promise<Publication[]> {
  try {
    return await getCachedPublications();
  } catch (error) {
    console.error("Error in getPublications:", error);
    return [];
  }
}

/**
 * Get author information with caching
 */
export async function getAuthorInfo() {
  try {
    return await getCachedAuthorInfo();
  } catch (error) {
    console.error("Error in getAuthorInfo:", error);
    return null;
  }
}

/**
 * Get publications filtered by type
 */
export async function getPublicationsByType(
  type: "journal" | "conference" | "book"
): Promise<Publication[]> {
  const publications = await getPublications();
  return publications.filter((pub) => pub.type === type);
}
