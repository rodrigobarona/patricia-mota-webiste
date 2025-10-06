"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, FileText, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

// Type for Google Scholar publication
interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;

  citationCount: number;
  url: string;
  type: "journal" | "conference" | "book";
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<
    Publication[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("journal");

  // Simulate fetching publications from Google Scholar
  useEffect(() => {
    // In a real implementation, this would be an API call to a backend service
    // that fetches data from Google Scholar
    const fetchPublications = async () => {
      setLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data that would come from Google Scholar
      const mockPublications: Publication[] = [
        {
          id: "1",
          title:
            "Prevalence and risk factors of diastasis recti abdominis from late pregnancy to 6 months postpartum, and relationship with lumbo-pelvic pain",
          authors: "PGF da Mota, AGBA Pascoal, AIAD Carita, K Bø",
          journal: "Manual Therapy 20 (1), 200–205",
          year: "2015",
          citationCount: 402,
          doi: "10.1016/j.math.2014.09.002",
          url: "https://doi.org/10.1016/j.math.2014.09.002",
          type: "journal",
        },
        {
          id: "2",
          title:
            "Test-retest and intrarater reliability of 2-dimensional ultrasound measurements of distance between rectus abdominis in women",
          authors: "P Mota, AG Pascoal, F Sancho, K Bø",
          journal:
            "Journal of Orthopaedic & Sports Physical Therapy 42 (11), 940–946",
          year: "2012",
          citationCount: 188,
          doi: "10.2519/jospt.2012.4115",
          url: "https://doi.org/10.2519/jospt.2012.4115",
          type: "journal",
        },
        {
          id: "3",
          title:
            "The immediate effects on inter-rectus distance of abdominal crunch and drawing-in exercises during pregnancy and the postpartum period",
          authors: "P Mota, AG Pascoal, AI Carita, K Bø",
          journal:
            "Journal of Orthopaedic & Sports Physical Therapy 45 (10), 781–788",
          year: "2015",
          citationCount: 170,
          doi: "10.2519/jospt.2015.5459",
          url: "https://doi.org/10.2519/jospt.2015.5459",
          type: "journal",
        },
        {
          id: "4",
          title:
            "Reliability of the inter-rectus distance measured by palpation. Comparison of palpation and ultrasound measurements",
          authors: "P Mota, AG Pascoal, F Sancho, AI Carita, K Bø",
          journal: "Manual Therapy 18 (4), 294–298",
          year: "2013",
          citationCount: 158,
          doi: "10.1016/j.math.2012.10.013",
          url: "https://doi.org/10.1016/j.math.2012.10.013",
          type: "journal",
        },
        {
          id: "5",
          title:
            "Inter-rectus distance in postpartum women can be reduced by isometric contraction of the abdominal muscles: a preliminary case–control study",
          authors: "AG Pascoal, S Dionisio, F Cordeiro, P Mota",
          journal: "Physiotherapy 100 (4), 344–348",
          year: "2014",
          citationCount: 152,
          doi: "10.1016/j.physio.2013.11.006",
          url: "https://doi.org/10.1016/j.physio.2013.11.006",
          type: "journal",
        },
        {
          id: "6",
          title:
            "Abdominal exercises affect inter-rectus distance in postpartum women: a two-dimensional ultrasound study",
          authors: "MF Sancho, AG Pascoal, P Mota, K Bø",
          journal: "Physiotherapy 101 (3), 286–291",
          year: "2015",
          citationCount: 151,
          doi: "10.1016/j.physio.2015.04.004",
          url: "https://doi.org/10.1016/j.physio.2015.04.004",
          type: "journal",
        },
        {
          id: "7",
          title:
            "Normal width of the inter-recti distance in pregnant and postpartum primiparous women",
          authors: "P Mota, AG Pascoal, AI Carita, K Bø",
          journal: "Musculoskeletal Science and Practice 35, 34–37",
          year: "2018",
          citationCount: 126,
          doi: "10.1016/j.msksp.2018.02.004",
          url: "https://doi.org/10.1016/j.msksp.2018.02.004",
          type: "journal",
        },
        {
          id: "8",
          title:
            "Diastasis recti abdominis in pregnancy and postpartum period. Risk factors, functional implications and resolution",
          authors: "P Mota, A Gil Pascoal, K Bo",
          journal: "Current Women's Health Reviews 11 (1), 59–67",
          year: "2015",
          citationCount: 55,
          doi: "10.2174/157340481101150914201735",
          url: "https://doi.org/10.2174/157340481101150914201735",
          type: "journal",
        },
        {
          id: "9",
          title:
            "ACOG Committee Opinion No. 804: physical activity and exercise during pregnancy and the postpartum period",
          authors: "P Mota, K Bø",
          journal: "Obstetrics & Gynecology 137 (2), 376",
          year: "2021",
          citationCount: 33,
          doi: "10.1097/AOG.0000000000004267",
          url: "https://doi.org/10.1097/AOG.0000000000004267",
          type: "journal",
        },
        {
          id: "10",
          title: "The natural shock absorption of the leg spring",
          authors: "W Kim, F João, J Tan, P Mota, V Vleck, L Aguiar, A Veloso",
          journal: "Journal of Biomechanics 46 (1), 129–136",
          year: "2013",
          citationCount: 20,
          doi: "10.1016/j.jbiomech.2012.10.041",
          url: "https://doi.org/10.1016/j.jbiomech.2012.10.041",
          type: "journal",
        },
        {
          id: "11",
          title:
            "Technical aspects of inter-recti distance measurement with ultrasonographic imaging for physiotherapy purposes: the scoping review",
          authors:
            "A Opala-Berdzik, M Rudek-Zeprzałka, J Niesporek, M Cebula, J Baron, ...",
          journal: "Insights into Imaging 14 (1), 92",
          year: "2023",
          citationCount: 12,
          doi: "10.1186/s13244-023-01443-4",
          url: "https://doi.org/10.1186/s13244-023-01443-4",
          type: "journal",
        },
        {
          id: "12",
          title: "Diastasis Recti During Pregnancy and Postpartum",
          authors: "P Mota, AG Pascoal, C Vaz, F João, A Veloso, K Bø",
          journal:
            "Women's Health and Biomechanics: Where Medicine and Engineering Meet, 121–132",
          year: "2018",
          citationCount: 12,
          doi: "10.1007/978-3-319-71574-2_10",
          url: "https://doi.org/10.1007/978-3-319-71574-2_10",
          type: "book",
        },
        {
          id: "13",
          title:
            "Inter-recti distance at rest, during abdominal crunch and drawing in exercises during pregnancy and postpartum",
          authors: "P Mota, AG Pascoal, AI Carita, K Bø",
          journal: "Physiotherapy 101, e1050–e1051",
          year: "2015",
          citationCount: 10,
          doi: "10.1016/j.physio.2015.03.1928",
          url: "https://doi.org/10.1016/j.physio.2015.03.1928",
          type: "journal",
        },
        {
          id: "14",
          title:
            "A scoping review exploring stigma associated with postpartum urinary incontinence",
          authors: "JM Cox, M Sánchez-Polán, P Mota, R Barakat, TS Nagpal",
          journal: "International Urogynecology Journal 34 (9), 1997–2005",
          year: "2023",
          citationCount: 6,
          doi: "10.1007/s00192-023-05526-0",
          url: "https://doi.org/10.1007/s00192-023-05526-0",
          type: "journal",
        },
        {
          id: "15",
          title:
            "Therapeutic Exercise Regarding Musculoskeletal Health of the Pregnant Exerciser and Athlete",
          authors: "AG Pascoal, B Stuge, P Mota, G Hilde, K Bø",
          journal:
            "Exercise and Physical Activity During Pregnancy and Postpartum: Evidence …",
          year: "2022",
          citationCount: 4,
          doi: "10.1007/978-3-319-91032-1_10",
          url: "https://doi.org/10.1007/978-3-319-91032-1_10",
          type: "book",
        },
        {
          id: "16",
          title:
            "An ultrasound study on the effect of exercise on postpartum women inter-rectus abdominis distance",
          authors: "F Sancho, AG Pascoal, P Mota",
          journal: "Journal of Biomechanics 45, S493",
          year: "2012",
          citationCount: 4,
          doi: "10.1016/S0021-9290(12)70494-3",
          url: "https://doi.org/10.1016/S0021-9290(12)70494-3",
          type: "journal",
        },
        {
          id: "17",
          title:
            "Pelvic floor muscle function after grade II tears—Surface electromyography test–retest and differences between nulliparous and primiparous",
          authors: "P Mota, A Costa, D Santos, S Santo, JG Barros, K Bø",
          journal: "Neurourology and Urodynamics 42 (5), 1162–1168",
          year: "2023",
          citationCount: 2,
          doi: "10.1002/nau.25180",
          url: "https://doi.org/10.1002/nau.25180",
          type: "journal",
        },
        {
          id: "18",
          title:
            "Changes in superficial abdominal muscles morphology during pregnancy: a case study",
          authors: "P Mota, AG Pascoal, F Vieira",
          journal: "International Society of Biomechanics XXIII Congress, 3–7",
          year: "2011",
          citationCount: 2,
          doi: "",
          url: "https://isbweb.org/images/conf/2011/ScientificProgram/ISB2011_ScientificProgram_files/1368.pdf",
          type: "conference",
        },
        {
          id: "19",
          title:
            "On “The impact of hypopressive abdominal exercise on Linea Alba morphology in women who are postpartum: a short-term cross-sectional study.”",
          authors: "P Mota, NM Theodorsen, S Gluppe, K Bø",
          journal: "Physical Therapy 103 (4), pzad018",
          year: "2023",
          citationCount: 1,
          doi: "10.1093/ptj/pzad018",
          url: "https://doi.org/10.1093/ptj/pzad018",
          type: "journal",
        },
        {
          id: "20",
          title: "Prevenção e tratamento da Incontinência Urinária",
          authors: "P Mota",
          journal: "Instituto Politécnico de Santarém",
          year: "2020",
          citationCount: 1,
          doi: "",
          url: "http://hdl.handle.net/10400.21/12966",
          type: "book",
        },
        {
          id: "21",
          title:
            "Ultrasound Measurements of the Inter-rectus Abdominis Distance",
          authors: "AG Pascoal, R Chityala, P Mota, F Sancho",
          journal: "Journal of Biomechanics 45, S460",
          year: "2012",
          citationCount: 1,
          doi: "10.1016/S0021-9290(12)70461-X",
          url: "https://doi.org/10.1016/S0021-9290(12)70461-X",
          type: "journal",
        },
        {
          id: "22",
          title: "Alterations of the abdominal wall during pregnancy",
          authors: "P Mota",
          journal:
            "Post-maternity Body Changes: Obstetric Fundamentals and Surgical Reshaping",
          year: "2023",
          citationCount: 0,
          doi: "",
          url: "https://doi.org/10.1007/978-3-030-43840-1_21",
          type: "book",
        },
        {
          id: "23",
          title:
            "Guía de Práctica Clínica sobre la Actividad Física durante el Embarazo",
          authors:
            "R Barakat, M Sánchez-Polán, C Silva-Jose, A Uria-Minguito, D Zhang, ...",
          journal: "",
          year: "2023",
          citationCount: 0,
          doi: "11531/78387",
          url: "http://hdl.handle.net/11531/78387",
          type: "book",
        },
        {
          id: "24",
          title:
            "Feasibility study of a 4-week EPI-no® protocol in pregnant women",
          authors: "P Mota, F Guimarães, C Homsi-Jorge",
          journal: "",
          year: "2023",
          citationCount: 0,
          doi: "10400.21/17682",
          url: "http://hdl.handle.net/10400.21/17682",
          type: "conference",
        },
        {
          id: "25",
          title:
            "A perspetiva das crianças sobre a participação das famílias no jardim de infância",
          authors: "P Mota",
          journal: "",
          year: "2022",
          citationCount: 0,
          doi: "10400.21/15846",
          url: "http://hdl.handle.net/10400.21/15846",
          type: "conference",
        },
        {
          id: "26",
          title:
            "Surface electromyography and three/four-dimension ultrasound assessment of the pelvic floor in women with severe perineal tear",
          authors: "M Pinto-Coelho, K Bø, A Henriques, P Mota",
          journal: "",
          year: "2021",
          citationCount: 0,
          doi: "10400.21/17683",
          url: "http://hdl.handle.net/10400.21/17683",
          type: "journal",
        },
        {
          id: "27",
          title: "Prevenção e tratamento da diástase abdominal",
          authors: "P Mota",
          journal: "Instituto Politécnico de Santarém",
          year: "2020",
          citationCount: 0,
          doi: "10400.21/12965",
          url: "http://hdl.handle.net/10400.21/12965",
          type: "book",
        },
        {
          id: "28",
          title:
            "Ultrasound imaging transducer orientation and displacement during Diastasis Recti Assessment",
          authors: "P Mota, AG Pascoal, C Vaz, F João, A Veloso, K Bø",
          journal: "BioMedWomen, 195–198",
          year: "2016",
          citationCount: 0,
          doi: "",
          url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781315644622-52/ultrasound-imaging-transducer-orientation-displacement-diastasis-recti-assessment-mota-pascoal-vaz-jo%C3%A3o-veloso-b%C3%B8",
          type: "book",
        },
        {
          id: "29",
          title:
            "Morphological and functional adaptations of the abdominal wall during pregnancy and in the postpartum period",
          authors: "PGF da Mota",
          journal: "PQDT-Global",
          year: "2014",
          citationCount: 0,
          doi: "10400.5/8347",
          url: "http://hdl.handle.net/10400.5/8347",
          type: "book",
        },
        {
          id: "30",
          title: "The natural shock absorption of the leg spring",
          authors: "W Kim, F João, P Mota, L Aguiar, A Veloso",
          journal: "Journal of Biomechanics 45, S221",
          year: "2012",
          citationCount: 0,
          doi: "10.1016/j.jbiomech.2012.10.041",
          url: "https://doi.org/10.1016/j.jbiomech.2012.10.041",
          type: "journal",
        },
        {
          id: "31",
          title:
            "Can Drawing in and Abdominal Crunch Exercises narrow the Inter-rectus Distance?",
          authors: "P Mota; A G Pascoal; A I Carita; K Bø",
          venue: "International Society of Biomechanics, Glasgow, 2015",
          year: "2015",
          doi: "",
          url: "https://isbweb.org/images/conferences/isb-congresses/2015/isb_2015_programme_book_final.pdf",
          type: "conference",
        },
        {
          id: "32",
          title:
            "Diastasis Recovery After Pregnancy. A Follow Up Ultrasound Study On Changes Of Inter-Recti Distance From Late Pregnancy Till 6 Months Postpartum.",
          authors: "P Mota; A G Pascoal; A I Carita; K Bø",
          venue:
            "XXIV Congress of the International Society of Biomechanics, Natal, 2013",
          year: "2013",
          doi: "",
          url: "https://media.isbweb.org/images/conferences/isb-congresses/2013/poster/ps2-17x.pdf",
          type: "conference",
        },
        {
          id: "33",
          title:
            "Como avaliar a concordância entre instrumentos com escalas de medição distintas?",
          authors: "A I Carita; P Mota; A G Pascoal",
          venue:
            "XX Congresso Anual da Sociedade Portuguesa de Estatística, Porto, 2012",
          year: "2012",
          doi: "",
          url: "https://sigarra.up.pt/feup/pt/PUB_GERAL.PUB_VIEW?pi_pub_base_id=9630",
          type: "conference",
        },
        {
          id: "34",
          title:
            "Does The Partial Sit-Up Exercise Reduce The Postpartum Inter-Rectus Abdominis Distance?",
          authors: "A G Pascoal; M F Sancho; P Mota; K Bø",
          venue:
            "XXIV Congress of the International Society of Biomechanics, 2013",
          year: "2013",
          doi: "",
          url: "https://isbweb.org/images/conferences/isb-congresses/2013/poster/ps2-17y.pdf",
          type: "conference",
        },
        {
          id: "35",
          title:
            "Prevalence of levator ani muscle injuries in primiparous women after delivery and their influence on pelvic floor disorders-systematic review",
          authors: "P Pessoa, A Carvalho, P Mota",
          journal: "Neurourology and Urodynamics",
          year: "2024",
          citationCount: 2,
          doi: "10.1002/nau.25529",
          url: "https://doi.org/10.1002/nau.25529",
          type: "journal",
        },
      ];

      setPublications(mockPublications);
      setFilteredPublications(
        mockPublications.filter((pub) => pub.type === activeTab)
      );
      setLoading(false);
    };

    fetchPublications();
  }, [activeTab]);

  // Filter publications based on search query and active tab
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPublications(
        publications.filter((pub) => pub.type === activeTab)
      );
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredPublications(
        publications.filter(
          (pub) =>
            pub.type === activeTab &&
            (pub.title.toLowerCase().includes(query) ||
              pub.authors.toLowerCase().includes(query) ||
              pub.journal.toLowerCase().includes(query) ||
              pub.year.includes(query))
        )
      );
    }
  }, [searchQuery, publications, activeTab]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

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
              <Tabs
                defaultValue="journal"
                className="w-full"
                onValueChange={handleTabChange}
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

                {["journal", "conference", "book"].map((tabValue) => {
                  // Filter the publications for this tab
                  const pubsForTab = filteredPublications.filter(
                    (pub) => pub.type === tabValue
                  );

                  // Create a sorted copy by year (newest first)
                  const sortedByYear = [...pubsForTab].sort(
                    (a, b) => Number(b.year) - Number(a.year)
                  ); // flip for oldest first: (a, b) => Number(a.year) - Number(b.year)

                  return (
                    <TabsContent
                      key={tabValue}
                      value={tabValue}
                      className="mt-6 space-y-8"
                    >
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
                      ) : sortedByYear.length > 0 ? (
                        sortedByYear.map((publication) => (
                          <Card
                            key={publication.id}
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
                                  {publication.authors}
                                </p>

                                {/* Show journal OR venue */}
                                {(publication.journal || publication.venue) && (
                                  <p className="text-slate-600">
                                    <strong>Published in:</strong>{" "}
                                    {publication.journal ?? publication.venue}
                                  </p>
                                )}

                                <div className="flex items-center pt-4">
                                  {/* Only render citations badge when > 0 */}
                                  {publication.citationCount > 0 && (
                                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                      {publication.citationCount} citation
                                      {publication.citationCount > 1 ? "s" : ""}
                                    </span>
                                  )}

                                  {/* This wrapper pushes the link all the way to the right */}
                                  <div className="ml-auto text-sm font-medium text-amber-600">
                                    {publication.doi ? (
                                      // If we have a DOI, just display it
                                      <span>
                                        DOI:{" "}
                                        <a
                                          href={`${publication.url}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="underline hover:text-amber-800"
                                        >
                                          {publication.doi}
                                        </a>
                                      </span>
                                    ) : (
                                      // Otherwise fall back to Google Scholar
                                      <a
                                        href={publication.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors"
                                      >
                                        View article
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        // No results
                        <div className="text-center py-12">
                          <p className="text-slate-500">
                            No publications found matching your search criteria.
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
            <div className="flex justify-center mt-16">
              <a
                href="https://scholar.google.com/citations?user=fNJsrScAAAAJ"
                target="_blank"
                rel="noreferrer"
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
