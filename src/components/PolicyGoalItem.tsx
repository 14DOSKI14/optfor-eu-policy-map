/**
 * PolicyGoalItem.tsx — A single policy goal row inside the DetailPanel.
 *
 * Visual layout: teal dot → clickable title link → short description
 *
 * The teal dot matches the "Policy Goals" symbol in Legend.tsx.
 * If you change the color here, update the legend too.
 *
 * All links open in a new tab. "noopener noreferrer" on external links
 * is a security best practice — it prevents the new tab from getting
 * access to this page via "window.opener".
 */

import React from "react";

import { PolicyGoal } from "../types/policy";

interface PolicyGoalItemProps {
  goal: PolicyGoal;
}

// Small arrow icon shown next to the link to indicate it opens in a new tab
const ExternalLinkIcon: React.FC = () => (
  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const PolicyGoalItem: React.FC<PolicyGoalItemProps> = ({ goal }) => (
  <div className="flex items-start gap-2 pl-1">
    {/* Teal dot — matches the Legend symbol */}
    <span className="w-2 h-2 bg-optfor-teal rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
    <div>
      <a
        href={goal.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm font-medium text-optfor-text hover:text-optfor-teal transition-colors inline-flex items-center gap-1"
      >
        {goal.title}
        <ExternalLinkIcon />
        <span className="sr-only">(opens in new tab)</span>
      </a>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">
        {goal.description}
      </p>
    </div>
  </div>
);

export default PolicyGoalItem;