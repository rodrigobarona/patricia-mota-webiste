import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

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
  title: "Teaching",
  description:
    "Patricia Mota's teaching approach in physiotherapy education, including courses in women's health, biomechanics, and research methods at California State University, Long Beach.",
  openGraph: {
    title: "Teaching - Patricia Mota, PT, PhD",
    description:
      "Physiotherapy education in women's health, biomechanics, and research methods.",
    url: "https://patriciamota.com/teaching",
    images: [
      {
        url: "/api/og?title=Teaching&subtitle=Physiotherapy%20%26%20Research%20Education",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function TeachingPage() {
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
                  Teaching
                </div>
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Academic Instruction
                </h1>
                <p className="text-slate-600 md:text-xl max-w-[800px] mx-auto">
                  My approach to teaching combines theoretical knowledge with
                  practical applications, preparing students for careers in
                  physiotherapy and research.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="philosophy" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1 bg-slate-100">
                  <TabsTrigger
                    value="philosophy"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Teaching Philosophy
                  </TabsTrigger>
                  <TabsTrigger
                    value="courses"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="mentoring"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Student Mentoring
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="philosophy" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="flex items-center gap-2 font-serif text-slate-900">
                        <GraduationCap className="h-5 w-5 text-amber-600" />
                        My Teaching Approach
                      </CardTitle>
                      <CardDescription>
                        Integrating research and practice in physiotherapy
                        education
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        My teaching philosophy is centered on the integration of
                        evidence-based practice with hands-on clinical skills. I
                        believe that effective physiotherapy education must
                        bridge the gap between theoretical knowledge and
                        practical application, preparing students to become
                        competent and compassionate healthcare professionals.
                      </p>
                      <p>
                        In my classroom, I create an interactive learning
                        environment that encourages critical thinking and
                        problem-solving. I use a variety of teaching methods,
                        including case studies, practical demonstrations, and
                        research projects, to engage students with different
                        learning styles and help them develop a comprehensive
                        understanding of physiotherapy concepts.
                      </p>
                      <p>
                        I am committed to incorporating my research into my
                        teaching, exposing students to the latest developments
                        in women&apos;s health, biomechanics, and clinical gait
                        analysis. By sharing my research experiences and
                        findings, I aim to inspire students to pursue their own
                        research interests and contribute to the advancement of
                        the field.
                      </p>
                      <p>
                        Furthermore, I emphasize the importance of clinical
                        reasoning and evidence-based decision-making in
                        physiotherapy practice. I guide students in developing
                        the skills to critically evaluate research literature
                        and apply it to clinical scenarios, preparing them to
                        provide high-quality, evidence-based care to their
                        future patients.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="courses" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Women&apos;s Health Physiotherapy
                      </CardTitle>
                      <CardDescription>
                        Graduate-level course on physiotherapy interventions for
                        women
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This course provides an in-depth exploration of
                        physiotherapy interventions for women across the
                        lifespan, with a focus on pregnancy, postpartum, and
                        pelvic health. Students learn about the anatomical and
                        physiological changes that occur during pregnancy and
                        the postpartum period, and develop skills in assessment
                        and treatment of common conditions such as diastasis
                        recti, pelvic floor dysfunction, and pregnancy-related
                        musculoskeletal disorders.
                      </p>
                      <p className="font-medium text-slate-900">Key Topics:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          Anatomy and physiology of the female reproductive
                          system
                        </li>
                        <li>
                          Physiological changes during pregnancy and postpartum
                        </li>
                        <li>Assessment and treatment of diastasis recti</li>
                        <li>Pelvic floor assessment and rehabilitation</li>
                        <li>
                          Exercise prescription for pregnant and postpartum
                          women
                        </li>
                        <li>
                          Evidence-based interventions for women&apos;s health
                          conditions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Biomechanics and Kinesiology
                      </CardTitle>
                      <CardDescription>
                        Undergraduate course on human movement principles
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This course introduces students to the fundamental
                        principles of biomechanics and kinesiology as they apply
                        to human movement and physiotherapy practice. Students
                        learn about the mechanical properties of biological
                        tissues, joint mechanics, and the analysis of movement
                        patterns. The course includes both theoretical lectures
                        and practical laboratory sessions where students apply
                        biomechanical concepts to the analysis of functional
                        activities.
                      </p>
                      <p className="font-medium text-slate-900">Key Topics:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Mechanical properties of biological tissues</li>
                        <li>Joint structure and function</li>
                        <li>Muscle mechanics and force production</li>
                        <li>Gait analysis and movement assessment</li>
                        <li>
                          Biomechanical principles in injury prevention and
                          rehabilitation
                        </li>
                        <li>
                          Application of biomechanics to physiotherapy
                          interventions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="font-serif text-slate-900">
                        Research Methods in Physiotherapy
                      </CardTitle>
                      <CardDescription>
                        Graduate course on research design and implementation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        This course equips students with the knowledge and
                        skills to design, conduct, and evaluate research in
                        physiotherapy. Students learn about various research
                        methodologies, data collection techniques, and
                        statistical analysis methods. The course emphasizes the
                        importance of evidence-based practice and helps students
                        develop the critical thinking skills needed to evaluate
                        and apply research findings in clinical practice.
                      </p>
                      <p className="font-medium text-slate-900">Key Topics:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Research design and methodology</li>
                        <li>Quantitative and qualitative research methods</li>
                        <li>
                          Data collection techniques in physiotherapy research
                        </li>
                        <li>Statistical analysis and interpretation</li>
                        <li>Critical appraisal of research literature</li>
                        <li>Ethical considerations in research</li>
                        <li>Writing research proposals and reports</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="mentoring" className="mt-6 space-y-8">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                      <CardTitle className="flex items-center gap-2 font-serif text-slate-900">
                        <Users className="h-5 w-5 text-amber-600" />
                        Student Mentoring and Supervision
                      </CardTitle>
                      <CardDescription>
                        Supporting the next generation of physiotherapists and
                        researchers
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-slate-600">
                      <p>
                        I am deeply committed to mentoring and supervising
                        students at various stages of their academic and
                        professional development. My mentoring approach is
                        tailored to each student&apos;s individual needs and
                        goals, providing guidance and support while encouraging
                        independence and critical thinking.
                      </p>
                      <div className="space-y-2 border-l-2 border-amber-200 pl-4 mt-6">
                        <h3 className="font-serif font-bold text-slate-900">
                          Graduate Research Supervision
                        </h3>
                        <p>
                          I have supervised numerous master&apos;s and doctoral
                          students in research projects related to women&apos;s
                          health, biomechanics, and clinical gait analysis. I
                          guide students through all stages of the research
                          process, from developing research questions and
                          designing studies to analyzing data and writing
                          manuscripts for publication.
                        </p>
                      </div>
                      <div className="space-y-2 border-l-2 border-rose-200 pl-4 mt-6">
                        <h3 className="font-serif font-bold text-slate-900">
                          Clinical Mentoring
                        </h3>
                        <p>
                          I provide clinical mentoring to physiotherapy students
                          during their clinical placements, helping them develop
                          their assessment and treatment skills and apply
                          theoretical knowledge to real-world clinical
                          scenarios. I emphasize the importance of
                          patient-centered care and evidence-based practice in
                          clinical decision-making.
                        </p>
                      </div>
                      <div className="space-y-2 border-l-2 border-amber-200 pl-4 mt-6">
                        <h3 className="font-serif font-bold text-slate-900">
                          Career Development
                        </h3>
                        <p>
                          I support students in their career development by
                          providing guidance on professional opportunities,
                          continuing education, and networking within the
                          physiotherapy and research communities. I help
                          students identify their strengths and interests and
                          develop strategies for achieving their career goals.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-center mt-16">
              <Link href="/contact">
                <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50">
                  Contact for Teaching Inquiries
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
