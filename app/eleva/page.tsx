import Image from "next/image"
import { ArrowRight, Check, ExternalLink, Users, Calendar, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ElevaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-emerald-300 opacity-10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-white">E</span>
                  </div>
                  <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Eleva.care
                  </h1>
                </div>
                <p className="text-slate-300 md:text-xl max-w-[600px]">
                  Where world-class healthcare meets personalized care, empowering every woman at every stage of her
                  life.
                </p>
                <p className="text-slate-300">
                  Founded in 2025 by Patricia Mota, PT, PhD, Eleva.care is redefining women&apos;s healthcare by
                  creating a dynamic platform that connects individuals with top-tier healthcare professionals.
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
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                  Our Mission
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Redefining Women&apos;s Healthcare
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Eleva Care, we are committed to breaking down barriers and ensuring every woman receives the
                  attention she deserves.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-emerald-500"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Expert-Led Care</h3>
                    <p className="text-slate-600">
                      Connect with top-tier healthcare professionals specializing in every stage of a woman&apos;s life.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Personalized consultations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Evidence-based approaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Specialized expertise</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-emerald-500"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">On Your Schedule</h3>
                    <p className="text-slate-600">
                      Our innovative platform harnesses modern technology to streamline your healthcare journey.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Easy appointment booking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Flexible telehealth options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Personalized care plans</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-2 bg-emerald-500"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">Global Reach</h3>
                    <p className="text-slate-600">
                      We empower women globally by offering flexible telehealth opportunities with experts worldwide.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Remote consultations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">International expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span className="text-slate-600">Multilingual support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                  Our Services
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Comprehensive Women&apos;s Health
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From prenatal support and postpartum guidance to specialized treatments in pelvic health and chronic
                  conditions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Pregnancy & Postpartum</h3>
                  <p className="text-slate-600 mb-4">Comprehensive care for expectant and new mothers.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Prenatal consultations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Postpartum recovery</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Breastfeeding support</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Pelvic Health</h3>
                  <p className="text-slate-600 mb-4">Specialized care for pelvic floor disorders.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Pelvic floor assessment</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Incontinence treatment</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Pelvic pain management</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Menopause Care</h3>
                  <p className="text-slate-600 mb-4">Support through perimenopause and beyond.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Symptom management</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Hormone therapy guidance</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Lifestyle recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Sexual Health</h3>
                  <p className="text-slate-600 mb-4">Confidential care for sexual health concerns.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Sexual dysfunction treatment</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Relationship counseling</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Comprehensive education</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Chronic Conditions</h3>
                  <p className="text-slate-600 mb-4">Management of women-specific chronic issues.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Endometriosis care</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>PCOS management</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Fibromyalgia support</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Preventive Care</h3>
                  <p className="text-slate-600 mb-4">Proactive health maintenance and screening.</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Health assessments</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Nutritional guidance</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Lifestyle optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://eleva.care"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Visit Eleva.care
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Mission
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us on this journey as we empower women to take control of their well-being, transforming
                  healthcare into an experience that is as personalized as it is impactful.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">For Patients</h3>
                  <p className="text-slate-300">
                    Access personalized care from top-rated women's health professionals worldwide. Book appointments,
                    manage your wellness, and take control of your health journey.
                  </p>
                  <a
                    href="https://eleva.care"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Find an Expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">For Providers</h3>
                  <p className="text-slate-300">
                    Join our network of women's health experts. Offer flexible telehealth services, choose your own
                    schedule, and be part of revolutionizing women's healthcare.
                  </p>
                  <a
                    href="https://eleva.care"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Join Our Network
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
