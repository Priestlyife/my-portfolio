import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { EASE } from "./Reveal"
import { useLite } from "./lite"

/* ---------------- custom cursor (desktop only) ---------------- */

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const lite = useLite()

  useEffect(() => {
    if (lite) return // weak device — no perpetual cursor rAF loop
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return
    const pos = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      const t = e.target as HTMLElement
      const hot = t.closest("a, button, [data-hover]")
      ringRef.current?.classList.toggle("grow", !!hot)
    }
    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.3
      ring.y += (pos.y - ring.y) * 0.3
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [lite])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

/* ---------------- theme toggle with circular wipe ---------------- */

export function useThemeWipe() {
  const [wipe, setWipe] = useState<{ x: number; y: number; toDark: boolean } | null>(null)
  const lite = useLite()

  const toggleTheme = (e: React.MouseEvent) => {
    const root = document.documentElement
    const toDark = !root.classList.contains("dark")
    if (lite) {
      // weak device: skip the clip-path wipe (very expensive to paint)
      root.classList.toggle("dark", toDark)
      root.classList.toggle("light", !toDark)
      return
    }
    setWipe({ x: e.clientX, y: e.clientY, toDark })
    // swap theme mid-wipe, when the circle has mostly covered the screen
    window.setTimeout(() => {
      root.classList.toggle("dark", toDark)
      root.classList.toggle("light", !toDark)
    }, 380)
    window.setTimeout(() => setWipe(null), 950)
  }

  const wipeEl = (
    <AnimatePresence>
      {wipe && (
        <motion.div
          className="theme-wipe"
          style={{ background: wipe.toDark ? "#0a0a0b" : "#f8f8f9" }}
          initial={{ clipPath: `circle(0px at ${wipe.x}px ${wipe.y}px)` }}
          animate={{ clipPath: `circle(160% at ${wipe.x}px ${wipe.y}px)` }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ duration: 0.85, ease: EASE }}
        />
      )}
    </AnimatePresence>
  )

  return { toggleTheme, wipeEl }
}

export function ThemeToggle({ onToggle }: { onToggle: (e: React.MouseEvent) => void }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle light and dark theme" data-hover>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="4.4" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
      </svg>
    </button>
  )
}

/* ---------------- preloader ---------------- */

export function Preloader({ done, fast = false }: { done: () => void; fast?: boolean }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const dur = fast ? 350 : 1500
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setLeaving(true)
        window.setTimeout(done, fast ? 250 : 750)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [done, fast])

  return (
    <motion.div
      className="preloader"
      animate={leaving ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: fast ? 0.3 : 0.75, ease: EASE }}
    >
      <div className="pl-row mono">
        <span>Portfolio — 2026</span>
        <span>Software · Design · Products</span>
      </div>
      <div className="pl-name">
        <motion.span
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          Priestly
          <br />
          Akinmulero
        </motion.span>
      </div>
      <div className="pl-row">
        <span className="mono">Loading experience</span>
        <span className="pl-count">{count}%</span>
      </div>
    </motion.div>
  )
}
