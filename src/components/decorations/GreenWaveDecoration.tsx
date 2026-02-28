/**
 * @file GreenWaveDecoration.tsx
 * @description Decorative green wave rendered at the top of the page.
 *
 * Three SVG paths at increasing opacity (0.33 → 0.66 → 1.0) produce a
 * layered-depth effect. The solid rectangle behind them closes any gap
 * between the page top and the first wave edge.
 *
 * Purely decorative — no props, no state, no interaction.
 * `aria-hidden` and `pointer-events-none` exclude it from the accessibility
 * tree and prevent it from intercepting clicks.
 */

import React from 'react';

const GreenWaveDecoration: React.FC = () => (
  <div
    className="absolute top-0 left-0 w-full pointer-events-none"
    style={{ height: '600px', zIndex: 1 }}
    aria-hidden="true"
  >
    {/* Solid block anchors the decoration flush with the page top. */}
    <div
      className="absolute top-0 left-0 w-full bg-[#6EB07A]"
      style={{ height: '140px' }}
    />

    {/*
     * preserveAspectRatio="none" lets the SVG stretch to full viewport width
     * without maintaining the 1000:100 viewBox ratio.
     */}
    <svg
      className="absolute w-full"
      style={{ top: '90px', height: '200px' }}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="#6EB07A" opacity="0.33" d="M0,0 V75 C250,120 400,30 750,75 C875,98 1000,60 1000,60 V0 Z" />
      <path fill="#6EB07A" opacity="0.66" d="M0,0 V50 C200,95 450,15 800,60 C950,82 1000,40 1000,40 V0 Z" />
      <path fill="#6EB07A"                d="M0,0 V35 C150,80 600,1 850,48 C925,60 1000,20 1050,25 V0 Z" />
    </svg>
  </div>
);

export default GreenWaveDecoration;