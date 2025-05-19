"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ArrowRight, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Type for Google Scholar publication
interface Publication {
  id: string
  title: string
  authors: string
  journal: string
  year: string
  citationCount: number
  url: string
  type: "journal" | "conference" | "book"
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("journal")

  // Simulate fetching publications from Google Scholar
  useEffect(() => {
    // In a real implementation, this would be an API call to a backend service
    // that fetches data from Google Scholar
    const fetchPublications = async () => {
      setLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data that would come from Google Scholar
      const mockPublications: Publication[] = [
        {
          id: "1",
          title:
            "Pelvic floor muscle function after grade II tears—Surface electromyography test–retest and differences between nulliparous and primiparous",
          authors: "Mota, P., Pascoal, A. G., Carita, A. I., & Bø, K.",
          journal: "Journal of Women's Health Physical Therapy",
          year: "2023",
          citationCount: 42,
          url: "https://scholar.google.com/citation1",
          type: "journal",
        },
        {
          id: "2",
          title:
            "Morphological and functional adaptations of the abdominal wall during pregnancy and in the postpartum period",
          authors: "Mota, P., Pascoal, A. G., Bø, K., & Carita, A. I.",
          journal: "Journal of Biomechanics",
          year: "2022",
          citationCount: 38,
          url: "https://scholar.google.com/citation2",
          type: "journal",
        },
        {
          id: "3",
          title: "An ultrasound study on the effect of exercise on postpartum women inter-rectus abdominis distance",
          authors: "Mota, P., Pascoal, A. G., Carita, A. I., & Bø, K.",
          journal: "Physical Therapy",
          year: "2021",
          citationCount: 56,
          url: "https://scholar.google.com/citation3",
          type: "journal",
        },
        {
          id: "4",
          title: "Normal width of the inter-recti distance in pregnant and postpartum primiparous women",
          authors: "Mota, P., Pascoal, A. G., Carita, A. I., & Bø, K.",
          journal: "Journal of Orthopaedic & Sports Physical Therapy",
          year: "2020",
          citationCount: 72,
          url: "https://scholar.google.com/citation4",
          type: "journal",
        },
        {
          id: "5",
          title: "Ultrasound imaging transducer orientation and displacement during Diastasis Recti Assessment",
          authors: "Mota, P., Pascoal, A. G., & Bø, K.",
          journal: "Manual Therapy",
          year: "2019",
          citationCount: 29,
          url: "https://scholar.google.com/citation5",
          type: "journal",
        },
        {
          id: "6",
          title: "Biomechanical Analysis of Pelvic Floor Muscle Function During Pregnancy",
          authors: "Mota, P., Johnson, A., & Smith, B.",
          journal: "International Conference on Women's Health Biomechanics",
          year: "2023",
          citationCount: 8,
          url: "https://scholar.google.com/citation6",
          type: "conference",
        },
        {
          id: "7",
          title: "Gait Analysis in Postpartum Women: A Longitudinal Study",
          authors: "Mota, P., Williams, C., & Garcia, M.",
          journal: "World Congress of Biomechanics",
          year: "2022",
          citationCount: 12,
          url: "https://scholar.google.com/citation7",
          type: "conference",
        },
        {
          id: "8",
          title: "Physiotherapy Interventions for Diastasis Recti",
          authors: "Mota, P. & Anderson, J.",
          journal: "Comprehensive Guide to Women's Health Physiotherapy, Academic Press",
          year: "2023",
          citationCount: 5,
          url: "https://scholar.google.com/citation8",
          type: "book",
        },
        {
          id: "9",
          title: "Biomechanical Principles in Women's Health",
          authors: "Mota, P., Pascoal, A. G., & Bø, K.",
          journal: "Textbook of Women's Health Physiotherapy, Elsevier",
          year: "2021",
          citationCount: 18,
          url: "https://scholar.google.com/citation9",
          type: "book",
        },
      ]

      setPublications(mockPublications)
      setFilteredPublications(mockPublications.filter((pub) => pub.type === activeTab))
      setLoading(false)
    }

    fetchPublications()
  }, [activeTab])

  // Filter publications based on search query and active tab
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPublications(publications.filter((pub) => pub.type === activeTab))
    } else {
      const query = searchQuery.toLowerCase()
      setFilteredPublications(
        publications.filter(
          (pub) =>
            pub.type === activeTab &&
            (pub.title.toLowerCase().includes(query) ||
              pub.authors.toLowerCase().includes(query) ||
              pub.journal.toLowerCase().includes(query) ||
              pub.year.includes(query)),
        ),
      )
    }
  }, [searchQuery, publications, activeTab])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
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
                  A collection of my research publications in women&apos;s health, biomechanics, and clinical gait
                  analysis, synchronized with my <span className="font-medium">Google Scholar</span> profile.
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
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="journal" className="w-full" onValueChange={handleTabChange}>
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
                  <TabsContent key={tabValue} value={tabValue} className="mt-6 space-y-8">
                    {loading ? (
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
                    ) : filteredPublications.length > 0 ? (
                      // Publication cards
                      filteredPublications.map((publication) => (
                        <Card
                          key={publication.id}
                          className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-0">
                            <div className="p-6 space-y-3">
                              <div className="flex items-center gap-2 text-amber-600">
                                <FileText className="h-4 w-4" />
                                <span className="text-xs font-medium">
                                  {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)} (
                                  {publication.year})
                                </span>
                              </div>
                              <h3 className="text-xl font-serif font-bold text-slate-900">{publication.title}</h3>
                              <p className="text-slate-600">
                                <strong>Authors:</strong> {publication.authors}
                              </p>
                              <p className="text-slate-600">
                                <strong>Published in:</strong> {publication.journal}
                              </p>
                              <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                    {publication.citationCount} citations
                                  </span>
                                </div>
                                <a
                                  href={publication.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                                >
                                  View on Google Scholar
                                  <ArrowRight className="ml-1 h-4 w-4" />
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      // No results
                      <div className="text-center py-12">
                        <p className="text-slate-500">No publications found matching your search criteria.</p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            <div className="flex justify-center mt-16">
              <a href="https://scholar.google.pt/citations" target="_blank" rel="noreferrer">
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
  )
}
