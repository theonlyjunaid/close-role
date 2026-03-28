import { LegalPage } from "@/components/marketing/legal-page"

const sections = [
  {
    heading: "What we collect",
    body: "When you join the CloseRole waitlist we collect the details you submit, such as your work email, company name, and the role you expect to hire for next.",
  },
  {
    heading: "How we use it",
    body: "We use that information to contact you about early access, understand demand, and improve how we launch the product. We do not sell your information.",
  },
  {
    heading: "Data retention",
    body: "Waitlist submissions are retained for launch and onboarding purposes. Once the product is live, retention policies can be updated to reflect the active service terms.",
  },
] as const

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="A simple summary of how CloseRole handles early-access waitlist information."
      sections={[...sections]}
    />
  )
}
