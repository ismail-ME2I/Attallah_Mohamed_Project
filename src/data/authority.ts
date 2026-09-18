export interface Fact {
  value: string;
  label?: string;
}

/**
 * Phase 1 Authority fact strip — approved list per
 * docs/D06_DESIGN_SYSTEM_IMPLEMENTATION.md Section 14.
 * B.Sc./Cairo University is intentionally excluded: D06 marks its inclusion
 * here as [DECISION REQUIRED] and defers it to the About page otherwise.
 */
export const authorityFacts: Fact[] = [
  { value: "15+", label: "Years in Industrial & Energy Automation" },
  { value: "Datacenter Automation Technical Leader", label: "Schneider Electric" },
  { value: "PMP®", label: "Certified" },
  { value: "Certified EPAS (Legacy PACiS) Trainer" },
  { value: "Approved SAS Testing & Commissioning Engineer" },
  { value: "44K+", label: "LinkedIn Followers" },
];
