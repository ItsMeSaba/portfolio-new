import clsx from "clsx";
import { ModelViewer } from "../../modules/model-viewer/ModelViewer";

export function Hero() {
  return (
    <section className="min-h-[95vh] md:min-h-[100dvh] relative select-none grid grid-rows-[3fr_1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-2 items-center">
      <ModelViewer />

      <div className="relative z-10 items-start justify-start md:justify-center w-full h-full flex flex-col pl-[5%]">
        <p
          className={
            "text-xl md:text-3xl backdrop-blur-[30px] rounded-md w-fit font-semibold py-[2px]"
          }
        >
          Hi! I'm
        </p>

        <div className="text-[50px] w-fit backdrop-blur-[30px] rounded-md font-semibold py-[2px]">
          <h1 className="text-3xl md:text-5xl">Saba Silagadze</h1>
        </div>
      </div>
    </section>
  );
}
