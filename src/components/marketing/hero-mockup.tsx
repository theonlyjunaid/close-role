import {
  CheckCircleIcon,
  SparkleIcon,
  WarningCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr"

const candidates = [
  { name: "Maria S.", score: 94, bucket: "Interview" as const },
  { name: "James T.", score: 89, bucket: "Interview" as const },
  { name: "Leila R.", score: 82, bucket: "Maybe" as const },
  { name: "Chris V.", score: 44, bucket: "Skip" as const },
]

const bucketConfig = {
  Interview: {
    color: "border-emerald-900/20 bg-emerald-100 text-emerald-950",
    icon: CheckCircleIcon,
    iconColor: "text-emerald-700",
  },
  Maybe: {
    color: "border-amber-900/20 bg-amber-100 text-amber-950",
    icon: WarningCircleIcon,
    iconColor: "text-amber-700",
  },
  Skip: {
    color: "border-rose-900/20 bg-rose-100 text-rose-950",
    icon: XCircleIcon,
    iconColor: "text-rose-700",
  },
} as const

export function HeroMockup() {
  return (
    <div className="relative overflow-hidden border border-edge bg-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.35)]">
      <div className="border-b border-edge px-5 py-3.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Front Desk Receptionist</p>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-sea-dark">
            <SparkleIcon className="size-3.5" weight="fill" />
            127 applicants → 5 shortlisted
          </div>
        </div>
      </div>

      <div className="divide-y divide-edge">
        {candidates.map((c) => {
          const config = bucketConfig[c.bucket]
          const Icon = config.icon
          return (
            <div key={c.name} className="flex items-center justify-between gap-4 px-5 py-3">
              <div className="flex items-center gap-3">
                <Icon className={`size-4 ${config.iconColor}`} weight="fill" />
                <span className="text-sm font-medium text-slate-900">{c.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${config.color}`}>
                  {c.bucket}
                </span>
                <span className="w-7 text-right text-sm font-semibold tabular-nums text-slate-900">{c.score}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="border-t border-edge bg-sea-light px-5 py-3 text-center text-xs font-medium text-sea-dark">
        Processed in 94 seconds · Review 5, not 127
      </div>
    </div>
  )
}
