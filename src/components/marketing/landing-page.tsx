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

import { AnimateOnScroll, StaggerGroup, StaggerItem } from "./animations"
import { HeroMockup } from "./hero-mockup"
import { ProductMockup } from "./product-mockup"
import { StickyNav } from "./sticky-nav"
import { WaitlistForm } from "./waitlist-form"

const storyMoments = [
  {
    label: "Monday 9 AM",
    body: "Your receptionist quit Friday. You post a job on Indeed because what else are you going to do.",
    emphasis: false,
  },
  {
    label: "Tuesday 6 PM",
    body: "147 emails. All resumes. You open three, skim them, get interrupted by a customer, close your laptop.",
    emphasis: false,
  },
  {
    label: "Thursday midnight",
    body: "You\u2019re in bed scrolling through PDFs on your phone trying to figure out who\u2019s worth calling. Half the resumes are for the wrong job. One person listed \u201cMicrosoft Word\u201d as a skill.",
    emphasis: false,
  },
  {
    label: "Next Monday",
    body: "You interview all 4. Two don\u2019t show up. One is wildly overqualified. You hire the fourth because you\u2019re out of time.",
    emphasis: false,
  },
  {
    label: "Three weeks later",
    body: "They quit.",
    emphasis: true,
  },
] as const

const howItWorksSteps = [
  {
    title: "Tell us who you need",
    body: "Type it like you\u2019d text a friend. \u201CI need a receptionist who speaks Spanish and can start in two weeks.\u201D CloseRole turns that into a polished job post and the right screening questions in seconds.",
    icon: NotepadIcon,
  },
  {
    title: "Share one link",
    body: "Post your CloseRole application link on Indeed, Facebook, Craigslist \u2014 wherever you already hire. Every applicant lands in one clean flow.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Let AI read every application",
    body: "Every applicant is scored against your criteria. Sorted into Interview, Maybe, or Skip with plain-English reasons. You review 5, not 150.",
    icon: FunnelSimpleIcon,
  },
  {
    title: "Interview, decide, done",
    body: "Get candidate-specific interview questions, paste the transcript back in, and receive a clear hire / maybe / pass recommendation with context.",
    icon: CalendarDotsIcon,
  },
] as const

const personas = [
  "The dentist who spent Saturday reading applications instead of being with her kids.",
  "The restaurant owner who got 300 applicants and 250 have never worked in a kitchen.",
  "The startup founder who is somehow also the entire HR department.",
  "The agency owner who needs a project manager but not a $5,000 recruiter invoice.",
  "The contractor who needs a reliable office manager, not another no-show hire.",
] as const

const objectionCards = [
  {
    title: "Can\u2019t I just read the resumes myself?",
    body: "You can. It\u2019ll cost you 15\u201320 hours per hire. That\u2019s usually more expensive than the tool you\u2019re trying to avoid buying.",
  },
  {
    title: "Can\u2019t I just use Indeed?",
    body: "Indeed is great at bringing applicants in. CloseRole is what tells you who deserves your time after they arrive.",
  },
  {
    title: "Can\u2019t I just hire a recruiter?",
    body: "You can. Paying 15\u201325% of first-year salary for a receptionist or office manager is rarely a sane default for small teams.",
  },
  {
    title: "Can\u2019t I just use ChatGPT?",
    body: "Not without copy-pasting resumes one-by-one, tracking everything in a spreadsheet, and rebuilding the same workflow every single hire.",
  },
  {
    title: "What about Workable, JazzHR, or Breezy?",
    body: "Those are HR tools for teams with HR processes. CloseRole is built for business owners who need help right now, not software to administer.",
  },
] as const

const features = [
  {
    title: "AI writes your job posting",
    body: "Describe the role in two sentences and get a polished post with screening questions. No templates, no HR jargon.",
    icon: FileTextIcon,
  },
  {
    title: "Your own application page",
    body: "A clean, branded page that adapts to the role and works on every device. Candidates never create an account.",
    icon: BuildingsIcon,
  },
  {
    title: "AI scores and ranks every applicant",
    body: "Not keyword matching. Actual fit analysis with a plain-English summary for each person. You review 5, not 127.",
    icon: MedalIcon,
  },
  {
    title: "Red flag detection",
    body: "Catch gaps, mismatches, and suspicious applications faster than a midnight skim ever will.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Interview questions per candidate",
    body: "Every question is tailored to the role and the person\u2019s own application. Not generic \u201Ctell me about yourself\u201D.",
    icon: QuestionIcon,
  },
  {
    title: "Transcript analysis",
    body: "Paste your Google Meet or Zoom transcript and get a strong hire, maybe, or pass call with reasons.",
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
    name: "Per Job",
    price: "$99",
    description: "One payment. Use it until the role is filled. No subscription.",
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
    name: "Annual",
    price: "$399/yr",
    description: "For businesses that hire more than 3 people a year.",
    points: [
      "Up to 10 jobs per year",
      "Unlimited applications",
      "Unlimited transcript analyses",
      "Up to 3 team members",
      "Priority support",
    ],
  },
]

const faqs = [
  {
    question: "I\u2019m not technical. Is this complicated?",
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
      "Yes. CloseRole works alongside those channels. It gives you one structured application destination and one ranked dashboard, no matter where applicants come from.",
  },
  {
    question: "What if I only hire once this year?",
    answer:
      "Your first job is free. You can test the full workflow before paying for anything.",
  },
  {
    question: "What happens to candidate data?",
    answer:
      "Candidate data is yours. Encrypted storage, automatic cleanup after a role closes, and no selling data to third parties.",
  },
] as const

const pricingComparisonRows = [
  ["Indeed sponsored post", "$150\u2013$300 / month", "Applicants \u2014 you still sort them yourself"],
  ["ZipRecruiter", "$249\u2013$399 / month", "Applicants + basic matching"],
  ["LinkedIn promoted post", "$300\u2013$500 / job", "Applicants from your network"],
  ["Hiring a recruiter", "$5,000\u2013$12,500 / hire", "Someone else does it for you"],
  ["Reading resumes yourself", "$0 + 15 hours", "Exhaustion and gut decisions"],
  ["CloseRole", "$99 / job", "Applicants scored, ranked, and interview-ready"],
] as const

const ctaLinkClasses =
  "inline-flex h-12 shrink-0 items-center justify-center gap-2 border px-6 text-base font-semibold whitespace-nowrap transition-all outline-none select-none active:translate-y-px"

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
    <section id={id} className={cn("px-6 py-24 sm:px-10 lg:px-16", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-128 bg-[linear-gradient(180deg,rgba(27,43,58,0.03),transparent)]" />
      <StickyNav />

      {/* ─── HERO ─── */}
      <SectionShell className="relative overflow-hidden pb-16 pt-8 sm:pt-10">
        <div className="absolute inset-x-6 top-0 -z-10 h-full border-x border-foreground/5 sm:inset-x-10 lg:inset-x-16" />

        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-edge pb-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="grid size-10 place-items-center border border-brand/15 bg-brand text-brand-fg">C</span>
            CloseRole
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="transition hover:text-slate-950">How It Works</a>
            <a href="#pricing" className="transition hover:text-slate-950">Pricing</a>
            <a href="#faq" className="transition hover:text-slate-950">FAQ</a>
          </nav>
          <a href="#waitlist" className={cn(ctaLinkClasses, "h-11 px-5 text-sm border-brand bg-brand text-brand-fg hover:bg-brand-hover")}>
            Get early access
          </a>
        </div>

        <div className="grid items-center gap-16 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimateOnScroll variant="fadeUp">
            <div className="space-y-8">
              <Badge className="border border-copper/20 bg-copper-light px-3 py-1.5 text-[11px] uppercase tracking-[0.26em] text-copper">
                Launching soon &mdash; first job free
              </Badge>

              <h1 className="max-w-2xl text-[2.75rem] font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-6xl sm:leading-[1.08]">
                Stop reading resumes at midnight.
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-slate-600 sm:text-[1.35rem] sm:leading-9">
                CloseRole is an AI hiring assistant that screens every applicant, ranks
                them by fit, writes your interview questions, and tells you who to hire
                &mdash; so you can get back to running your business.
              </p>

              <div id="waitlist" className="max-w-lg pt-2">
                <WaitlistForm compact />
              </div>

              <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-sea" weight="fill" />
                  First job free
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-sea" weight="fill" />
                  No credit card
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-sea" weight="fill" />
                  No HR degree required
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleIn" delay={0.2}>
            <HeroMockup />
          </AnimateOnScroll>
        </div>
      </SectionShell>

      {/* ─── PROBLEM STORY (Timeline) ─── */}
      <SectionShell className="py-20">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              Sound familiar?
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Hiring becomes a midnight side job the moment someone quits.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              You didn&apos;t make a bad hire because you&apos;re bad at hiring. You made a bad hire
              because you&apos;re running a business and hiring is a full-time job
              you&apos;re doing in your spare time.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-edge sm:left-1/2" />

          <StaggerGroup className="space-y-0">
            {storyMoments.map((moment, index) => (
              <StaggerItem key={moment.label}>
                <div className={cn(
                  "relative grid gap-4 py-6 pl-14 sm:grid-cols-[1fr_1fr] sm:gap-8 sm:pl-0",
                  index % 2 === 0 ? "sm:text-right" : ""
                )}>
                  <div className="absolute left-4 top-8 size-5 border-2 border-slate-300 bg-white sm:left-1/2 sm:-translate-x-1/2" />

                  <div className={cn(
                    index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"
                  )}>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{moment.label}</p>
                    <p className={cn(
                      "mt-2 leading-7",
                      moment.emphasis
                        ? "text-2xl font-semibold text-slate-950"
                        : "text-base text-slate-600"
                    )}>
                      {moment.body}
                    </p>
                  </div>

                  {index % 2 !== 0 ? <div className="hidden sm:block" /> : null}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateOnScroll className="relative mt-8 pl-14 sm:mx-auto sm:max-w-md sm:pl-0 sm:text-center">
            <p className="text-lg font-medium text-slate-700">
              CloseRole makes sure this never happens again.
            </p>
          </AnimateOnScroll>
        </div>
      </SectionShell>

      {/* ─── HOW IT WORKS ─── */}
      <SectionShell id="how-it-works" className="bg-panel">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Four steps. One great hire. Zero HR jargon.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Built for someone who has never used hiring software and has no interest
            in learning enterprise recruiting vocabulary.
          </p>
        </AnimateOnScroll>

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.title}>
                <Card className="h-full border border-edge bg-white py-0 shadow-[0_30px_70px_-60px_rgba(15,23,42,0.4)] ring-0">
                  <CardHeader className="gap-4 border-b border-edge px-6 py-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid size-12 place-items-center border border-sea/15 bg-sea-light text-sea-dark">
                        <Icon className="size-5" weight="duotone" />
                      </div>
                      <span className="text-3xl font-semibold tabular-nums text-slate-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-7">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6 text-[15px] leading-7 text-slate-600">
                    {step.body}
                  </CardContent>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </SectionShell>

      {/* ─── MID-PAGE CTA 1 ─── */}
      <SectionShell className="py-16">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-2xl font-semibold text-slate-950 sm:text-3xl">
              Your first job posting is free. See what 15 hours of saved time feels like.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#waitlist"
                className={cn(ctaLinkClasses, "border-brand bg-brand text-brand-fg hover:bg-brand-hover")}
              >
                Get free early access
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionShell>

      {/* ─── FEATURES ─── */}
      <SectionShell className="bg-slate-950 text-white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-sea-vivid/80">
              What it does
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to make one great hire.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
              All in plain English. Because your customer is trying to make a hire,
              not learn a product category.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <div className="h-full border border-white/10 bg-white/5 p-6">
                  <div className="mb-5 grid size-11 place-items-center border border-white/10 bg-white/10 text-sea-vivid">
                    <Icon className="size-5" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-slate-400">{feature.body}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </SectionShell>

      {/* ─── PRODUCT MOCKUP ─── */}
      <SectionShell>
        <AnimateOnScroll variant="scaleIn">
          <div className="mx-auto max-w-5xl">
            <ProductMockup />
            <p className="mt-4 text-center text-sm text-slate-500">
              The ranked dashboard that tells you who to interview, who might be worth a second look, and who to skip.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionShell>

      {/* ─── WITH / WITHOUT COMPARISON ─── */}
      <SectionShell className="py-20">
        <AnimateOnScroll>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              The difference
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              15 hours of screening &rarr; 15 minutes of reviewing.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimateOnScroll delay={0.1}>
            <div className="h-full border border-rose-200 bg-rose-50 p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-700">
                Without CloseRole
              </p>
              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
                <li className="flex gap-3"><span className="mt-1 text-rose-400">&times;</span> Post on Indeed, get 200 emails, read them at midnight.</li>
                <li className="flex gap-3"><span className="mt-1 text-rose-400">&times;</span> Guess which resumes are good based on a 30-second skim.</li>
                <li className="flex gap-3"><span className="mt-1 text-rose-400">&times;</span> Come up with interview questions on the spot.</li>
                <li className="flex gap-3"><span className="mt-1 text-rose-400">&times;</span> Hope the person you hired works out.</li>
                <li className="flex gap-3"><span className="mt-1 text-rose-400">&times;</span> Spend 15&ndash;20 hours on every single hire.</li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="h-full border border-sea/15 bg-sea-light p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sea-dark">
                With CloseRole
              </p>
              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
                <li className="flex gap-3"><CheckCircleIcon className="mt-1 size-4 shrink-0 text-sea" weight="fill" /> Post with your CloseRole link. Every applicant in one dashboard.</li>
                <li className="flex gap-3"><CheckCircleIcon className="mt-1 size-4 shrink-0 text-sea" weight="fill" /> AI reads every application and explains who to talk to and why.</li>
                <li className="flex gap-3"><CheckCircleIcon className="mt-1 size-4 shrink-0 text-sea" weight="fill" /> Candidate-specific interview questions generated for you.</li>
                <li className="flex gap-3"><CheckCircleIcon className="mt-1 size-4 shrink-0 text-sea" weight="fill" /> Transcript analysis gives a clear recommendation after the interview.</li>
                <li className="flex gap-3"><CheckCircleIcon className="mt-1 size-4 shrink-0 text-sea" weight="fill" /> Spend closer to 2 hours per hire. Get back to your business.</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionShell>

      {/* ─── WHO IT'S FOR ─── */}
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <AnimateOnScroll>
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Who it&apos;s for
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Built for people who hire, not people who recruit.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                If you have 5&ndash;50 employees and nobody on payroll whose actual
                job title is &ldquo;recruiter,&rdquo; CloseRole was built for you.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {personas.map((persona) => (
              <StaggerItem key={persona}>
                <div className="h-full border border-edge bg-white p-5 text-[15px] leading-7 text-slate-700 shadow-[0_25px_70px_-60px_rgba(15,23,42,0.4)]">
                  {persona}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionShell>

      {/* ─── MID-PAGE CTA 2 ─── */}
      <SectionShell className="py-14">
        <AnimateOnScroll>
          <div className="border border-brand/10 bg-panel px-8 py-10 text-center">
            <p className="text-2xl font-semibold text-slate-950 sm:text-3xl">
              You&apos;re not bad at hiring. You just don&apos;t have time for it.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-base text-slate-600">
              Let CloseRole handle the 15 hours of screening so you can focus on the
              15-minute interview that actually matters.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#waitlist"
                className={cn(ctaLinkClasses, "border-brand bg-brand text-brand-fg hover:bg-brand-hover")}
              >
                Join the waitlist free
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionShell>

      {/* ─── OBJECTIONS ─── */}
      <SectionShell>
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              But what about&hellip;
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The alternatives you&apos;re actually considering
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              CloseRole is not trying to replace job boards. It replaces the hours
              you lose after the applicants show up.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {objectionCards.map((card) => (
            <StaggerItem key={card.title}>
              <Card className="h-full border border-edge bg-white py-0 ring-0">
                <CardHeader className="px-6 py-6">
                  <CardTitle className="text-lg leading-7">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 text-[15px] leading-7 text-slate-600">
                  {card.body}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      {/* ─── PRICING ─── */}
      <SectionShell id="pricing" className="bg-panel">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
            Pricing
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Pay when you hire. Not while you wait.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            No monthly subscriptions. No annual contracts unless you actually need them.
            Your first job posting is completely free.
          </p>
        </AnimateOnScroll>

        <StaggerGroup className="mt-16 grid gap-5 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <Card
                className={cn(
                  "h-full border py-0 ring-0",
                  tier.featured
                    ? "border-brand bg-brand text-white"
                    : "border-edge bg-white"
                )}
              >
                <CardHeader className="px-6 py-6">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className={tier.featured ? "text-white" : "text-slate-950"}>
                      {tier.name}
                    </CardTitle>
                    {tier.featured ? (
                      <Badge className="border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-white">
                        Most popular
                      </Badge>
                    ) : null}
                  </div>
                  <p className={cn("text-4xl font-semibold", tier.featured ? "text-white" : "text-slate-950")}>
                    {tier.price}
                  </p>
                  <CardDescription
                    className={cn(
                      "text-sm leading-7",
                      tier.featured ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className={cn("space-y-3 text-sm leading-7", tier.featured ? "text-slate-100" : "text-slate-700")}>
                    {tier.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckCircleIcon
                          className={cn("mt-1 size-4 shrink-0", tier.featured ? "text-sea-vivid" : "text-sea")}
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
                      "mt-8 w-full",
                      tier.featured
                        ? "border-white/15 bg-white text-brand hover:bg-slate-50"
                        : "border-brand bg-brand text-brand-fg hover:bg-brand-hover"
                    )}
                  >
                    Join the waitlist
                    <ArrowRightIcon className="size-4" />
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <AnimateOnScroll className="mt-14">
          <div className="overflow-hidden border border-edge bg-white">
            <div className="grid gap-6 border-b border-edge px-6 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                  What you&apos;re spending today
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  The real comparison is not software. It&apos;s time, stress, and recruiter fees.
                </h3>
              </div>
              <p className="text-[15px] leading-7 text-slate-600">
                Every line below is what founders already pay in money or time when they
                hire without a system.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
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
                        "border-t border-edge",
                        option === "CloseRole" ? "bg-sea-light font-medium" : "bg-white"
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
        </AnimateOnScroll>
      </SectionShell>

      {/* ─── FAQ ─── */}
      <SectionShell id="faq">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimateOnScroll>
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Questions you probably have
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The point of this page is to make the product feel obvious and low-risk
                before you ever touch the app.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="border border-edge bg-white px-6 py-2">
              <Accordion defaultValue={["item-0"]} className="w-full" multiple>
                {faqs.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger className="py-5 text-[15px] font-semibold text-slate-950 no-underline hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-7 text-slate-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionShell>

      {/* ─── FINAL CTA ─── */}
      <SectionShell className="pb-8">
        <AnimateOnScroll variant="scaleIn">
          <div className="overflow-hidden border border-edge bg-slate-950 px-6 py-12 text-white shadow-[0_35px_90px_-60px_rgba(15,23,42,0.85)] sm:px-10 md:py-16">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <Badge className="border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white">
                  Early access &mdash; limited spots
                </Badge>
                <div className="space-y-4">
                  <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Your next hire shouldn&apos;t take 20 hours.
                  </h2>
                  <p className="max-w-xl text-lg leading-8 text-slate-300">
                    CloseRole launches soon. Join the waitlist and get free early access.
                    Your first job posting is on us &mdash; because the best time to fix your
                    hiring process is before the next person quits.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="border border-white/10 bg-white/5 px-4 py-4">
                    <UsersThreeIcon className="size-5 text-sea-vivid" weight="duotone" />
                    <p className="mt-3 text-sm text-slate-200">Founders and operators first</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 px-4 py-4">
                    <ClockIcon className="size-5 text-sea-vivid" weight="duotone" />
                    <p className="mt-3 text-sm text-slate-200">2 hours per hire, not 20</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 px-4 py-4">
                    <CrownSimpleIcon className="size-5 text-sea-vivid" weight="duotone" />
                    <p className="mt-3 text-sm text-slate-200">First job free, always</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white p-6 text-slate-950">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionShell>

      {/* ─── FOOTER ─── */}
      <SectionShell className="pt-2">
        <footer className="space-y-8 border-t border-edge py-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xl font-semibold text-slate-950">CloseRole</p>
              <p className="mt-2 text-sm text-slate-600">Hire without the HR.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <a href="#how-it-works" className="transition hover:text-slate-950">How It Works</a>
              <a href="#pricing" className="transition hover:text-slate-950">Pricing</a>
              <a href="#faq" className="transition hover:text-slate-950">FAQ</a>
              <a href="mailto:hello@closerole.com" className="transition hover:text-slate-950">hello@closerole.com</a>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-slate-950">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-slate-950">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-4 text-sea" weight="fill" />
              Candidate data stays yours
            </div>
          </div>
          <p className="text-sm text-slate-500">
            &copy; 2026 CloseRole. Built for founders who&apos;d rather run their business than read resumes.
          </p>
        </footer>
      </SectionShell>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="sticky bottom-0 z-20 border-t border-edge bg-[rgba(255,255,255,0.96)] px-4 py-3 backdrop-blur md:hidden">
        <a
          href="#waitlist"
          className={cn(
            ctaLinkClasses,
            "w-full border-brand bg-brand text-brand-fg hover:bg-brand-hover"
          )}
        >
          Get early access &mdash; it&apos;s free
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </main>
  )
}
