/**
 * @file vite.config.ts
 * @description Vite build configuration for the OptFor-EU Policy Visualization.
 *
 * Intentionally minimal — Vite's defaults cover all project requirements:
 *   - HMR (Hot Module Replacement) in development
 *   - TypeScript transpilation via esbuild
 *   - PostCSS and Tailwind CSS processing
 *   - Production bundle: tree-shaking, minification, code splitting
 *   - Static assets in `/public` copied as-is to the build output root
 *
 * If the build needs extending (output directory, path aliases, chunk splitting),
 * add options here.
 *
 * @see https://vitejs.dev/config/
 */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    /**
     * Official Vite plugin for React.
     * Enables the JSX transform (no `import React` required in every file),
     * Fast Refresh during development, and React-specific build optimisations.
     */
    react(),
  ],
});