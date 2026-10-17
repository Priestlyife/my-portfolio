import { useEffect, useRef, useState } from "react"

/* One shared IntersectionObserver for the whole app — much cheaper than
   every animated element creating its own observer via whileInView. */
type Callback = (entry: IntersectionObserverEntry) => void

let observer: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, Callback>()

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const cb = callbacks.get(e.target)
          if (cb) cb(e)
          if (e.isIntersecting) observer!.unobserve(e.target)
        }
      },
      { rootMargin: "-12% 0px -4% 0px", threshold: 0.01 }
    )
  }
  return observer
}

/** Returns [ref, inView] — fires once, then stops observing. */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const obs = getObserver()
    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) setInView(true)
    })
    obs.observe(el)
    return () => {
      obs.unobserve(el)
      callbacks.delete(el)
    }
  }, [inView])

  return [ref, inView] as const
}

/** True when the viewport matches the media query (e.g. desktop-only effects). */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const fn = () => setMatches(mq.matches)
    fn()
    mq.addEventListener("change", fn)
    return () => mq.removeEventListener("change", fn)
  }, [query])
  return matches
}

/* A second shared observer (continuous, generous margin) for pausing
   offscreen work — infinite marquees, scroll-linked motion, etc. */
type VisCallback = (visible: boolean) => void

let visObserver: IntersectionObserver | null = null
const visCallbacks = new WeakMap<Element, VisCallback>()

function getVisObserver() {
  if (!visObserver) {
    visObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visCallbacks.get(e.target)?.(e.isIntersecting)
      },
      { rootMargin: "300px 0px", threshold: 0 }
    )
  }
  return visObserver
}

/** Returns [ref, visible] — keeps firing as the element enters/leaves view. */
export function useOnScreen<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getVisObserver()
    visCallbacks.set(el, setVisible)
    obs.observe(el)
    return () => {
      obs.unobserve(el)
      visCallbacks.delete(el)
    }
  }, [])

  return [ref, visible] as const
}
