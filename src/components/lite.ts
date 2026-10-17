import { useEffect, useState } from "react"

/* Low-end device detection.
   When lite, the site skips the expensive layer — parallax, giant blurs,
   the theme-wipe animation and the custom cursor — so scrolling and taps
   stay instant on weak hardware. Detection is threefold:
   1. the visitor asked for reduced motion (OS setting)
   2. the device reports few CPU cores / little RAM
   3. a live frame-rate probe after load (catches slow devices that
      report flattering specs) — see probePerformance() below. */

function detect(): boolean {
  if (typeof window === "undefined") return false
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
    const hc = navigator.hardwareConcurrency || 8
    const dm = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 8
    if (hc <= 4 || dm <= 3) return true
  } catch {
    /* fall through */
  }
  return false
}

let liteNow = detect()
const subs = new Set<(v: boolean) => void>()

/** initial value — safe for module scope; prefer useLite() in components */
export const isLite = liteNow

/** reactive lite flag — components using this re-render if the
    frame-rate probe flips lite mode on after load */
export function useLite(): boolean {
  const [v, setV] = useState(liteNow)
  useEffect(() => {
    const fn = (nv: boolean) => setV(nv)
    subs.add(fn)
    return () => {
      subs.delete(fn)
    }
  }, [])
  return v
}

export function applyLite(on: boolean) {
  if (liteNow === on) return
  liteNow = on
  document.documentElement.classList.toggle("lite", on)
  subs.forEach((fn) => fn(on))
}

// make sure the class matches the initial detection immediately
if (liteNow) document.documentElement.classList.add("lite")

/* Measures real frame times once the page has properly settled (load +
   1600ms grace, so the mount/decode burst right after load doesn't
   count). If the device can't hold ~25fps while basically idle,
   flip lite mode on. Runs once. */
export function probePerformance(onSlow: () => void) {
  if (liteNow) return // already lite — nothing to prove
  let cancelled = false
  let cleanup = () => {}

  const measure = () => {
    if (cancelled) return
    let frames = 0
    let slowFrames = 0
    let last = 0
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      if (last) {
        const d = t - last
        frames++
        if (d > 40) slowFrames++ // worse than ~25fps
      }
      last = t
      if (t - start < 900) {
        raf = requestAnimationFrame(tick)
      } else if (frames > 10 && slowFrames / frames > 0.6) {
        onSlow()
      }
    }
    raf = requestAnimationFrame(tick)
    cleanup = () => cancelAnimationFrame(raf)
  }

  let timer = 0
  const begin = () => {
    timer = window.setTimeout(measure, 1600)
  }
  if (document.readyState === "complete") begin()
  else window.addEventListener("load", begin, { once: true })

  return () => {
    cancelled = true
    window.clearTimeout(timer)
    window.removeEventListener("load", begin)
    cleanup()
  }
}
