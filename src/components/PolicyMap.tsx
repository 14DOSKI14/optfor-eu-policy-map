/**
 * @file PolicyMap.tsx
 * @description Interactive visualization canvas displaying all policy domains.
 *
 * Three absolutely-positioned layers within a single relative container:
 *   1. {@link ConnectingLines} — SVG lines from centre (50%, 50%) to each domain box
 *   2. {@link CentralNode}     — Clickable hub anchored at the centre
 *   3. {@link PolicyDomainBox} — One box per domain, placed by percentage coordinates
 *
 * Selection toggle: clicking an already-selected domain deselects it,
 * closing the panel without requiring the user to hit the × button.
 * This logic lives here rather than in App.tsx because it is an interaction
 * concern of the map, not of the application shell.
 */

import React, { useCallback } from 'react';

import { PolicyDomain } from '../types/policy';
import CentralNode from './CentralNode';
import PolicyDomainBox from './PolicyDomainBox';

interface PolicyMapProps {
  /** `readonly` matches the `as const` assertion on `policyData` in policyData.ts. */
  policies: readonly PolicyDomain[];
  /** Currently selected domain, or `null` if none. Drives line highlight and panel. */
  selectedPolicy: PolicyDomain | null;
  /**
   * Callback to update the selected domain in App.tsx state.
   * Accepts `null` to deselect (close the panel).
   */
  onSelectPolicy: (policy: PolicyDomain | null) => void;
  /** Opens {@link CentralNodeModal}. Optional — map renders without it. */
  onCentralNodeClick?: () => void;
}

interface ConnectingLinesProps {
  policies: readonly PolicyDomain[];
  /** ID of the currently selected domain, used to highlight its line. */
  selectedId: string | null;
}

/**
 * Decorative SVG overlay drawing straight lines from the map centre to each
 * domain box anchor point.
 *
 * `pointer-events-none` is required — without it the SVG layer intercepts
 * click events before they reach the domain boxes underneath.
 *
 * @param props - {@link ConnectingLinesProps}
 */
const ConnectingLines: React.FC<ConnectingLinesProps> = ({ policies, selectedId }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 5 }}
    aria-hidden="true"
  >
    {policies.map((policy) => {
      const isSelected = selectedId === policy.id;
      return (
        <line
          key={policy.id}
          x1="50%" y1="50%"
          x2={`${policy.position.x}%`}
          y2={`${policy.position.y}%`}
          stroke={isSelected ? '#9BC53D' : '#c4b896'}
          strokeWidth={isSelected ? 2.5 : 1.5}
          className="transition-all duration-300"
        />
      );
    })}
  </svg>
);

/**
 * Root map component. Renders the canvas, wires click handlers, and passes
 * selection state down to each domain box.
 *
 * @param props - {@link PolicyMapProps}
 */
const PolicyMap: React.FC<PolicyMapProps> = ({
  policies,
  selectedPolicy,
  onSelectPolicy,
  onCentralNodeClick,
}) => {

  /**
   * Toggles selection: clicking the active domain deselects it (`null`),
   * clicking an inactive domain selects it.
   * Stable reference via `useCallback` — passed to every PolicyDomainBox.
   *
   * @param policy - The domain box that was clicked.
   */
  const handlePolicyClick = useCallback(
    (policy: PolicyDomain): void => {
      const isCurrentlySelected = selectedPolicy?.id === policy.id;
      onSelectPolicy(isCurrentlySelected ? null : policy);
    },
    [selectedPolicy, onSelectPolicy],
  );

  return (
    <div
      className="relative w-full"
      /*
       * minHeight prevents the container from collapsing on narrow viewports
       * before the absolutely-positioned boxes have room to spread out.
       */
      style={{ minHeight: '630px' }}
      role="application"
      aria-label="Interactive policy map"
    >
      <ConnectingLines policies={policies} selectedId={selectedPolicy?.id ?? null} />
      <CentralNode onClick={onCentralNodeClick} />

      {policies.map((policy) => (
        <PolicyDomainBox
          key={policy.id}
          policy={policy}
          isSelected={selectedPolicy?.id === policy.id}
          onClick={() => handlePolicyClick(policy)}
        />
      ))}
    </div>
  );
};

export default PolicyMap;