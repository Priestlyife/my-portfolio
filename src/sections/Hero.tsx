import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { EASE } from "../components/Reveal"
import { useMediaQuery, useOnScreen } from "../components/useInView"
import { useLite } from "../components/lite"
import portraitHero from "../assets/portrait-hero.webp"

const line = (delay: number) => ({
  initial: { y: "112%" },
  animate: { y: "0%" },
  transition: { duration: 1, delay, ease: EASE },
})

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const [scanRef, heroOnScreen] = useOnScreen<HTMLSpanElement>()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const nameX = useTransform(scrollYProgress, [0, 1], ["2%", "-16%"])
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  // parallax is desktop-only (on mobile it pushes copy into the meta row)
  // and skipped entirely on weak devices — scroll-linked transforms are
  // the main source of scroll jank there
  // NOTE: hooks must run unconditionally — combine after the calls
  const wideScreen = useMediaQuery("(min-width: 1024px)")
  const lite = useLite()
  const isDesktop = wideScreen && !lite

  const t = (d: number) => (ready ? line(d) : { initial: { y: "112%" } as const })

  return (
    <section className="hero" id="top" ref={ref}>
      {/* giant outlined name drifting behind the composition */}
      <motion.div className="hero-name" style={isDesktop ? { x: nameX } : undefined} aria-hidden>
        Akinmulero — Priestly — Akinmulero
      </motion.div>

      {/* portrait — anchored bottom-right, typography crosses in front */}
      <div className="hero-portrait">
        <motion.div
          className="portrait-mask"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={ready ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
          transition={{ duration: 1.15, delay: 0.7, ease: EASE }}
        >
          <motion.img
            src={portraitHero}
            alt="Priestly Akinmulero"
            style={{ y: isDesktop ? portraitY : 0 }}
            initial={{ scale: 1.06 }}
            animate={ready ? { scale: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.7, ease: EASE }}
          />
        </motion.div>
      </div>

      <div className="wrap hero-grid">
        <motion.div className="hero-copy" style={{ y: isDesktop ? copyY : 0 }}>
          <motion.p
            className="mono muted"
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            Priestly Akinmulero — Software Developer · UI/UX Designer
          </motion.p>

          <h1 className="display hero-title">
            <span className="line">
              <motion.span {...t(0.45)}>I'm a web developer</motion.span>
            </span>
            <span className="line">
              <motion.span {...t(0.55)}>building modern</motion.span>
            </span>
            <span className="line">
              <motion.span {...t(0.65)}>
                <span className="accent">websites</span> & web
              </motion.span>
            </span>
            <span className="line">
              <motion.span {...t(0.75)}>applications.</motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
          >
            I specialize in software development, UI/UX design, and modern web
            applications — taking ideas from the first sketch to a working
            product people actually use.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          >
            <a href="#work" className="btn solid" data-hover>
              View My Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn ghost" data-hover>
              Let's Work Together <span className="arrow">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="wrap hero-meta mono"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 1.35 }}
      >
        <span className="scroll-hint" ref={scanRef} data-onscreen={heroOnScreen || undefined}>
          Scroll to explore <span className="dotline" />
        </span>
        <span className="muted">Portfolio © 2026</span>
      </motion.div>
    </section>
  )
}
