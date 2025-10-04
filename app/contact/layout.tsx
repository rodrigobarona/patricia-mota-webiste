import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Patricia Mota for research collaborations, speaking engagements, or academic inquiries. Based in Los Angeles, CA.",
  openGraph: {
    title: "Contact - Patricia Mota, PT, PhD",
    description:
      "Reach out for research collaborations, speaking engagements, or academic inquiries.",
    url: "https://patriciamota.com/contact",
    images: [
      {
        url: "/api/og?title=Get%20in%20Touch&subtitle=Research%20Collaborations%20%26%20Speaking%20Engagements",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
