import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { NAV_ITEMS } from "../data/content"
import { ThemeToggle } from "./Chrome"
import { EASE } from "./Reveal"

export default function Nav({ onToggleTheme, designActive = false }: { onToggleTheme: (e: React.MouseEvent) => void; designActive?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const goHome = (hash?: string) => {
    // Design routes are real pages; let their links navigate normally.
    if (hash?.startsWith("#/")) {
      setOpen(false)
      return
    }
    // leaving a case-study or gallery page → restore homepage section anchors
    if (window.location.hash.startsWith("#/")) {
      const target = hash ?? ""
      if (target) sessionStorage.setItem("pa-scroll", target)
      history.replaceState(null, "", window.location.pathname + target)
      window.dispatchEvent(new HashChangeEvent("hashchange"))
    }
    setOpen(false)
  }

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="brand" data-hover onClick={() => goHome("#top")}>
            <span className="brand-mark">PA</span>
            <span className="brand-name">Priestly Akinmulero</span>
          </a>

          <nav>
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => goHome(item.href)} className={item.label === "Design" && designActive ? "active" : undefined} aria-current={item.label === "Design" && designActive ? "page" : undefined}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <ThemeToggle onToggle={onToggleTheme} />
            <a href="#contact" className="btn small solid nav-cta" onClick={() => goHome("#contact")}>
              Let's Talk <span className="arrow">→</span>
            </a>
            <button
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              data-hover
            >
              {open ? (
                <svg width="15" height="15" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.6">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.6">
                  <path d="M1 4.5h14M1 11.5h14" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: EASE }}
              >
                <a href={item.href} onClick={() => goHome(item.href)} aria-current={item.label === "Design" && designActive ? "page" : undefined}>
                  <span className="mono">0{i + 1}</span>
                  {item.label}
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
