import { FlipWords } from "@/components/aceternity-ui/flip-words/Flip-words";
import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";

export function Hero() {
  return (
    <section className="container min-h-screen relative select-none flex items-center">
      <Vortex rangeY={200} particleCount={750} />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-1">
          <p className="text-[30px] mx-auto transparency w-fit font-semibold py-[2px]">
            Hi! I'm
          </p>

          <div className="text-[50px] transparency w-fit font-semibold py-[2px] px-8">
            <h1>Saba Silagadze</h1>

            {/* <FlipWords
              duration={3000}
              words={["Saba Silagadze", "Javascript Developer"]}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
