import type { Metadata } from "next"
import { JetBrains_Mono, Manrope } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://closerole.com"),
  title: "CloseRole - Hire Without an HR Team | AI Hiring Assistant",
  description:
    "Post a job, get a custom application page, and let AI score and rank every candidate. Built for small businesses without HR teams. First job free. No subscription.",
  openGraph: {
    title: "Your next hire shouldn't take 20 hours.",
    description:
      "CloseRole AI reads every application, ranks candidates, writes interview questions, and analyzes transcripts so founders can stop screening resumes at midnight.",
    url: "https://closerole.com",
    siteName: "CloseRole",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CloseRole landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your next hire shouldn't take 20 hours.",
    description:
      "CloseRole AI reads every application, ranks candidates, writes interview questions, and analyzes transcripts so founders can stop screening resumes at midnight.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(manrope.variable, jetbrainsMono.variable, "scroll-smooth")}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
