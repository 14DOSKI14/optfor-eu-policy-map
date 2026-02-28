/**
 * PolicyDomainBox.tsx — A clickable domain box on the interactive policy map.
 *
 * Each box is positioned using percentage coordinates from policyData.ts.
 * "translate(-50%, -50%)" centers the box on those coordinates so the
 * stored x/y point to the box center, not its top-left corner.
 *
 * When a box is selected:
 *   - Border turns green (optfor-green)
 *   - A green glow appears behind the box
 *   - A badge appears below showing how many goals and documents it has
 *   - z-index increases so it renders above neighboring boxes
 *
 * To add a new domain box, add an entry to policyData.ts — no changes needed here.
 */

import React, { useMemo } from "react";

import { PolicyDomain } from "../types/policy";

interface PolicyDomainBoxProps {
  policy: PolicyDomain;
  isSelected: boolean;
  onClick: () => void;  // handled by PolicyMap — deselection logic lives there
}

// Box shadow values split into named parts so they are easy to read and adjust
const SHADOW_PARTS = {
  outline:  "0 0 0 1px rgba(0,0,0,0.2)",                              // always visible thin ring
  selected: "0 8px 25px rgba(155,197,61,0.3), 0 4px 10px rgba(0,0,0,0.1)", // green glow when selected
  default:  "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",     // soft shadow at rest
} as const;

const PolicyDomainBox: React.FC<PolicyDomainBoxProps> = ({ policy, isSelected, onClick }) => {
  const goalCount = policy.goals?.length ?? 0;
  const docCount  = policy.documents?.length ?? 0;

  // Compose the full box-shadow string — only recalculates when selection changes
  const boxShadow = useMemo((): string => (
    `${SHADOW_PARTS.outline}, ${isSelected ? SHADOW_PARTS.selected : SHADOW_PARTS.default}`
  ), [isSelected]);

  return (
    <div
      className="absolute"
      style={{
        left: `${policy.position.x}%`,
        top:  `${policy.position.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isSelected ? 20 : 10,
      }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isSelected}
        aria-label={`${policy.title}. ${goalCount} policy goals, ${docCount} documents.`}
        className={`
          px-3 py-2 sm:px-5 sm:py-3 rounded-lg text-left
          bg-optfor-beige border-2 cursor-pointer
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-optfor-green focus:ring-offset-2
          w-[110px] sm:w-[160px]
          ${isSelected ? "border-optfor-green" : "border-transparent"}
        `}
        style={{ boxShadow, outline: "none" }}
      >
        <span className="text-[10px] sm:text-sm font-semibold text-optfor-text block text-center leading-tight">
          {policy.title}
        </span>
      </button>

      {/* Goals/documents count badge — only visible when selected */}
      {isSelected && (
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{ top: "100%", transform: "translateX(-50%)", marginTop: "8px", zIndex: 15 }}
          role="status"
          aria-live="polite"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-optfor-teal rounded-full" aria-hidden="true" />
              <span className="font-medium">{goalCount}</span> Goals
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-optfor-blue rotate-45" aria-hidden="true" />
              <span className="font-medium">{docCount}</span> Documents
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolicyDomainBox;