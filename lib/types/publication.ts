/**
 * Publication data types for Patricia Mota's website
 */

export interface Publication {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  citationCount: number;
  url?: string;
  snippet?: string;
  type: "journal" | "conference" | "book";
  citationId?: string;
}

export interface SerpApiArticle {
  title: string;
  link?: string;
  citation_id?: string;
  authors?: string;
  publication?: string;
  cited_by?: {
    value: number;
    link: string;
  };
  year?: string;
}

export interface SerpApiAuthorResponse {
  search_metadata: {
    id: string;
    status: string;
    created_at: string;
    processed_at: string;
  };
  author: {
    name: string;
    affiliations: string;
    email?: string;
    cited_by?: {
      table: Array<{
        citations: {
          all: number;
        };
      }>;
    };
  };
  articles: SerpApiArticle[];
}
