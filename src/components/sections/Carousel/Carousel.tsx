"use client";

import { motion } from "framer-motion";
import { technologySlides } from "./data";

export function Carousel() {
  const duplicatedSlides = [
    ...technologySlides,
    ...technologySlides,
    ...technologySlides,
    ...technologySlides,
  ];

  return (
    <div className="relative container h-full overflow-hidden py-12 bg-black">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 px-8">
            <div className="flex items-center justify-center h-full select-none">
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
