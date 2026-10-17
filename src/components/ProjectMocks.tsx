/* Stylized UI mockups for each project — pure DOM/CSS so they stay
   crisp in both themes and cheap to animate (transform/opacity only). */
import { motion } from "framer-motion"
import { EASE } from "./Reveal"

const VP = { once: true, margin: "-12% 0px" } as const

function Bar({ w, delay = 0 }: { w: string; delay?: number }) {
  return (
    <span className="mk-bar">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VP}
        transition={{ duration: 0.9, delay, ease: EASE }}
        style={{ width: w }}
      />
    </span>
  )
}

function Fade({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function Browser({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="mock browser">
      <div className="mk-chrome">
        <span className="mk-dots"><i /><i /><i /></span>
        <span className="mk-url mono">{url}</span>
      </div>
      <div className="mk-body">{children}</div>
    </div>
  )
}

/* ---------------- 01 — NutriFit ---------------- */

function NutriFitMock() {
  const C = 2 * Math.PI * 34
  return (
    <Browser url="nutrifit.app/dashboard">
      <div className="mk-head">
        <span className="mk-logo" aria-hidden />
        <span className="mk-title">NutriFit — Today's Overview</span>
        <span className="mk-chip">AI ON</span>
      </div>
      <div className="mk-grid-2">
        <Fade className="mk-card mk-ring-card" delay={0.1}>
          <svg viewBox="0 0 84 84" className="mk-ring" aria-hidden>
            <circle cx="42" cy="42" r="34" className="track" />
            <motion.circle
              cx="42" cy="42" r="34" className="val"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              whileInView={{ strokeDashoffset: C * 0.28 }}
              viewport={VP}
              transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            />
          </svg>
          <span className="mk-ring-label mono">1,840 / 2,400 kcal</span>
        </Fade>
        <Fade className="mk-card" delay={0.2}>
          <span className="mk-label mono">Macros</span>
          <div className="mk-macro"><span>Protein</span><Bar w="82%" delay={0.35} /></div>
          <div className="mk-macro"><span>Carbs</span><Bar w="64%" delay={0.45} /></div>
          <div className="mk-macro"><span>Fats</span><Bar w="47%" delay={0.55} /></div>
        </Fade>
      </div>
      <Fade className="mk-card mk-ai" delay={0.3}>
        <span className="mk-chip solid">AI RECOMMENDATION</span>
        <div className="mk-row"><span className="mk-sq" /><span className="mk-line w60" /><span className="mk-kcal mono">520 kcal</span></div>
        <div className="mk-row"><span className="mk-sq" /><span className="mk-line w45" /><span className="mk-kcal mono">410 kcal</span></div>
      </Fade>
    </Browser>
  )
}

/* ---------------- 02 — SmartClass ---------------- */

function SmartClassMock() {
  return (
    <Browser url="smartclass.school/reports">
      <div className="mk-split">
        <div className="mk-side">
          <span className="mk-side-item active" />
          <span className="mk-side-item" />
          <span className="mk-side-item" />
          <span className="mk-side-item" />
        </div>
        <div className="mk-main">
          <div className="mk-head">
            <span className="mk-title">Report Cards — Term 2</span>
            <span className="mk-btn">Generate</span>
          </div>
          <div className="mk-stats">
            <Fade className="mk-stat" delay={0.15}><b>28</b><span className="mono">Students</span></Fade>
            <Fade className="mk-stat" delay={0.25}><b>94%</b><span className="mono">Attendance</span></Fade>
            <Fade className="mk-stat" delay={0.35}><b>A−</b><span className="mono">Class Avg</span></Fade>
          </div>
          {[0, 1, 2].map((i) => (
            <Fade className="mk-student" key={i} delay={0.2 + i * 0.1}>
              <span className="mk-avatar" />
              <span className="mk-line w45" />
              <Bar w={["88%", "72%", "81%"][i]} delay={0.4 + i * 0.1} />
              <span className="mk-grade">{["A", "B+", "A−"][i]}</span>
            </Fade>
          ))}
        </div>
      </div>
    </Browser>
  )
}

/* ---------------- 03 — E-Commerce ---------------- */

function EcommerceMock() {
  return (
    <Browser url="shop.demo/cart">
      <div className="mk-split shop">
        <div className="mk-products">
          {[0, 1, 2].map((i) => (
            <Fade className="mk-product" key={i} delay={0.12 + i * 0.1}>
              <span className={`mk-thumb t${i}`} />
              <span className="mk-line w60" />
              <span className="mk-price mono">{["$48", "$120", "$36"][i]}</span>
            </Fade>
          ))}
        </div>
        <Fade className="mk-cart" delay={0.3}>
          <span className="mk-label mono">Cart — 3 items</span>
          {[0, 1].map((i) => (
            <div className="mk-cart-row" key={i}>
              <span className={`mk-thumb sm t${i}`} />
              <span className="mk-line w45" />
              <span className="mk-qty mono">− 1 +</span>
            </div>
          ))}
          <div className="mk-total mono"><span>Total</span><b>$204.00</b></div>
          <span className="mk-btn block">Checkout →</span>
        </Fade>
      </div>
    </Browser>
  )
}

/* ---------------- 04 — Firebase Auth ---------------- */

function FirebaseMock() {
  return (
    <div className="mock phone-wrap">
      <Fade className="mk-phone" delay={0.1}>
        <div className="mk-notch" />
        <div className="mk-screen">
          <span className="mk-shield" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className="mk-title" style={{ textAlign: "center" }}>Welcome back</span>
          <div className="mk-input"><span className="mk-line w60" /></div>
          <div className="mk-input"><span className="mk-line w45" /></div>
          <motion.span
            className="mk-btn block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          >
            Sign In
          </motion.span>
          <span className="mk-chip" style={{ margin: "0.5rem auto 0" }}>Firebase Authentication</span>
        </div>
      </Fade>
      <Fade className="mk-users" delay={0.35}>
        <span className="mk-label mono">Users — realtime db</span>
        {[0, 1, 2].map((i) => (
          <div className="mk-user-row" key={i}>
            <span className="mk-avatar" />
            <span className="mk-line w45" />
            <span className="mk-dotlive" />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default function ProjectMock({ kind }: { kind: string }) {
  switch (kind) {
    case "nutrifit": return <NutriFitMock />
    case "smartclass": return <SmartClassMock />
    case "ecommerce": return <EcommerceMock />
    case "firebase": return <FirebaseMock />
    default: return null
  }
}
