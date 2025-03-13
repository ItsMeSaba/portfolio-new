import { Timeline } from "@/components/aceternity-ui/timeline/Timeline";
import { experienceData } from "./data";

export function Experience({ id }: any) {
  return (
    <div className="my-20 md:my-40" id={id}>
      <Timeline data={experienceData} />
    </div>
  );
}
