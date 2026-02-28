/**
 * @file main.tsx
 * @description Application entry point. Mounts the React tree into the DOM.
 *
 * The non-null assertion on `getElementById` is intentional — if `#root` is
 * absent the application cannot function, so throwing immediately is correct.
 * StrictMode is retained; it has no effect on production builds.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);