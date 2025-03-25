"use client";

import { ButtonWithAnimatedBorder } from "@/components/elements/buttons/button-with-animated-border";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/base/utils/scroll-to-section";
import { Navigation } from "./Navigation";
import clsx from "clsx";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full bg-black py-4 px-10 transparency-darker transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center justify-center mx-auto w-full max-w-[1000px]">
        <p className="font-semibold text-2xl md:text-3xl">S</p>

        <Navigation />

        <ButtonWithAnimatedBorder
          label="Contact Me"
          onClick={() => scrollToSection("contact", "center")}
        />
      </div>
    </header>
  );
}
