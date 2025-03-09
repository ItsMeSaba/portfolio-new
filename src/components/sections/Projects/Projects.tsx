import {
  AppleCarousel,
  Card,
} from "@/components/aceternity-ui/apple-cards-carousel.tsx/Apple-cards-carousel";
import { projectsData } from "./data";

interface Props {
  id: string;
}

export function Projects({ id }: Props) {
  return (
    <div className="container" id={id}>
      <AppleCarousel
        title="Projects I Contributed to at Bejamas"
        items={projectsData.map((project, index) => (
          <Card key={project.title} card={project} index={index} />
        ))}
      />
    </div>
  );
}
