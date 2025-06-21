"use client";

import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";
import { useIsMobile } from "@/base/hooks/use-is-mobile";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="min-h-[600px] md:min-h-[100dvh] relative select-none flex items-center">
      {isMobile === true && (
        <Vortex
          rangeY={250}
          particleCount={400}
          baseRadius={1}
          rangeRadius={1}
        />
      )}

      {isMobile === false && <Vortex rangeY={150} particleCount={600} />}

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-1 text-white">
          <p className="text-xl md:text-3xl backdrop-blur-[30px] rounded-md overflow-hidden mx-auto w-fit font-semibold py-[2px] px-2">
            Hi! I'm
          </p>

          <div className="text-[50px] w-fit backdrop-blur-[30px] rounded-md overflow-hidden font-semibold py-[2px] px-4">
            <h1 className="text-3xl md:text-5xl">Saba Silagadze</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
