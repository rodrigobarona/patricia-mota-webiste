"use client";

import { useState, useMemo } from "react";
import { ArrowRight, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import type { Publication } from "@/lib/types/publication";

interface PublicationsClientProps {
  publications: Publication[];
  authorInfo: {
    name: string;
    affiliations: string;
    email?: string;
    totalCitations: number;
  } | null;
}

export default function PublicationsClient({
  publications,
  authorInfo,
}: PublicationsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"journal" | "conference" | "book">(
    "journal"
  );

  // Filter publications by tab and search query, then sort by year descending
  const filteredPublications = useMemo(() => {
    let filtered = publications.filter((pub) => pub.type === activeTab);

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.some((author) => author.toLowerCase().includes(query)) ||
          pub.venue.toLowerCase().includes(query) ||
          pub.year.toString().includes(query)
      );
    }

    // Sort by year (newest first), then by citation count
    return filtered.sort((a, b) => {
      if (b.year !== a.year) {
        return b.year - a.year;
      }
      return b.citationCount - a.citationCount;
    });
  }, [publications, activeTab, searchQuery]);

  const isLoading = publications.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Beautiful Design */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-rose-100 opacity-30 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Publications
                </h1>
                <p className="text-slate-700 md:text-xl max-w-[800px] mx-auto font-light">
                  A collection of my research publications in women&apos;s
                  health, biomechanics, and clinical gait analysis.
                </p>
              </div>
              <div className="w-full max-w-md mt-8">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input
                    type="search"
                    placeholder="Search publications..."
                    className="w-full bg-white pl-10 pr-4 py-6 rounded-full shadow-sm border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Tabs
                value={activeTab}
                onValueChange={(value) =>
                  setActiveTab(value as "journal" | "conference" | "book")
                }
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1 bg-slate-100">
                  <TabsTrigger
                    value="journal"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Journal Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="conference"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Conference Papers
                  </TabsTrigger>
                  <TabsTrigger
                    value="book"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Book Chapters
                  </TabsTrigger>
                </TabsList>

                {["journal", "conference", "book"].map((tabValue) => (
                  <TabsContent
                    key={tabValue}
                    value={tabValue}
                    className="mt-6 space-y-8"
                  >
                    {isLoading ? (
                      // Loading skeletons
                      Array.from({ length: 3 }).map((_, i) => (
                        <Card
                          key={i}
                          className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-0">
                            <div className="p-6 space-y-4">
                              <Skeleton className="h-6 w-3/4" />
                              <Skeleton className="h-4 w-1/2" />
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-1/3" />
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : tabValue === activeTab &&
                      filteredPublications.length > 0 ? (
                      // Show publications
                      filteredPublications.map((publication, index) => (
                        <Card
                          key={`${publication.citationId || index}`}
                          className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-0">
                            <div className="p-6 space-y-3">
                              <div className="flex items-center gap-2 text-amber-600">
                                <FileText className="h-4 w-4" />
                                <span className="text-xs font-medium">
                                  {publication.type.charAt(0).toUpperCase() +
                                    publication.type.slice(1)}{" "}
                                  ({publication.year})
                                </span>
                              </div>

                              <h3 className="text-xl font-serif font-bold text-slate-900">
                                {publication.title}
                              </h3>

                              <p className="text-slate-600">
                                <strong>Authors:</strong>{" "}
                                {publication.authors.join(", ")}
                              </p>

                              {publication.venue && (
                                <p className="text-slate-600">
                                  <strong>Published in:</strong>{" "}
                                  {publication.venue}
                                </p>
                              )}

                              <div className="flex items-center pt-4">
                                {publication.citationCount > 0 && (
                                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                    {publication.citationCount} citation
                                    {publication.citationCount > 1 ? "s" : ""}
                                  </span>
                                )}

                                {publication.url && (
                                  <div className="ml-auto text-sm font-medium text-amber-600">
                                    <a
                                      href={publication.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors"
                                    >
                                      View article
                                      <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : tabValue === activeTab ? (
                      // No results
                      <div className="text-center py-12">
                        <p className="text-slate-500">
                          {searchQuery
                            ? "No publications found matching your search criteria."
                            : "No publications available in this category."}
                        </p>
                      </div>
                    ) : null}
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="flex justify-center mt-16">
              <a
                href="https://scholar.google.com/citations?user=fNJsrScAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50">
                  View Complete Google Scholar Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
