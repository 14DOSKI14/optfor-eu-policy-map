/**
 * CentralNodeModal.tsx — Popup shown when the user clicks the center node on the map.
 *
 * Displays an overview of "Forest Ecosystem-Resilience Strategies" with:
 *   - A description
 *   - Main objectives (teal dots)
 *   - Strategies (blue diamonds)
 *   - Connected policy areas (chip tags)
 *
 * The text content lives in policyData.ts under "centralNodeContent".
 * To update the text, edit it there — do not hardcode anything here.
 *
 * The modal closes when:
 *   - The user clicks the X button
 *   - The user clicks the dark backdrop behind the modal
 *
 * While open, page scrolling is disabled so the backdrop covers the full screen.
 * Scrolling is always restored when the modal closes, even if something crashes.
 */

import React, { useEffect } from "react";

import { centralNodeContent } from "../data/policyData";

interface CentralNodeModalProps {
  isOpen: boolean;   // controlled by App.tsx
  onClose: () => void;
}

// X button icon
const CloseIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CentralNodeModal: React.FC<CentralNodeModalProps> = ({ isOpen, onClose }) => {

  // Lock page scroll while the modal is open, restore it when it closes
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Return nothing when closed — no hidden DOM nodes
  if (!isOpen) return null;

  // Close only when the click lands on the backdrop itself, not the modal card
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    // Dark backdrop — z-index 100 puts it above the map (10) and header (20)
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 100, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* White modal card — animation defined in index.css as "modalFadeIn" */}
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        style={{ animation: "modalFadeIn 0.3s ease-out", overscrollBehavior: "contain" }}
      >
        <div className="p-6">

          {/* Title row */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 id="modal-title" className="text-xl font-bold text-gray-800 mb-2">
                Forest Ecosystem-Resilience Strategies
              </h2>
              <div className="w-16 h-1 rounded" style={{ backgroundColor: "#9BC53D" }} aria-hidden="true" />
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-optfor-green"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="space-y-5">

            {/* Description */}
            <section>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{centralNodeContent.description}</p>
            </section>

            {/* Objectives — teal dot indicator matches PolicyGoalItem */}
            <section>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Main Objectives</h3>
              <ul className="space-y-2">
                {centralNodeContent.objectives.map((objective, index) => (
                  <li key={`objective-${index}`} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#2A9D8F" }} aria-hidden="true" />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            {/* Strategies — blue diamond indicator matches PolicyDocumentItem */}
            <section>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Strategies</h3>
              <ul className="space-y-2">
                {centralNodeContent.strategies.map((strategy, index) => (
                  <li key={`strategy-${index}`} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rotate-45 mt-1.5 flex-shrink-0" style={{ backgroundColor: "#3B82F6" }} aria-hidden="true" />
                    {strategy}
                  </li>
                ))}
              </ul>
            </section>

            {/* Connected policy domains — shown as chip tags */}
            <section>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Connected Policy Areas</h3>
              <div className="flex flex-wrap gap-2">
                {centralNodeContent.connectedDomains.map((domain, index) => (
                  <span key={`domain-${index}`} className="px-3 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: "#D4C4A8", color: "#5B3A6A" }}>
                    {domain}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralNodeModal;