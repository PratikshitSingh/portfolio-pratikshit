import type { SectionName } from "./types";

/**
 * Intersection Observer thresholds for section auto-highlight in navbar
 *
 * Thresholds determine what percentage of a section must be visible
 * before it's marked as "active" in the floating navbar.
 *
 * - Smaller sections (Content < 500px): Use 0.5 (50% visibility)
 *   Example: About, Education - easier to see full section & detect properly
 *
 * - Large sections (Content > 1500px): Use lower threshold
 *   Example: Projects (0.15) - only ~300px needed visible to trigger
 *   Reason: Large sections rarely have 50% visible during normal scrolling
 *
 * - Default (0.75): Used for Skills section with centered content layout
 *   Rationale: Central positioning requires more scroll reference
 */
export const SECTION_THRESHOLDS: Partial<Record<SectionName, number>> = {
  Home: 0.5,       // Intro section - small, visible quickly
  About: 0.5,      // Compact cards - easy to detect
  Education: 0.5,  // Timeline cards - manageable height
  Experience: 0.5, // Timeline with 5 items - moderate-to-large
  Projects: 0.15,  // Large: ~2000px, 7 project cards with animations
  Skills: 0.75,    // Default: centered grid layout needs higher threshold
  Contact: 0.75,   // Default: form section at bottom
};

/**
 * Get the Intersection Observer threshold for a section
 * Falls back to 0.75 if section not explicitly defined
 */
export function getSectionThreshold(sectionName: SectionName): number {
  return SECTION_THRESHOLDS[sectionName] ?? 0.75;
}
