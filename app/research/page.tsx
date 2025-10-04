import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Patricia Mota's research in women's health, biomechanics, and clinical gait analysis. Focus on pelvic floor function, diastasis recti, and postpartum recovery.",
  openGraph: {
    title: "Research - Patricia Mota, PT, PhD",
    description:
      "Research in women's health, biomechanics, pelvic floor function, and postpartum recovery.",
    url: "https://patriciamota.com/research",
    images: [
      {
        url: "/api/og?title=Research&subtitle=Women%27s%20Health%20%26%20Biomechanics",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ResearchPage() {
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
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Research
                </div>
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Research Focus
                </h1>
                <p className="text-slate-600 md:text-xl max-w-[800px] mx-auto">
                  My research focuses on women&apos;s health, particularly on
                  pelvic floor muscle function and abdominal wall adaptations
                  during pregnancy and the postpartum period.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="areas" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1 bg-slate-100">
                  <TabsTrigger
                    value="areas"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Research Areas
                  </TabsTrigger>
                  <TabsTrigger
                    value="publications"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Key Publications
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Current Projects
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="areas" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Women&apos;s Health
                      </CardTitle>
                      <CardDescription>
                        Research on physiological changes during pregnancy and
                        postpartum
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        My research in women&apos;s health focuses on
                        understanding the physiological changes that occur
                        during pregnancy and the postpartum period. This
                        includes studies on pelvic floor muscle function,
                        abdominal wall adaptations, and the effects of exercise
                        on postpartum recovery.
                      </p>
                      <p>
                        Through clinical studies and biomechanical analysis, I
                        aim to develop evidence-based interventions that can
                        improve women&apos;s health outcomes during these
                        critical life stages.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Biomechanics
                      </CardTitle>
                      <CardDescription>
                        Application of mechanical principles to understand
                        biological systems
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        My biomechanics research applies mechanical principles
                        to understand how the human body moves and functions.
                        This includes studies on muscle function, joint
                        mechanics, and the effects of various interventions on
                        movement patterns.
                      </p>
                      <p>
                        Using advanced measurement techniques such as ultrasound
                        imaging and electromyography, I investigate how
                        mechanical forces affect biological tissues and how
                        these interactions can be optimized for better health
                        outcomes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Clinical Gait Analysis
                      </CardTitle>
                      <CardDescription>
                        Study of human walking patterns and abnormalities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        My research in clinical gait analysis involves the
                        systematic study of human walking patterns and the
                        identification of abnormalities that may indicate
                        underlying health issues. This includes the analysis of
                        gait parameters such as step length, cadence, and joint
                        angles.
                      </p>
                      <p>
                        By understanding how various conditions affect gait, I
                        develop targeted interventions to improve mobility and
                        quality of life for individuals with movement disorders.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="publications" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-amber-600">
                          <FileText className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            Journal Publication (2023)
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-slate-900">
                          Pelvic floor muscle function after grade II tears
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Surface electromyography test–retest and differences
                          between nulliparous and primiparous
                        </p>
                        <p className="text-slate-600">
                          This study investigated the reliability of surface
                          electromyography in assessing pelvic floor muscle
                          function after grade II tears. It compared nulliparous
                          and primiparous women to understand the impact of
                          childbirth on pelvic floor muscle activity.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <BookOpen className="h-4 w-4 text-amber-600" />
                          <a
                            href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/nau.25180"
                            className="text-sm text-amber-600 hover:text-amber-800 transition-colors hover:underline"
                          >
                            Read publication
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-rose-600">
                          <FileText className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            Journal Publication (2022)
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-slate-900">
                          Morphological and functional adaptations of the
                          abdominal wall during pregnancy and in the postpartum
                          period
                        </h3>
                        <p className="text-slate-600 text-sm">
                          A comprehensive analysis of changes in the abdominal
                          wall
                        </p>
                        <p className="text-slate-600">
                          This research examined the morphological and
                          functional changes that occur in the abdominal wall
                          during pregnancy and the postpartum period. Using
                          ultrasound imaging and functional assessments, the
                          study documented the adaptations of the abdominal
                          muscles and connective tissues.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <BookOpen className="h-4 w-4 text-rose-600" />
                          <a
                            href="https://repositorio.ulisboa.pt/bitstream/10400.5/8347/1/Manuscript.pdf"
                            className="text-sm text-rose-600 hover:text-rose-800 transition-colors hover:underline"
                          >
                            Read publication
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600"></div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-amber-600">
                          <FileText className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            Journal Publication (2021)
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-slate-900">
                          An ultrasound study on the effect of exercise on
                          postpartum women inter-rectus abdominis distance
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Investigating the impact of targeted exercise
                          interventions
                        </p>
                        <p className="text-slate-600">
                          This study used ultrasound imaging to assess the
                          effect of specific exercise interventions on the
                          inter-rectus abdominis distance in postpartum women.
                          The research provided evidence for the effectiveness
                          of targeted exercises in reducing diastasis recti and
                          improving abdominal function.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <BookOpen className="h-4 w-4 text-amber-600" />
                          <a
                            href="https://doi.org/10.1016/S0021-9290(12)70494-3"
                            className="text-sm text-amber-600 hover:text-amber-800 transition-colors hover:underline"
                          >
                            Read publication
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="projects" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Clinical Gait Analysis in Postpartum Women
                      </CardTitle>
                      <CardDescription>
                        Investigating changes in gait patterns following
                        childbirth
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This ongoing project examines how childbirth affects
                        women&apos;s walking patterns and overall mobility.
                        Using advanced motion capture technology and force plate
                        analysis, we are documenting the biomechanical changes
                        that occur during the postpartum period and developing
                        targeted interventions to address any abnormalities.
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-2">
                        <div className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                          Status: Data collection in progress
                        </div>
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          Collaborators: California State University, Long Beach
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Ultrasound Assessment of Pelvic Floor Function
                      </CardTitle>
                      <CardDescription>
                        Developing new methodologies for non-invasive assessment
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This project aims to develop and validate new
                        ultrasound-based methodologies for assessing pelvic
                        floor function. By creating standardized protocols for
                        ultrasound imaging, we hope to provide clinicians with
                        reliable, non-invasive tools for diagnosing and
                        monitoring pelvic floor disorders.
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-2">
                        <div className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800">
                          Status: Protocol development phase
                        </div>
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          Collaborators: University of Lisbon, Escola Superior
                          de Tecnologia da Saúde de Lisboa
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Exercise Interventions for Diastasis Recti
                      </CardTitle>
                      <CardDescription>
                        Evaluating the effectiveness of targeted exercise
                        programs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This clinical trial is evaluating the effectiveness of
                        various exercise interventions for reducing diastasis
                        recti in postpartum women. By comparing different
                        exercise protocols, we aim to identify the most
                        effective approaches for restoring abdominal wall
                        function after pregnancy.
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-2">
                        <div className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                          Status: Participant recruitment
                        </div>
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          Collaborators: Centro Pré Pós Parto, University of
                          Lisbon
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-center mt-16">
              <Link href="/publications">
                <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50">
                  View All Publications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
