/**
 * @file Header.tsx
 * @description Site header matching the official OptFor-EU website design.
 *
 * Two sections rendered top-to-bottom:
 *   1. Thin purple bar (`#5B5B99`) with X and LinkedIn icons right-aligned.
 *   2. Transparent logo row — the green wave colour shows through beneath the logo.
 *
 * Rendered inside an `absolute`-positioned wrapper in App.tsx so it floats
 * over the green wave with no layout gap between them.
 *
 * @remarks
 * The logo uses a root-relative URL string (`/logo.png`), not an ES module import.
 * Vite copies `/public` assets to the build output root as-is; importing them as
 * modules causes a build error. The leading `/` resolves correctly regardless of
 * which subfolder the consuming component lives in.
 */

import React from 'react';

/** X (formerly Twitter) wordmark icon. The parent `<a>` carries the accessible label. */
const XIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

/** LinkedIn logo icon. The parent `<a>` carries the accessible label. */
const LinkedInIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Header: React.FC = () => (
  <header className="flex-shrink-0" style={{ position: 'relative', zIndex: 20 }}>
    {/* Purple social bar */}
    <div
      className="w-full flex justify-end items-center px-6 py-1.5 gap-3"
      style={{ backgroundColor: '#453f84' }}
    >
      <a
        href="https://twitter.com/OptForEU"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="OptFor-EU on X (Twitter)"
        className="text-white hover:opacity-70 transition-opacity"
      >
        <XIcon />
      </a>
      <a
        href="https://www.linkedin.com/company/optfor-eu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="OptFor-EU on LinkedIn"
        className="text-white hover:opacity-70 transition-opacity"
      >
        <LinkedInIcon />
      </a>
    </div>

    {/* Transparent logo row — wave shows through behind the logo */}
    <div className="px-4 sm:px-6 py-2" style={{ background: 'transparent' }}>
      <img
        src="/Opt4EU-logo-ideas_no-background-1536x1536.png"
        alt="OptFor-EU Logo"
        className="h-28 sm:h-36 w-auto"
      />
    </div>
  </header>
);

export default Header;