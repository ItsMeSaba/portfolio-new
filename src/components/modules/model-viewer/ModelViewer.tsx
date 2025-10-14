// @ts-nocheck

"use client";

import { useEffect } from "react";

export function ModelViewer() {
  useEffect(() => {
    import("@google/model-viewer/dist/model-viewer.min.js");
  }, []);

  return (
    <model-viewer
      // src="/models/standing-desk.glb"
      // src="/models/neil-armstrong.glb"
      src="/models/sculpture/marble_bust_01_1k.gltf"
      alt="3D model preview"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      class="w-full h-full p-5 md:p-20"
      auto-rotate
      auto-rotate-delay="0"
      rotation-per-second="10deg"
    />
  );
}
