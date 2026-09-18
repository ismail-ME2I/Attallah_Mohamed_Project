# PROJECT_RULES.md

# Mohammed Attallah — Project Rules & Guardrails

This document defines the rules that must be followed when designing, implementing, reviewing, or modifying the Mohammed Attallah personal-brand website.

These rules protect the project's strategic direction, factual accuracy, visual quality, scope, and maintainability.

---

## 1. SOURCE OF TRUTH

The project contains approved strategic documentation in `/docs/`.

Primary strategic documents:

- `D01_PROJECT_FOUNDATION.md`
- `D02_SOURCE_AUDIT.md`
- `D03_SITEMAP_CONTENT_STATE.md`
- `D04_HOMEPAGE_POSITIONING.md`
- `D05_VISUAL_DIRECTION.md`
- `D06_DESIGN_SYSTEM_IMPLEMENTATION.md`

Context and rules:

- `00_PROJECT_CONTEXT.md`
- `PROJECT_RULES.md`

When a decision has already been approved in these documents, do not silently replace it with a different interpretation.

If implementation requires a deviation, explicitly identify it.

---

## 2. TRUTH OVER COMPLETENESS

Never invent information to make the website appear more complete.

It is always better to have an honest placeholder than fabricated content.

Never fabricate:

- clients
- companies
- testimonials
- projects
- project results
- statistics
- certifications
- qualifications
- professional titles
- services
- consulting packages
- pricing
- availability
- course information
- dates
- partnerships
- endorsements
- photographs
- logos
- brand assets

If information is missing, use:

- an honest placeholder, or
- a clear `[NEEDS INPUT]` / `[DECISION REQUIRED]` marker in internal documentation.

---

## 3. VERIFIED VS UNVERIFIED INFORMATION

Distinguish between:

### Confirmed

Information supported by the project's source material.

### Placeholder

Content intentionally representing future information.

### Needs Input

Information that requires confirmation from Mohammed.

### Decision Required

A strategic/design/business decision that requires human approval.

Do not silently convert one state into another.

---

## 4. DO NOT OVERSTATE MOHAMMED'S ROLE

The website should position Mohammed as:

**Automation Expert. Technical Leader. Educator.**

Do not reduce him to a course creator.

At the same time, do not invent a stronger professional role than the sources support.

In particular, do not describe Mohammed as an established independent consultant, business owner, founder, or agency unless this is explicitly confirmed.

---

## 5. CONSULTING RULES

The current consulting positioning is:

**Technical Consulting & Advisory**

Consulting is a potential professional offering whose scope and availability require confirmation.

Acceptable language includes:

- Technical Consulting & Advisory
- Discuss a Technical Challenge
- Start a Conversation
- Scope & availability to be confirmed

Do not invent:

- consulting packages
- service tiers
- prices
- retainers
- guaranteed response times
- client lists
- consulting case studies
- availability schedules
- contractual relationships

Do not make consulting look more established than the evidence supports.

---

## 6. EASY AUTOMATION ACADEMY RULES

The canonical education brand on the website is:

**Easy Automation Academy**

The Academy is part of Mohammed's broader personal-brand ecosystem.

Do not allow the Academy to visually or strategically overpower Mohammed's personal brand.

External platforms such as Payhip or Udemy are enrollment/payment/course-delivery endpoints.

Do not make Payhip or another external platform appear to be the primary brand.

Do not invent future courses.

For missing courses, use an honest placeholder such as:

**More Courses Coming**

---

## 7. SCHNEIDER ELECTRIC RULES

Mohammed's employment at Schneider Electric may be presented as an accurate professional fact.

Example:

**Datacenter Automation Technical Leader at Schneider Electric**

However, the website must not imply:

- endorsement
- sponsorship
- partnership
- certification by Schneider Electric
- Schneider Electric ownership of Easy Automation Academy
- Schneider Electric endorsement of Mohammed's courses
- Schneider Electric as a consulting client

Do not create combined Schneider Electric / Mohammed / Academy brand lockups.

Do not place Schneider Electric branding in a context that could reasonably imply an official partnership.

Any disclaimer wording must be confirmed before being treated as final.

---

## 8. NO FAKE SOCIAL PROOF

Never create fictional:

- testimonials
- client logos
- follower numbers
- review scores
- student counts
- success rates
- project counts
- revenue figures
- engagement statistics

Use verified numbers only.

If a metric is sourced from an existing platform and included in the website, preserve the meaning and context of the source.

---

## 9. NO FAKE PROJECT PROOF

Real project experience is an important part of the website.

However, do not manufacture:

- project names
- client names
- locations
- technical specifications
- project values
- performance metrics
- commissioning results
- photographs
- diagrams

The known Saudi substation project may be used according to the verified source material.

Do not add technical details simply because they sound plausible.

---

## 10. IMAGE RULES

Prefer real project photography and authentic professional assets.

Never present:

- AI-generated imagery
- stock photography
- invented technical screenshots
- fake SCADA interfaces
- fake project photographs

as though they were real project evidence.

If a required image is unavailable:

1. use a clearly identifiable placeholder, or
2. temporarily omit the image.

Do not misrepresent placeholders as real assets.

---

## 11. VISUAL DIRECTION

The approved visual direction is:

**The Engineering Journal**

The interface should feel:

- premium
- editorial
- technical
- credible
- restrained
- precise
- calm

Preferred characteristics:

- cool-neutral light base
- graphite / ink typography
- one controlled copper/amber accent
- rectilinear grid
- thin rules
- generous spacing
- minimal radius
- minimal shadows
- restrained motion
- real project photography

Avoid:

- neon
- excessive gradients
- futuristic dashboard aesthetics
- generic SaaS styling
- excessive glassmorphism
- excessive rounded cards
- visual noise
- fake technical interfaces

---

## 12. COLOR RULES

Use the approved D06 palette unless a deliberate change is explicitly approved.

Primary accent:

`#B4642E`

Accent hover:

`#9C5527`

Do not introduce additional accent colors casually.

Do not turn the website into a multicolor design system.

The dark treatment is primarily reserved for the Real-World Project Proof section.

---

## 13. TYPOGRAPHY RULES

Follow D06.

Preferred primary font stack:

`Suisse Int'l, Neue Haas Grotesk, Inter, system-ui, sans-serif`

Preferred data/numeric stack:

`IBM Plex Mono, SF Mono, monospace`

Do not introduce decorative fonts.

Avoid excessive letter spacing and unnecessary uppercase typography.

Typography should feel contemporary and editorial.

---

## 14. COMPONENT RULES

Components should be:

- reusable
- semantic
- maintainable
- responsive
- visually consistent

Prefer meaningful reusable components over excessive abstraction.

Do not create a component for every tiny visual fragment without a real reuse or maintenance benefit.

Keep business/content data separate from presentation when practical.

---

## 15. EXISTING CODEBASE RULE

Before modifying the application:

1. Inspect the repository.
2. Identify the framework.
3. Understand the existing folder structure.
4. Inspect existing components.
5. Inspect existing styling.
6. Inspect dependencies.
7. Inspect available assets.
8. Read relevant documentation.

Do not rewrite an existing application simply because a different framework or architecture would be personally preferred.

Preserve useful existing work.

Make the smallest sensible architectural change required by the task.

---

## 16. NO UNNECESSARY DEPENDENCIES

Do not add a library simply because it makes a small task easier.

Before adding a dependency, consider whether the requirement can be solved cleanly with:

- existing project capabilities
- CSS
- native browser APIs
- existing utilities/components

If a new dependency is genuinely justified, explain why.

---

## 17. SCOPE CONTROL

Only implement what is requested.

Do not silently expand a sprint into unrelated features.

For Phase 1, do not automatically add:

- backend systems
- CMS
- authentication
- payments
- advanced booking
- complex dashboards
- advanced analytics
- complete course marketplace
- unnecessary SEO systems
- unrelated animations

unless explicitly requested.

---

## 18. DO NOT CHANGE APPROVED COPY CASUALLY

Approved strategic copy should be preserved.

Especially:

**Automation Expert. Educator. Open to New Technical Challenges.**

and the approved supporting Hero statement.

Do not rewrite approved copy simply because another wording sounds better.

If implementation requires a modification for a technical or responsive reason:

- preserve the meaning
- document the modification
- do not treat the modified version as a new strategic decision

---

## 19. PLACEHOLDER RULES

Placeholders must be honest and visually intentional.

Acceptable examples:

- `More Courses Coming`
- `Additional project details coming soon`
- clearly marked temporary image placeholder

Do not create placeholder content that looks like a real client, project, testimonial, course, or metric.

---

## 20. RESPONSIVE RULES

Responsive behavior is part of the design, not an afterthought.

Do not simply scale desktop layouts down.

Pay particular attention to:

- mobile navigation
- Hero stacking
- image cropping
- CTA width
- typography
- spacing
- touch targets
- Project Proof ordering

Minimum touch target:

**44 × 44 px**

Minimum mobile body text:

**16 px**

---

## 21. ACCESSIBILITY RULES

Every implementation should respect:

- semantic HTML
- correct heading hierarchy
- one primary H1
- keyboard navigation
- visible focus states
- meaningful link/button semantics
- accessible navigation
- meaningful alt text
- sufficient contrast
- reduced-motion support

Do not remove accessibility features to achieve a visual effect.

---

## 22. MOTION RULES

Motion should reinforce hierarchy and polish, not attract attention to itself.

Preferred motion:

- subtle entrance
- opacity transitions
- controlled transform
- restrained hover states
- section reveals

Avoid:

- bouncing
- elastic effects
- scroll-jacking
- excessive parallax
- constant movement
- blinking indicators
- fake live-system animations

Respect:

`prefers-reduced-motion`

---

## 23. PERFORMANCE RULES

Prioritize:

- responsive image sizing
- modern image formats where appropriate
- lazy loading below-the-fold imagery
- eager loading for critical Hero imagery
- minimal font weights
- minimal dependencies
- efficient CSS
- transform/opacity-based animation

Avoid:

- unnecessary heavy libraries
- oversized images
- autoplay video
- unnecessary network requests
- expensive animation effects

---

## 24. SEO SCOPE RULE

SEO is not a Phase 1 priority unless explicitly requested.

Do not allow SEO work to distract from the approved Phase 1 visual and UX objective.

When SEO is introduced later, it should be based on verified content and a deliberate strategy.

Do not keyword-stuff the interface.

---

## 25. EXTERNAL LINKS

External platforms and social profiles should be linked only when the destination is verified.

Known ecosystem destinations include:

- LinkedIn
- Easy Automation Academy / Payhip
- YouTube
- Facebook

Do not invent URLs.

External links should not be presented as official partnerships.

---

## 26. DATA AND CONTENT STRUCTURE

Where repeated content exists, prefer structured data objects or arrays.

Examples:

- authority facts
- expertise tags
- courses
- projects
- navigation items
- social links

This should make later Phase 2 expansion easier.

Do not over-engineer content management in Phase 1.

---

## 27. ERROR HANDLING

If implementation reveals:

- conflicting requirements
- missing assets
- unsupported behavior
- unclear business logic
- broken source assumptions

do not hide the problem.

Report it clearly.

Prefer:

> "Blocked by missing asset X."

over inventing a workaround that changes the intended meaning.

---

## 28. HUMAN APPROVAL REQUIRED

Human approval is required before making major changes to:

- brand positioning
- homepage Hero message
- brand architecture
- Academy hierarchy
- consulting positioning
- Schneider Electric treatment
- color system
- typography direction
- sitemap
- major user journeys
- external integrations
- business logic
- claims about Mohammed

Minor implementation decisions can use engineering judgment when they do not alter strategic intent.

---

## 29. QUALITY STANDARD

Before considering a task complete, verify:

### Functional

- application runs
- navigation works
- links work
- buttons work
- responsive behavior works
- imports are valid
- no obvious runtime errors
- build succeeds when applicable

### Visual

- D06 tokens are respected
- typography is consistent
- spacing is consistent
- Hero composition is correct
- Project Proof has appropriate visual impact
- mobile behavior is intentional
- design does not feel template-driven

### Content

- no fabricated claims
- approved copy is preserved
- Schneider Electric is represented accurately
- Academy is represented correctly
- placeholders are honest

### Accessibility

- keyboard navigation
- focus states
- heading hierarchy
- alt text
- contrast
- reduced motion
- touch target sizes

---

## 30. REPORTING STANDARD

Never use vague progress percentages as the primary status.

Do not report:

- "80% complete"
- "90% done"
- "almost finished"

Instead report concrete work.

Use:

### Files Created
- ...

### Files Modified
- ...

### Files Deleted
- ...

### Implemented
- ...

### Verified
- ...

### Remaining Issues
- ...

### Needs Human Decision
- ...

If something was not tested, explicitly say so.

Never claim a build, test, deployment, or verification that was not actually performed.

---

## 31. CHANGE DISCIPLINE

Keep changes focused.

Do not mix unrelated refactors with a requested implementation sprint unless necessary.

If unrelated issues are discovered:

- fix only if they block the requested task, or
- report them separately.

This makes the project easier to review and maintain.

---

## 32. DESIGN REVIEW MINDSET

Before adding a visual element, ask:

1. Does it strengthen the personal brand?
2. Does it communicate technical authority?
3. Does it improve hierarchy or usability?
4. Is it supported by the approved visual direction?
5. Is it necessary?

If the answer is no, do not add it.

---

## 33. FINAL PRINCIPLE

The website should consistently protect five priorities:

**Truth**

**Strategic positioning**

**Premium visual quality**

**Simplicity**

**Maintainability**

When these priorities conflict with unnecessary complexity or decoration, protect the five priorities above.
