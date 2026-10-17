import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"
import { useInViewOnce } from "./useInView"

export const EASE = [0.22, 1, 0.36, 1] as const

/* Masked slide-up reveal for a block of content.
   One shared IntersectionObserver (via useInViewOnce) drives all
   reveals; the clipped child animates via inherited variants. */
export function MaskReveal({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  as = "div",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: "div" | "span"
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const Outer = as === "span" ? motion.span : motion.div
  const Inner = as === "span" ? motion.span : motion.div
  return (
    <Outer
      ref={ref}
      className={`mask-line ${className}`}
      style={{ display: as === "span" ? "inline-block" : "block" }}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Inner
        style={{ display: "block" }}
        variants={{
          hidden: { y: "112%" },
          show: { y: "0%", transition: { duration, delay, ease: EASE } },
        }}
      >
        {children}
      </Inner>
    </Outer>
  )
}

/* Fade + rise on scroll into view */
export function Rise({
  children,
  delay = 0,
  y = 36,
  duration = 0.9,
  className = "",
}: {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* Staggered children container */
export const stagger: Variants = {
  hidden: {},
  show: (i: number = 0) => ({
    transition: { staggerChildren: 0.09, delayChildren: i },
  }),
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

/* Section heading with index + label + rule */
export function SectionHead({ index, label, title }: { index: string; label: string; title?: string }) {
  return (
    <div className="sec-head">
      <span className="mono idx">{index}</span>
      <span className="mono label">{label}</span>
      <span className="rule" />
      {title && <span className="mono muted">{title}</span>}
    </div>
  )
}
