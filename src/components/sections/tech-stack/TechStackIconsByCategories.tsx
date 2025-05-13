// Deprecated, can be removed in future

import { TechnologyIcon } from "@/components/elements/technology-icon/technology-icon";
import { techStack } from "./data";

export function TechStackIconsByCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {techStack.map((stack) => (
        <div key={stack.title} className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">{stack.title}</h3>

          <div className="flex flex-wrap gap-6">
            {stack.items.map((item) => (
              <TechnologyIcon
                key={item.name}
                name={item.icon as any}
                width={45}
                height={45}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
