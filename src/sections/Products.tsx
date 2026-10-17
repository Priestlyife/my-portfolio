import { PRODUCTS } from "../data/content"
import { Rise, SectionHead, MaskReveal } from "../components/Reveal"

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="wrap">
        <SectionHead index="05" label="Products" title="Software you can use" />
        <div style={{ maxWidth: "46rem", marginBottom: "3rem" }}>
          <MaskReveal>
            <h2 className="display" style={{ fontSize: "clamp(2rem,4.6vw,4.2rem)" }}>
              Beyond client work —<br />I build products.
            </h2>
          </MaskReveal>
          <Rise delay={0.15}>
            <p className="muted" style={{ marginTop: "1.2rem", maxWidth: "34rem" }}>
              This section grows into a showroom for the digital products I design and
              build — school software, business tools, and web applications. Demos,
              documentation, and purchase options appear here as each product ships.
            </p>
          </Rise>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p, i) => (
            <Rise key={p.num} delay={i * 0.1} className={p.placeholder ? "product-card placeholder" : "product-card"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="mono muted">{p.num}</span>
                <span className={`status mono muted ${p.status === "In Development" ? "dev" : ""}`}>
                  <i aria-hidden /> {p.status}
                </span>
              </div>
              <h3>{p.name}</h3>
              <span className="mono muted">{p.category}</span>
              <p>{p.description}</p>
              <div className="spacer" />
              {!p.placeholder && (
                <div className="p-actions">
                  {p.ctas.map((c, k) => (
                    <span
                      key={c}
                      className={`btn small ${k === 0 ? "solid" : "ghost"} disabled`}
                      aria-disabled="true"
                      title="Available when the product launches"
                    >
                      {c} {k === 0 && <span className="arrow">→</span>}
                    </span>
                  ))}
                </div>
              )}
              {p.placeholder && (
                <span className="mono" style={{ color: "var(--muted)" }}>
                  Reserved for what's next
                </span>
              )}
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}
