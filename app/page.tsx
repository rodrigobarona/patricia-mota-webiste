import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, Mail, MapPin, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
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
                    Patricia Mota, PT, PhD
                  </h1>
                  <p className="text-slate-600 md:text-xl">
                    Women&apos;s Health Researcher | PhD in Biomechanics | Clinical Gait Researcher | University
                    Professor | Co-founder & CEO of Eleva.care
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/research">
                    <Button
                      variant="outline"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Research
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:patimota@gmail.com" className="hover:text-amber-600 transition-colors">
                      patimota@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/patimota"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Patricia-Mota-4"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    ResearchGate
                  </a>
                  <a
                    href="https://x.com/patimota"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    Twitter/X
                  </a>
                  <a
                    href="https://www.instagram.com/patricia_mota_pt_phd/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <Image
                    src="/patricia-mota-pt-phd-profile.webp?height=800&width=600"
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-emerald-300 opacity-10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-emerald-900/20 px-3 py-1 text-sm font-medium text-emerald-100">
                  Eleva.care
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Co-founder & CEO
                </h2>
                <p className="text-slate-300 md:text-xl max-w-[600px]">
                  At Eleva Care, we are redefining women&apos;s healthcare by creating a dynamic platform that connects
                  individuals with top-tier healthcare professionals specializing in every stage of life.
                </p>
                <p className="text-slate-300">
                  Our innovative platform harnesses modern technology to streamline your healthcare journey, making it
                  easier than ever to book consultations, access essential information, and manage your wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://eleva.care"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-medium text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Visit Eleva.care
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Link href="/eleva">
                    <Button
                      variant="outline"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/eleva-care-home.png"
                    alt="Eleva.care Platform"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                  Founded in 2025
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
                  About Me
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Academic & Research Profile
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am an adjunct professor with a demonstrated history of working in higher education and research. My
                  expertise spans Women&apos;s Health, Clinical Gait Analysis, and Exercise Physiology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Education</h3>
                      <p className="text-slate-600">
                        PhD in Biomechanics from Universidade de Lisboa in collaboration with Norwegian School of Sport
                        Sciences
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Current Position</h3>
                      <p className="text-slate-600">
                        Visiting Researcher and Professor at California State University, Long Beach
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Research Focus</h3>
                      <p className="text-slate-600">Women&apos;s Health, Biomechanics, Clinical Gait Analysis</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Languages</h3>
                      <p className="text-slate-600">
                        Portuguese (Native), English (Full Professional), Spanish (Full Professional)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Teaching Experience</h3>
                      <p className="text-slate-600">
                        Over 10 years of university teaching experience in physiotherapy and biomechanics
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">Clinical Experience</h3>
                      <p className="text-slate-600">Head of Physiotherapy Service at Centro Pré Pós Parto</p>
                    </div>
                  </li>
                </ul>
              </div>
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
                  Research
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Featured Publications
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My research focuses on women&apos;s health, particularly on pelvic floor muscle function and abdominal
                  wall adaptations during pregnancy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-amber-600">
                      <FileText className="h-4 w-4" />
                      <span className="text-xs font-medium">Journal Publication</span>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">
                      Pelvic floor muscle function after grade II tears
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Surface electromyography test–retest and differences between nulliparous and primiparous
                    </p>
                    <Link
                      href="/research"
                      className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-rose-600">
                      <FileText className="h-4 w-4" />
                      <span className="text-xs font-medium">Journal Publication</span>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">
                      Morphological and functional adaptations of the abdominal wall
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Examining changes during pregnancy and in the postpartum period
                    </p>
                    <Link
                      href="/research"
                      className="mt-4 inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-amber-600">
                      <FileText className="h-4 w-4" />
                      <span className="text-xs font-medium">Journal Publication</span>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">
                      Ultrasound study on exercise effects
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Examining postpartum women inter-rectus abdominis distance
                    </p>
                    <Link
                      href="/research"
                      className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/publications">
                <Button
                  variant="outline"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50"
                >
                  View All Publications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Experience
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Academic & Professional Journey
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My career spans multiple institutions across different countries, focusing on research and education
                  in physiotherapy.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="academic" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-full p-1 bg-slate-100">
                  <TabsTrigger
                    value="academic"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Academic Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="professional"
                    className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
                  >
                    Professional Experience
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="academic" className="mt-8 space-y-6">
                  <div className="space-y-2 border-l-2 border-amber-200 pl-6">
                    <div className="text-sm text-amber-600 font-medium">2023 - Present</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      California State University, Long Beach
                    </h3>
                    <p className="text-slate-600">Visiting Researcher and Professor</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-6">
                    <div className="text-sm text-amber-600 font-medium">2017 - Present</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Escola Superior de Tecnologia da Saúde de Lisboa
                    </h3>
                    <p className="text-slate-600">Adjunct Professor</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-6">
                    <div className="text-sm text-amber-600 font-medium">2016 - Present</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">University of Lisbon</h3>
                    <p className="text-slate-600">Researcher</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-amber-200 pl-6">
                    <div className="text-sm text-amber-600 font-medium">2015 - 2016</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">University of Lisbon</h3>
                    <p className="text-slate-600">Postdoctoral Researcher</p>
                  </div>
                </TabsContent>
                <TabsContent value="professional" className="mt-8 space-y-6">
                  <div className="space-y-2 border-l-2 border-emerald-200 pl-6">
                    <div className="text-sm text-emerald-600 font-medium">2025 - Present</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Eleva.care</h3>
                    <p className="text-slate-600">Co-founder & CEO</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-6">
                    <div className="text-sm text-rose-600 font-medium">2011 - Present</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Centro Pré Pós Parto</h3>
                    <p className="text-slate-600">Head of Physiotherapy Service</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-6">
                    <div className="text-sm text-rose-600 font-medium">2007 - 2009</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Patricía Mota | Physiotherapy</h3>
                    <p className="text-slate-600">Founder - Built a physiotherapy center serving over 200 patients</p>
                  </div>
                  <div className="space-y-2 border-l-2 border-rose-200 pl-6">
                    <div className="text-sm text-rose-600 font-medium">2006 - 2009</div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Agrupación Clínica</h3>
                    <p className="text-slate-600">Senior Physiotherapist</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-amber-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-rose-500 opacity-10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in collaborating on research, speaking engagements, or learning more about Eleva.care? Feel
                  free to reach out.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button className="w-full h-12 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-xs text-slate-400">
                  Or connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/patimota"
                    className="underline underline-offset-2 hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                    className="underline underline-offset-2 hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Scholar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
