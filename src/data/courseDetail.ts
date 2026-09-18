/**
 * Course Detail content — Sprint 09. Every field is traceable to
 * docs/D07_COURSE_SOURCE_PAYHIP.md ("[PAYHIP SOURCE]" throughout that
 * document). Nothing here is invented; ambiguities flagged in D07 Section 20
 * are NOT silently resolved — see the Sprint 09 final report for how each
 * one was handled in the UI rather than in this data.
 */

export const courseDetail = {
  title: "Substation Automation (SAS): IEC 61850 & IEC 104 - From Zero to Real Projects",
  academyLabel: "Easy Automation Academy",

  // D07 Section 1 — only confirmed metadata, used for the Hero
  heroMetadata: [
    "10+ Hours of Content",
    "Arabic Instruction",
    "English Technical Terminology",
    "Recorded Sessions",
    "Practical Exercises",
  ],

  // D07 Section 2, verbatim meaning preserved
  whyThisCourse: [
    "When I first started working in Substation Automation, I found that most courses explain the standards and protocols, but don't show how they are actually used in real projects.",
    "That's why I created this course.",
    "The goal is to help you understand how a complete Substation Automation System (SAS) works, from the overall architecture to the communication between devices, engineering, testing, and troubleshooting.",
    "Everything in this course is based on practical engineering experience and real project scenarios.",
  ],

  // D07 Section 4, exact list, source order
  learningOutcomes: [
    "Substation Automation System (SAS) Architecture",
    "IEC 61850 (MMS, GOOSE, SV, SCL)",
    "IEC 60870-5-104 Communication",
    "Network Fundamentals & Redundancy Protocols",
    "RTU Communication & Data Mapping",
    "SAS Cybersecurity Best Practices",
    "Practical Configuration, Testing & Troubleshooting",
  ],

  // D07 Section 5, exact list, source order
  practicalItems: [
    "IEC 61850 Configuration",
    "SCD/CID Files",
    "RTU Mapping",
    "IEC 61850 ↔ IEC 104 Integration",
    "Protocol Simulation",
    "Troubleshooting using Wireshark",
  ],

  // D07 Section 6, exact list, source order
  format: [
    "Full Recorded Sessions (10+ Hours of Content)",
    "Practical Step-by-Step Explanation",
    "Practical Exercises",
    "Course Resources (Presentations & Exercises)",
    "Quizzes",
    "Certificate of Completion",
  ],

  // D07 Section 9, exact list
  audience: ["Electrical Engineers", "Automation Engineers", "Protection Engineers", "Anyone interested in practical Substation Automation"],

  // D07 Section 10, full text
  whyEngineersLikeIt: [
    "One thing I always hear from engineers after finishing the course is that it helped them connect the theory with what actually happens in a real project.",
    "Instead of learning protocols separately, you'll understand how they work together inside a complete SAS system, from engineering and configuration to testing and troubleshooting.",
  ],

  // D07 Section 12 — the 7 confirmed scope bullets, with the "one of the
  // largest" superlative deliberately omitted (see Section 20D of the sprint
  // brief) and framing preserved as "had the opportunity to work on", not a
  // claim of sole/independent delivery.
  projectIntro:
    "Mohammed had the opportunity to work on the successful energization of a 132/33/13.8 kV substation in Saudi Arabia, part of the Saudi National Grid, during the engineering, testing, and commissioning phases.",
  projectScope: [
    "Configuring the complete substation database and signal mapping",
    "Developing logic schemes and interlocking functions",
    "Designing the SCADA system and operator HMIs",
    "Integrating IEDs and configuring communication",
    "Configuring IEC 61850 gateways",
    "Site testing and system commissioning",
    "SCADA integration and communication with remote control centers",
  ],

  // D07 Section 11 — Payhip's own instructor bio, third person for site
  // voice consistency; figures preserved exactly, not merged with the
  // separately-sourced "15+ years" figure used elsewhere on this website.
  instructorBio:
    "With over a decade of expertise in Substation Automation (SAS) and more than 5+ years in Industrial Automation, Mohammed has gained practical experience across 30+ projects globally, including in Egypt, Saudi Arabia, UAE, Bahrain, and Europe. His specialization spans Energy Management Systems, SAS, IEC 61850, and EPMS within Data Centers, along with hands-on experience integrating, testing, and troubleshooting SAS systems.",

  // D07 Section 13 — confirmed embed; title derived from the section heading
  // the source places directly above it, as instructed.
  previewVideo: {
    embedUrl: "https://www.youtube.com/embed/hi0EHOjp-Cg",
    title: "Course Introduction & Agenda",
  },

  // D07 Section 1 / Section 15
  price: "$70",
  payhipOrderUrl: "https://payhip.com/order?link=W0yOs&pricing_plan=bZz2M0pRWr",
};

export interface CurriculumItem {
  label: string;
  type: "overview" | "module" | "quiz" | "exercise" | "activity" | "resource";
}

export interface CurriculumGroup {
  heading: string;
  items: CurriculumItem[];
}

/**
 * D07 Section 8 — the detailed curriculum accordion, D07's own
 * "HIGHEST PRIORITY" course-content listing. Reproduced in exact source
 * order. Group 2's heading "Resourses" preserves the source's own spelling
 * verbatim (D07 explicitly flags this as a source typo, not corrected) —
 * see the Sprint 09 report for this decision.
 */
export const curriculum: CurriculumGroup[] = [
  {
    heading: "Course Contents",
    items: [
      { label: "Course Overview & Agenda", type: "overview" },
      { label: "Module 01: Introduction to Substation Automation", type: "module" },
      { label: "Module 02: SAS System Architectures", type: "module" },
      { label: "Quiz 1 - Test Your Knowledge", type: "quiz" },
      { label: "Module 03 - Part 1: Network Fundamentals", type: "module" },
      { label: "Module 03 - Part 2: Network Fundamentals", type: "module" },
      { label: "Module 03 - Part 3: Network Fundamentals", type: "module" },
      { label: "Module 04: SAS Network Communication Protocols", type: "module" },
      { label: "Quiz 2 - Test Your Knowledge", type: "quiz" },
      { label: "Module 05 - Part 1: IEC 61850 Protocol", type: "module" },
      { label: "Exercise 1 - Part 1: Creating CID & SCD Files", type: "exercise" },
      { label: "Module 05 - Part 2: IEC 61850 Protocol", type: "module" },
      { label: "Quiz 3 - Test Your Knowledge", type: "quiz" },
      { label: "Module 06: Remote Terminal Unit (RTU)", type: "module" },
      { label: "Exercise 1 - Part 2: Importing the SCD File & Defining the IED Signals", type: "exercise" },
      { label: "Module 07: IEC 104 Protocol", type: "module" },
      { label: "Quiz 4 - Test Your Knowledge", type: "quiz" },
      { label: "Exercise 2: Configuring the IEC 104 Protocol + Remote SCADA Signals", type: "exercise" },
      { label: "IEC 61850 & IEC 104 Communication Simulation and Validation", type: "activity" },
      { label: "Analyzing IEC 61850 & IEC 104 Traffic Using Wireshark", type: "activity" },
      { label: "Exercise 3: Configuring the SNMP Signals + Time Sync Protocols", type: "exercise" },
      { label: "Course Feedback & Certificate", type: "activity" },
    ],
  },
  {
    heading: "Resourses",
    items: [{ label: "Course Materials", type: "resource" }],
  },
];
