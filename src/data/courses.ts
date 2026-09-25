export interface Course {
  title: string;
  descriptor: string;
  metadata: string;
  image: string;
  imageAlt: string;
  ctaHref: string;
  ctaLabel: string;
}

/**
 * The one confirmed Easy Automation Academy course, per docs/D01_PROJECT_FOUNDATION.md
 * Section 8 and docs/D02_SOURCE_AUDIT.md. Facts used here (10+ hours, Arabic with
 * English technical terminology, hands-on exercises, SCD/CID file work, protocol
 * analysis) are all already-confirmed course characteristics — no new claims added.
 *
 * ctaHref points to the future internal Course Detail page (not yet built), not
 * directly to the external Payhip listing — per Sprint 03 scope, external enrollment
 * is a Course Detail page concern, and no Payhip URL is recorded in project docs.
 */
export const featuredCourse: Course = {
  title: "Substation Automation (SAS): IEC 61850 & IEC 104 — From Zero to Real Projects",
  descriptor:
    "Practical substation automation training — from IEC 61850 fundamentals to real project files, SCD/CID work, and protocol analysis.",
  metadata: "10+ Hours · Arabic (English Terminology)",
  image: "/images/academy/easy-automation-academy-iec-61850-iec-104-course.jpg",
  imageAlt: "Easy Automation Academy course visual for Substation Automation, IEC 61850 and IEC 104",
  ctaHref: "/easy-automation-academy/substation-automation-sas",
  ctaLabel: "View Course",
};

export const moreCoursesLabel = "More Courses Coming";
export const moreCoursesSlotCount = 2;
