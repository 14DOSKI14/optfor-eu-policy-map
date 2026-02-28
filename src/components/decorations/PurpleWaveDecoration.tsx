/**
 * @file PurpleWaveDecoration.tsx
 * @description Decorative purple wave rendered above the footer.
 *
 * Uses the same SVG paths as {@link GreenWaveDecoration} with Y coordinates
 * inverted so the waves open upward. `scaleX(-1)` horizontally mirrors the
 * result, shifting the crests to different positions so the two decorations
 * don't appear identical when both are visible.
 *
 * The solid block (400px) intentionally exceeds the container height (280px)
 * to extend the fill seamlessly into the footer below with no gap.
 *
 * Purely decorative — no props, no state, no interaction.
 */

import React from 'react';

const PurpleWaveDecoration: React.FC = () => (
  <div
    className="relative w-full pointer-events-none"
    style={{ height: '280px' }}
    aria-hidden="true"
  >
    <div
      className="absolute bottom-0 left-0 w-full"
      style={{ height: '400px', backgroundColor: '#453f84' }}
    />

    <svg
      className="absolute w-full"
      style={{ bottom: '400px', height: '200px', transform: 'scaleX(-1)' }}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="#453f84" opacity="0.33" d="M0,100 V25 C250,-20 400,70 750,25 C875,2 1000,40 1000,40 V100 Z" />
      <path fill="#453f84" opacity="0.66" d="M0,100 V50 C200,5 450,85 800,40 C950,18 1000,60 1000,60 V100 Z" />
      <path fill="#453f84"                d="M0,100 V65 C150,20 600,99 850,52 C925,40 1000,80 1050,75 V100 Z" />
    </svg>
  </div>
);

export default PurpleWaveDecoration;