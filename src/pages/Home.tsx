import { useEffect, useRef } from "react"
import Hero from "../sections/Hero"
import Intro, { Strip } from "../sections/Intro"
import Approach from "../sections/Approach"
import Work from "../sections/Work"
import Design from "../sections/Design"
import Products from "../sections/Products"
import Journal from "../sections/Journal"
import About from "../sections/About"
import Contact, { Footer } from "../sections/Contact"

/* All sections render their real content from the first paint. There is no
   lazy-mounting, no placeholder heights, and nothing that can change the
   document height after load — so the scroll position can never jump.
   Images use native loading="lazy" (they decode off the main thread and
   only near the viewport), so we keep the performance win without any of
   the layout instability that deferred mounting caused. */

/* Anchor clicks are the ONLY thing that ever moves scroll programmatically,
   exactly once per click. Native anchor behaviour is reliable here because
   every section is a real, fully-sized element in the layout. */
const scrollToSection = (sel: string) => {
  const el = document.querySelector(sel)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: "instant" as ScrollBehavior })
}

export default function Home({ ready }: { ready: boolean }) {
  /* initial deep link / return from a case study: re-assert the hash once
     after the preloader releases the page (the preloader locks scroll). */
  const initialHash = useRef<string | null>(
    typeof window !== "undefined"
      ? sessionStorage.getItem("pa-scroll") ||
          (window.location.hash && !window.location.hash.startsWith("#/") ? window.location.hash : null)
      : null
  )

  useEffect(() => {
    if (!ready || !initialHash.current) return
    const sel = initialHash.current
    initialHash.current = null
    sessionStorage.removeItem("pa-scroll")
    let cancelled = false
    const cancel = () => {
      cancelled = true
    }
    window.addEventListener("wheel", cancel, { passive: true, once: true })
    window.addEventListener("touchstart", cancel, { passive: true, once: true })
    window.addEventListener("keydown", cancel, { once: true })
    // land once, then re-assert twice if something (preloader exit, browser
    // hash jump) moved us — still fully cancels on any user scroll input
    const t1 = window.setTimeout(() => scrollToSection(sel), 60)
    const t2 = window.setTimeout(() => {
      if (!cancelled) scrollToSection(sel)
    }, 350)
    const t3 = window.setTimeout(() => {
      if (!cancelled) scrollToSection(sel)
    }, 800)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.removeEventListener("wheel", cancel)
      window.removeEventListener("touchstart", cancel)
      window.removeEventListener("keydown", cancel)
    }
  }, [ready])

  return (
    <main>
      <Hero ready={ready} />
      <Strip />
      <Intro />
      <Approach />
      <Work />
      <Design preview />
      <Products />
      <Journal />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
