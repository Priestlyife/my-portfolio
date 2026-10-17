import { lazy, Suspense, useCallback, useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import { Cursor, Preloader, useThemeWipe } from "./components/Chrome"
import { useLite, applyLite, probePerformance } from "./components/lite"
import { DESIGN_PROJECTS } from "./data/content"

const DesignCase = lazy(() => import("./pages/DesignCase"))

function useDesignRoute() {
  const read = () => {
    const m = window.location.hash.match(/^#\/design\/([\w-]+)/)
    return m ? m[1] : null
  }
  const [slug, setSlug] = useState<string | null>(read)

  useEffect(() => {
    const onHash = () => setSlug(read())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return DESIGN_PROJECTS.find((p) => p.slug === slug) ?? null
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const { toggleTheme, wipeEl } = useThemeWipe()
  const done = useCallback(() => setLoading(false), [])
  const designProject = useDesignRoute()
  const onCase = Boolean(designProject)
  const lite = useLite()

  /* Case pages don't need the home sections — don't even mount them.
     And while the browser is here, warm every screenshot in the
     background so gallery scrolling never waits on the network. */
  useEffect(() => {
    document.documentElement.dataset.view = onCase ? "case" : "home"
    if (!onCase || !designProject) return
    designProject.shots.forEach((s) => {
      const img = new Image()
      img.src = s.src
    })
  }, [onCase, designProject])

  /* lite mode: instantly for known-weak devices, plus a live frame-rate
     probe that flips it on if the device struggles in practice */
  useEffect(() => probePerformance(() => applyLite(true)), [])

  /* images fade in as soon as they're decoded — no late "pop" */
  useEffect(() => {
    const mark = (e: Event) => {
      const t = e.target
      if (t instanceof HTMLImageElement) t.classList.add("ld")
    }
    document.addEventListener("load", mark, true)
    // images already complete before listeners attached
    document.querySelectorAll("img").forEach((i) => {
      if (i.complete && i.naturalWidth > 0) i.classList.add("ld")
    })
    return () => document.removeEventListener("load", mark, true)
  }, [onCase])

  /* On a case page, any in-page anchor (#work, #design…) means "go home to
     that section": stash the target, clear the page route, let Home land it.
     We preventDefault so the browser never does its own hash jump — Home's
     one-time scroll owns the landing position entirely. */
  useEffect(() => {
    if (!onCase) return
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null
      if (!a) return
      const hash = a.getAttribute("href") || ""
      if (hash.length < 2 || hash.startsWith("#/")) return
      e.preventDefault()
      sessionStorage.setItem("pa-scroll", hash)
      /* use a hash the browser can't natively target (#s-…) so it never
         jumps on its own — Home's one-time scroll owns the landing */
      history.replaceState(null, "", window.location.pathname + "#s-" + hash.slice(1))
      window.dispatchEvent(new HashChangeEvent("hashchange"))
    }
    document.addEventListener("click", onClick, true) // capture: run before any native jump
    return () => document.removeEventListener("click", onClick, true)
  }, [onCase])

  return (
    <>
      <Cursor />
      <AnimatePresence>{loading && !onCase && <Preloader done={done} fast={lite} />}</AnimatePresence>
      <Nav onToggleTheme={toggleTheme} />
      {designProject ? (
        <Suspense fallback={null}>
          <DesignCase project={designProject} />
        </Suspense>
      ) : (
        <Home ready={!loading || onCase} />
      )}
      {wipeEl}
    </>
  )
}
