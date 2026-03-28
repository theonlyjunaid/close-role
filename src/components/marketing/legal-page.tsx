import { ArrowLeftIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

type LegalPageProps = {
  title: string
  description: string
  lastUpdated: string
  sections: ReadonlyArray<{
    heading: string
    body: string | readonly string[]
  }>
}

export function LegalPage({ title, description, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-edge px-6 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold text-slate-950">
            <span className="grid size-8 place-items-center border border-brand/15 bg-brand text-xs text-brand-fg">C</span>
            CloseRole
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeftIcon className="size-3.5" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="px-6 py-16 sm:px-10 lg:px-16">
        <article className="mx-auto max-w-3xl">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              Legal
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{description}</p>
            <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
          </div>

          <Separator className="my-10" />

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.heading} className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-sm font-semibold tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-950">{section.heading}</h2>
                    {Array.isArray(section.body) ? (
                      section.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="text-[15px] leading-7 text-slate-600">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-[15px] leading-7 text-slate-600">{section.body}</p>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Questions? Reach out at{" "}
              <a href="mailto:hello@closerole.com" className="text-brand underline underline-offset-4 transition hover:text-brand-hover">
                hello@closerole.com
              </a>
            </p>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="size-4 text-sea" weight="fill" />
              Your data stays yours
            </div>
          </div>
        </article>
      </div>

      <footer className="border-t border-edge px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="transition hover:text-slate-950">Home</Link>
            <Link href="/privacy" className="transition hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-slate-950">Terms of Service</Link>
          </div>
          <p>&copy; 2026 CloseRole</p>
        </div>
      </footer>
    </main>
  )
}
