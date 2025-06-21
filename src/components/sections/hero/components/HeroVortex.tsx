"use client";

import { useIsMobile } from "@/base/hooks/use-is-mobile";
import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";

export function HeroVortex() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile === true && (
        <Vortex
          rangeY={250}
          particleCount={400}
          baseRadius={1}
          rangeRadius={1}
        />
      )}

      {isMobile === false && <Vortex rangeY={150} particleCount={600} />}
    </>
  );
}
