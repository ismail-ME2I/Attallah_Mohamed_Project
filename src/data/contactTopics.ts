export interface ContactTopic {
  heading: string;
  description: string;
}

/**
 * "Why Contact / What to Discuss" — approved copy verbatim, Sprint 07
 * Section 6. Enquiry-routing categories, not a claim that all are
 * currently accepted commercially.
 */
export const contactTopics: ContactTopic[] = [
  {
    heading: "Technical Challenge",
    description: "Automation, SAS, IEC 61850, RTU/SCADA, testing, commissioning, troubleshooting, or related technical questions.",
  },
  {
    heading: "Academy / Learning",
    description: "Questions about Easy Automation Academy and its courses.",
  },
  {
    heading: "Professional Conversation",
    description: "General professional or collaboration-related enquiries.",
  },
];
