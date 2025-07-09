import clsx from "clsx";
import { HeroVortex } from "./components/HeroVortex";

export function Hero() {
  return (
    <section className="min-h-[95vh] md:min-h-[100dvh] relative select-none flex items-center">
      <HeroVortex />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-1 text-white">
          <p
            className={clsx(
              "text-xl md:text-3xl backdrop-blur-[30px] rounded-md overflow-hidden mx-auto w-fit",
              "font-semibold py-[2px] px-2"
            )}
          >
            Hi! I'm
          </p>

          <div className="text-[50px] w-fit backdrop-blur-[30px] rounded-md overflow-hidden font-semibold py-[2px] px-4">
            <h1 className="text-3xl md:text-5xl">Saba Silagadze</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
