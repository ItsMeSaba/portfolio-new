import { Timeline } from "@/components/aceternity-ui/timeline/Timeline";
import { experienceData } from "./data";

export function Experience({ id }: any) {
  return (
    <div className="my-10 py-10 md:my-20 md:py-20" id={id}>
      <Timeline data={experienceData} />
    </div>
  );
}
