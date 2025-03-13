import Image from "next/image";
import { techStack } from "./data";
import { TechnologyIcon } from "@/components/elements/technology-icon/technology-icon";

export function TechStack() {
  return (
    <section className="container max-w-screen-xl my-24 md:my-40">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Tech Stack</h2>

        <p className="text-gray-400 mb-4">
          I've worked with a variety of technologies over the years, and I'm
          always eager to learn new things. Here are some of the technologies
          I've used:
        </p>

        <div className="flex flex-col gap-10">
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
      </div>
    </section>
  );
}
