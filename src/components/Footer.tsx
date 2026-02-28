/**
 * Footer.tsx — Site footer matching the official OptFor-EU website.
 *
 * Layout (top to bottom):
 *   Main grid   — four columns: Shortcuts, Knowledge Sharing, Social Media, EU funding
 *   Bottom bar  — copyright text and legal links on a slightly darker purple strip
 *
 * Background color: #453f84 (the correct OptFor-EU brand purple).
 * Bottom bar:       #3a3570 (same hue, a bit darker for visual separation).
 *
 * Nav links are stored as arrays — to add or remove a link, just edit the array.
 * No need to touch any JSX.
 */

import React from "react";

// X (formerly Twitter) logo
const XIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

// LinkedIn logo
const LinkedInIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Footer: React.FC = () => (
  <footer className="relative" style={{ backgroundColor: "#453f84" }}>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Column 1 — Quick navigation links */}
        <nav aria-label="Shortcuts">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Shortcuts</h4>
          <ul className="space-y-2">
            {[
              { label: "About",        href: "https://optforeu.eu/about/" },
              { label: "The Project",  href: "https://optforeu.eu/10-things-to-know-about-the-project/" },
              { label: "Case Studies", href: "https://optforeu.eu/case-studies/" },
              { label: "News",         href: "https://optforeu.eu/news/" },
              { label: "Events",       href: "https://optforeu.eu/events/" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:opacity-80 transition-opacity">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 2 — Knowledge and research resources */}
        <nav aria-label="Knowledge sharing">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Knowledge sharing</h4>
          <ul className="space-y-2">
            {[
              { label: "Modelling and DSS",         href: "https://optforeu.eu/modelling-and-dss/" },
              { label: "Communication Material",    href: "https://optforeu.eu/learning/" },
              { label: "Project Glossary",          href: "https://optforeu.eu/glossary" },
              { label: "Publications",              href: "https://optforeu.eu/publications/" },
              { label: "Scientific Papers",         href: "https://optforeu.eu/scientific-papers/" },
              { label: "Links and other platforms", href: "https://optforeu.eu/links-and-other-platforms/" },
              { label: "Sister projects",           href: "https://optforeu.eu/sister-projects/" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:opacity-80 transition-opacity">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 — Social media links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Social media</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://twitter.com/OptForEU" target="_blank" rel="noopener noreferrer" aria-label="OptFor-EU on X (Twitter)" className="flex items-center gap-2 text-sm text-white hover:opacity-80 transition-opacity">
                <XIcon />X
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/showcase/optfor-eu/" target="_blank" rel="noopener noreferrer" aria-label="OptFor-EU on LinkedIn" className="flex items-center gap-2 text-sm text-white hover:opacity-80 transition-opacity">
                <LinkedInIcon />LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 — EU funding disclaimer */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src="https://optforeu.eu/wp-content/uploads/2023/04/flag_eu-300x200.jpeg"
            alt="European Union Flag"
            className="h-16 w-auto mb-4"
          />
          <p className="text-xs text-white leading-relaxed">
            Funded by the European Union Horizon Europe programme, under Grant agreement n°101060554.
            Views and opinions expressed are however those of the author(s) only and do not necessarily
            reflect those of the European Union or the European Research Executive Agency.
            Neither the European Union nor the granting authority can be held responsible for them.
          </p>
        </div>

      </div>
    </div>

    {/* Bottom bar — slightly darker purple for visual separation */}
    <div style={{ backgroundColor: "#3a3570" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white gap-2">
          <p>All copyrights © 2023 reserved to the OptFor-EU</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            <span aria-hidden="true">•</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Cookie Policy</a>
            <span aria-hidden="true">•</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Update tracking permissions</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;