import { Timeline } from "@/components/aceternity-ui/timeline/Timeline";
import { experienceData } from "./data";

interface Props {
  id?: string;
}

export function Experience({ id }: Props) {
  return (
    <div className="my-10 py-10 md:my-20 md:py-20" id={id}>
      <Timeline data={experienceData} />
    </div>
  );
}
