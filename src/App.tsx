/**
 * App.tsx — Root component. Manages all top-level state and page layout.
 *
 * Page layout from top to bottom:
 *   Header              — fixed to top, z-index 20
 *   GreenWaveDecoration — decorative wave below the header
 *   PolicyMap           — the interactive circular map
 *   DetailPanel         — slides in from the right when a domain box is clicked
 *   Legend              — symbol key below the map
 *   PurpleWaveDecoration — decorative wave above the footer
 *   Footer              — site footer
 *   CentralNodeModal    — popup when the center node is clicked
 *
 * Key layout decision — why the panel uses "position: absolute" not "fixed":
 *   "fixed" would keep the panel stuck to the screen even when scrolling to
 *   the footer, causing them to overlap. "absolute" anchors the panel to the
 *   map container, so it scrolls away naturally with the rest of the page.
 *
 * Key layout decision — why the panel is outside the map's transform div:
 *   The map animates with CSS transform (shift + scale) when a panel opens.
 *   Any element inside a transformed parent loses "position: fixed" behavior.
 *   Keeping the panel as a sibling (not a child) avoids this entirely.
 */

import React, { useCallback, useState } from "react";

import {
  CentralNodeModal,
  DetailPanel,
  Footer,
  GreenWaveDecoration,
  Header,
  Legend,
  PolicyMap,
  PurpleWaveDecoration,
} from "./components";
import { policyData } from "./data/policyData";
import { PolicyDomain } from "./types/policy";

// Height of the header in pixels — used to push the map below it.
// Update this value if the header height ever changes.
const HEADER_HEIGHT_PX = 90;

const App: React.FC = () => {
  // Which policy domain box is currently selected (null = panel closed)
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyDomain | null>(null);

  // Whether the central node modal is open
  const [isCentralModalOpen, setIsCentralModalOpen] = useState<boolean>(false);

  const isPanelOpen = selectedPolicy !== null;

  // Close the panel before opening the modal — if both are open at the same
  // time the modal covers the panel's close button and traps the user.
  const handleCentralNodeClick = useCallback((): void => {
    setSelectedPolicy(null);
    setIsCentralModalOpen(true);
  }, []);

  const handleModalClose = useCallback((): void => setIsCentralModalOpen(false), []);
  const handlePanelClose = useCallback((): void => setSelectedPolicy(null), []);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      {/* Header sits above everything. Position absolute so the green wave
          shows through the transparent logo row beneath it. */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}>
        <Header />
      </div>

      {/* paddingTop pushes the map content below the absolute header */}
      <main className="flex-1 relative" style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }}>
        <GreenWaveDecoration />

        {/*
         * This div is the anchor point for the panel.
         * "position: relative" here is what makes the panel's
         * "position: absolute" attach to this div and not the whole page.
         *
         * z-index 30 keeps this container above the header (z-index 20)
         * so the panel's close button is always clickable.
         */}
        <div className="relative" style={{ minHeight: "630px", zIndex: 30 }}>

          {/* Map wrapper — shifts left and scales down when panel opens.
              The panel is a sibling of this div so it is NOT affected by the transform. */}
          <div
            className="transition-all duration-300 ease-out"
            style={{
              transform: isPanelOpen
                ? "translateX(-140px) scale(0.9)"
                : "translateX(0) scale(1)",
              transformOrigin: "center center",
            }}
          >
            <PolicyMap
              policies={policyData}
              selectedPolicy={selectedPolicy}
              onSelectPolicy={setSelectedPolicy}
              onCentralNodeClick={handleCentralNodeClick}
            />
          </div>

          {/* Detail panel — only rendered when a domain is selected.
              Pinned to the right side of the map container.
              Scrolls away with the page when the user scrolls to the footer. */}
          {selectedPolicy && (
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 200,
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
              }}
            >
              <DetailPanel policy={selectedPolicy} onClose={handlePanelClose} />
            </div>
          )}
        </div>
      </main>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Legend />
      </div>

      {/* Decorative wave that transitions the page into the purple footer */}
      <PurpleWaveDecoration />

      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>

      {/* Modal is always in the tree but returns null when closed */}
      <CentralNodeModal isOpen={isCentralModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default App;