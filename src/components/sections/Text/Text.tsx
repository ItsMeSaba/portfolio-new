import { TextGenerateEffect } from "@/components/aceternity-ui/text-generate-effect/Text-generate-effect";
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
        "my-24 md:min-h-[600px] container flex items-center text-balance",
        className
      )}
    >
      <TextGenerateEffect
        words={words}
        textClassName={clsx(
          "leading-[35px] text-xl md:text-3xl md:leading-[50px]",
          textClassName
        )}
        duration={0.45}
      />
    </div>
  );
}
