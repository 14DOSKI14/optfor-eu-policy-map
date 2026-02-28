/**
 * @file index.ts
 * @description Barrel export for all components.
 *
 * Centralises imports so consumers use a single path:
 * `import { Header, Footer, PolicyMap } from './components'`
 *
 * Add new components here to expose them through this entry point.
 */

// Layout
export { default as Footer } from './Footer';
export { default as Header } from './Header';
export { default as Legend } from './Legend';

// Map
export { default as CentralNode }      from './CentralNode';
export { default as CentralNodeModal } from './CentralNodeModal';
export { default as PolicyDomainBox }  from './PolicyDomainBox';
export { default as PolicyMap }        from './PolicyMap';

// Detail panel
export { default as DetailPanel }        from './DetailPanel';
export { default as PolicyDocumentItem } from './PolicyDocumentItem';
export { default as PolicyGoalItem }     from './PolicyGoalItem';

// Decorations — purely visual, no props or logic
export { default as GreenWaveDecoration }  from './decorations/GreenWaveDecoration';
export { default as PurpleWaveDecoration } from './decorations/PurpleWaveDecoration';