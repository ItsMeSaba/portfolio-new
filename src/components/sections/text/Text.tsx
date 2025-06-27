import clsx from "clsx";

interface Props {
  words: string;
  textClassName?: string;
  className?: string;
  id?: string;
}

export function Text({ words, textClassName, className, id }: Props) {
  return (
    <div
      id={id}
      className={clsx(
        "h-[100vh] lg:h-[85vh] w-screen flex items-center justify-center bg-black",
        className
      )}
    >
      <h2 className="leading-[35px] max-w-[1200px] px-10 text-justify text-xl md:text-3xl md:leading-[50px] font-bold">
        {words}
      </h2>
    </div>
  );
}
