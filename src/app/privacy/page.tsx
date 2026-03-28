import type { Metadata } from "next"

import { LegalPage } from "@/components/marketing/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | CloseRole",
  description: "How CloseRole collects, uses, and protects your data during early access and beyond.",
}

const sections = [
  {
    heading: "What we collect",
    body: [
      "When you join the CloseRole waitlist, we collect the information you submit: your work email address, and optionally your company name and the role you plan to hire for next.",
      "When you visit our website, we may automatically collect basic analytics data such as page views, referral source, and device type. We do not use third-party tracking pixels or sell this data.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use your email address to notify you when early access is available and to send product updates related to your waitlist registration. We use optional fields (company name, hiring role) to understand demand and prioritize features.",
      "We will never sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    heading: "Data storage and security",
    body: [
      "Your data is stored in encrypted databases with access restricted to authorized CloseRole team members. We use industry-standard security practices including TLS encryption in transit and encryption at rest.",
      "We retain waitlist data for the purpose of onboarding early users. Once the product is live, you can request deletion of your data at any time.",
    ],
  },
  {
    heading: "Candidate data (when the product launches)",
    body: [
      "When CloseRole is live, candidate application data submitted through your job postings will be treated as your data. We process it to provide scoring, ranking, and interview preparation features, but we do not use candidate data to train models or share it with other customers.",
      "Candidate data is automatically cleaned up after a role is closed, unless you choose to retain it.",
    ],
  },
  {
    heading: "Cookies",
    body: "We use essential cookies to keep the site functional (e.g., session management). We do not use advertising cookies. If we add analytics cookies in the future, we will update this policy and provide opt-out options.",
  },
  {
    heading: "Your rights",
    body: [
      "You can request access to, correction of, or deletion of your personal data at any time by emailing hello@closerole.com. We will respond within 30 days.",
      "If you are located in the EU or UK, you have additional rights under GDPR including the right to data portability and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy as CloseRole evolves. If we make material changes, we will notify you by email or by placing a notice on our website before the changes take effect.",
  },
  {
    heading: "Contact",
    body: "For any questions about this privacy policy or how we handle your data, please contact us at hello@closerole.com.",
  },
] as const

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="A straightforward explanation of how CloseRole collects, uses, and protects your information. No legalese, no surprises."
      lastUpdated="March 28, 2026"
      sections={[...sections]}
    />
  )
}
