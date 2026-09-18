export interface AreaGroup {
  group: string;
  items: string[];
}

/**
 * Editorial grouping of confirmed technical domains for /consulting —
 * approved per Sprint 06 Section 4. Same underlying confirmed areas as
 * docs/D04_HOMEPAGE_POSITIONING.md / D06 Section 15, organized into three
 * meaningful categories rather than one flat tag row.
 */
export const consultingAreaGroups: AreaGroup[] = [
  {
    group: "Automation Systems",
    items: ["SAS", "IEC 61850", "IEC 60870-5-104", "RTU/SCADA"],
  },
  {
    group: "Infrastructure & Architecture",
    items: ["Data Center Automation", "EPMS", "Automation Architecture"],
  },
  {
    group: "Project Execution",
    items: ["Testing & Commissioning", "Troubleshooting"],
  },
];
