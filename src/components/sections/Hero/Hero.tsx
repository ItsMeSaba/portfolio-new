import { FlipWords } from "@/components/aceternity-ui/flip-words/Flip-words";
import { TypewriterEffectSmooth } from "@/components/aceternity-ui/typewriter-effect/Typewriter-effect";
import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";

export function Hero() {
  return (
    <section className="container min-h-screen relative select-none flex items-center">
      <Vortex
        rangeY={150}
        particleCount={600}
      />

      <div className="relative z-10 flex items-center justify-left w-full h-full">
        <div className="flex flex-col gap-1">
          <p className="text-[30px] transparency w-fit font-semibold px-4 py-1">Hi! I'm</p>
          
          <TypewriterEffectSmooth 
            className="transparency px-4 py-6 lg:py-4 my-0"
            words={[{ text: "Saba Silagadze", className: "text-[25px] lg:text-[60px]" }]}
          />

          <div className="text-[30px] transparency w-fit font-semibold px-4 py-1">
            <FlipWords duration={1000} words={['Web', 'Frontend', 'Fullstack', 'Javascript', 'NextJs']} />
            Developer
          </div>
        </div>
      </div>
    </section>
  );
}