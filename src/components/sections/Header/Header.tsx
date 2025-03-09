"use client";

import { ButtonWithAnimatedBorder } from "@/components/elements/buttons/button-with-animated-border";
import { navLinks } from "./data";
import { useEffect, useState } from "react";
import clsx from "clsx";

function scrollToSection(href: string, align: ScrollLogicalPosition) {
  document.getElementById(href)?.scrollIntoView({
    behavior: "smooth",
    block: align,
  });
}

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
        "fixed top-0 left-0 z-50 w-full bg-black py-4 px-10 rounded-full transparency-darker transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center justify-center mx-auto w-full max-w-[1000px]">
        <p className="font-semibold text-3xl">S</p>

        <nav className="hidden md:block transperancy bg-gray-900/10 py-4 border-white/10 border-2 px-10 rounded-full w-fit mx-auto">
          <ul className="flex items-center justify-center gap-10 font-semibold">
            {navLinks.map(({ href, label, align }) => (
              <li key={href}>
                <button onClick={() => scrollToSection(href, align)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonWithAnimatedBorder
          label="Contact Me"
          onClick={() => scrollToSection("contact", "center")}
        />
      </div>
    </header>
  );
}
