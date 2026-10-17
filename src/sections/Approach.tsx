import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { APPROACH } from "../data/content"
import { SectionHead } from "../components/Reveal"

export default function Approach() {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [shift, setShift] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const over = trackRef.current.scrollWidth - window.innerWidth
      setShift(Math.max(0, over))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -shift])
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="approach">
      <div className="wrap" style={{ paddingTop: "clamp(5rem,12vh,9rem)" }}>
        <SectionHead index="02" label="My Approach" title="How I work through a problem" />
      </div>

      <div
        className="approach-outer"
        ref={outerRef}
        style={{ height: `${APPROACH.length * 62 + 100}svh` }}
      >
        <div className="approach-sticky">
          <motion.div className="approach-track" ref={trackRef} style={{ x }}>
            {APPROACH.map((s, i) => (
              <div className="stage" key={s.word} data-hover>
                <span className="num">0{i + 1} / 07</span>
                <h3 className="display word">{s.word}</h3>
                <p className="desc">{s.desc}</p>
              </div>
            ))}
          </motion.div>
          <div className="approach-progress" aria-hidden>
            <motion.i style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </section>
  )
}
