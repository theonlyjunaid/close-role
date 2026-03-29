"use client"

import { useEffect, useState } from "react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

import { cn } from "@/lib/utils"

const ctaClasses =
  "inline-flex h-10 shrink-0 items-center justify-center gap-1.5 border px-4 text-sm font-semibold whitespace-nowrap transition-all outline-none select-none active:translate-y-px border-brand bg-brand text-brand-fg hover:bg-brand-hover"

export function StickyNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-0 top-0 z-50 hidden border-b border-edge bg-[rgba(255,255,255,0.92)] backdrop-blur-lg md:block"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold text-slate-950">
              <span className="grid size-8 place-items-center border border-brand/15 bg-brand text-xs text-brand-fg">
                C
              </span>
              CloseRole
            </Link>

            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#how-it-works" className="transition hover:text-slate-950">How It Works</a>
              <a href="#pricing" className="transition hover:text-slate-950">Pricing</a>
              <a href="#faq" className="transition hover:text-slate-950">FAQ</a>
              <a href="#waitlist" className={cn(ctaClasses)}>
                Get early access
                <ArrowRightIcon className="size-3.5" />
              </a>
            </nav>
          </div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  )
}
