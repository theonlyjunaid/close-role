import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <Link href="/" className="mb-12 flex items-center gap-2.5 text-sm font-semibold text-slate-950">
        <span className="grid size-8 place-items-center border border-brand/15 bg-brand text-xs text-brand-fg">C</span>
        CloseRole
      </Link>

      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-600">
        Unlike a bad hire, this one&apos;s easy to fix. Head back to the homepage and let&apos;s get you on track.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center gap-2 border border-brand bg-brand px-6 text-base font-semibold text-brand-fg transition-all hover:bg-brand-hover active:translate-y-px"
        >
          Back to homepage
          <ArrowRightIcon className="size-4" />
        </Link>
        <Link
          href="/#waitlist"
          className="inline-flex h-12 items-center justify-center gap-2 border border-edge bg-white px-6 text-base font-semibold text-slate-950 transition-all hover:bg-slate-50 active:translate-y-px"
        >
          Join the waitlist
        </Link>
      </div>

      <p className="mt-16 text-sm text-slate-400">
        &copy; 2026 CloseRole. Hire without the HR.
      </p>
    </main>
  )
}
