import type { Metadata } from "next"

import { LegalPage } from "@/components/marketing/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service | CloseRole",
  description: "Terms and conditions for using the CloseRole website and early-access waitlist.",
}

const sections = [
  {
    heading: "Acceptance of terms",
    body: "By accessing the CloseRole website or joining the waitlist, you agree to these terms. If you do not agree, please do not use the site or submit your information.",
  },
  {
    heading: "Early access and waitlist",
    body: [
      "Joining the waitlist indicates your interest in being notified when CloseRole becomes available. It does not guarantee immediate access to the product or any specific launch date.",
      "Early-access invitations are sent at our discretion and may be limited in number. We reserve the right to modify the order and criteria for granting access.",
    ],
  },
  {
    heading: "Product and pricing",
    body: [
      "Features, pricing, and timelines described on this website reflect our current plans and may change before or after launch. Any pricing shown represents launch positioning and is not a permanent or binding offer.",
      "When the product is live, paid features will be clearly labeled before any payment is required. Your first job posting will be free as described on the landing page.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree to provide accurate information when joining the waitlist. You may not use the site for any unlawful purpose, attempt to interfere with its operation, or misrepresent your identity.",
      "When the product launches, additional acceptable use policies will apply to job postings, candidate data handling, and AI-generated content.",
    ],
  },
  {
    heading: "Intellectual property",
    body: "All content on this website — including text, design, logos, and code — is the property of CloseRole or its licensors. You may not reproduce, distribute, or create derivative works without written permission.",
  },
  {
    heading: "Limitation of liability",
    body: [
      "CloseRole is provided on an \u201Cas is\u201D and \u201Cas available\u201D basis. We make no warranties, express or implied, regarding the availability, accuracy, or reliability of the service.",
      "To the fullest extent permitted by law, CloseRole shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or waitlist.",
    ],
  },
  {
    heading: "Data and privacy",
    body: "Your use of CloseRole is also governed by our Privacy Policy. By using the site, you consent to the collection and use of information as described in that policy.",
  },
  {
    heading: "Termination",
    body: "We may remove your waitlist registration or restrict access to the site at any time if we believe you have violated these terms. You may also request removal from the waitlist by emailing hello@closerole.com.",
  },
  {
    heading: "Changes to these terms",
    body: "We reserve the right to update these terms as the product evolves. Material changes will be communicated via email or a notice on the website. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
  {
    heading: "Contact",
    body: "For any questions about these terms, please contact us at hello@closerole.com.",
  },
] as const

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms governing your use of the CloseRole website and early-access waitlist. Written in plain English."
      lastUpdated="March 28, 2026"
      sections={[...sections]}
    />
  )
}
