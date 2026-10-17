import { DESIGN_PROJECTS, type DesignProject } from "../data/content"
import { Rise, SectionHead, MaskReveal } from "../components/Reveal"

function DesignTile({
  project,
  shot,
  size,
  index,
}: {
  project: DesignProject
  shot: DesignProject["shots"][number]
  size: "wide" | "tall" | "square"
  index: number
}) {
  const href = `#/design/${project.slug}`
  const contain = shot.fit === "contain"
  return (
    <Rise delay={(index % 3) * 0.08} className={`d-tile ${size} ${contain ? "contain" : ""}`}>
      <a href={href} className="d-tile-link" data-hover>
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: shot.focus }}
        />
        <span className="d-tile-meta">
          <span className="mono">{project.title}</span>
          <span className="mono muted">{shot.caption}</span>
        </span>
        <span className="d-tile-cta mono" aria-hidden>
          View case study →
        </span>
      </a>
    </Rise>
  )
}

function DesignProjectGroup({ project, flip }: { project: DesignProject; flip: boolean }) {
  const [hero, ...rest] = project.shots
  return (
    <div className={`d-group ${flip ? "flip" : ""}`}>
      <DesignTile project={project} shot={hero} size="wide" index={0} />
      <div className="d-group-row">
        <div className="d-group-info">
          <MaskReveal>
            <h3 className="display d-group-title">{project.title}</h3>
          </MaskReveal>
          <MaskReveal delay={0.08}>
            <span className="mono" style={{ color: project.accent }}>{project.subtitle} · {project.year}</span>
          </MaskReveal>
          <Rise delay={0.15}>
            <p className="d-group-desc">{project.teaser}</p>
            <div className="p-tags">
              {project.tools.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <a href={`#/design/${project.slug}`} className="btn small solid" data-hover>
              Open Case Study <span className="arrow">→</span>
            </a>
          </Rise>
        </div>
        <div className="d-group-tiles">
          {rest.slice(0, 2).map((s, i) => (
            <DesignTile key={s.caption} project={project} shot={s} size={i === 0 ? "tall" : "square"} index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Design() {
  return (
    <section className="section" id="design">
      <div className="wrap">
        <SectionHead index="04" label="Design" title="UI/UX & visual work" />
        <div style={{ maxWidth: "46rem", marginBottom: "3.5rem" }}>
          <MaskReveal>
            <h2 className="display" style={{ fontSize: "clamp(2rem,4.6vw,4.2rem)" }}>
              Designed, not just built.
            </h2>
          </MaskReveal>
          <Rise delay={0.15}>
            <p className="muted" style={{ marginTop: "1.2rem", maxWidth: "34rem" }}>
              Selected interface and visual design work — product design, layouts,
              and systems I designed end to end. Open a project for the full case
              study: objective, process, palette, typography, and final screens.
            </p>
          </Rise>
        </div>

        {DESIGN_PROJECTS.map((p, i) => (
          <DesignProjectGroup key={p.slug} project={p} flip={i % 2 === 1} />
        ))}

        <Rise>
          <p className="mono muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem" }}>
            More design projects will be added as case studies are prepared.
          </p>
        </Rise>
      </div>
    </section>
  )
}
