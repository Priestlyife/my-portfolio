import { LINKS } from "../data/content"
import { Rise, MaskReveal } from "../components/Reveal"
import portraitContact from "../assets/portrait-contact.webp"

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  const ready = href.length > 0
  return (
    <a
      className="c-link"
      href={ready ? href : undefined}
      target={ready && href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      data-hover
      aria-disabled={!ready}
      onClick={ready ? undefined : (e) => e.preventDefault()}
      title={ready ? value : "Link will be added soon"}
      style={!ready ? { opacity: 0.55, cursor: "default" } : undefined}
    >
      <span className="mono">{label}</span>
      <span className="v">{value}</span>
      <span className="arrow" aria-hidden>↗</span>
    </a>
  )
}

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <img className="contact-portrait" src={portraitContact} alt="" aria-hidden loading="eager" decoding="async" />
      <div className="wrap">
        <p className="mono muted" style={{ marginBottom: "1.4rem" }}>08 — Contact</p>
        <h2 className="display contact-title">
          <span className="line">
            <MaskReveal as="span">Let's build</MaskReveal>
          </span>
          <span className="line">
            <MaskReveal as="span" delay={0.08}>
              <span className="outline-text">something</span>
            </MaskReveal>
          </span>
          <span className="line">
            <MaskReveal as="span" delay={0.16}>useful.</MaskReveal>
          </span>
        </h2>

        <div className="contact-grid">
          <div>
            <Rise delay={0.2}>
              <p className="hero-sub" style={{ maxWidth: "26rem" }}>
                Have an idea, project, business problem, or digital product in mind?
                Let's talk.
              </p>
              <div className="hero-ctas">
                <a href={`mailto:${LINKS.email}`} className="btn solid" data-hover>
                  Start a Project <span className="arrow">→</span>
                </a>
                <a href="#top" className="btn ghost" data-hover>
                  Back to the Top <span className="arrow">↑</span>
                </a>
              </div>
            </Rise>
          </div>

          <Rise delay={0.3}>
            <div className="contact-links">
              <ContactLink label="Email" value={LINKS.email} href={`mailto:${LINKS.email}`} />
              <ContactLink label="LinkedIn" value="Connect with me" href={LINKS.linkedin} />
            </div>
          </Rise>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <span className="mono" style={{ display: "block" }}>Priestly Akinmulero</span>
          <span className="mono muted" style={{ display: "block", marginTop: "0.4rem" }}>
            Software Developer · UI/UX Designer · Digital Product Builder
          </span>
        </div>
        <ul className="f-links mono">
          <li><a href="#work">Work</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#journal">Journal</a></li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span className="mono muted">© 2026</span>
          <button className="to-top" data-hover onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
