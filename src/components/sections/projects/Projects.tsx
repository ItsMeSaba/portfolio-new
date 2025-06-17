import { AppleCarousel } from "@/components/aceternity-ui/apple-cards-carousel.tsx/Apple-cards-carousel";
import { Card } from "@/components/aceternity-ui/apple-cards-carousel.tsx/Card";

interface Props {
  id: string;
  data: any[];
  title?: string;
}

export function Projects({
  id,
  data,
  title = "Projects I Contributed to",
}: Props) {
  return (
    <div
      className="my-12 py-12 md:my-20 md:py-20 flex flex-col justify-center"
      id={id}
    >
      <AppleCarousel
        title={title}
        items={data.map((project, index) => (
          <Card key={project.title} card={project} index={index} />
        ))}
      />
    </div>
  );
}
