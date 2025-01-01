import { TextGenerateEffect } from "@/components/aceternity-ui/text-generate-effect/Text-generate-effect";
import clsx from "clsx";

export function Text({ words, className, textClassName, containerClassName }: any) {
  return (
    <div className={clsx('min-h-[400px] container flex items-center text-balance', containerClassName)}>
      <TextGenerateEffect words={words} textClassName={textClassName} />
    </div>
  )
}