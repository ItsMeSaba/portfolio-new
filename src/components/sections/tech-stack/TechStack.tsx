"use client";

import { useState } from "react";
import { TechStackIcons } from "./TechStackIcons";

export function TechStack() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section className="container max-w-screen-xl my-12 py-12 md:my-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-10">
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-400 text-lg">{activeItem || ""}</p>
      </div>

      <TechStackIcons setActiveItem={setActiveItem} />
    </section>
  );
}
