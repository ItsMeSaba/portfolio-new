import clsx from "clsx";
import { Text } from "@/components/sections/text/Text";
import { ModelViewer } from "../../modules/model-viewer/ModelViewer";

export function Hero() {
  return (
    <section className="min-h-[95vh] md:min-h-[100dvh] relative select-none grid grid-rows-[1fr_1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-2 items-center">
      <ModelViewer />

      <div className="relative z-10 items-start justify-start md:justify-center w-full h-full flex flex-col pl-[5%]">
        <p className={"text-lg md:text-2xl rounded-md w-fit md:mb-1"}>
          Hi! I'm
        </p>

        <div className="text-[50px] w-fit rounded-md font-semibold py-[2px]">
          <h1 className="text-3xl md:text-5xl mb-2 md:mb-6">Saba Silagadze</h1>

          <div className="text-sm md:text-lg max-w-[600px] pr-4 font-normal text-balance">
            <p>
              Frontned Focused Full Stack Developer with 5+ years of experience
              building high-performance, SEO-optimized, and scalable web
              applications for international clients across Europe, Asia, and
              the U.S.
            </p>

            <br />

            <p>
              Skilled in React, Next.js, Node.js, and TypeScript with strong
              focus on performance optimization, API design, and cloud
              deployment. Delivered 15+ projects, including 7 large-scale
              platforms at Bejamas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
