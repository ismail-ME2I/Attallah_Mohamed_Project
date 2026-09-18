# DELIVERABLE 03 — Phase 1 Sitemap & Content-State Map
**Status:** Completed
**Depends on:** Deliverable 01 (Project Understanding), Deliverable 02 (Digital Presence Snapshot) — both approved
**Purpose:** Implementation-ready information architecture for the Phase 1 WOW Demo, for handoff to design and VS Code development.

---

## 1. Recommended Phase 1 Sitemap

```
HOME
│
├── ABOUT / MOHAMMED
│
├── CONSULTING
│     ├── Consulting Overview
│     ├── Expertise Areas
│     ├── Services (flexible / structured for future confirmation)
│     └── Book a Consultation (contact CTA)
│
├── EASY AUTOMATION ACADEMY
│     ├── Academy Overview
│     ├── Courses (catalog — 1 confirmed course + scalable slots)
│     │     └── COURSE DETAIL (template)
│     │           ├── Course Overview
│     │           ├── What You Will Learn
│     │           ├── Practical Content
│     │           ├── Modules / Curriculum
│     │           ├── Target Audience
│     │           ├── Instructor (→ links back to About)
│     │           ├── Course Preview (video)
│     │           ├── CTA
│     │           └── External Enrollment (→ Payhip/Udemy/etc.)
│     ├── Learning Philosophy
│     ├── Resources (placeholder for Phase 1)
│     └── About the Academy
│
├── INSIGHTS / RESOURCES (minimal placeholder in Phase 1)
│
└── CONTACT
```

"Easy Automation Academy" is treated throughout as the **canonical education brand name** for the site. "EasyAutomation with Attallah" (YouTube) and "EasyAutomation Tips" (handle) remain social/channel identities and are referenced only as links out, never as the on-site brand name.

---

## 2. Page & Section Purpose

| Page/Section | Purpose |
|---|---|
| **Home** | Establish "Mohammed = Automation Expert" in the first few seconds, then split the visitor toward Consulting or the Academy. Carries the authority/credibility proof point (real substation project). |
| **About/Mohammed** | Single authoritative bio serving both pillars — career depth, certifications, the human/professional story. Feeds "Instructor" blocks on course pages and "Who you'd be working with" on Consulting. |
| **Consulting Overview** | States the areas Mohammed's experience applies to (SAS, IEC 61850, industrial/data-center automation) without asserting a specific commercial offer that isn't yet confirmed. |
| **Expertise Areas** | Structured, scannable list of technical domains (from CV: SAS, IEC 61850, RTU/SCADA, Data Center EPMS, project/technical leadership) — credibility signal, not a service menu. |
| **Services** | Deliberately built as an **empty-state-ready module** — cards/slots for services once Mohammed confirms what he's actually offering and under what terms. |
| **Book a Consultation** | Soft, low-commitment CTA ("Start a conversation") rather than a hard booking system, until availability/terms are confirmed. |
| **Academy Overview** | Positions Easy Automation Academy as a real educational brand, distinct from a single-course landing page. |
| **Courses (catalog)** | Displays the one confirmed course as a full card, with visually intentional "more courses coming" slots so the catalog doesn't look empty or abandoned. |
| **Course Detail** | Reusable template built from the one real course we have (SAS/IEC 61850) — becomes the pattern for every future course without rebuilding the page type. |
| **Learning Philosophy** | Short, values-driven section (practical-over-theoretical teaching approach) — supportable from the existing course's own "Why I Created This Course" language, reworded. |
| **Resources** | Placeholder section in Phase 1 — signals a content plan exists without pretending a resource library already does. |
| **About the Academy** | Short brand statement distinguishing the Academy (education) from Mohammed's Consulting practice, while making clear he's the founder/instructor behind both. |
| **Insights/Resources (site-level)** | Lowest-priority page in Phase 1 — a placeholder that signals a future blog/insights section exists, per the brief's own lower-priority list. |
| **Contact** | Single, simple contact path for anything not covered by the Consultation CTA — general inquiries. |

---

## 3. Priority Levels (Phase 1)

| Priority | Pages/Sections |
|---|---|
| **P0 — Critical** | Home, About/Mohammed, Consulting Overview, Academy Overview, Courses catalog, Course Detail template |
| **P1 — Important** | Expertise Areas, Book a Consultation, Learning Philosophy, About the Academy, Contact |
| **P2 — Light-touch / placeholder only** | Services (structure only, no confirmed content), Resources (Academy), Insights/Resources (site-level) |

This mirrors the brief's Section 27 priorities: brand positioning, IA, homepage, consulting and academy experience, and course discovery come first; SEO, full catalog, and content depth come later.

---

## 4. Key User Journeys

### Journey A — Visitor → Mohammed → Consulting
```
Home (hero: "Automation Expert") 
   → About/Mohammed (credibility: 15+ yrs, Schneider Electric, PMP, real projects)
   → Consulting Overview (areas of expertise, framed honestly as directions, not a fixed service catalog)
   → Book a Consultation (low-commitment CTA: "Discuss Your Technical Challenge")
```
Design intent: this path should feel authoritative and low-pressure — it invites a conversation, it doesn't oversell a service that isn't confirmed yet.

### Journey B — Visitor → Easy Automation Academy → Courses → Course Detail → External Platform
```
Home (Academy entry point)
   → Academy Overview (branded education hub, not a bare course list)
   → Courses catalog (1 real course, shown as a flagship, plus "more coming")
   → Course Detail (full real content: curriculum, practical part, instructor, preview video)
   → External Enrollment (clear, intentional hand-off to Payhip — framed as "secure enrollment," not an abrupt redirect)
```
Design intent: the transition to Payhip should feel like a deliberate step in a designed flow, not a jarring exit from a premium site to a plain storefront.

### Journey C — Visitor → Mohammed's Expertise/Authority → Relevant CTA
```
Home (authority proof: Saudi National Grid substation project, certifications, 15+ yrs)
   → Either:
        → Consulting (if the visitor's interest is technical/business)
        → Academy (if the visitor's interest is learning)
```
Design intent: the authority section on the homepage is the shared trust-builder that feeds both pillars — it should not be pillar-specific.

---

## 5. Content-State Map

### CONFIRMED — directly supported by current resources
- Mohammed's career history, tenure, certifications, education (CV)
- Real project proof point: Saudi National Grid substation energization, with specific scope (Payhip page)
- The one live course: full curriculum, format, pricing, language, target audience (Payhip page, cross-checked against screenshot)
- Technical domain expertise: SAS, IEC 61850, IEC 60870-5-104, RTU, Data Center EPMS (CV + Payhip)
- Existing social/channel links (YouTube, Facebook, LinkedIn) as cross-references

### PLACEHOLDER — safe temporary content for the demo
- "More courses coming" catalog slots in the Academy
- Services module structure on the Consulting page (empty cards or a "Let's define this together" framing — no invented services)
- Resources section (Academy) and Insights/Resources (site-level) — shown as "coming soon" or minimal stub, not populated
- Generic-but-honest microcopy anywhere a specific claim isn't yet confirmed (e.g., "Selected experience" instead of a testimonial carousel)

### NEEDS INPUT — must come from Mohammed before Phase 3
- Whether/how he's currently available for independent consulting, and under what terms
- Specific consulting services, scope, and pricing (if any)
- Testimonials, client names, case studies, quantified results
- Additional courses beyond the one confirmed
- Logo, brand color preferences, additional photography/video
- Preferred contact/booking mechanism (form, Calendly-style tool, WhatsApp, email)
- Confirmed current location/base for any location-specific copy

---

## 6. Scalability Notes

- **Courses catalog and Course Detail are built as a template + data pattern**, not a one-off page — adding a second or tenth course means adding a record, not redesigning a page.
- **Services module on Consulting is structured the same way** — it can go from "coming soon" to a full grid of confirmed services without changing the page's layout or IA.
- **Resources/Insights are stubbed intentionally** so they can grow into a real content hub later without needing new top-level navigation.
- **About/Mohammed is treated as a single source of truth** for bio content, reused across Consulting and Academy — updating it once updates both contexts.

---

## 7. Missing Information To Request From Mohammed (Phase 2 candidates)

- Confirmed consulting availability, offer, and pricing
- Testimonials and case studies (consulting and academy)
- Full course catalog beyond the current one
- Brand assets: logo, colors, additional photos/video
- Preferred contact/booking tool
- Confirmation of current location/base for site copy
- Any preference on site language strategy (see Section 8 below — this needs a decision, not just content)

---

## 8. Open Strategy Decisions (flagging, not deciding unilaterally)

1. **Site language strategy:** the course itself is taught in Arabic, but all existing on-site material (Payhip, CV, LinkedIn) is written in English. My working assumption for Phase 1 is an **English-primary site**, consistent with current practice and a more natural fit for the international Consulting audience — with the Academy course pages noting "taught in Arabic" as a factual detail, exactly as Payhip already does. Flagging this for confirmation rather than deciding it silently.
2. **Consultation CTA mechanism:** for Phase 1 I'd default to a simple contact form ("Start a conversation") rather than embedding the real WhatsApp/Instapay flow currently used for course payments — that flow is a course-purchase workaround, not a consulting-inquiry mechanism, and conflating the two would undercut the premium positioning. Open to correction if Ismail/ChatGPT prefer otherwise.

---

## 9. Recommendation for Deliverable 04

**Deliverable 04 — Homepage Positioning & Copy Draft**, built directly on this IA: hero framing, the Mohammed positioning statement, the authority/proof section copy, and the Consulting/Academy split — all using only CONFIRMED facts, with PLACEHOLDER sections written as honest, premium-feeling stand-ins rather than invented claims. This is the natural next step before any visual design work begins, since design should be built around real copy, not lorem ipsum.
