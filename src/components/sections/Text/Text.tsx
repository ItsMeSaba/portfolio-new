import { TextGenerateEffect } from "@/components/aceternity-ui/text-generate-effect/Text-generate-effect";
import clsx from "clsx";

export function Text({ words, className, textClassName, containerClassName, id }: any) {
  return (
    <div id={id} className={clsx('min-h-[400px] px-6 container flex items-center text-balance', containerClassName)}>
      <TextGenerateEffect words={words} textClassName={textClassName} />
    </div>
  )
}