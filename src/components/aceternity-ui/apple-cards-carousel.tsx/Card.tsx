"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/base/hooks/use-outside-click";
import { FlagIcon, Flag } from "@/components/elements/flag-icon/flag-icon";
import Link from "next/link";
import { Carousel } from "@/components/modules/carousel/Carousel";
import { CarouselContext } from "./Apple-cards-carousel";
import { cn } from "@/components/aceternity-ui/lib/utils";

type CardProps = {
  card: {
    src: string;
    title: string;
    category: string;
    flag?: Flag;
    content: React.ReactNode;
    link?: string;
    images?: string[];
  };
  index: number;
  layout?: boolean;
};

export const Card = ({ card, index, layout = false }: CardProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleOpen = () => {
    if (card.content) {
      setOpen(true);
    } else if (card.link) {
      window.open(card.link, "_blank");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div
            id="project-popup" // used for preventing lenis on it as it breaks the scroll
            className="fixed inset-0 h-screen z-[1000] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-screen w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="overflow-y-auto max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-[95%] z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="absolute top-6 right-6 h-8 w-8 ml-auto bg-black dark:bg-white text-black rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                X
              </button>

              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>

              <div className="flex flex-row items-end gap-4">
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-2xl md:text-4xl font-semibold text-neutral-700 mt-4 dark:text-white"
                >
                  {card.title}
                </motion.p>

                {card.link && (
                  <Link href={card.link} target="_blank">
                    <span className="text-md font-medium underline text-neutral-700 mt-4 dark:text-white">
                      Visit
                    </span>
                  </Link>
                )}
              </div>

              <div className="py-10">{card.content}</div>

              {card.images && (
                <Carousel images={card.images} className="w-[90%]" />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 aspect-square w-[300px] md:w-[400px] overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-4 md:p-8">
          <div className="flex flex-row items-center gap-2">
            <motion.p
              layoutId={layout ? `category-${card.category}` : undefined}
              className="text-white text-sm md:text-base font-medium font-sans text-left"
            >
              {card.category}
            </motion.p>

            {card.flag && <FlagIcon country={card.flag} />}
          </div>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          quality={100}
          fill
          className="object-cover object-center absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
