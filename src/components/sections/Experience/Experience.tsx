import { Timeline } from "@/components/aceternity-ui/timeline/Timeline";
import { experienceData } from "./data";

export function Experience({ id }: any) {
  return (
    <div className="py-40" id={id}>
      <Timeline data={experienceData} />
    </div>
  );
}
