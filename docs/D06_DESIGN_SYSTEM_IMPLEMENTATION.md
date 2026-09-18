# DELIVERABLE 06 — DESIGN SYSTEM & HOMEPAGE IMPLEMENTATION SPECIFICATION
**Status:** Completed
**Depends on (authoritative, non-contradicted):** D01, D02, D03, D04, D04 Revision 1, D05 — all approved
**Scope:** Implementation specification only. No code. No new strategic, positioning, or content decisions.

Where something is not fully defined by the approved deliverables, it is marked **[DECISION REQUIRED]**. Where it depends on an asset we don't yet have, it's marked **[NEEDS INPUT]**. Neither is resolved silently.

---

## 1. Source of Truth

This document does not override or reinterpret D01–D05. Every visual/structural decision below traces back to one of them; anything that required a new judgment call beyond what they specify is explicitly flagged rather than quietly decided.

---

## 2. Purpose of D06

D05 defined the look and feel. D06 defines the exact structure, values, and rules needed to build it — the bridge a developer needs to go from "editorial, precision-engineering, one accent color, one dark module" to an actual, consistent implementation.

---

## 3. Approved Design North Star (Restated)

**The Engineering Journal** — light-based primary interface, single dark Real-World Project Proof module, graphite/ink typography, one copper/amber accent, restrained technical linework. Everything in this spec exists to protect that direction against drifting into SaaS, AI-startup, cybersecurity-dashboard, sci-fi, generic-portfolio, generic-corporate, or course-marketplace territory.

---

## 4. Implementation Principles

1. **Typography before decoration** — hierarchy comes from type first; graphics are a last resort.
2. **Real imagery before decorative graphics** — every image slot defaults to real project/course material.
3. **Whitespace before cards** — reach for spacing and typographic separation before a bordered container.
4. **Hierarchy before animation** — a section must read correctly with motion disabled.
5. **Proof before marketing claims** — every authority claim is a specific, sourced fact, never an unsupported adjective.
6. **Consistency before novelty** — reuse the same button/tag/card patterns everywhere they apply.
7. **Restrained technical references** — engineering motifs appear at most once or twice per page, low-opacity, never dominant.
8. **Accessibility before visual effects** — no animation or interaction ships if it fails a basic accessibility check.
9. **One accent, used sparingly** — reserved for genuinely important moments, not spread across every element.
10. **Honesty is a design requirement, not just a copy requirement** — unconfirmed content stays visibly marked in the UI itself.
11. **Mohammed remains the master brand visually at all times** — Academy's sub-brand identity never outweighs it.
12. **Every repeatable component scales without a redesign** — credentials, tags, courses, and projects are built as data-driven lists from day one.

---

## 5. Design Tokens

*All HEX values below are implementation recommendations derived from D05's color philosophy — they are not confirmed Mohammed brand colors and can be swapped without changing the token structure.*

### A. Color Tokens

| Token | Preliminary value | Role |
|---|---|---|
| `background-primary` | `#F6F7F8` | Base site background (light, cool-neutral — not warm cream) |
| `background-secondary` | `#EDEFF1` | Alternating-section background |
| `background-dark` | `#14171A` | Reserved exclusively for the Project Proof module |
| `surface-card` | `#FFFFFF` | Course card surface |
| `text-primary` | `#1B1F23` | Headlines, primary copy (deep graphite-ink, not pure black) |
| `text-secondary` | `#4A4F55` | Supporting copy, the Consulting qualifier |
| `text-muted` | `#7A7F85` | Meta/label text |
| `text-inverse` | `#F6F7F8` | Text on `background-dark` |
| `text-inverse-muted` | `#B8BCC0` | Secondary text on `background-dark` |
| `accent-primary` | `#AA5E2B` | The single accent — copper/amber, grounded in the domain (control-panel indicators, copper conductors) |
| `accent-primary-hover` | `#915125` | Hover state for accent-filled elements |
| `border-subtle` | `#DFE2E5` | Hairline dividers on light surfaces |
| `border-subtle-dark` | `rgba(255,255,255,0.12)` | Hairline dividers on `background-dark` |
| `focus-ring` | `#B4642E` (with visible offset) | Keyboard focus indicator |

**Note (approved accessibility adjustment, Sprint 01):** `accent-primary` was adjusted from `#B4642E` to `#AA5E2B` (hue and saturation preserved, lightness reduced) to satisfy WCAG AA 4.5:1 text contrast against `#F6F7F8`, while preserving the intended copper/amber visual identity. `accent-primary-hover` was shifted from `#9C5527` to `#915125` by the same proportional lightness delta to preserve the original hover contrast step. `focus-ring` was intentionally left at `#B4642E`, as it is a non-text UI indicator already meeting its own 3:1 contrast requirement.

**Rule:** no second accent color is introduced anywhere, including in illustrations or icons.

### B. Typography Tokens
See Section 6 for the full scale. Font roles: `font-primary` (display/heading/body), `font-data` (numeric/technical labels only).

### C. Spacing Tokens
`space-1` = 8px · `space-2` = 16px · `space-3` = 24px · `space-4` = 32px · `space-5` = 48px · `space-6` = 64px · `space-7` = 96px · `space-8` = 128px

### D. Border Tokens
`border-width-hairline` = 1px · `border-color-default` = `border-subtle` · `border-color-inverse` = `border-subtle-dark`

### E. Radius Tokens
`radius-sm` = 2px (rarely used) · `radius-default` = 4px (buttons, tags, course cards) · **no larger radius token exists** — content blocks and section containers stay unrounded.

### F. Shadow Tokens
`shadow-none` (default everywhere) · `shadow-subtle` = a single very low-opacity shadow (`0 2px 8px rgba(0,0,0,0.06)`), reserved only for course-card hover state — no other shadow token exists.

### G. Surface Tokens
`surface-light-primary`, `surface-light-secondary`, `surface-dark` — exactly three, per D05's surface-hierarchy rule.

### H. Container Tokens
`container-max` = 1280px · `container-reading` = 720px · `container-margin-desktop` = 64–80px · `container-margin-tablet` = 40px · `container-margin-mobile` = 20px

### I. Grid Tokens
`grid-desktop` = 12 columns, 24px gutter · `grid-tablet` = 8 columns, 20px gutter · `grid-mobile` = 4 columns, 16px gutter

### J. Motion Tokens
`duration-fast` = 150–200ms · `duration-standard` = 400–700ms · `duration-expressive` = 600–900ms (Project Proof only) · `easing-standard` = ease-out (expo-out character) · `easing-hover` = ease-in-out

---

## 6. Typography System

**Primary family:** a contemporary grotesque in the character of Suisse International / Neue Haas Grotesk. Fallback stack: `"Suisse Int'l", "Neue Haas Grotesk", "Inter", system-ui, sans-serif`.
**Data family:** a tabular/monospace face reserved strictly for real numeric content. Fallback stack: `"IBM Plex Mono", "SF Mono", monospace`.

| Role | Desktop size/line-height | Mobile size/line-height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| Display XL | 64px/72px | 36px/44px | 600 | -1% | Hero headline only |
| Display L | 48px/56px | 32px/40px | 600 | -1% | Project Proof caption heading (if used) |
| H1 | 40px/48px | 28px/36px | 600 | -0.5% | Page-level headings (About, Consulting, Academy) |
| H2 | 28px/36px | 22px/30px | 600 | 0 | Homepage section headings |
| H3 | 20px/28px | 18px/26px | 500 | 0 | Card titles, minor headings |
| Body Large | 18px/28px | 17px/27px | 400 | 0 | Supporting statements, Core Positioning |
| Body | 16px/26px | 16px/25px | 400 | 0 | Standard paragraph copy |
| Body Small | 14px/22px | 14px/21px | 400 | 0 | Secondary/meta copy |
| Label | 13px/18px | 13px/18px | 500 | 0 (sentence case) | Nav items, tags, metadata |
| Data/Numeric | 20–40px context-dependent | scaled down proportionally | 600 | 0 (tabular figures) | Real stats only — years, hours, kV, followers |
| Button | 15–16px | 15px | 500 | 0 | All button labels |
| Navigation | 15px | 15px (in overlay: 20px) | 400–500 | 0 | Nav links |

**Explicitly avoided:** tracked-out all-caps labels anywhere; decorative use of the data/mono face on non-numeric content; a giant standalone gradient number for stats (values always pair with a label).

This preserves "The Engineering Journal" character by keeping one disciplined family doing all the work, with the data face appearing only where real precision is being communicated — never as texture.

---

## 7. Spacing System

Using `space-1`–`space-8` (8/16/24/32/48/64/96/128):

- **Component spacing** (icon-to-text, tag-to-tag): `space-1`–`space-2`
- **Paragraph spacing:** `space-2`–`space-3`
- **Card internal padding:** `space-3`–`space-4`
- **Card grid gutter:** `space-3`–`space-4`
- **Section internal spacing** (heading to body content): `space-4`–`space-5`
- **Section-to-section spacing:** `space-7` desktop, `space-6` mobile
- **Hero vertical padding:** `space-8` desktop, `space-6` mobile
- **Mobile adjustment rule:** every top-level section spacing drops by roughly one step from its desktop value to keep mobile scroll length reasonable without breaking rhythm.

No arbitrary spacing values outside this scale are used anywhere in the homepage.

---

## 8. Container & Grid System

- **Max page width:** `1280px` (formalized from D05's 1200–1280px range — chosen at the higher end for slightly more breathing room, consistent with the "generous whitespace" principle).
- **Reading width:** `720px` (top of D05's 680–720px range, for comfortable line length with the chosen type).
- **Desktop grid:** 12 columns, 24px gutter, 64–80px outer margin.
- **Tablet grid:** 8 columns, 20px gutter, 40px outer margin.
- **Mobile grid:** 4 columns, 16px gutter, 20px outer margin.
- **Section padding:** vertical per Section 7; horizontal equals the grid margin for the current breakpoint.
- **Large-desktop behavior (≥1440px):** content stays capped at `container-max`; extra viewport width becomes additional outer margin — content is never stretched wider.
- **Full-bleed exceptions:** the Hero's image panel and the entire Project Proof module are permitted to break out to the viewport edge; every other section respects `container-max`.

---

## 9. Button System

| | Primary | Secondary/Ghost | Text Link |
|---|---|---|---|
| Hierarchy | Highest-emphasis action | Lower-emphasis alternative action | In-line/inline navigation |
| Shape | Solid fill | Outlined, transparent fill | No chrome |
| Radius | `radius-default` (4px) | `radius-default` (4px) | n/a |
| Height | 48px desktop / 44px mobile | Same as Primary | n/a |
| Horizontal padding | `space-3`–`space-4` | Same as Primary | n/a |
| Typography | Button token, `accent-primary` fill / `text-inverse` label | Button token, `text-primary` label, `border-subtle`-strength border | `text-primary` or `accent-primary` depending on context |
| Icon usage | None by default | None by default | Trailing external-link icon **only** when the link leaves the site (e.g., course enrollment) |
| Hover | Fill → `accent-primary-hover`, no shape change | Background tint → `background-secondary` | Underline solidifies |
| Focus | Visible 2px offset ring in `focus-ring` | Same | Same |
| Disabled (if needed) | ~40% opacity, no interaction | Same treatment | n/a |
| Mobile | Full-width in stacked CTA groups | Full-width, stacked below Primary | Unchanged |

Only these three patterns exist anywhere on the site — no fourth button style is introduced for any section.

---

## 10. Navigation Specification

- **Logo/wordmark:** No confirmed logo exists. **[NEEDS INPUT / DECISION REQUIRED]** — Phase 1 uses a temporary text wordmark: "Mohammed Attallah" set in Navigation-token typography at a slightly heavier weight, left-aligned, acting as the home link. This is explicitly a placeholder, not a designed logo mark.
- **Nav items (desktop):** Home (via wordmark) · About · Consulting · Easy Automation Academy · Contact — evenly spaced with `space-3`–`space-4` gaps.
- **Insights/Resources:** deferred from primary nav per D05; lives only in the footer for Phase 1.
- **CTA:** one right-aligned Secondary/ghost button ("Start a Conversation"), separated from the nav links by a larger gap.
- **Hero (transparent) state:** because the Hero's text-side background is light (`background-primary`), nav text stays `text-primary` at all times — there is no dark-background nav state to design for on this composition. The nav bar itself has no fill at the top of the page.
- **Scrolled state:** past an ~80px scroll threshold, the nav gains a `background-primary` fill and a `border-subtle` bottom hairline; transition is `duration-fast`, `easing-hover`.
- **Mobile menu:** hamburger icon opens a full-height `background-primary` overlay with large (Navigation-token at ~20px) stacked links; the "Start a Conversation" CTA is pinned at the bottom of the overlay.
- **Mobile CTA hierarchy:** a single CTA in the overlay — no duplicate Academy CTA, since Academy is reachable as a normal nav link.

---

## 11. Homepage Component Architecture

```
Homepage
├── Navigation        (global, reusable)
├── Hero              (homepage-specific composition)
├── CorePositioning   (homepage-specific)
├── Authority         (uses reusable FactStrip component)
├── Consulting        (uses reusable ExpertiseTag component)
├── Academy           (uses reusable CourseCard component)
├── ProjectProof      (homepage-specific "moment" module)
├── FinalCTA          (reusable simple CTA block)
└── Footer            (global, reusable)
```

| Component | Purpose | Reusable? | Conceptual data | Responsive | Priority |
|---|---|---|---|---|---|
| Navigation | Site-wide orientation + primary CTA | Global | nav items list, CTA label/url | Collapses to overlay menu | P0 |
| Hero | First-impression + dual-path orientation | Page-specific | headline, statement, credential text, image, 2 CTAs | Stacks, image becomes a strip | P0 |
| CorePositioning | Domain-clarity paragraph | Page-specific | single paragraph | Reflows within reading width | P0 |
| FactStrip (Authority) | Scannable proof-of-seniority | Reusable (About page may reuse a fuller version) | list of {value, label} | Row → stacked list | P0 |
| ExpertiseTag / Consulting block | Communicate relevant domains without overclaiming | Reusable (full Consulting page reuses tags) | list of tag strings, qualifier text, CTA | Tags wrap | P0 |
| CourseCard / Academy block | Present the flagship course + scalable catalog | Reusable (Academy/Courses page reuses card) | course object, placeholder objects | Grid → single column | P0 |
| ProjectProof | The WOW moment | Page-specific (adaptable later to a case-study page) | project object (image, caption, highlights, link) | Split → stacked | P0 |
| FinalCTA | Calm, symmetric close | Reusable | heading, fragment, 2 CTAs | Stacks | P0 |
| Footer | Orientation + contact + legal | Global | nav items, social links, copyright, [disclaimer if approved] | Stacks | P0 |

---

## 12. Hero Implementation Specification

- **Section height philosophy:** not a rigid 100vh lock. Target ~85–90vh on standard desktop viewports, `min-height: 640px`, capped so it never becomes an empty full-bleed screen on very tall displays. Content is vertically centered within this band.
- **Left/right proportion:** 55% text / 45% image on desktop, per D05 Composition 1; 60/40 on tablet; full stack below tablet breakpoint.
- **Content max width:** left-column content constrained to ~560–600px within its band.
- **Headline width:** allowed to wrap naturally; no forced manual line breaks unless a specific break demonstrably improves rhythm during visual QA.
- **Supporting text width:** constrained to ~55–60 characters per line.
- **Credential line:** small Label/Data hybrid beneath the supporting statement; one line desktop, wraps gracefully on mobile.
- **CTA arrangement:** Primary + Secondary side-by-side (`space-2`–`space-3` gap) desktop; stacked full-width (`space-2` gap) mobile.
- **Image dimensions:** right panel ~45% viewport width × full Hero height. **[NEEDS INPUT]** — confirm the source Saudi substation photo exists at sufficient native resolution for this large a crop before final production; the copy currently available to us is web-resolution only.
- **Image cropping:** a tight, editorially-chosen detail crop (e.g., switchgear, cabling, or a structural element) — not the full team/context photo, which is reserved for Project Proof.
- **Image treatment:** the same color-grade recipe applied across all real photography on the site (see Section 22).
- **Edge treatment:** a single subtle angled/masked edge between the text and image panels — one controlled geometric gesture, not a decorative shape.
- **Background:** `background-primary` on the text side, image panel directly adjacent with no border or shadow beyond the masked edge.
- **Nav relationship:** nav sits unfilled at the top of the Hero; text stays `text-primary` throughout since the underlying composition is light (this resolves an ambiguity in D05, which envisioned a dark-image nav overlay — that scenario doesn't apply to Composition 1's light text-panel background).
- **Vertical alignment:** content vertically centered in the Hero band, not top- or bottom-anchored.
- **Responsive behavior:** stacks below tablet; recommend the image strip appears **after** the CTA group on mobile (message and action read first, image reinforces second), at a fixed aspect ratio (e.g., 4:3), not an arbitrary crop.
- **Motion sequence:** headline + supporting text fade/translate up together (`duration-standard`, `easing-standard`); image fades in simultaneously or immediately after — a single coordinated moment, once only, never retriggered.

**Preventing failure modes:**
- *Too text-heavy* → only the approved headline, one supporting sentence, and the credential line appear here — no added marketing paragraph.
- *Too corporate* → the real technical image and plain, human CTA language ("Explore," "Discuss") keep it from feeling like stock corporate messaging.
- *Too empty* → the image panel and credential line fill the composition; height is capped so negative space doesn't read as unfinished.
- *Too technical* → zero technical linework motif in the Hero itself; that visual language is reserved for Consulting and Project Proof.
- *Too promotional* → no superlatives, no exclamation points, no urgency language.

---

## 13. Core Positioning Specification

- Pure typography, no image, no card — a single Body Large paragraph.
- Centered within a `container-reading` (720px) column, left-aligned text within that column.
- One `border-width-hairline` rule above and one below, using `border-subtle`, separating this section from Hero and Authority.
- Vertical spacing: `space-7` (desktop) / `space-6` (mobile) above and below the rule-bounded block.
- No sub-elements, no button, no list.

---

## 14. Authority Specification ("Fact Strip")

- **Visible facts, Phase 1:** 5–6 — recommend: 15+ Years in Industrial & Energy Automation · Datacenter Automation Technical Leader, Schneider Electric · PMP® Certified · Certified EPAS (Legacy PACiS) Trainer · Approved SAS Testing & Commissioning Engineer · 44K+ LinkedIn Followers. (B.Sc., Cairo University can live on the About page rather than crowding the strip — **[DECISION REQUIRED]** if this should be included instead of another item.)
- **Desktop layout:** horizontal row, each fact a short value+label pair, separated by `border-width-hairline` vertical dividers, wrapping to a second row if the viewport is narrow.
- **Mobile layout:** vertical stacked list, `border-width-hairline` horizontal dividers, left-aligned.
- **Separators:** hairline rules only — no dot separators, no per-item icons.
- **Typography:** value in Data/Numeric or H3-weight styling; label beneath/beside in Body Small, `text-muted`.
- **Hierarchy:** the narrative sentence (Body Large) sits above the strip; the strip is supporting proof, not the section's primary content.
- **Optional portrait placement:** a small (80–120px) softly-cropped portrait may sit beside the narrative sentence — **[NEEDS INPUT]** — omit entirely in Phase 1 rather than use the current low-resolution headshot in this premium placement.
- **44K+ followers handling:** same visual weight as every other fact — not enlarged, not specially colored, to avoid it reading as a vanity metric.
- **Extensibility:** implemented as a simple repeatable `{value, label}` list so new certifications append without any layout change.

---

## 15. Consulting Specification

- **Heading:** "Technical Consulting & Advisory" — H2.
- **Qualifier:** "(scope & availability to be confirmed)" set immediately adjacent to the heading in Body Small, colored `text-secondary` (legible, not faded to near-invisibility) — never demoted to true fine print.
- **Paragraph:** Body text, constrained to ~60 characters per line, beneath heading+qualifier.
- **Expertise tags:** a wrapping row using the ExpertiseTag component — `border-subtle` outline, no fill, `text-primary` label, `radius-default` — deliberately quiet so it doesn't read as a set of clickable service buttons.
- **CTA:** one Secondary/ghost button, "Discuss a Technical Challenge," beneath the tag row.
- **Optional technical linework:** a faint (4–8% opacity) single-line-diagram fragment may sit in a background corner — **[DECISION REQUIRED at visual QA]** whether it reads as tasteful; treat as P1, not required for Phase 1 completion.
- **Spacing:** heading→paragraph and paragraph→tags at `space-3`–`space-4`; tags→CTA at `space-4`–`space-5`.
- **Responsive:** tags wrap naturally; paragraph reflows full-width with standard margins on mobile.

---

## 16. Easy Automation Academy Specification

- **Identity treatment:** "Easy Automation Academy" as an H2 in the same primary family/weight as other section headings, with one small distinguishing device — a thin `accent-primary` underline rule beneath just this heading — as the only sub-brand marker. **[DECISION REQUIRED]** — revisit once an actual Academy logo/mark direction exists.
- **Section introduction:** one-sentence brand statement (approved copy), Body Large, directly beneath the heading.
- **Course card:** image (16:9, top) → title (H3) → one-line descriptor (Body Small) → metadata row (e.g., "10+ Hours · Arabic (English Terminology)," Label style, `text-muted`) → CTA ("View Course," Secondary/ghost).
- **Course image:** the existing Payhip thumbnail is acceptable for Phase 1, graded with the same recipe as other real photography for visual consistency. **[NEEDS INPUT — P1 upgrade]:** a purpose-designed cover.
- **External enrollment indicator:** lives on the Course Detail page, not the homepage card — a labeled CTA such as "Enroll via [Platform] — Secure Checkout" with a small external-link icon, so the hand-off is transparent.
- **Future course placeholders:** 1–2 additional slots in the identical CourseCard shape but outline-only (`border-subtle`, no image, no shadow), centered label "More Courses Coming" in `text-muted` — same dimensions as the real card so the grid stays visually balanced.
- **Placeholder honesty rule:** no fake title, price, or date on placeholder slots — ever.

---

## 17. Project Proof Specification (Primary WOW Module)

- **Surface:** `background-dark`, full-bleed to the viewport edge.
- **Layout:** an adjacent split (not a full-bleed image with text overlaid on top of it) — roughly 55–60% image / 40–45% text panel. This keeps the real photo fully legible and avoids the "hero-banner-with-scrim" cliché.
- **Image:** the full, complete project photo (context and people included) — in deliberate contrast to the Hero's tight detail crop; this is where the full story finally pays off.
- **Text panel:** one editorial-sentence caption, 2–3 highlight stats in Data/Numeric styling (`text-inverse`, with `accent-primary` used sparingly on one numeral to tie the palette together), and a single "See the full project scope" text link (`text-inverse-muted`, `accent-primary` on hover).
- **Stats:** same `{value, label}` structural pattern as the Authority fact strip, restyled for the dark surface.
- **Desktop layout:** image side full-bleed to the viewport edge; text panel in a fixed-width column.
- **Mobile layout:** image on top, art-directed to a portrait-friendly crop (not auto-cropped); text panel below in a standard content column.
- **Transition into/out of the section:** a confident hard cut from `background-primary` to `background-dark` — no gradient blend — since one clean transition reads as more intentional than a soft fade.
- **Animation:** a single more-expressive reveal (`duration-expressive`) — image scale from 1.03→1.0 with fade, text panel slightly delayed — triggered once on scroll into view, never repeating.
- **Rule:** the full 7-item technical scope list from earlier deliverables does **not** appear here — only the caption + 2–3 highlights + the deeper link.

---

## 18. Final CTA Specification

- **Heading:** H2, centered.
- **Supporting fragment:** Body Large, centered, single line beneath the heading.
- **CTA buttons:** Primary ("Explore Easy Automation Academy," consistent with the Hero's primary assignment) + Secondary ("Discuss a Technical Challenge") — side-by-side desktop, stacked mobile.
- **Spacing:** `space-7`–`space-8` above and below, isolating this as a clean closing moment.
- **Alignment:** fully centered — a deliberate structural bookend against the Hero's left-aligned, asymmetric composition (open asymmetric, close symmetric).

---

## 19. Footer

**Confirmed elements:**
- "Mohammed Attallah" name/wordmark
- Nav links: Home · About · Consulting · Easy Automation Academy · Contact
- Social links: LinkedIn, YouTube
- Copyright line
- A reference/link to Easy Automation Academy

**[DECISION REQUIRED]:**
- Whether to include the Facebook link (page content remains unreviewed per D02)
- Whether to include a Schneider Electric independence disclaimer — pending Mohammed's confirmation per D04 Revision 1. If approved, the footer is the natural, unobtrusive location: a single small `text-muted` line, not prominent.

**Layout:** minimal, one or two rows, `background-secondary`, Label-scale typography, `space-6`–`space-7` top spacing before the footer block begins. No newsletter signup, no sitemap dump, no additional marketing content.

---

## 20. Responsive Breakpoint Strategy

| Breakpoint | Range | Grid | Key structural notes |
|---|---|---|---|
| Large desktop | ≥1440px | 12-col, capped container | Extra width becomes margin, not new columns |
| Desktop | 1024–1439px | 12-col | Primary implementation target |
| Tablet | 768–1023px | 8-col | Hero may hold a compressed split down to ~840px before stacking; Authority strip may wrap to two rows before stacking fully |
| Mobile | <768px | 4-col | All sections single-column; Hero image becomes a strip after the CTAs; nav becomes hamburger overlay; Project Proof image top-stacked with an art-directed portrait crop |

Per-section responsive behavior is detailed in each section's own specification above (Sections 12, 14, 16, 17) rather than repeated here.

---

## 21. Motion Specification

| Animation | Priority | Trigger | Duration | Movement | Easing | Repeats? | Reduced-motion behavior |
|---|---|---|---|---|---|---|---|
| Hero entrance | P0 | Page load | `duration-standard` | 12–16px translate-up + fade | `easing-standard` | No | Fade only, no translate |
| Button/link hover | P0 | Pointer hover/focus | `duration-fast` | None (color/opacity) | `easing-hover` | Every hover | Unaffected |
| Section reveal on scroll | P0 | Element ~15–20% in viewport | `duration-standard` | 8–12px translate + fade | `easing-standard` | No (fires once) | Fade only or instant |
| Project Proof reveal | P1 | Scroll into view | `duration-expressive` | Image scale 1.03→1.0 + fade; text delayed fade | `easing-standard` | No | Static appearance |
| Academy card hover | P1 | Pointer hover | `duration-fast` | 2–4px lift | `easing-hover` | Every hover | Color/opacity only |
| Sticky nav transition | P1 | Scroll past ~80px | `duration-fast` | Background/opacity fade-in | `easing-hover` | Both directions | Instant toggle |
| Cursor-follow/parallax, animated counters, linework line-draw | P2 | — | — | — | — | — | Omit under reduced motion; optional even without it |

No animation outside this table is added anywhere on the homepage.

---

## 22. Image / Asset Implementation

| Asset | Source | Current status | Where used | Treatment | Resolution/quality | Phase |
|---|---|---|---|---|---|---|
| Saudi substation project photo | Payhip page/screenshot | Confirmed real; only a web-resolution copy is currently available to us | Hero (cropped detail) + Project Proof (full) | Single consistent color-grade/duotone recipe | **[NEEDS INPUT]** — confirm a higher-resolution source file exists before final production | Phase 1 |
| Payhip course thumbnail | Payhip page | Confirmed, basic auto-generated thumbnail | Academy course card | Same color-grade recipe applied for consistency | Likely sufficient for card-size use; verify at implementation | Phase 1 (P1: custom cover) |
| Small circular headshot | Payhip "About Me" | Confirmed, low-resolution/casual | Recommended **omitted** from Phase 1 premium placements | N/A until upgraded | **[NEEDS INPUT]** — proper editorial portrait | Phase 2 |
| CV/LinkedIn export | Uploaded PDF | Confirmed | Authority fact strip, About page copy | Text only | N/A | Phase 1 |
| Course intro video | YouTube (embedded via Payhip) | Confirmed | Course Detail page | Click-to-play embed, not autoplay | N/A | Phase 1 |
| Academy/Mohammed logo | — | Does not exist | Nav wordmark, Academy identity mark | **[NEEDS INPUT]** — temporary text wordmark per Section 10 | — | Phase 2/3 |

---

## 23. Content / Data Model (Conceptual)

- **Credentials:** list of `{value, label}` — drives the Authority fact strip.
- **Expertise areas:** list of strings — drives the Consulting ExpertiseTag row.
- **Courses:** list of `{title, descriptor, image, metadata: {hours, language, format}, externalUrl, status: "available" | "coming-soon"}` — drives Academy cards, including honest placeholder slots via `status`.
- **Projects:** list of `{title, location, description, highlights: [{value, label}], image, fullScopeUrl}` — currently one entry, structured so future projects append cleanly and the homepage's featured project could later be selected from this same list.
- **Social links:** list of `{platform, url}` — drives the footer.
- **Navigation items:** list of `{label, url, showInPrimaryNav: boolean}` — lets Insights/Resources exist as a route without appearing in the primary nav.

**Should be data-driven now:** Authority fact strip, Consulting expertise tags, Academy course cards (the most likely to change soon), footer nav/social links.
**Can remain hardcoded content for Phase 1:** Hero, Core Positioning, and Final CTA copy — singular, curated pieces of text rather than repeatable lists.

---

## 24. Accessibility Requirements

- **Color contrast:** WCAG AA minimum (4.5:1 body text, 3:1 large text/headings) — verify `accent-primary` on `background-primary`, and `text-inverse` on `background-dark`, specifically.
- **Keyboard focus:** every interactive element has a visible focus ring; `outline: none` is never used without a replacement.
- **Semantic hierarchy:** a single H1 per page (the Hero headline), logically nested H2/H3s per section, proper landmark regions (nav/main/footer).
- **Button/link distinction:** buttons for actions, links for navigation — no ambiguous crossover styling.
- **Image alt text:** descriptive alt text on the Hero image, Project Proof photo, and course thumbnail; empty alt only for the purely decorative linework motifs.
- **Reduced motion:** all animations in Section 21 respect `prefers-reduced-motion` as specified.
- **Mobile readability:** minimum 16px body text, adequate line-height and contrast at all sizes.
- **Touch target sizing:** minimum 44×44px tappable area, adequate spacing between adjacent targets (nav overlay, card CTAs).

---

## 25. Performance Requirements

- **Hero image optimization:** modern formats (WebP/AVIF with fallback), compressed without visible quality loss on the detail crop.
- **Responsive image sizing:** appropriately sized images per breakpoint, not one large image scaled down everywhere.
- **Lazy loading:** below-the-fold images (course thumbnails) lazy-load; the Hero image loads eagerly since it's above the fold.
- **Font loading:** one primary family plus the data face, a small set of weights only, loaded with a swap strategy to avoid invisible-text flashes.
- **Animation restraint:** CSS transform/opacity animations for the whole P0/P1 motion set — no heavy animation library required.
- **No autoplay media:** the course intro video is click-to-play, never autoplaying.

---

## 26. VS Code Implementation Priority

| Step | Objective | Dependencies | Completion criteria |
|---|---|---|---|
| 1. Global design tokens | Establish colors, type, spacing, radius, shadow as the single source of truth (button system built alongside this step, though described in Section 9) | None | All tokens defined; nothing styled yet |
| 2. Typography | Implement the full type scale + font loading | Step 1 | All type roles render correctly at both breakp ­oint tiers |
| 3. Container/Grid | Implement max-width, reading-width, and grid | Step 1 | Containers behave correctly at all breakpoints; full-bleed mechanism works |
| 4. Navigation | Build global nav (desktop + mobile), temp wordmark | Steps 1–3 | Transparent/scrolled states, mobile menu, keyboard accessibility all verified |
| 5. Hero | Implement editorial split exactly per Section 12 | Steps 1–4 | Matches approved composition; responsive + motion correct; approved copy verbatim |
| 6. Core Positioning | Pure-typography section | Steps 1–3 | Matches spec; reading width respected |
| 7. Authority | Fact-strip component | Steps 1–3 | Data-driven; responsive stacking correct; no card-grid look |
| 8. Consulting | Heading/qualifier/paragraph/tags/CTA | Steps 1–3, buttons | Qualifier visibly legible; tags wrap; no pricing language |
| 9. Academy | Intro + CourseCard incl. placeholders | Steps 1–3, buttons | Real course fully populated; placeholders read as intentional |
| 10. Project Proof | Dark full-bleed WOW module | Steps 1–3 | Full photo, correct stats, intentional light→dark transition |
| 11. Final CTA | Closing section | Steps 1–3, buttons | Centered composition; both CTAs functional |
| 12. Footer | Minimal footer | Steps 1–3 | Confirmed elements present; [DECISION REQUIRED] items absent, not guessed |
| 13. Responsive pass | Full cross-breakpoint QA | Steps 4–12 | No structural breakage at any breakpoint |
| 14. Motion | Implement/verify P0 (and P1 if time allows) | Step 13 | Matches Section 21; reduced-motion respected sitewide |
| 15. Visual QA | Final review against Section 27 | Step 14 | Checklist passed or exceptions logged |

---

## 27. Quality Control Checklist

**VISUAL**
- [ ] Typography matches the defined scale exactly — no ad hoc sizes
- [ ] Spacing follows the 8px-based scale — no arbitrary values
- [ ] Alignment is consistent within and across sections
- [ ] Only the single approved accent color appears anywhere
- [ ] All imagery is real (or explicitly-approved placeholder), consistently graded
- [ ] Visual hierarchy matches the approved D04 information hierarchy

**UX**
- [ ] Navigation is clear and consistent across breakpoints
- [ ] Both CTAs (Consulting/Academy) are easy to find and distinguish
- [ ] Responsive behavior tested at large-desktop, desktop, tablet, mobile
- [ ] Mobile usability verified (tap targets, readability, menu behavior)

**BRAND**
- [ ] Mohammed Attallah remains the visually dominant master brand
- [ ] Easy Automation Academy reads as a sub-brand, not a separate site
- [ ] Consulting contains no pricing, packages, clients, or guarantees
- [ ] No fabricated statistics, testimonials, or claims appear anywhere
- [ ] Schneider Electric appears only as plain career text — never a logo or "in partnership with" treatment

**TECHNICAL**
- [ ] Images optimized and appropriately sized per breakpoint
- [ ] Contrast, focus states, alt text, and reduced-motion all verified
- [ ] Image quality holds up at the largest displayed size
- [ ] All P0 animations implemented; none exceed the restraint principle
- [ ] All defined breakpoints behave as specified with no structural breakage

---

## 28. Definition of Done — "Phase 1 Homepage Complete"

This means the homepage convincingly demonstrates the premium ecosystem and gives Mohammed a genuine WOW proof of concept — **not** that the full website is finished.

1. All seven approved homepage sections are implemented in the approved order.
2. The approved Hero copy and composition are implemented exactly as specified — no placeholder lorem ipsum.
3. All unconfirmed items (e.g., the Consulting qualifier) are visibly marked in the UI, not omitted or overstated.
4. The single accent color and the light-system-plus-one-dark-module structure are correctly implemented.
5. The site is fully responsive across all four defined breakpoints without structural breakage.
6. Navigation works correctly, including the deferred placement of Insights/Resources.
7. All P0 motion is implemented and respects reduced-motion preference.
8. No fabricated statistics, testimonials, clients, or consulting claims appear anywhere.
9. Schneider Electric is referenced only as plain career text, never implying endorsement or partnership.
10. The Academy reads as a real, scalable sub-brand with honest "more courses coming" placeholders.
11. The Project Proof module delivers a genuine, distinct visual WOW moment.
12. Accessibility basics are verified, not just visually assumed.
13. Every [DECISION REQUIRED] and [NEEDS INPUT] item in this document is either resolved or explicitly logged for Ismail/Mohammed — never silently guessed at during implementation.
14. The Section 27 QC checklist has been run and passed, or exceptions are documented.
15. Ismail (and/or Mohammed) can view the homepage and reasonably conclude: *"This is not just a website for my course — this is a serious premium platform representing me as an automation expert."*

Deeper pages (About, full Consulting, full Academy catalog, Course Detail, Contact) and all NEEDS INPUT content remain outstanding beyond this milestone.

---

## Next Action
This is the final specification step before frontend implementation. The natural next step is beginning VS Code implementation at Step 1 (global design tokens), following the sequence in Section 26.
