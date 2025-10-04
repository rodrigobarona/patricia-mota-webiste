"use client";

import type React from "react";

import { useState } from "react";
import { BookOpen, Linkedin, Mail, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I will get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Contact
                </div>
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Get in Touch
                </h1>
                <p className="text-slate-600 md:text-xl max-w-[800px] mx-auto">
                  Reach out for research collaborations, speaking engagements,
                  or academic inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                    <CardTitle className="font-serif text-slate-900">
                      Contact Information
                    </CardTitle>
                    <CardDescription>Ways to reach me directly</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-medium text-slate-900">
                          Email
                        </h3>
                        <p className="text-sm text-slate-600">
                          <a
                            href="mailto:patimota@gmail.com"
                            className="hover:text-amber-600 transition-colors"
                          >
                            patimota@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-rose-100 p-2 text-rose-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-medium text-slate-900">
                          Location
                        </h3>
                        <p className="text-sm text-slate-600">
                          California State University, Long Beach
                        </p>
                        <p className="text-sm text-slate-600">
                          Los Angeles, California, United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-medium text-slate-900">
                          LinkedIn
                        </h3>
                        <p className="text-sm text-slate-600">
                          <a
                            href="https://www.linkedin.com/in/patimota"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-amber-600 transition-colors"
                          >
                            linkedin.com/in/patimota
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-rose-100 p-2 text-rose-600">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-medium text-slate-900">
                          Google Scholar
                        </h3>
                        <p className="text-sm text-slate-600">
                          <a
                            href="https://scholar.google.com/citations?user=fNJsrScAAAAJ"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-rose-600 transition-colors"
                          >
                            scholar.google.pt/patricia-mota
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-600 -mt-6 -mx-6 mb-4"></div>
                    <CardTitle className="font-serif text-slate-900">
                      Send a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below to get in touch
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-900">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="rounded-md border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-900">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="rounded-md border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-slate-900">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject of your message"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="rounded-md border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-900">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[120px] rounded-md border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:shadow-lg hover:shadow-amber-500/20 transition-all"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
