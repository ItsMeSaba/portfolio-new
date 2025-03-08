import {
  AppleCarousel,
  Card,
} from "@/components/aceternity-ui/apple-cards-carousel.tsx/Apple-cards-carousel";
import { projectsData } from "./data";

export function Projects() {
  return (
    <div className="container">
      <AppleCarousel
        title="Projects which I have worked on in Bejamas"
        items={projectsData.map((project, index) => (
          <Card key={project.title} card={project} index={index} />
        ))}
      />
    </div>
  );
}
