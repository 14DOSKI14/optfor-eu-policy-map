/**
 * DetailPanel.tsx — Side panel that shows full details for a selected policy domain.
 *
 * Rendered and positioned by App.tsx using "position: absolute" inside the map
 * container. This means the panel:
 *   - Is exactly as tall as the map container
 *   - Scrolls naturally with the page (does not float over the footer)
 *   - Resets its own scroll to the top each time a new domain is selected
 *
 * To close the panel, the user clicks the X button or clicks outside it
 * (the click-blocker in App.tsx handles outside clicks).
 */

import React, { useEffect, useRef } from "react";

import { PolicyDomain } from "../types/policy";
import PolicyDocumentItem from "./PolicyDocumentItem";
import PolicyGoalItem from "./PolicyGoalItem";

interface DetailPanelProps {
  policy: PolicyDomain;
  onClose: () => void;
}

// The X button icon inside the close button
const CloseIcon: React.FC = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Small animated hint shown when the panel has more content below the fold
const ScrollIndicator: React.FC = () => (
  <div className="px-4 sm:px-6 pb-3 flex-shrink-0">
    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
      <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span>Scroll for more</span>
    </div>
  </div>
);

const DetailPanel: React.FC<DetailPanelProps> = ({ policy, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const goalCount  = policy.goals?.length ?? 0;
  const docCount   = policy.documents?.length ?? 0;
  const hasContent = goalCount > 0 || docCount > 0;

  // Scroll back to the top whenever the user selects a different domain
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [policy.id]);

  return (
    <div
      className="w-72 sm:w-80 bg-white rounded-l-lg flex flex-col"
      role="complementary"
      aria-label={`Details for ${policy.title}`}
      style={{
        animation: "panelSlide 0.2s ease-out", // defined in index.css
        boxShadow: "-6px 0 24px rgba(0,0,0,0.08), -2px 0 6px rgba(0,0,0,0.04)",
        height: "100%",   // fills the absolute wrapper in App.tsx exactly
        position: "relative",
        zIndex: 30,
      }}
    >
      {/* Header row — title on the left, close button on the right */}
      <div className="flex justify-between items-start p-4 sm:p-6 pb-3 flex-shrink-0">
        <h3 className="text-lg sm:text-xl font-bold text-optfor-text pr-4">
          {policy.title}
        </h3>

        {/*
         * e.stopPropagation() prevents the click from bubbling up to the
         * click-blocker in App.tsx, which would fire onClose() a second time.
         */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close panel"
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-optfor-green"
          style={{ position: "relative", zIndex: 40, pointerEvents: "auto" }}
        >
          <CloseIcon />
        </button>
      </div>

      {hasContent && <ScrollIndicator />}

      {/* Scrollable content area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-6 pb-4 sm:pb-6">
        <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
          {policy.description}
        </p>

        {/* Policy Goals section — only shown if this domain has goals */}
        {goalCount > 0 && (
          <section className="mb-6" aria-labelledby="goals-heading">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-optfor-teal rounded-full" aria-hidden="true" />
              <h4 id="goals-heading" className="text-xs sm:text-sm font-bold text-optfor-text uppercase tracking-wide">
                Policy Goals
              </h4>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {policy.goals!.map((goal, index) => (
                <PolicyGoalItem key={`goal-${index}`} goal={goal} />
              ))}
            </div>
          </section>
        )}

        {/* Policy Documents section — only shown if this domain has documents */}
        {docCount > 0 && (
          <section aria-labelledby="documents-heading">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-optfor-blue rotate-45" aria-hidden="true" />
              <h4 id="documents-heading" className="text-xs sm:text-sm font-bold text-optfor-text uppercase tracking-wide">
                Policy Documents
              </h4>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {policy.documents!.map((doc, index) => (
                <PolicyDocumentItem key={`doc-${index}`} document={doc} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailPanel;