"use client";

import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";
import { useState, useEffect } from "react";

export function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      console.log("window.innerWidth", window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="min-h-[600px] md:min-h-[100dvh] relative select-none flex items-center">
      {isMobile === true && (
        <Vortex
          rangeY={250}
          particleCount={500}
          baseRadius={1}
          rangeRadius={1}
        />
      )}
      {isMobile === false && <Vortex rangeY={150} particleCount={700} />}

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-1">
          <p className="text-xl md:text-3xl mx-auto transparency w-fit font-semibold py-[2px] px-2">
            Hi! I'm
          </p>

          <div className="text-[50px] transparency w-fit font-semibold py-[2px] px-4">
            <h1 className="text-3xl md:text-5xl">Saba Silagadze</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
