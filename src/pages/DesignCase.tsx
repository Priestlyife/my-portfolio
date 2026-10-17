import { useEffect } from "react"
import { motion } from "framer-motion"
import type { DesignProject } from "../data/content"
import { EASE, MaskReveal, Rise } from "../components/Reveal"

function Palette({ colors }: { colors: DesignProject["palette"] }) {
  return (
    <div className="cs-palette">
      {colors.map((c) => (
        <div className="cs-swatch" key={c.hex}>
          <span className="cs-chip" style={{ background: c.hex }} />
          <span className="mono">{c.hex}</span>
          <span className="cs-swatch-name">{c.name}</span>
        </div>
      ))}
    </div>
  )
}

function GalleryShot({ shot, tall = false, i }: { shot: DesignProject["shots"][number]; tall?: boolean; i: number }) {
  const contain = shot.fit === "contain"
  return (
    <Rise delay={(i % 2) * 0.08} className={`cs-shot ${tall ? "tall" : ""} ${contain ? "contain" : ""}`}>
      <img src={shot.src} alt={shot.alt} loading="eager" decoding="async" style={{ objectPosition: shot.focus }} />
      <span className="mono cs-shot-cap">{shot.caption}</span>
    </Rise>
  )
}

export default function DesignCase({ project }: { project: DesignProject }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [project.slug])

  return (
    <main className="case" style={{ "--pacc": project.accent } as React.CSSProperties}>
      {/* masthead */}
      <section className="cs-masthead">
        <div className="wrap">
          <motion.a
            href="#work"
            className="mono cs-back"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            data-hover
          >
            ← Back to portfolio
          </motion.a>
          <MaskReveal>
            <span className="mono" style={{ color: project.accent }}>
              Design Case Study — {project.subtitle} · {project.year}
            </span>
          </MaskReveal>
          <MaskReveal delay={0.1}>
            <h1 className="display cs-title">{project.title}</h1>
          </MaskReveal>
          <Rise delay={0.2}>
            <p className="cs-lede">{project.overview}</p>
            <div className="p-tags">
              {project.tools.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* hero shot */}
      <div className="wrap">
        <motion.figure
          className="cs-hero-shot"
          initial={{ clipPath: "inset(8% 4% 8% 4% round 20px)", opacity: 0.6 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 20px)", opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
        >
          <img src={project.shots[0].src} alt={project.shots[0].alt} />
        </motion.figure>
      </div>

      {/* objective + approach */}
      <section className="wrap cs-grid">
        <Rise>
          <h2 className="mono cs-label" style={{ color: project.accent }}>01 — The Objective</h2>
          <p className="cs-body">{project.objective}</p>
        </Rise>
        <Rise delay={0.1}>
          <h2 className="mono cs-label" style={{ color: project.accent }}>02 — Design Approach</h2>
          <ul className="cs-list">
            {project.approach.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Rise>
      </section>

      {/* gallery — mixed layout */}
      <section className="wrap">
        <MaskReveal>
          <h2 className="display cs-sec-title">The Screens</h2>
        </MaskReveal>
        <div className="cs-gallery">
          <div className="cs-col">
            {project.shots.slice(1).filter((_, i) => i % 2 === 0).map((s, i) => (
              <GalleryShot key={s.caption} shot={s} i={i} tall={i % 2 === 1} />
            ))}
          </div>
          <div className="cs-col">
            {project.shots.slice(1).filter((_, i) => i % 2 === 1).map((s, i) => (
              <GalleryShot key={s.caption} shot={s} i={i + 1} tall={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* palette + typography */}
      <section className="wrap cs-grid">
        <Rise>
          <h2 className="mono cs-label" style={{ color: project.accent }}>03 — Color</h2>
          <Palette colors={project.palette} />
        </Rise>
        <Rise delay={0.1}>
          <h2 className="mono cs-label" style={{ color: project.accent }}>04 — Typography</h2>
          <div className="cs-type">
            <span className="cs-type-display">{project.typography.display}</span>
            <span className="cs-type-body">{project.typography.body}</span>
            <p className="cs-body" style={{ marginTop: "0.9rem" }}>{project.typography.note}</p>
          </div>
        </Rise>
      </section>

      {/* decisions */}
      <section className="wrap">
        <MaskReveal>
          <h2 className="display cs-sec-title">Key Decisions</h2>
        </MaskReveal>
        <div className="cs-decisions">
          {project.decisions.map((d, i) => (
            <Rise key={d.title} delay={i * 0.06} className="cs-decision">
              <span className="mono" style={{ color: project.accent }}>0{i + 1}</span>
              <h3>{d.title}</h3>
              <p>{d.detail}</p>
            </Rise>
          ))}
        </div>
      </section>

      {/* outro */}
      <section className="wrap cs-outro">
        <Rise>
          <MaskReveal>
            <h2 className="display" style={{ fontSize: "clamp(1.8rem,4vw,3.4rem)" }}>
              {project.outro}
            </h2>
          </MaskReveal>
          <div className="hero-ctas" style={{ marginTop: "1.8rem" }}>
            <a href="#design" className="btn solid" data-hover>
              More Design Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn ghost" data-hover>
              Start a Project <span className="arrow">→</span>
            </a>
          </div>
        </Rise>
      </section>
    </main>
  )
}
