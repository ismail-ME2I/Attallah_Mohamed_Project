export interface AudienceEntry {
  heading: string;
  description: string;
}

/**
 * "Who This May Be Relevant For" — approved copy verbatim, Sprint 06
 * Section 8. These are audience descriptions to help a visitor
 * self-identify, not claims of existing clients.
 */
export const audienceEntries: AudienceEntry[] = [
  {
    heading: "Engineering Teams",
    description: "Technical teams dealing with automation architecture, integration, or commissioning questions.",
  },
  {
    heading: "Project Teams",
    description: "Teams working through implementation, testing, commissioning, or troubleshooting challenges.",
  },
  {
    heading: "Automation Professionals",
    description:
      "Engineers and specialists looking for experienced technical perspective on SAS, IEC 61850, RTU/SCADA, or related systems.",
  },
  {
    heading: "Data Center / Infrastructure Teams",
    description: "Teams dealing with automation or EPMS-related technical questions.",
  },
];
