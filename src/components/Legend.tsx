/**
 * Legend.tsx — Symbol key bar shown below the policy map.
 *
 * Explains the three visual symbols used on the map and in the detail panel:
 *   ■ Beige box    — Policy Domain (the clickable boxes on the map)
 *   ● Teal circle  — Policy Goal
 *   ◆ Blue diamond — Policy Document
 *
 * Each item has a hover/focus tooltip with a short description.
 * The icon styles here intentionally match the actual symbols in
 * PolicyDomainBox, PolicyGoalItem, and PolicyDocumentItem — if you
 * change a symbol color or shape there, update the matching entry in
 * LEGEND_ITEMS below too.
 */

import React, { useCallback, useState } from "react";

// ── Tooltip ───────────────────────────────────────────────────────────────────

interface TooltipProps {
  text: string;          // text shown in the bubble
  children: React.ReactNode;
}

/**
 * Simple hover/focus tooltip that appears above its trigger element.
 * Works with keyboard navigation too (shows on focus, hides on blur).
 */
const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  return (
    <div
      className="relative inline-flex items-center cursor-help"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50"
          role="tooltip"
        >
          {text}
          {/* Small triangle pointing down toward the trigger */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

// ── Legend items ──────────────────────────────────────────────────────────────

interface LegendItemConfig {
  label: string;
  tooltip: string;
  iconClass: string; // Tailwind classes — must match the actual map symbol
}

// To add a new legend entry, just add an object to this array
const LEGEND_ITEMS: readonly LegendItemConfig[] = [
  {
    label:     "Policy Domains",
    tooltip:   "Thematic areas of EU policy affecting forests",
    iconClass: "w-3.5 h-3.5 bg-optfor-beige border border-optfor-text/20 rounded-sm",
  },
  {
    label:     "Policy Goals",
    tooltip:   "Specific objectives and targets within each domain",
    iconClass: "w-3.5 h-3.5 bg-optfor-teal rounded-full",
  },
  {
    label:     "Policy Documents",
    tooltip:   "Official EU regulations, directives and strategies",
    iconClass: "w-3.5 h-3.5 bg-optfor-blue rotate-45 rounded-sm",
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────────────

const Legend: React.FC = () => (
  <div className="flex justify-center py-2 flex-shrink-0" role="region" aria-label="Map legend">
    <div
      className="flex items-center gap-5 sm:gap-8 px-5 py-2.5 rounded-lg shadow-lg text-xs sm:text-sm text-gray-700 border border-white/30"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)", // needed for Safari
      }}
    >
      {LEGEND_ITEMS.map(({ label, tooltip, iconClass }) => (
        <Tooltip key={label} text={tooltip}>
          <div className="flex items-center gap-2">
            <span className={iconClass} aria-hidden="true" />
            <span className="font-medium">{label}</span>
          </div>
        </Tooltip>
      ))}
    </div>
  </div>
);

export default Legend;