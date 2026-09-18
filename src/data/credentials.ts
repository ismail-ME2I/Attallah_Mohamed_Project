export interface Credential {
  title: string;
  detail?: string;
}

/**
 * About page credential ledger — approved per docs/00_PROJECT_CONTEXT.md
 * Section 6 and docs/D02_SOURCE_AUDIT.md. Split into two groups (D06
 * Section 14 explicitly defers Cairo University to this page, distinct
 * from the homepage's curated 6-item Authority fact strip).
 */
export const certifications: Credential[] = [
  { title: "PMP®" },
  { title: "Certified EPAS (Legacy PACiS) Trainer" },
  { title: "Approved SAS Testing & Commissioning Engineer" },
  { title: "COE Training Level 1 & 2", detail: "PACiS & EcoSUI" },
];

export const education: Credential[] = [
  {
    title: "B.Sc. Electrical Engineering",
    detail: "Electrical Power & Machines · Cairo University · 2005–2010",
  },
];

export const recognitions: string[] = ["Invensys Spot Award", "Schneider Electric — Champion of the Month"];
