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
    title: "Stop reading resumes at midnight.",
    description:
      "CloseRole AI screens every applicant, ranks them by fit, writes interview questions, and tells you who to hire. First job free. No subscription.",
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
    title: "Stop reading resumes at midnight.",
    description:
      "CloseRole AI screens every applicant, ranks them by fit, writes interview questions, and tells you who to hire. First job free. No subscription.",
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
