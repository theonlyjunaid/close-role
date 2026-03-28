import {
  CalendarDotsIcon,
  ChatCircleTextIcon,
  CheckCircleIcon,
  ClockCountdownIcon,
  SparkleIcon,
  WarningCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr"

const topCandidates = [
  {
    name: "Maria S.",
    score: 94,
    bucket: "Interview",
    summary: "Bilingual receptionist with 4 years of front-desk experience.",
  },
  {
    name: "James T.",
    score: 89,
    bucket: "Interview",
    summary: "Strong scheduling background and calm customer handling.",
  },
  {
    name: "Leila R.",
    score: 82,
    bucket: "Maybe",
    summary: "Quick learner with hospitality experience, but limited office work.",
  },
  {
    name: "Omar P.",
    score: 76,
    bucket: "Maybe",
    summary: "Solid admin profile with a long commute and later start date.",
  },
  {
    name: "Chris V.",
    score: 44,
    bucket: "Skip",
    summary: "Experience does not match the role requirements.",
  },
]

const bucketStyles = {
  Interview: "border-emerald-900/20 bg-emerald-100 text-emerald-950",
  Maybe: "border-amber-900/20 bg-amber-100 text-amber-950",
  Skip: "border-rose-900/15 bg-rose-100 text-rose-950",
} as const

const insightRows = [
  {
    icon: CheckCircleIcon,
    title: "Best fit",
    detail: "Spanish-speaking, can start in 2 weeks, handled 60+ calls/day.",
    tone: "text-emerald-900",
  },
  {
    icon: WarningCircleIcon,
    title: "Watch for",
    detail: "Ask about Saturday availability and shift flexibility.",
    tone: "text-amber-900",
  },
  {
    icon: ChatCircleTextIcon,
    title: "Interview prompt",
    detail: "Walk me through a day when multiple patients arrived at once.",
    tone: "text-slate-900",
  },
]

export function ProductMockup() {
  return (
    <div className="relative overflow-hidden border border-foreground/10 bg-white shadow-[0_32px_90px_-40px_rgba(12,28,20,0.45)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(22,101,52,0.16),rgba(253,246,231,0))]" />
      <div className="border-b border-foreground/10 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-emerald-900/70">
              CloseRole dashboard
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">
              Front Desk Receptionist
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              127 applicants processed in 94 seconds
            </p>
          </div>
          <div className="hidden items-center gap-2 border border-emerald-900/10 bg-emerald-50 px-3 py-2 text-xs text-emerald-950 md:flex">
            <SparkleIcon className="size-4" weight="fill" />
            AI shortlist ready
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.9fr]">
        <div className="border-b border-foreground/10 p-4 lg:border-r lg:border-b-0">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
              Ranked candidates
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ClockCountdownIcon className="size-4" />
              Review 5, not 127
            </div>
          </div>

          <div className="space-y-3">
            {topCandidates.map((candidate) => (
              <div
                key={candidate.name}
                className="grid gap-3 border border-foreground/10 bg-stone-50/70 p-3 md:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-950">
                      {candidate.name}
                    </p>
                    <span
                      className={`inline-flex items-center border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${bucketStyles[candidate.bucket]}`}
                    >
                      {candidate.bucket}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{candidate.summary}</p>
                </div>

                <div className="flex items-start justify-between gap-3 md:block">
                  <p className="text-right text-2xl font-semibold text-slate-950">
                    {candidate.score}
                  </p>
                  <p className="text-right text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Fit score
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-50/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
              Candidate brief
            </p>
            <div className="inline-flex items-center gap-2 border border-foreground/10 bg-white px-2.5 py-1 text-xs text-slate-700">
              <CalendarDotsIcon className="size-4" />
              Schedule in 1 click
            </div>
          </div>

          <div className="space-y-3 border border-foreground/10 bg-white p-4">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
              <div>
                <p className="text-sm font-semibold text-slate-950">Maria S.</p>
                <p className="text-xs text-slate-500">
                  Recommendation: strong hire
                </p>
              </div>
              <div className="border border-emerald-900/15 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-950">
                94 / 100
              </div>
            </div>

            <div className="space-y-3">
              {insightRows.map((row) => {
                const Icon = row.icon

                return (
                  <div key={row.title} className="flex gap-3">
                    <div className={`mt-0.5 ${row.tone}`}>
                      <Icon className="size-4" weight="fill" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-950">
                        {row.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{row.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid gap-3 border-t border-dashed border-foreground/10 pt-3 md:grid-cols-2">
              <div className="border border-foreground/10 bg-stone-50 p-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  Interview
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Tailored questions generated from the application automatically.
                </p>
              </div>
              <div className="border border-foreground/10 bg-stone-50 p-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  Transcript review
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Paste the meeting transcript and get a hire / maybe / pass call.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
            <div className="flex items-center gap-2 border border-foreground/10 bg-white px-3 py-2">
              <CheckCircleIcon className="size-4 text-emerald-700" weight="fill" />
              Interview
            </div>
            <div className="flex items-center gap-2 border border-foreground/10 bg-white px-3 py-2">
              <WarningCircleIcon className="size-4 text-amber-700" weight="fill" />
              Maybe
            </div>
            <div className="flex items-center gap-2 border border-foreground/10 bg-white px-3 py-2">
              <XCircleIcon className="size-4 text-rose-700" weight="fill" />
              Skip
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
