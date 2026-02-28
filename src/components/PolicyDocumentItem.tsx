/**
 * PolicyDocumentItem.tsx — A single policy document row inside the DetailPanel.
 *
 * Visual layout: blue diamond → clickable title link → short description
 *
 * The blue diamond (a square rotated 45°) matches the "Policy Documents"
 * symbol in Legend.tsx. If you change the color here, update the legend too.
 *
 * Structurally identical to PolicyGoalItem.tsx — same layout, different color.
 * If you change the layout, update both files.
 */

import React from "react";

import { PolicyDocument } from "../types/policy";

interface PolicyDocumentItemProps {
  document: PolicyDocument;
}

// Small arrow icon shown next to the link to indicate it opens in a new tab
const ExternalLinkIcon: React.FC = () => (
  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const PolicyDocumentItem: React.FC<PolicyDocumentItemProps> = ({ document }) => (
  <div className="flex items-start gap-2 pl-1">
    {/* Blue diamond — a square rotated 45°, matches the Legend symbol */}
    <span className="w-2 h-2 bg-optfor-blue rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
    <div>
      <a
        href={document.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm font-medium text-optfor-text hover:text-optfor-blue transition-colors inline-flex items-center gap-1"
      >
        {document.title}
        <ExternalLinkIcon />
        <span className="sr-only">(opens in new tab)</span>
      </a>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">
        {document.description}
      </p>
    </div>
  </div>
);

export default PolicyDocumentItem;