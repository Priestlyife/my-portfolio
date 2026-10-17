import { JOURNAL } from "../data/content"
import { Rise, SectionHead, MaskReveal } from "../components/Reveal"

export default function Journal() {
  return (
    <section className="section" id="journal">
      <div className="wrap">
        <SectionHead index="06" label="Journal" title="Build log — not a blog" />
        <div style={{ maxWidth: "46rem", marginBottom: "3rem" }}>
          <MaskReveal>
            <h2 className="display" style={{ fontSize: "clamp(2rem,4.6vw,4.2rem)" }}>
              Built in public.
            </h2>
          </MaskReveal>
          <Rise delay={0.15}>
            <p className="muted" style={{ marginTop: "1.2rem", maxWidth: "34rem" }}>
              A running log of what I'm building, what I'm learning, and what's
              launching next — behind-the-scenes development, design experiments,
              and lessons along the way.
            </p>
          </Rise>
        </div>

        <div className="journal-track">
          {JOURNAL.map((j, i) => (
            <Rise key={j.num} delay={i * 0.06}>
              <a className="j-card" href="#journal" data-hover aria-disabled="true"
                 onClick={(e) => e.preventDefault()} title="Entry coming soon">
                <div className="j-meta-col">
                  <span className="mono accent">{j.num}</span>{" "}
                  <span className="mono j-meta">{j.category}</span>
                  <div className="mono j-meta" style={{ marginTop: "0.4rem" }}>{j.date}</div>
                </div>
                <span className="j-title">{j.title}</span>
                <span className="j-arrow" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </Rise>
          ))}
        </div>

        <Rise delay={0.2}>
          <p className="mono muted" style={{ marginTop: "1.6rem" }}>
            First entries are being written — check back soon.
          </p>
        </Rise>
      </div>
    </section>
  )
}
