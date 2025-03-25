import { linkedinRecommendations } from "./data";
import { Recommendation } from "./Recommendation";
import Linkedin from "@/assets/svg/linkedin-square.svg";

export function LinkedinRecommendations() {
  const halfLength = Math.ceil(linkedinRecommendations.length / 2);
  const leftColumnRecommendations = linkedinRecommendations.slice(
    0,
    halfLength
  );
  const rightColumnRecommendations = linkedinRecommendations.slice(halfLength);

  return (
    <section className="container my-12 py-12 md:my-20 md:py-20">
      <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12">
        <Linkedin className="w-9 h-9 md:w-12 md:h-12" />
        <h2 className="text-2xl md:text-4xl font-bold">Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-fit gap-y-4">
          {leftColumnRecommendations.map((recommendation) => (
            <Recommendation key={recommendation.name} {...recommendation} />
          ))}
        </div>

        <div className="flex flex-col w-fit gap-y-4">
          {rightColumnRecommendations.map((recommendation) => (
            <Recommendation key={recommendation.name} {...recommendation} />
          ))}
        </div>
      </div>
    </section>
  );
}
