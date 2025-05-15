import { TechnologyIcon } from "@/components/elements/technology-icon/technology-icon";
import { techStack } from "./data";

interface Props {
  setActiveItem: (item: string) => void;
}

export function TechStackIcons({ setActiveItem }: Props) {
  const allTechItems = techStack.flatMap((category) => category.items);

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-4 md:gap-x-9 md:gap-y-6">
      {allTechItems.map((item) => (
        <div
          key={item.name}
          className="relative border-2 border-transparent p-2 group hover:border-gray-400 rounded-md transition-all duration-500"
          onMouseEnter={() => setActiveItem(item.name)}
        >
          <TechnologyIcon name={item.icon as any} width={40} height={40} />
        </div>
      ))}
    </div>
  );
}
