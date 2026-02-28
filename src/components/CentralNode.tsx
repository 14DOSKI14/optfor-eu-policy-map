/**
 * @file CentralNode.tsx
 * @description Hub button at the centre of the policy map.
 *
 * Positioned at (50%, 50%) of the {@link PolicyMap} container with
 * `translate(-50%, -50%)` to centre on that anchor point rather than
 * aligning its top-left corner to it.
 *
 * Clicking opens {@link CentralNodeModal} via the callback wired in App.tsx.
 * Button label is driven by `centralNodeContent.title` in `policyData.ts` —
 * update text there without touching this component.
 */

import React from 'react';

import { centralNodeContent } from '../data/policyData';

interface CentralNodeProps {
  /**
   * Callback fired on click. Wired to `handleCentralNodeClick` in App.tsx,
   * which opens {@link CentralNodeModal}.
   */
  onClick?: () => void;
}

const CentralNode: React.FC<CentralNodeProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Learn more about Forest Ecosystem-Resilience Strategies"
    className="absolute bg-white border-2 border-optfor-green rounded-lg p-4 sm:p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-optfor-green focus:ring-offset-2"
    style={{
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      /*
       * clamp(220px, 25vw, 300px):
       * Fluid sizing — never narrower than 220px, never wider than 300px,
       * scales proportionally with the viewport between those bounds.
       */
      width: 'clamp(220px, 25vw, 300px)',
      maxWidth: '90%',
      zIndex: 10,
      boxShadow: '0 4px 15px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.08)',
    }}
  >
    <h2 className="text-base sm:text-lg md:text-xl font-bold text-optfor-text text-center">
      {centralNodeContent.title}
    </h2>
  </button>
);

export default CentralNode;