import { FlipWords } from "@/components/aceternity-ui/flip-words/Flip-words";
import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";

export function Hero() {
  return (
    <section className="container min-h-screen relative select-none flex items-center">
      <Vortex rangeY={125} particleCount={500} />

      <div className="relative z-10 flex items-center justify-left w-full h-full">
        <div className="flex flex-col gap-1">
          <p className="text-[30px] transparency-darker w-fit font-semibold py-[2px]">
            Hi! I'm
          </p>

          <div className="text-[50px] transparency-darker w-fit font-semibold py-[2px]">
            <FlipWords
              duration={3000}
              words={["Saba Silagadze", "Javascript Developer"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
