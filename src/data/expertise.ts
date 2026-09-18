/**
 * Consulting expertise areas — approved list per
 * docs/D04_HOMEPAGE_POSITIONING.md (Revision 1) and
 * docs/D06_DESIGN_SYSTEM_IMPLEMENTATION.md Section 15.
 */
export const consultingExpertise: string[] = [
  "SAS",
  "IEC 61850",
  "IEC 60870-5-104",
  "RTU/SCADA",
  "Data Center/EPMS",
  "Automation Architecture",
  "Commissioning & Testing",
  "Troubleshooting",
];

/**
 * About page "Experience" domains — approved per the About refinement
 * sprint. Four professional domains, each grouping already-approved
 * terminology (D04/D06 consultingExpertise, D02 career/role facts) — no
 * new capabilities or services introduced. Editorial groups, not service
 * cards: not clickable, no icons.
 */
export const aboutExperienceDomains: { title: string; terms: string[] }[] = [
  {
    title: "Substation Automation",
    terms: ["SAS", "IEC 61850", "RTU", "SCADA", "Testing & Commissioning"],
  },
  {
    title: "Automation Architecture",
    terms: ["Systems Integration", "Automation Architecture", "Technical Coordination"],
  },
  {
    title: "Data Center Automation",
    terms: ["Data Center Automation", "EPMS", "Engineering / Site Coordination"],
  },
  {
    title: "Technical Leadership",
    terms: [
      "Engineering Coordination",
      "Site Teams",
      "Project Management Interface",
      "Technical Risk Management",
    ],
  },
];

/**
 * Homepage Consulting section "expertise pillars" — approved per this
 * visual-upgrade sprint. Three editorial categories grouping only
 * already-approved expertise terminology (D04/D06 consultingExpertise,
 * D07/homepage Project Proof scope, and Course Detail learning outcomes) —
 * no new services or capabilities introduced.
 */
export const homepageExpertisePillars: { title: string; terms: string[] }[] = [
  {
    title: "Substation Automation",
    terms: ["IEC 61850", "SAS Architecture", "IED Integration", "Testing & Commissioning"],
  },
  {
    title: "RTU / SCADA",
    terms: ["IEC 60870-5-104", "RTU Communication", "SCADA Integration", "Data Mapping"],
  },
  {
    title: "Data Center Automation",
    terms: ["Automation Architecture", "EPMS", "System Integration"],
  },
];
