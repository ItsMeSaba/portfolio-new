"use client";

import { ReactLenis, useLenis } from "lenis/react";

export function Lenis() {
  useLenis();

  return <ReactLenis root />;
}
