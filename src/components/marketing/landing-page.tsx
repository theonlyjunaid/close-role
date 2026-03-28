import {
  ArrowRightIcon,
  BuildingsIcon,
  CalendarDotsIcon,
  CheckCircleIcon,
  ClockIcon,
  CrownSimpleIcon,
  FileTextIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  MedalIcon,
  NotepadIcon,
  QuestionIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparkleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import { ProductMockup } from "./product-mockup"
import { WaitlistForm } from "./waitlist-form"

const storyMoments = [
  {
    label: "Monday 9 AM",
    body: "You post a job on Indeed because your receptionist quit Friday.",
  },
  {
    label: "Tuesday 6 PM",
    body: "147 emails. All resumes. You open three, skim them, get interrupted by a customer, close your laptop.",
  },
  {
    label: "Thursday midnight",
    body: "You're in bed scrolling through PDFs on your phone trying to figure out who's worth calling. Half the resumes are for the wrong job. One person listed Microsoft Word as a skill. You pick 4 people who seem okay.",
  },
  {
    label: "Next Monday",
    body: "You interview all 4. Two don't show up. One is wildly overqualified. You hire the fourth because you're out of time.",
  },
  {
    label: "Three weeks later",
    body: "They quit.",
  },
] as const

const howItWorksSteps = [
  {
    title: "Tell us who you need",
    body: "Type it like you'd text a friend. CloseRole turns that into a polished job post and the right screening questions in seconds.",
    icon: NotepadIcon,
  },
  {
    title: "Share one link",
    body: "Post your CloseRole application link anywhere you already hire so every applicant lands in one clean flow.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Let AI read every application",
    body: "Every applicant is scored against your criteria, then sorted into Interview, Maybe, or Skip with plain-English reasons.",
    icon: FunnelSimpleIcon,
  },
  {
    title: "Interview, decide, done",
    body: "Get candidate-specific interview questions, paste the transcript, and receive a clear hire recommendation with context.",
    icon: CalendarDotsIcon,
  },
] as const

const personas = [
  "The dentist who spent Saturday reading applications instead of being with her kids.",
  "The restaurant owner who got 300 applicants, 250 of whom have never worked in a kitchen.",
  "The startup founder who is somehow also the HR department.",
  "The agency owner who needs a project manager but not a $5,000 recruiter invoice.",
  "The contractor who needs a reliable office manager, not another no-show hire.",
] as const

const objectionCards = [
  {
    title: "Can't I just read the resumes myself?",
    body: "You can. It costs you 15-20 hours per hire, which is usually more expensive than the role software you're trying to avoid buying.",
  },
  {
    title: "Can't I just use Indeed?",
    body: "Indeed is great at bringing applicants in. CloseRole is what tells you who deserves your time after they arrive.",
  },
  {
    title: "Can't I just hire a recruiter?",
    body: "You can, but paying 15-25% of first-year salary for a receptionist or office manager is rarely a sane default for small teams.",
  },
  {
    title: "Can't I just use ChatGPT?",
    body: "Not without copy-pasting resumes one by one, tracking everything manually, and rebuilding the same workflow every single hire.",
  },
  {
    title: "What about Workable, JazzHR, or Breezy?",
    body: "Those are real HR tools for teams with HR processes. CloseRole is built for business owners who need help right now, not software to administer.",
  },
] as const

const features = [
  {
    title: "AI writes your job posting",
    body: "Describe the role in two sentences and get a polished post with useful screening questions.",
    icon: FileTextIcon,
  },
  {
    title: "You get your own application page",
    body: "A clean, branded page that adapts to the role and works on every device.",
    icon: BuildingsIcon,
  },
  {
    title: "AI scores and ranks every applicant",
    body: "Not keyword matching. Actual fit analysis with a plain-English summary for each person.",
    icon: MedalIcon,
  },
  {
    title: "Red flag detection",
    body: "Catch gaps, mismatches, and suspicious applications faster than a midnight skim ever will.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Interview questions written for each candidate",
    body: "Every question is tailored to the role and the person's own application.",
    icon: QuestionIcon,
  },
  {
    title: "Transcript analysis after the interview",
    body: "Paste the Google Meet transcript and get a strong hire, maybe, or pass call with reasons.",
    icon: SparkleIcon,
  },
] as const

const pricingTiers = [
  {
    name: "Your First Job",
    price: "Free",
    description: "See if CloseRole works for you with real candidates and real results.",
    points: [
      "1 job posting",
      "Up to 40 applications",
      "Full AI scoring and ranking",
      "AI interview questions",
      "1 transcript analysis",
    ],
  },
  {
    name: "$99 Per Job",
    price: "$99",
    description: "One payment. Use it until the role is filled.",
    points: [
      "1 job posting active for 45 days",
      "Up to 300 applications",
      "Red flags and candidate summaries",
      "Candidate-specific interview questions",
      "3 transcript analyses",
      "Offer and rejection email drafts",
    ],
    featured: true,
  },
  {
    name: "$399 / Year",
    price: "$399",
    description: "For businesses that hire more than 3 people a year.",
    points: [
      "Up to 10 jobs per year",
      "Unlimited applications",
      "Unlimited transcript analyses",
      "Up to 3 team members",
      "Priority support",
    ],
  },
] as const

const faqs = [
  {
    question: "I'm not technical. Is this complicated?",
    answer:
      "If you can post on Facebook, you can use CloseRole. You describe the role, share the link, and let the system do the sorting.",
  },
  {
    question: "Do candidates need to create an account?",
    answer:
      "No. They click your link, complete the application, and submit. No login wall, no password friction.",
  },
  {
    question: "Can I still post on Indeed, LinkedIn, or ZipRecruiter?",
    answer:
      "Yes. CloseRole works with those channels by giving you one structured application destination and one ranked dashboard.",
  },
  {
    question: "What if I only hire once this year?",
    answer:
      "Your first job is free, so you can test the workflow before paying for anything beyond that.",
  },
  {
    question: "What happens to candidate data?",
    answer:
      "The platform is designed to treat candidate data as your data. The product messaging promises encrypted storage and automatic cleanup after a role closes.",
  },
] as const

const pricingComparisonRows = [
  ["Indeed sponsored post", "$150-$300 / month", "Applicants - you still sort them yourself"],
  ["ZipRecruiter", "$249-$399 / month", "Applicants + basic matching"],
  ["LinkedIn promoted post", "$300-$500 / job", "Applicants from your network"],
  ["Hiring a recruiter", "$5,000-$12,500 / hire", "Someone else does it for you"],
  ["Reading resumes yourself", "0 dollars + 15 hours", "Exhaustion and gut decisions"],
  ["CloseRole", "$99 / job", "Applicants scored, ranked, and interview-ready"],
] as const

const socialProofItems = [
  "Built for teams with 5-50 employees",
  "First job posting is free",
  "Designed for founders without HR",
] as const

const ctaLinkClasses =
  "inline-flex h-11 shrink-0 items-center justify-center gap-1.5 border px-5 text-sm font-semibold whitespace-nowrap transition-all outline-none select-none active:translate-y-px"

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : ""
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-emerald-900/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  )
}

function SectionShell({
  id,
  children,
  className,
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("px-6 py-20 sm:px-10 lg:px-16", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,241,223,0.9),rgba(247,244,237,0.72)_28%,rgba(247,244,237,1)_55%)] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-128 bg-[linear-gradient(180deg,rgba(22,101,52,0.06),transparent)]" />

      <SectionShell className="relative overflow-hidden pb-12 pt-8 sm:pt-10">
        <div className="absolute inset-x-6 top-0 -z-10 h-full border-x border-foreground/5 sm:inset-x-10 lg:inset-x-16" />
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-foreground/10 pb-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="grid size-10 place-items-center border border-emerald-900/15 bg-emerald-950 text-stone-50">
              C
            </span>
            CloseRole
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="transition hover:text-slate-950">
              How It Works
            </a>
            <a href="#pricing" className="transition hover:text-slate-950">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
          </nav>

          <a
            href="#waitlist"
            className={cn(ctaLinkClasses, "border-emerald-950 bg-emerald-950 text-stone-50 hover:bg-emerald-900")}
          >
            Get early access
          </a>
        </div>

        <div className="grid gap-12 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="space-y-8">
            <Badge className="border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-emerald-950">
              For founders who hire without an HR team
            </Badge>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                You don&apos;t have an HR team. You don&apos;t need one.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-600">
                CloseRole is the AI that screens your applicants, ranks them by fit,
                writes your interview questions, and tells you who to hire, so you can
                get back to running your business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {socialProofItems.map((item) => (
                <div
                  key={item}
                  className="border border-foreground/10 bg-white/80 px-4 py-4 text-sm text-slate-600 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.55)] backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              id="waitlist"
              className="border border-foreground/10 bg-white/90 p-5 shadow-[0_32px_90px_-50px_rgba(12,28,20,0.45)] backdrop-blur"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-900/70">
                    Early access
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Join the waitlist for free. Your first job is on us.
                  </p>
                </div>
                <p className="text-sm text-slate-500">
                  No setup. No credit card. No HR degree required.
                </p>
              </div>
              <WaitlistForm compact />
            </div>
          </div>

          <div className="space-y-4">
            <ProductMockup />
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              The one visual that matters most: a ranked dashboard that tells you who
              to interview, who might be worth a second look, and who to skip.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-8">
        <div className="border border-foreground/10 bg-slate-950 px-6 py-6 text-stone-100 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.8)] sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-300/80">
                Sound familiar?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Hiring becomes a midnight side job the moment someone quits.
              </h2>
            </div>
            <p className="text-lg leading-8 text-stone-300">
              You didn&apos;t make a bad hire because you&apos;re bad at hiring. You made a bad
              hire because you&apos;re running a business and hiring is a full-time job
              you&apos;re doing in your spare time. CloseRole fixes that.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {storyMoments.map((moment) => (
              <Card
                key={moment.label}
                className="border border-white/10 bg-white/5 py-0 text-stone-100 ring-0"
              >
                <CardHeader className="border-b border-white/10 px-4 py-4">
                  <CardTitle className="text-base text-stone-50">{moment.label}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-4 text-sm leading-7 text-stone-300">
                  {moment.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="how-it-works">
        <SectionHeader
          eyebrow="How it works"
          title="Four steps. One great hire. No HR jargon."
          description="Built for someone who has never used hiring software and has no interest in learning enterprise recruiting vocabulary."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <Card
                key={step.title}
                className="border border-foreground/10 bg-white py-0 shadow-[0_30px_70px_-60px_rgba(15,23,42,0.45)] ring-0"
              >
                <CardHeader className="gap-4 border-b border-foreground/10 px-5 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid size-12 place-items-center border border-emerald-900/10 bg-emerald-50 text-emerald-950">
                      <Icon className="size-5" weight="duotone" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Step {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-8">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 py-5 text-sm leading-7 text-slate-600">
                  {step.body}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-rose-900/10 bg-rose-50/70 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-900/70">
              Without CloseRole
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Post on Indeed, get 200 emails, then read them at midnight.</li>
              <li>Guess which resumes are good based on a 30-second skim.</li>
              <li>Come up with interview questions on the spot.</li>
              <li>Hope the person you hired works out.</li>
              <li>Spend 15-20 hours on each hire.</li>
            </ul>
          </div>

          <div className="border border-emerald-900/10 bg-emerald-50/70 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-900/70">
              With CloseRole
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Post with your CloseRole link and keep every applicant in one dashboard.</li>
              <li>AI reads every application and explains who to talk to and why.</li>
              <li>Candidate-specific interview questions are generated for you.</li>
              <li>Transcript analysis gives you a clear recommendation after the interview.</li>
              <li>Spend closer to 2 hours per hire instead of losing your week to sorting.</li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Who it's for"
            title="Built for people who hire, not people who recruit."
            description="If you have 5-50 employees and nobody on payroll whose actual job title is recruiter, CloseRole was built for you."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {personas.map((persona) => (
              <div
                key={persona}
                className="border border-foreground/10 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_25px_70px_-60px_rgba(15,23,42,0.45)]"
              >
                {persona}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          eyebrow="Objections"
          title="The alternatives you're actually considering"
          description="CloseRole is not trying to replace job boards. It replaces the hours you lose after the applicants show up."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {objectionCards.map((card) => (
            <Card key={card.title} className="border border-foreground/10 bg-white py-0 ring-0">
              <CardHeader className="px-5 py-5">
                <CardTitle className="text-lg leading-7">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 text-sm leading-7 text-slate-600">
                {card.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          eyebrow="What it does"
          title="What CloseRole actually does"
          description="Everything is written in plain English because your customer is trying to make a hire, not learn a category."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="border border-foreground/10 bg-white py-0 shadow-[0_25px_70px_-60px_rgba(15,23,42,0.45)] ring-0"
              >
                <CardHeader className="px-5 py-5">
                  <div className="mb-4 grid size-11 place-items-center border border-emerald-900/10 bg-emerald-50 text-emerald-950">
                    <Icon className="size-5" weight="duotone" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-7 text-slate-600">
                    {feature.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell id="pricing">
        <SectionHeader
          eyebrow="Pricing"
          title="Pay when you hire. Not while you wait."
          description="No monthly subscriptions. No annual contracts unless you actually need them. The first job posting is free."
        />

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "border py-0 ring-0",
                tier.featured
                  ? "border-emerald-950 bg-emerald-950 text-stone-50"
                  : "border-foreground/10 bg-white"
              )}
            >
              <CardHeader className="px-6 py-6">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className={tier.featured ? "text-stone-50" : "text-slate-950"}>
                    {tier.name}
                  </CardTitle>
                  {tier.featured ? (
                    <Badge className="border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-stone-50">
                      Most popular
                    </Badge>
                  ) : null}
                </div>
                <p className={cn("text-4xl font-semibold", tier.featured ? "text-stone-50" : "text-slate-950")}>
                  {tier.price}
                </p>
                <CardDescription
                  className={cn(
                    "text-sm leading-7",
                    tier.featured ? "text-stone-300" : "text-slate-600"
                  )}
                >
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className={cn("space-y-3 text-sm leading-7", tier.featured ? "text-stone-100" : "text-slate-700")}>
                  {tier.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircleIcon
                        className={cn(
                          "mt-1 size-4 shrink-0",
                          tier.featured ? "text-emerald-300" : "text-emerald-700"
                        )}
                        weight="fill"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={cn(
                    ctaLinkClasses,
                    "mt-8 w-full px-4",
                    tier.featured
                      ? "border-white/15 bg-white text-emerald-950 hover:bg-stone-100"
                      : "border-emerald-950 bg-emerald-950 text-stone-50 hover:bg-emerald-900"
                  )}
                >
                  Join the waitlist
                  <ArrowRightIcon className="size-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border border-foreground/10 bg-white">
          <div className="grid gap-6 border-b border-foreground/10 px-6 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-900/70">
                What you&apos;re spending today
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                The real comparison is not software. It&apos;s time, stress, and recruiter fees.
              </h3>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Every line below is what founders already pay in money or time when they
              hire without a system.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-stone-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Option</th>
                  <th className="px-6 py-4 font-medium">Cost</th>
                  <th className="px-6 py-4 font-medium">What you get</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparisonRows.map(([option, cost, result]) => (
                  <tr
                    key={option}
                    className={cn(
                      "border-t border-foreground/10",
                      option === "CloseRole" ? "bg-emerald-50/70" : "bg-white"
                    )}
                  >
                    <td className="px-6 py-4 font-medium text-slate-950">{option}</td>
                    <td className="px-6 py-4 text-slate-600">{cost}</td>
                    <td className="px-6 py-4 text-slate-600">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions you probably have"
            description="The point of this page is to make the product feel obvious and low-risk before you ever touch the app."
          />

          <div className="border border-foreground/10 bg-white px-6 py-2">
            <Accordion defaultValue={["item-0"]} className="w-full" multiple>
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="py-5 text-sm font-semibold text-slate-950 no-underline hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="overflow-hidden border border-foreground/10 bg-slate-950 px-6 py-8 text-stone-50 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.85)] sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <Badge className="border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-stone-50">
                Final CTA
              </Badge>
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight">
                  Your next hire shouldn&apos;t take 20 hours.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-stone-300">
                  CloseRole launches soon. Join the waitlist and get free early access.
                  Your first job posting is on us.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/5 px-4 py-4">
                  <UsersThreeIcon className="size-5 text-emerald-300" weight="duotone" />
                  <p className="mt-3 text-sm text-stone-200">Founders and operators first</p>
                </div>
                <div className="border border-white/10 bg-white/5 px-4 py-4">
                  <ClockIcon className="size-5 text-emerald-300" weight="duotone" />
                  <p className="mt-3 text-sm text-stone-200">Built to save hours per hire</p>
                </div>
                <div className="border border-white/10 bg-white/5 px-4 py-4">
                  <CrownSimpleIcon className="size-5 text-emerald-300" weight="duotone" />
                  <p className="mt-3 text-sm text-stone-200">First job free for early users</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-white p-6 text-slate-950">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <footer className="space-y-8 border-t border-foreground/10 py-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xl font-semibold text-slate-950">CloseRole</p>
              <p className="mt-2 text-sm text-slate-600">Hire without the HR.</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <a href="#how-it-works" className="transition hover:text-slate-950">
                How It Works
              </a>
              <a href="#pricing" className="transition hover:text-slate-950">
                Pricing
              </a>
              <a href="#faq" className="transition hover:text-slate-950">
                FAQ
              </a>
              <a href="mailto:hello@closerole.com" className="transition hover:text-slate-950">
                hello@closerole.com
              </a>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-slate-950">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-slate-950">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-4 text-emerald-700" weight="fill" />
              Candidate data stays yours
            </div>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 CloseRole. Built for founders who&apos;d rather run their business than
            read resumes.
          </p>
        </footer>
      </SectionShell>

      <div className="sticky bottom-0 z-20 border-t border-foreground/10 bg-[rgba(247,244,237,0.96)] px-4 py-3 backdrop-blur md:hidden">
        <a
          href="#waitlist"
          className={cn(
            ctaLinkClasses,
            "w-full border-emerald-950 bg-emerald-950 text-stone-50 hover:bg-emerald-900"
          )}
        >
          Get early access
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </main>
  )
}
