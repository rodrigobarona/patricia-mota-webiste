import { Suspense } from "react";
import type { Metadata } from "next";
import { getPublications, getAuthorInfo } from "@/app/actions/publications";
import PublicationsClient from "./publications-client";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse Patricia Mota's research publications in women's health, biomechanics, and pelvic floor function. Journal articles, conference papers, and book chapters.",
  openGraph: {
    title: "Publications - Patricia Mota, PT, PhD",
    description:
      "Research publications in women's health, biomechanics, and pelvic floor function.",
    url: "https://patriciamota.com/publications",
    images: [
      {
        url: "/api/og?title=Publications&subtitle=Research%20in%20Women's%20Health%20%26%20Biomechanics",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const revalidate = 86400; // Revalidate every 24 hours

async function PublicationsContent() {
  const [publications, authorInfo] = await Promise.all([
    getPublications(),
    getAuthorInfo(),
  ]);

  return (
    <PublicationsClient
      publications={publications}
      authorInfo={authorInfo}
    />
  );
}

function PublicationsLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="h-12 w-64 mb-4" />
      <Skeleton className="h-6 w-96 mb-8" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <Suspense fallback={<PublicationsLoading />}>
      <PublicationsContent />
    </Suspense>
  );
}

