import Image from "next/image";
import type { LinkedinRecommendation } from "./data";

export function Recommendation({
  name,
  position,
  image,
  recommendation,
  label,
}: LinkedinRecommendation) {
  return (
    <div className="flex flex-col gap-4 bg-blue-950/25 border-blue-950/55 border-2 p-5 md:p-6 rounded-lg h-fit min-w-[250px] max-w-[750px]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-lg"
        />

        <div className="flex flex-col">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm mb-1 text-gray-400">{position}</p>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
      </div>

      <p className="text-[15px] leading-6 text-gray-200">{recommendation}</p>
    </div>
  );
}
