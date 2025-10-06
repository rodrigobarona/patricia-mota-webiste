/**
 * SerpAPI Google Scholar Integration
 * Fetches publication data for Patricia Mota from Google Scholar
 */

import { getJson } from "serpapi";
import type {
  Publication,
  SerpApiAuthorResponse,
  SerpApiArticle,
} from "./types/publication";

// Patricia Mota's Google Scholar Author ID
// Find this by visiting her Google Scholar profile and extracting from URL
// Example: https://scholar.google.com/citations?user=YOUR_AUTHOR_ID
const AUTHOR_ID = "fNJsrScAAAAJ"; // Update this with Patricia's actual author ID

/**
 * Determine publication type based on venue/publication string
 */
function determinePublicationType(
  publication: string | undefined
): "journal" | "conference" | "book" {
  if (!publication) return "journal";

  const pubLower = publication.toLowerCase();

  // Conference indicators
  if (
    pubLower.includes("conference") ||
    pubLower.includes("proceedings") ||
    pubLower.includes("workshop") ||
    pubLower.includes("symposium") ||
    pubLower.match(/\d{4}/)
  ) {
    return "conference";
  }

  // Book indicators
  if (
    pubLower.includes("book") ||
    pubLower.includes("chapter") ||
    pubLower.includes("springer") ||
    pubLower.includes("press")
  ) {
    return "book";
  }

  // Default to journal
  return "journal";
}

/**
 * Transform SerpAPI article to our Publication type
 */
function transformArticle(article: SerpApiArticle): Publication {
  const authors = article.authors
    ? article.authors.split(",").map((a) => a.trim())
    : ["P Mota"];

  return {
    title: article.title,
    authors,
    year: article.year ? parseInt(article.year, 10) : new Date().getFullYear(),
    venue: article.publication || "Unknown",
    citationCount: article.cited_by?.value || 0,
    url: article.link,
    type: determinePublicationType(article.publication),
    citationId: article.citation_id,
  };
}

/**
 * Fetch publications from Google Scholar via SerpAPI
 * @param authorId - Google Scholar author ID (optional, defaults to Patricia's)
 * @param num - Number of publications to fetch (default: 100)
 * @returns Array of Publication objects
 */
export async function fetchPublications(
  authorId: string = AUTHOR_ID,
  num: number = 100
): Promise<Publication[]> {
  // Check if API key is available
  if (!process.env.SERPAPI_API_KEY) {
    console.warn(
      "SERPAPI_API_KEY not found. Publications will not be fetched. Add your API key to .env.local"
    );
    return [];
  }

  try {
    const response = (await getJson({
      engine: "google_scholar_author",
      author_id: authorId,
      api_key: process.env.SERPAPI_API_KEY,
      num,
      sort: "pubdate", // Sort by publication date
    })) as SerpApiAuthorResponse;

    if (!response.articles || response.articles.length === 0) {
      console.warn("No articles found for author:", authorId);
      return [];
    }

    const publications = response.articles.map(transformArticle);

    // Sort by year (descending) and citation count (descending)
    publications.sort((a, b) => {
      if (b.year !== a.year) {
        return b.year - a.year;
      }
      return b.citationCount - a.citationCount;
    });

    return publications;
  } catch (error) {
    console.error("Error fetching publications from SerpAPI:", error);
    throw new Error(
      `Failed to fetch publications: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Fetch author information from Google Scholar
 */
export async function fetchAuthorInfo(authorId: string = AUTHOR_ID) {
  // Check if API key is available
  if (!process.env.SERPAPI_API_KEY) {
    console.warn("SERPAPI_API_KEY not found. Author info will not be fetched.");
    return null;
  }

  try {
    const response = (await getJson({
      engine: "google_scholar_author",
      author_id: authorId,
      api_key: process.env.SERPAPI_API_KEY,
    })) as SerpApiAuthorResponse;

    return {
      name: response.author.name,
      affiliations: response.author.affiliations,
      email: response.author.email,
      totalCitations: response.author.cited_by?.table[0]?.citations.all || 0,
    };
  } catch (error) {
    console.error("Error fetching author info from SerpAPI:", error);
    return null;
  }
}
