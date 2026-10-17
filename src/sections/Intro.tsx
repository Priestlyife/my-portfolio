import { MaskReveal, Rise } from "../components/Reveal"
import { useOnScreen } from "../components/useInView"

/* infinite strip between hero and statement — pauses when offscreen */
export function Strip() {
  const [ref, onScreen] = useOnScreen<HTMLDivElement>()
  const items = ["Design", "Build", "Solve", "Deploy", "Improve"]
  const row = (
    <>
      {items.map((w) => (
        <span key={w}>
          {w} <i className="star">✦</i>
        </span>
      ))}
    </>
  )
  return (
    <div className="strip" ref={ref} data-onscreen={onScreen || undefined} aria-hidden>
      <div className="strip-track">
        {row}
        {row}
      </div>
    </div>
  )
}

export default function Intro() {
  return (
    <section className="section" id="intro">
      <div className="wrap intro-grid">
        <h2 className="display statement">
          <MaskReveal>I turn ideas</MaskReveal>
          <MaskReveal delay={0.08}>into digital</MaskReveal>
          <MaskReveal delay={0.16}>
            <span className="outline-text">products.</span>
          </MaskReveal>
        </h2>
        <Rise delay={0.25} className="intro-side">
          <p>
            I combine frontend development, UI/UX design, backend technologies, and
            problem-solving to create digital experiences that are useful,
            responsive, and built around real needs.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Not just code that runs — products that work for the people who use them.
          </p>
        </Rise>
      </div>
    </section>
  )
}
