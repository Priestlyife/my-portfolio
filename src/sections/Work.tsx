import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PROJECTS, type Project } from "../data/content"
import { Rise, SectionHead, MaskReveal } from "../components/Reveal"
import { useMediaQuery } from "../components/useInView"
import { useLite } from "../components/lite"
import ProjectMock from "../components/ProjectMocks"

function ProjectVisual({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  // parallax runs on capable desktops only — one less scroll-bound transform
  // NOTE: hooks must run unconditionally — combine after the calls
  const wideScreen = useMediaQuery("(min-width: 1024px)")
  const lite = useLite()
  const isDesktop = wideScreen && !lite
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <div className="p-visual" ref={ref} style={{ "--pacc": project.accent } as React.CSSProperties}>
      <motion.div className="p-visual-inner" style={isDesktop ? { y } : undefined}>
        <ProjectMock kind={project.mock} />
      </motion.div>
      <span className="p-visual-glow" aria-hidden />
    </div>
  )
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="p-copy" style={{ "--pacc": project.accent } as React.CSSProperties}>
        <MaskReveal>
          <span className="mono p-num">{project.num} — {project.status}</span>
        </MaskReveal>
        <MaskReveal delay={0.08}>
          <h3 className="display p-title">{project.title}</h3>
        </MaskReveal>
        <MaskReveal delay={0.14}>
          <span className="mono p-cat">{project.subtitle} · {project.year}</span>
        </MaskReveal>
        <Rise delay={0.2}>
          <p className="p-desc">{project.description}</p>
        </Rise>
        <Rise delay={0.26}>
          <div className="p-tags">
            {project.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
            {project.features.slice(0, 3).map((f) => (
              <span className="tag" key={f}>{f}</span>
            ))}
          </div>
        </Rise>
        <Rise delay={0.32}>
          <div className="p-actions">
            <span className="btn small disabled" aria-disabled="true" title="Case study is being prepared">
              {project.primaryCta} <span className="arrow">→</span>
            </span>
            <span className="mono muted p-note">Live links on request</span>
          </div>
        </Rise>
      </div>
      <Rise delay={0.15} y={48}>
        <ProjectVisual project={project} />
      </Rise>
    </article>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead index="03" label="Selected Work" title="What I've built" />
        {PROJECTS.map((p) => (
          <ProjectBlock key={p.num} project={p} />
        ))}
        <Rise>
          <div className="work-more">
            <p className="mono" style={{ maxWidth: "30rem", lineHeight: 1.8 }}>
              More projects are in progress. This gallery is built to grow — every new
              build gets a number, a story, and a place here.
            </p>
            <span className="mono accent">Next project — 05</span>
          </div>
        </Rise>
      </div>
    </section>
  )
}
