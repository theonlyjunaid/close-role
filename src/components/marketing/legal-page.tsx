import Link from "next/link"

type LegalPageProps = {
  title: string
  description: string
  sections: Array<{
    heading: string
    body: string
  }>
}

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,241,223,0.85),rgba(247,244,237,1)_50%)] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl border border-foreground/10 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)]">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-900/70">
          CloseRole
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-950">{section.heading}</h2>
              <p className="text-sm leading-7 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
