import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";
import clsx from "clsx";

import { useCallback, useMemo, useState } from "react";

export function Carousel({ images, className }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canBeScrolledPrev, setCanBeScrolledPrev] = useState(false);
  const [canBeScrolledNext, setCanBeScrolledNext] = useState(
    images?.length > 1
  );

  function updateCanBeScrolled() {
    setCanBeScrolledPrev(!!emblaApi?.canScrollPrev());
    setCanBeScrolledNext(!!emblaApi?.canScrollNext());
  }

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();

    updateCanBeScrolled();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();

    updateCanBeScrolled();
  }, [emblaApi]);

  return (
    <div className={clsx(styles.embla, className)} ref={emblaRef}>
      <div className={styles.embla__container}>
        {images.map((image: any, index: number) => (
          <div className={styles.embla__slide} key={index}>
            <img src={image} alt="carousel" />
          </div>
        ))}
      </div>

      {canBeScrolledPrev && (
        <button
          className={clsx(styles.embla__button, styles.embla__button__prev)}
          onClick={scrollPrev}
        >
          <span>&lt;</span>
        </button>
      )}

      {canBeScrolledNext && (
        <button
          className={clsx(styles.embla__button, styles.embla__button__next)}
          onClick={scrollNext}
        >
          <span>&gt;</span>
        </button>
      )}
    </div>
  );
}
