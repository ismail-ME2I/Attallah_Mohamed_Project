export interface AcademyCourse {
  title: string;
  slug: string;
  description: string;
  duration: string;
  language: string;
  format: string;
  topics: string[];
  status: "available" | "coming-soon";
  cover: string;
  coverAlt: string;
  href: string;
}

/**
 * Academy overview course catalog — Sprint 08. A richer data model than
 * src/data/courses.ts (which drives the frozen homepage CourseCard and is
 * intentionally left untouched). Only the one confirmed course exists;
 * every field below is drawn from docs/D01_PROJECT_FOUNDATION.md Section 8
 * and docs/D02_SOURCE_AUDIT.md. No student counts, ratings, reviews, or
 * additional courses are invented.
 */
export const academyCourses: AcademyCourse[] = [
  {
    title: "Substation Automation (SAS): IEC 61850 & IEC 104 — From Zero to Real Projects",
    slug: "substation-automation-sas",
    description:
      "A practical, hands-on course in substation automation — covering IEC 61850 and IEC 104 protocols, real project files, SCD/CID work, and Wireshark-based protocol analysis, built from real engineering experience.",
    duration: "10+ Hours",
    language: "Arabic, with English technical terminology",
    // Module count intentionally omitted — D07 contains two non-reconciling
    // counts (an 8-item top-level list vs. 7 distinct numbered modules in
    // the detailed curriculum), and Course Detail deliberately never states
    // a specific count for the same reason. All facts below are confirmed.
    format: "Recorded video course · 10+ hours · 3 hands-on exercises · Quizzes · Certificate",
    topics: ["IEC 61850", "IEC 60870-5-104", "SCD/CID Files", "Protocol Analysis (Wireshark)", "Hands-On Exercises"],
    status: "available",
    cover: "/images/academy/easy-automation-academy-iec-61850-iec-104-course.jpg",
    coverAlt: "Easy Automation Academy course visual for Substation Automation, IEC 61850 and IEC 104",
    href: "/easy-automation-academy/substation-automation-sas",
  },
];

export const moreCoursesLabel = "More Courses Coming";
export const moreCoursesSlotCount = 2;
