import { EDUCATION, EXPERIENCE, SKILLS_PRO, SKILLS_TECH } from "../data/content"
import { Rise, SectionHead, MaskReveal } from "../components/Reveal"
import { useOnScreen } from "../components/useInView"
import aboutPhoto from "../assets/about-photo.webp"

export default function About() {
  const [rowsRef, rowsOnScreen] = useOnScreen<HTMLDivElement>()
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead index="07" label="About" title="Who I am" />

        <div className="about-grid">
          <Rise y={48}>
            <figure className="about-fig">
              <div className="frame-wrap">
                <div className="frame photo">
                  <img src={aboutPhoto} alt="Priestly Akinmulero" loading="lazy" decoding="async" />
                </div>
                <span className="block" aria-hidden />
              </div>
              <figcaption className="mono">
                Priestly Akinmulero — developer, designer, builder
              </figcaption>
            </figure>
          </Rise>

          <div className="about-copy">
            <MaskReveal>
              <h3>
                I don't just write code. I design and build digital products that
                solve real problems.
              </h3>
            </MaskReveal>
            <Rise delay={0.15}>
              <p>
                I'm <b>Priestly Akinmulero</b> — a software developer and UI/UX
                designer focused on turning ideas into working digital products.
                My work sits where engineering and design meet: I care about how a
                product is built, and just as much about how it feels to use.
              </p>
              <p>
                So far that's meant <b>frontend and full-stack web applications</b>,
                <b> AI-powered platforms</b>, <b>educational technology</b>, and
                <b> digital content</b> — from an AI nutrition platform to a school
                management system, alongside real-world work supporting an
                educational consultancy and running a restaurant's digital presence.
              </p>
              <p>
                Where I'm going is simple: keep building. More products, more
                software for schools and businesses, and a growing lineup of digital
                tools under my own name. This portfolio grows with every build.
              </p>
            </Rise>

            <Rise delay={0.2}>
              <div className="current-row">
                <div>
                  <span className="mono">Currently building</span>
                  <span className="v">Web &amp; digital products</span>
                </div>
                <div>
                  <span className="mono">Exploring</span>
                  <span className="v">AI-powered applications</span>
                </div>
                <div>
                  <span className="mono">Learning</span>
                  <span className="v">Full-stack development</span>
                </div>
              </div>
            </Rise>
          </div>
        </div>

        {/* experience timeline */}
        <Rise>
          <h3 className="display" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", marginTop: "clamp(3rem,8vh,5rem)" }}>
            Experience
          </h3>
        </Rise>
        <div className="timeline" style={{ marginTop: "1.5rem" }}>
          {EXPERIENCE.map((e, i) => (
            <Rise key={e.org} delay={i * 0.08}>
              <div className="t-item">
                <span className="mono t-year">{e.year}</span>
                <div>
                  <div className="t-role">{e.role}</div>
                  <div className="t-org mono">{e.org}</div>
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </div>

        {/* education — compact by design */}
        <Rise>
          <h3 className="display" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", marginTop: "clamp(3rem,8vh,5rem)" }}>
            Education
          </h3>
        </Rise>
        <div style={{ marginTop: "0.5rem", maxWidth: "52rem" }}>
          {EDUCATION.map((e) => (
            <Rise key={e.school}>
              <div className="edu-row">
                <div>
                  <div className="e-school">{e.school}</div>
                  <div className="e-deg">{e.degree}</div>
                </div>
                <span className="mono e-year">{e.year}</span>
              </div>
            </Rise>
          ))}
        </div>
      </div>

      {/* skills — typographic moving rows */}
      <div style={{ marginTop: "clamp(4rem,10vh,7rem)" }}>
        <div className="wrap">
          <Rise>
            <h3 className="display" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", marginBottom: "1.8rem" }}>
              What I work with
            </h3>
          </Rise>
        </div>
        <div className="skills-rows" data-hover ref={rowsRef} data-onscreen={rowsOnScreen || undefined}>
          <div className="skill-row fwd">
            {[0, 1].map((r) => (
              <span key={r} aria-hidden={r === 1}>
                {SKILLS_TECH.map((s) => (
                  <em key={s} style={{ fontStyle: "normal" }}>
                    {s} <i>✦</i>
                  </em>
                ))}
              </span>
            ))}
          </div>
          <div className="skill-row rev">
            {[0, 1].map((r) => (
              <span key={r} aria-hidden={r === 1}>
                {SKILLS_PRO.map((s) => (
                  <em key={s} style={{ fontStyle: "normal", color: "var(--muted)" }}>
                    {s} <i>✦</i>
                  </em>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="wrap">
          <p className="skills-note mono">Technical skills ↑ — professional skills ↓</p>
        </div>
      </div>
    </section>
  )
}
