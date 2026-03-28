"use client"

import { type ReactNode, useRef } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
}

type AnimateOnScrollProps = {
  children: ReactNode
  className?: string
  variant?: "fadeUp" | "fadeIn" | "scaleIn"
  delay?: number
  once?: boolean
}

const variantMap = { fadeUp, fadeIn, scaleIn }

export function AnimateOnScroll({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-60px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerGroupProps = {
  children: ReactNode
  className?: string
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
