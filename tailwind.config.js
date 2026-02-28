/**
 * @file tailwind.config.js
 * @description Tailwind CSS configuration for the OptFor-EU Policy Visualization.
 *
 * Defines the brand colour palette and font stack shared across all components.
 *
 * Before renaming or removing any `optfor-*` colour token, search the entire
 * codebase for `optfor-<name>`. Tailwind's JIT compiler purges classes it cannot
 * find in the scanned files — a rename without updating components will silently
 * drop styles from the production bundle.
 *
 * @see https://tailwindcss.com/docs/configuration
 */

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {

      /**
       * Brand colour palette sourced from the official OptFor-EU website.
       * Usage: `className="bg-optfor-green text-optfor-text"`
       *
       * Token reference:
       *   green        #9BC53D  — Primary accent (borders, highlights, focus rings)
       *   purple       #5B3A6A  — Domain tag chip text
       *   wave-purple  #453f84  — PurpleWaveDecoration and footer background
       *   beige        #D4C4A8  — Policy domain box background
       *   beige-hover  #c9b899  — Hover state for beige surfaces
       *   teal         #2A9D8F  — Policy goal indicators (teal dots)
       *   blue         #3B82F6  — Policy document indicators (blue diamonds)
       *   bg           #ffffff  — Reserved white baseline
       *   text         #333333  — Default body and heading text
       */
      colors: {
        optfor: {
          green:          '#9BC53D',
          purple:         '#5B3A6A',
          'wave-purple':  '#453f84',
          beige:          '#D4C4A8',
          'beige-hover':  '#c9b899',
          teal:           '#2A9D8F',
          blue:           '#3B82F6',
          bg:             '#ffffff',
          text:           '#333333',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

    },
  },

  plugins: [],
};