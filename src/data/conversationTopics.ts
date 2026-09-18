export interface Topic {
  heading: string;
  description: string;
}

/**
 * "What a Technical Conversation Can Cover" — approved copy verbatim,
 * Sprint 06 Section 5. Framed as discussion topics, not delivered services.
 */
export const conversationTopics: Topic[] = [
  {
    heading: "System Architecture",
    description: "Discussing automation architecture, system integration, and technical design decisions.",
  },
  {
    heading: "Communication & Integration",
    description: "IEC 61850, IEC 104, RTU/SCADA integration, and communication-related challenges.",
  },
  {
    heading: "Testing & Commissioning",
    description: "Technical questions around testing, commissioning, troubleshooting, and site execution.",
  },
  {
    heading: "Data Center Automation",
    description: "Automation and EPMS-related technical challenges in data center environments.",
  },
];
