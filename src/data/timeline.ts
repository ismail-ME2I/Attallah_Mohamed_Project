export interface TimelineEntry {
  period: string;
  role?: string;
  organization: string;
  location?: string;
}

/**
 * Career progression — approved per docs/D02_SOURCE_AUDIT.md.
 * The pre-Schneider entry has a confirmed duration ("~1 year") but no
 * confirmed exact calendar years or job title, so none are stated —
 * "Before 2011" is the only date claim (it follows directly from
 * Schneider's own confirmed 2011 start date), and `role` is intentionally
 * omitted rather than inventing a title like "Early Career".
 */
export const careerTimeline: TimelineEntry[] = [
  {
    period: "Before 2011",
    organization: "Egyptian Electric Utility and Consumer Protection Regulatory Agency",
  },
  {
    period: "2011–2019",
    role: "Senior Design Application Engineer",
    organization: "Schneider Electric",
  },
  {
    period: "2019–2021",
    role: "Principal Design Application Engineer",
    organization: "Schneider Electric",
  },
  {
    period: "2021–2024",
    role: "RTU Technical Leader, 4 DCC Project",
    organization: "Schneider Electric",
    location: "Egypt",
  },
  {
    period: "2024–Present",
    role: "Datacenter Automation Technical Leader",
    organization: "Schneider Electric",
    location: "Seville, Spain",
  },
];
