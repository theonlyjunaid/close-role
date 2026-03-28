import { LegalPage } from "@/components/marketing/legal-page"

const sections = [
  {
    heading: "Early access only",
    body: "Joining the waitlist does not guarantee immediate product access. It indicates interest in receiving launch information and early-access invites from CloseRole.",
  },
  {
    heading: "Product availability",
    body: "Features, pricing, and timelines may evolve before the public launch. Any pricing shown on the landing page reflects current launch positioning, not a permanent offer.",
  },
  {
    heading: "Contact",
    body: "Questions about the waitlist or upcoming launch can be sent to hello@closerole.com.",
  },
] as const

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These terms apply to the CloseRole landing page and early-access waitlist."
      sections={[...sections]}
    />
  )
}
