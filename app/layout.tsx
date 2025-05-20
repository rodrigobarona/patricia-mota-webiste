import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import Link from "next/link"
import { BookOpen, Instagram, Linkedin, Menu, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Patricia Mota, PT, PhD - Women's Health Researcher & Eleva.care CEO",
  description:
    "Personal website of Patricia Mota, Women's Health Researcher, PhD in Biomechanics, University Professor, and Co-founder & CEO of Eleva.care.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container flex h-16 items-center px-4 md:px-6 justify-between">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-serif text-lg font-bold">Patricia Mota, PT, PhD</span>
              </Link>
              <nav className="hidden flex-1 justify-center md:flex">
                <ul className="flex gap-8">
                  <li>
                    <Link href="/" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link href="/publications" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link href="/teaching" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      Teaching
                    </Link>
                  </li>
                  <li>
                    <Link href="/eleva" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                      Eleva.care
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden md:flex md:flex-1 md:justify-end md:space-x-2">
                <a href="https://www.linkedin.com/in/patimota" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-amber-100 hover:text-amber-600">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-amber-100 hover:text-amber-600">
                    <BookOpen className="h-5 w-5" />
                    <span className="sr-only">Google Scholar</span>
                  </Button>
                </a>
                <a href="https://x.com/patimota" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-amber-100 hover:text-amber-600">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter/X</span>
                  </Button>
                </a>
                <a href="https://www.instagram.com/patricia_mota_pt_phd/" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-amber-100 hover:text-amber-600">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link href="/" className="flex items-center gap-2 text-lg font-serif font-semibold">
                      <span>Patricia Mota, PT, PhD</span>
                    </Link>
                    <Link href="/" className="hover:text-amber-600 transition-colors">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-amber-600 transition-colors">
                      About
                    </Link>
                    <Link href="/research" className="hover:text-amber-600 transition-colors">
                      Research
                    </Link>
                    <Link href="/publications" className="hover:text-amber-600 transition-colors">
                      Publications
                    </Link>
                    <Link href="/teaching" className="hover:text-amber-600 transition-colors">
                      Teaching
                    </Link>
                    <Link href="/eleva" className="hover:text-emerald-600 transition-colors">
                      Eleva.care
                    </Link>
                    <Link href="/contact" className="hover:text-amber-600 transition-colors">
                      Contact
                    </Link>
                    <div className="flex gap-4 mt-6">
                      <a href="https://www.linkedin.com/in/patimota" target="_blank" rel="noreferrer">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-amber-100 hover:text-amber-600"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                      <a href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ" target="_blank" rel="noreferrer">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-amber-100 hover:text-amber-600"
                        >
                          <BookOpen className="h-5 w-5" />
                          <span className="sr-only">Google Scholar</span>
                        </Button>
                      </a>
                      <a href="https://x.com/patimota" target="_blank" rel="noreferrer">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-amber-100 hover:text-amber-600"
                        >
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter/X</span>
                        </Button>
                      </a>
                      <a href="https://www.instagram.com/patricia_mota_pt_phd/" target="_blank" rel="noreferrer">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-amber-100 hover:text-amber-600"
                        >
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          {children}
          <footer className="w-full border-t bg-white py-8">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
              <p className="text-center text-sm text-slate-500 md:text-left">
                &copy; {new Date().getFullYear()} Patricia Mota. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <a
                  href="mailto:patimota@gmail.com"
                  className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                >
                  patimota@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/patimota"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                >
                  Google Scholar
                </a>
                <a
                  href="https://www.researchgate.net/profile/Patricia-Mota-4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                >
                  ResearchGate
                </a>
                <a
                  href="https://eleva.care"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  Eleva.care
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
