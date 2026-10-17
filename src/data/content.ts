/* ============================================================
   CONTENT — single source of truth.
   Projects, products, journal entries and future slots all
   follow the same structures so the portfolio can grow.
   ============================================================ */

// Priestly's real contact links. GitHub intentionally omitted for now.
export const LINKS = {
  email: "priestlylife@gmail.com",
  linkedin: "https://www.linkedin.com/in/priestly-akinmulero-1786661b6",
}

export interface Project {
  num: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  features: string[]
  year: string
  status: string
  primaryCta: string
  accent: string
  mock: "nutrifit" | "smartclass" | "ecommerce" | "firebase"
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "NutriFit",
    subtitle: "AI Nutrition & Fitness Platform",
    description:
      "An AI-powered web application that gives personalized food recommendations and calorie tracking — pairing a TensorFlow.js recommendation engine with a clean, responsive dashboard built around real daily habits.",
    tech: ["React.js", "Node.js", "MongoDB", "TensorFlow.js"],
    features: [
      "Personalized food recommendations",
      "Calorie & macro tracking",
      "Responsive progress dashboard",
      "AI-powered recommendations",
    ],
    year: "2025",
    status: "Case study in progress",
    primaryCta: "View Case Study",
    accent: "#3ecf8e",
    mock: "nutrifit",
  },
  {
    num: "02",
    title: "SmartClass",
    subtitle: "Smart School Management System",
    description:
      "A modern educational management platform for schools — digital learning workflows built on Google Classroom, with report card generation and grading systems that take paperwork off teachers' desks.",
    tech: ["Web Application", "Education Technology"],
    features: [
      "Google Classroom-based learning workflows",
      "Report card generation",
      "Grading & assessment systems",
      "School operations management",
    ],
    year: "2025",
    status: "Flagship education product",
    primaryCta: "View Project",
    accent: "#5b8def",
    mock: "smartclass",
  },
  {
    num: "03",
    title: "E-Commerce",
    subtitle: "Shopping Cart System",
    description:
      "A responsive e-commerce experience centered on a dynamic shopping cart — real-time state management, clean product browsing, and a checkout flow designed to feel effortless on any screen.",
    tech: ["Responsive UI", "State Management"],
    features: [
      "Dynamic shopping cart functionality",
      "Real-time state management",
      "Responsive product interface",
      "Streamlined user experience",
    ],
    year: "2024",
    status: "Completed",
    primaryCta: "View Project",
    accent: "#f0a35e",
    mock: "ecommerce",
  },
  {
    num: "04",
    title: "Firebase Auth",
    subtitle: "Android Application",
    description:
      "An Android application built around secure authentication — user registration, login, and a scalable user management system backed by Firebase Authentication and realtime database integration.",
    tech: ["Android", "Firebase"],
    features: [
      "Secure user registration & login",
      "Firebase Authentication",
      "Realtime database integration",
      "Scalable user management",
    ],
    year: "2024",
    status: "Completed",
    primaryCta: "View Project",
    accent: "#f7c948",
    mock: "firebase",
  },
]

export interface Product {
  num: string
  name: string
  category: string
  description: string
  status: "In Development" | "Coming Soon" | "Reserved"
  ctas: string[]
  placeholder?: boolean
}

export const PRODUCTS: Product[] = [
  {
    num: "01",
    name: "School Management Platform",
    category: "Education Technology",
    description:
      "Modern software for schools and educational organizations — learning workflows, grading, and report cards in one system.",
    status: "In Development",
    ctas: ["View Product", "Request Demo"],
  },
  {
    num: "02",
    name: "Future Product",
    category: "To Be Announced",
    description:
      "This slot is reserved for the next digital product — web applications, business tools, and digital systems currently being explored.",
    status: "Reserved",
    ctas: [],
    placeholder: true,
  },
  {
    num: "03",
    name: "Future Product",
    category: "To Be Announced",
    description:
      "The product line grows as new software ships. Each product gets its own page with demo, documentation, and support.",
    status: "Reserved",
    ctas: [],
    placeholder: true,
  },
]

export interface JournalEntry {
  num: string
  category: string
  title: string
  date: string
  status: string
}

export const JOURNAL: JournalEntry[] = [
  {
    num: "01",
    category: "Build Log",
    title: "Building My Next Digital Product",
    date: "Date to be confirmed",
    status: "First entry in progress",
  },
  {
    num: "02",
    category: "Process",
    title: "From Idea to Interface",
    date: "Date to be confirmed",
    status: "Planned",
  },
  {
    num: "03",
    category: "Learning",
    title: "What I'm Learning While Building",
    date: "Date to be confirmed",
    status: "Planned",
  },
  {
    num: "04",
    category: "Behind the Scenes",
    title: "Behind the Project",
    date: "Date to be confirmed",
    status: "Planned",
  },
]

export const APPROACH = [
  { word: "Problem", desc: "Understand what actually needs to be solved — before writing a single line of code." },
  { word: "Analyze", desc: "Research users, requirements, and constraints. Find the shape of the real problem." },
  { word: "Design", desc: "Turn the solution into a clear, usable digital experience." },
  { word: "Build", desc: "Develop the actual product — frontend, backend, and everything in between." },
  { word: "Deploy", desc: "Make it available to real users, in the real world." },
  { word: "Manage", desc: "Maintain and improve the system once it's live." },
  { word: "Improve", desc: "Use feedback to make it better. Then do it again." },
]

export const EXPERIENCE = [
  {
    year: "2026",
    role: "Social Media Manager",
    org: "Pakbo Restaurant",
    points: [
      "Managing the restaurant's online social media presence",
      "Designing promotional flyers, menus, advertisements, and marketing materials",
      "Creating engaging content and improving customer awareness",
      "Strengthening online visibility and reputation",
    ],
  },
  {
    year: "2024",
    role: "IT Intern & Assistant Social Media Manager",
    org: "Emima Educational Consult",
    points: [
      "Technical support and IT assistance for educational operations",
      "Assisting with social media management",
      "Designing flyers and educational content",
      "Supporting computer science teaching and student mentoring",
    ],
  },
]

export const EDUCATION = [
  {
    school: "Middlesex University Mauritius",
    degree: "Adv. Cert. in IT (Software Engineering)",
    year: "2025 – 2026",
  },
  {
    school: "NIIT",
    degree: "Diploma in Software Engineering",
    year: "2022 – 2024",
  },
  {
    school: "Christ the Redeemer's SS",
    degree: "Certificate of Higher Education",
    year: "2016 – 2022",
  },
]

export const SKILLS_TECH = [
  "React.js",
  "JavaScript",
  "Node.js / Express.js",
  "MongoDB",
  "Firebase",
  "TensorFlow.js",
  "HTML5 / CSS3",
  "Responsive Design",
  "Git / GitHub",
  "Figma / UI-UX Design",
  "Canva / Graphic Design",
]

export const SKILLS_PRO = [
  "Leadership",
  "Team Collaboration",
  "Communication",
  "Critical Thinking",
  "Problem Solving",
  "Time Management",
  "Social Media Management",
  "Content Creation",
  "Project Coordination",
  "Digital Marketing",
]

export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Design", href: "#design" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
]

/* ---------------- design showcase ---------------- */

import imgHero from "../assets/design/homelink-hero.webp"
import imgListing from "../assets/design/homelink-listing.webp"
import imgFeatured from "../assets/design/homelink-featured.webp"
import imgAbout from "../assets/design/homelink-about.webp"
import imgSignin from "../assets/design/homelink-signin.webp"
import imgSignup from "../assets/design/homelink-signup.webp"
import imgGallery from "../assets/design/homelink-gallery.webp"
import imgDetail from "../assets/design/homelink-detail.webp"
import imgFooter from "../assets/design/homelink-footer.webp"
import grHero from "../assets/design/goodroot-hero.webp"
import grFeatures from "../assets/design/goodroot-features.webp"
import grShop from "../assets/design/goodroot-shop.webp"
import grProducts from "../assets/design/goodroot-products.webp"
import grSubscription from "../assets/design/goodroot-subscription.webp"
import grTestimonial from "../assets/design/goodroot-testimonial.webp"
import eeLanding from "../assets/design/emimaedu-landing.webp"
import eeLogin from "../assets/design/emimaedu-login.webp"
import eeAdminDash from "../assets/design/emimaedu-admin-dashboard.webp"
import eeAdminResults from "../assets/design/emimaedu-admin-results.webp"
import eeAdminStudents from "../assets/design/emimaedu-admin-students.webp"
import eeAdminFees from "../assets/design/emimaedu-admin-fees.webp"
import eeTeacher from "../assets/design/emimaedu-teacher.webp"
import eeParentHome from "../assets/design/emimaedu-parent-home.webp"
import eeParentResults from "../assets/design/emimaedu-parent-results.webp"
import eeParentFees from "../assets/design/emimaedu-parent-fees.webp"
import eeParentAttendance from "../assets/design/emimaedu-parent-attendance.webp"
import eeParentNews from "../assets/design/emimaedu-parent-news.webp"
import eeReport from "../assets/design/emimaedu-report.webp"

export interface DesignShot {
  src: string
  alt: string
  caption: string
  focus?: string
  /** contain = show the whole screenshot on a tinted canvas (e.g. phone shots) */
  fit?: "cover" | "contain"
}

export interface DesignProject {
  slug: string
  title: string
  subtitle: string
  year: string
  teaser: string
  accent: string
  tools: string[]
  overview: string
  objective: string
  approach: string[]
  palette: { hex: string; name: string }[]
  typography: { display: string; body: string; note: string }
  decisions: { title: string; detail: string }[]
  outro: string
  shots: DesignShot[]
}

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    slug: "homelink-nigeria",
    title: "HomeLink Nigeria",
    subtitle: "Real Estate Platform — UI/UX Design",
    year: "2025",
    teaser:
      "A rental platform designed to connect renters directly with landlords across Nigeria — browsing, filters, listing detail pages, and account flows designed end to end.",
    accent: "#2e7d5b",
    tools: ["Figma", "UI/UX Design", "Design System", "Prototyping"],
    overview:
      "HomeLink Nigeria is a rental marketplace concept built around one idea: finding an apartment in Nigeria usually means dealing with middlemen, stacked fees, and wasted inspections. The platform lists apartments across Nigerian cities and — for a flat access fee — connects renters directly with the landlord's contact.",
    objective:
      "Design a trustworthy, calm, and efficient apartment-hunting experience: make listings scannable, filters effortless, and the moment of payment (unlocking a landlord's contact) feel safe rather than risky.",
    approach: [
      "Mapped the renter's journey from landing → browsing → shortlisting → unlocking contact, and designed each step to remove hesitation.",
      "Built a card-based listing system with photography-first tiles, availability badges, and price anchoring so scanning a page of apartments takes seconds.",
      "Designed the detail page as the trust engine: large galleries, key facts (beds, baths, size, parking), and a clear, honest presentation of the access fee before any payment.",
      "Kept authentication minimal — sign in / create account in one focused card, no distractions, so the barrier to an account feels like seconds, not paperwork.",
    ],
    palette: [
      { hex: "#1b5e43", name: "Forest — primary brand & actions" },
      { hex: "#f5f2ea", name: "Warm Ivory — page background" },
      { hex: "#111418", name: "Ink — footer & high-contrast text" },
      { hex: "#c9a227", name: "Brass — ratings & small highlights" },
    ],
    typography: {
      display: "High-contrast serif",
      body: "Modern grotesque sans",
      note: "Editorial serif headlines give the brand a premium, established feel; a neutral sans keeps listings, filters, and forms legible and utilitarian.",
    },
    decisions: [
      {
        title: "Photography leads",
        detail: "Apartments sell themselves — so tiles lead with large photos, and metadata (beds, price, location) is set quietly underneath.",
      },
      {
        title: "The fee, upfront",
        detail: "The ₦2,000 contact access fee is shown on the hero and detail page before checkout. Stating the price early converts better than surprising users later.",
      },
      {
        title: "Search as a sentence",
        detail: "Location, type, and price filters read like a sentence and collapse into chips — powerful filtering without an intimidating panel.",
      },
      {
        title: "One accent, used sparingly",
        detail: "A single deep green carries every primary action and availability state, so the interface always tells you where to look next.",
      },
    ],
    outro: "Final result — a calm, trustworthy way to find a home.",
    shots: [
      { src: imgHero, alt: "HomeLink Nigeria homepage hero with apartment photography and search bar", caption: "Homepage — hero & search", focus: "center" },
      { src: imgDetail, alt: "Apartment detail page with gallery, facts, and unlock landlord contact panel", caption: "Listing detail — unlock contact", focus: "center" },
      { src: imgListing, alt: "Apartment browsing page with filters and listing cards", caption: "Browse — filters & cards", focus: "center" },
      { src: imgFeatured, alt: "Featured apartments carousel section", caption: "Featured apartments", focus: "center" },
      { src: imgAbout, alt: "About page with brand story and platform statistics", caption: "About — brand story", focus: "center" },
      { src: imgSignin, alt: "Sign in screen with email and password fields", caption: "Auth — sign in", focus: "center" },
      { src: imgSignup, alt: "Create account screen with name, email, and password fields", caption: "Auth — create account", focus: "center" },
      { src: imgGallery, alt: "Apartment photo gallery view", caption: "Listing — photo gallery", focus: "center" },
      { src: imgFooter, alt: "Call to action banner and footer with platform and contact links", caption: "CTA & footer", focus: "center" },
    ],
  },
  {
    slug: "goodroot",
    title: "goodroot",
    subtitle: "Grocery E-Commerce — UI/UX & Visual Design",
    year: "2025",
    teaser:
      "A warm, editorial grocery e-commerce design for fresh local produce — photo-led hero, seasonal shop grid, weekly subscription boxes, and a grower story that makes fresh food feel close.",
    accent: "#35804e",
    tools: ["Figma", "UI/UX Design", "Visual Design", "Design System"],
    overview:
      "goodroot is a grocery e-commerce design built around fresh, local produce. It pairs a premium farmers-market feel with the convenience of modern online shopping — a photo-led hero, a seasonal product grid with search and category filters, weekly subscription boxes, and a grower story that keeps the brand grounded in real food from real farms.",
    objective:
      "Make fresh food feel trustworthy, local, convenient, and desirable — a store that feels like a Saturday farmers market but shops like a modern e-commerce site, on desktop and mobile alike.",
    approach: [
      "Led every section with photography — produce is the product, so the interface steps back and lets harvest imagery carry the page.",
      "Designed the shop around the season: 'What's good right now' categories, badges like Seasonal, Bestseller and Farm pick, and a search bar that reads like asking the market stall.",
      "Built the subscription offer as its own dark-green moment — a clear choice between two weekly boxes, framed as the easy way to eat well.",
      "Kept commerce micro-interactions tactile and quiet: favorites, quantity steppers, and a live cart count that never shout over the photography.",
    ],
    palette: [
      { hex: "#173b2b", name: "Deep Green — brand, headers & footer" },
      { hex: "#f8f6ef", name: "Soft Cream — page background" },
      { hex: "#d9ec98", name: "Lime — accents, chips & highlights" },
      { hex: "#ef6b42", name: "Warm Orange — emphasis words & badges" },
    ],
    typography: {
      display: "Elegant high-contrast serif",
      body: "Clean modern sans",
      note: "A high-contrast serif gives headlines the warmth and craft of a farm-shop chalkboard; the sans stays invisible and efficient for prices, filters, and product metadata.",
    },
    decisions: [
      {
        title: "Photography does the selling",
        detail: "The hero, category cards, and product grid are all photo-first. Copy is short, prices are quiet — the produce itself is the persuasion.",
      },
      {
        title: "A market, not a warehouse",
        detail: "Products are framed by season and freshness ('What's good right now', 'Harvested today') rather than by SKU — it feels curated, not stocked.",
      },
      {
        title: "Subscription, simplified",
        detail: "The weekly box is presented as two choices — small or family — with pause/skip/cancel language up front, so committing feels safe.",
      },
      {
        title: "One warm accent",
        detail: "Warm orange is reserved for single emphasis words, star ratings, and small badges — a wink of energy inside the calm green-and-cream system.",
      },
    ],
    outro: "Final result — fresh food that feels close, convenient, and worth craving.",
    shots: [
      { src: grHero, alt: "goodroot homepage hero with serif headline, produce photography, and dual calls to action", caption: "Homepage — photo-led hero", focus: "center" },
      { src: grShop, alt: "Seasonal shop section with category cards and product grid", caption: "Shop — what's good right now", focus: "center" },
      { src: grSubscription, alt: "Weekly subscription box section with two box options on a deep green background", caption: "Subscription — weekly boxes", focus: "center" },
      { src: grProducts, alt: "Product cards with pricing, favorites, and quantity controls", caption: "Product cards — cart & favorites", focus: "center" },
      { src: grFeatures, alt: "Feature strip highlighting local sourcing, freshness, and delivery", caption: "Trust strip — grown nearby", focus: "center" },
      { src: grTestimonial, alt: "Customer testimonial panel and footer with newsletter signup", caption: "Testimonial & footer", focus: "center" },
    ],
  },
  {
    slug: "emimaedu",
    title: "EmimaEdu",
    subtitle: "School Management SaaS — UI/UX Design",
    year: "2025",
    teaser:
      "A multi-role school platform — admin, teacher, and parent portals — covering results, fees, attendance, and announcements, with a mobile-first parent app that opens from a link.",
    accent: "#6c66e8",
    tools: ["Figma", "UI/UX Design", "Product Design", "Design System", "Prototyping"],
    overview:
      "EmimaEdu is a school management SaaS that connects schools with parents: results, fees, attendance, and announcements in one place. It ships as an installable web app with three tailored portals — a school admin dashboard, a teacher portal for score entry and attendance, and a mobile-first parent app — each designed around its user's actual day.",
    objective:
      "Give parents real transparency into their child's education while making school administration effortless — one platform where admins enrol students and track fees, teachers enter scores in minutes, and parents follow everything from their phone, no app store needed.",
    approach: [
      "Designed three role-based portals from one design system — the same cards, tables, and color language, tuned to what each role does most.",
      "Made the parent experience mobile-first: a bottom-tab app with glanceable cards for average, attendance ring, and fee balance the moment it opens.",
      "Automated the academic math — teachers enter CA and exam scores, and totals, grades, positions, and class averages compute themselves.",
      "Designed onboarding around how schools actually work: bulk CSV upload for students, invite codes for parents, and a guided setup checklist for admins.",
    ],
    palette: [
      { hex: "#4b41dc", name: "Indigo — primary brand & actions" },
      { hex: "#f5f6fb", name: "Soft Lavender — app background" },
      { hex: "#16a34a", name: "Green — present, paid & success" },
      { hex: "#d97706", name: "Amber — balances due & warnings" },
      { hex: "#dc2626", name: "Red — absences & destructive actions" },
    ],
    typography: {
      display: "Confident geometric sans",
      body: "Clean modern sans",
      note: "A single sans family carries the whole system — friendly and rounded for parents, dense and tabular for admins and teachers. Weight, not decoration, builds the hierarchy.",
    },
    decisions: [
      {
        title: "Three portals, one system",
        detail: "Admin, teacher, and parent views share one visual language but surface completely different priorities — control for admins, speed for teachers, reassurance for parents.",
      },
      {
        title: "Automation over data entry",
        detail: "Teachers type two numbers per student; the system computes totals, grades, positions, and report cards. The interface constantly previews the computed result as you type.",
      },
      {
        title: "The report card is the product",
        detail: "Every feature funnels into a beautifully typeset term report parents can trust — grading key, class average, position, and teacher's remark included.",
      },
      {
        title: "Status you can read at a glance",
        detail: "Color is semantic everywhere: green for present and paid, amber for balances due, red for absences — parents understand the dashboard before reading a word.",
      },
    ],
    outro: "Final result — one platform keeping schools and parents perfectly in sync.",
    shots: [
      { src: eeLanding, alt: "EmimaEdu landing page with parent app preview on a phone mockup", caption: "Landing page — product story", focus: "center" },
      { src: eeParentHome, alt: "Parent mobile dashboard showing average, attendance ring, and fee balance", caption: "Parent app — dashboard", fit: "contain" },
      { src: eeAdminDash, alt: "School admin dashboard with stat cards and setup checklist", caption: "Admin — dashboard & setup", focus: "top" },
      { src: eeParentResults, alt: "Parent mobile results view with subject grades and positions", caption: "Parent app — term results", fit: "contain" },
      { src: eeAdminResults, alt: "Admin results table with computed averages and student positions", caption: "Admin — computed results", focus: "top" },
      { src: eeParentFees, alt: "Parent mobile fees view with balance, breakdown, and payment history", caption: "Parent app — fees & payments", fit: "contain" },
      { src: eeAdminFees, alt: "Admin fee structure editor with student balances and record payment actions", caption: "Admin — fee structures", focus: "top" },
      { src: eeParentAttendance, alt: "Parent mobile attendance view with present ring and daily records", caption: "Parent app — attendance", fit: "contain" },
      { src: eeTeacher, alt: "Teacher score entry screen with CA and exam columns and computed totals", caption: "Teacher — score entry", focus: "top" },
      { src: eeParentNews, alt: "Parent mobile announcements feed with event dates", caption: "Parent app — announcements", fit: "contain" },
      { src: eeAdminStudents, alt: "Admin student list with admission numbers, classes, and invite code generation", caption: "Admin — students & invites", focus: "top" },
      { src: eeReport, alt: "Generated term report card with subjects, grades, position, and teacher's remark", caption: "The output — report card", fit: "contain" },
      { src: eeLogin, alt: "Login screen with role-based demo accounts", caption: "Auth — welcome back", focus: "center" },
    ],
  },
]
