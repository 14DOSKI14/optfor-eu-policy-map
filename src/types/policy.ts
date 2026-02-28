/**
 * @file policy.ts
 * @description Core domain interfaces for the OptFor-EU Policy Visualization.
 *
 * Single source of truth for all data shapes in the application.
 * Extend the model here first — TypeScript will surface every callsite
 * that needs updating downstream.
 *
 * Dependency direction (strictly one-way):
 *   policy.ts ← policyData.ts ← components ← App.tsx
 */

/**
 * A single actionable objective within a policy domain.
 * Rendered as a teal-dot list row in {@link DetailPanel} via {@link PolicyGoalItem}.
 */
export interface PolicyGoal {
  readonly title: string;
  readonly description: string;
  /** Always an external EU documentation URL; opened in a new tab. */
  readonly url: string;
}

/**
 * An official EU regulation, directive, or strategy.
 * Rendered as a blue-diamond list row in {@link DetailPanel} via {@link PolicyDocumentItem}.
 */
export interface PolicyDocument {
  readonly title: string;
  readonly description: string;
  /** Always an external EU source URL; opened in a new tab. */
  readonly url: string;
}

/**
 * Percentage-based (0–100) coordinates for placing a domain box on the map canvas.
 * Using percentages rather than fixed pixels keeps the layout responsive to container size.
 * The central node is fixed at `{ x: 50, y: 50 }`.
 */
export interface Position {
  /** Horizontal distance from the left edge as a percentage of container width. */
  readonly x: number;
  /** Vertical distance from the top edge as a percentage of container height. */
  readonly y: number;
}

/**
 * One of the seven EU policy areas rendered on the interactive map.
 * Each domain is displayed as a clickable {@link PolicyDomainBox} connected
 * to the central node by an SVG line.
 */
export interface PolicyDomain {
  /**
   * Stable unique identifier (e.g. `'forest-focused'`).
   * Used as the React list key and as the selection tracker in App.tsx state.
   * Must not change between renders or data updates.
   */
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly position: Position;
  /** Optional — not all domains may have goals defined. */
  readonly goals?: readonly PolicyGoal[];
  /** Optional — not all domains may have documents defined. */
  readonly documents?: readonly PolicyDocument[];
}

/**
 * All content for the central hub button and the modal it opens.
 * There is exactly one instance of this type, exported from `policyData.ts`
 * as `centralNodeContent`.
 */
export interface CentralNodeContent {
  /**
   * Button label rendered on the map. Supports `\n` for deliberate line breaks
   * within the button — used to prevent the title from overflowing its container.
   */
  readonly title: string;
  readonly description: string;
  /** Rendered as a teal-dot bulleted list in the modal. */
  readonly objectives: readonly string[];
  /** Rendered as a blue-diamond bulleted list in the modal. */
  readonly strategies: readonly string[];
  /**
   * Pill-shaped tag chips at the modal footer.
   * Should mirror the `title` values in `policyData` — keep in sync if
   * domain titles ever change.
   */
  readonly connectedDomains: readonly string[];
}