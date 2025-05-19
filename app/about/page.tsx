import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, GraduationCap, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-rose-100 opacity-30 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                    About Me
                  </h1>
                  <p className="text-slate-600 md:text-xl">
                    Women&apos;s Health Researcher and University Professor with a passion for improving lives through
                    research and education.
                  </p>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p>
                    I am an adjunct professor with a demonstrated history of working in higher education and research.
                    My expertise spans Women&apos;s Health, Clinical Gait Analysis, and Exercise Physiology.
                  </p>
                  <p>
                    With a PhD in Biomechanics from Universidade de Lisboa in collaboration with Norwegian School of
                    Sport Sciences, I have dedicated my career to understanding and improving women&apos;s health,
                    particularly in the areas of pelvic floor muscle function and abdominal wall adaptations during
                    pregnancy.
                  </p>
                  <p>
                    Currently, I serve as a Visiting Researcher and Professor at California State University, Long
                    Beach, where I continue my research and teaching in physiotherapy and biomechanics.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <Image
                    src="/patricia-mota-pt-phd-profile.webp?height=1000&width=800"
                    alt="Patricia Mota"
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Education & Skills
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Academic Background
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic journey and professional development have equipped me with a diverse skill set.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 font-serif text-slate-900">
                    <GraduationCap className="h-5 w-5 text-amber-600" />
                    Education
                  </CardTitle>
                  <CardDescription>My academic qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 border-l-2 border-amber-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Doctor of Philosophy (PhD) in Biomechanics</h3>
                    <p className="text-sm text-slate-600">Faculdade de Motricidade Humana, 2010-2014</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">C.O. Degree in Osteopathy</h3>
                    <p className="text-sm text-slate-600">Escuela Osteopatía de Madrid EOM, 2006-2012</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Leduc Lymphatic Drainage Certificate</h3>
                    <p className="text-sm text-slate-600">Université libre de Bruxelles, 2007</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Physiotherapist</h3>
                    <p className="text-sm text-slate-600">Instituto Politécnico de Lisboa, 2001-2005</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 font-serif text-slate-900">
                    <Award className="h-5 w-5 text-rose-600" />
                    Skills & Expertise
                  </CardTitle>
                  <CardDescription>My professional competencies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 border-l-2 border-rose-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Research Expertise</h3>
                    <p className="text-sm text-slate-600">
                      Women&apos;s Health, Biomechanics, Clinical Gait Analysis, Exercise Physiology
                    </p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Clinical Skills</h3>
                    <p className="text-sm text-slate-600">
                      Physiotherapy, Osteopathy, Lymphatic Drainage, Rehabilitation
                    </p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Teaching</h3>
                    <p className="text-sm text-slate-600">University Teaching, Lecturing, Curriculum Development</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-4">
                    <h3 className="font-serif font-bold text-slate-900">Languages</h3>
                    <div className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-slate-600" />
                      <p className="text-sm text-slate-600">
                        Portuguese (Native), English (Full Professional), Spanish (Full Professional)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-rose-100 opacity-20 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Recognition
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Awards & Honors
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recognition for academic and research excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">Matching Dissertation Grant</h3>
                    <p className="text-slate-600">Awarded for exceptional research proposal in women&apos;s health</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">PhD Studentships</h3>
                    <p className="text-slate-600">Received funding for doctoral research in biomechanics</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600"></div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">National Merit Scholarship</h3>
                    <p className="text-slate-600">Recognized for academic excellence in physiotherapy studies</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/research">
                <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50">
                  View My Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
