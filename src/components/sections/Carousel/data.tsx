import { TechnologyIcon } from "@/components/elements/technology-icon/TechnologyIcon";

const SLIDE_SIZE = 40;

export const technologySlides = [
  {
    icon: (
      <TechnologyIcon
        name="javascript"
        width={SLIDE_SIZE}
        height={SLIDE_SIZE}
      />
    ),
  },
  {
    icon: (
      <TechnologyIcon
        name="typescript"
        width={SLIDE_SIZE}
        height={SLIDE_SIZE}
      />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="react" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="nextjs" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="nodejs" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="nestjs" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon
        name="vercel"
        width={SLIDE_SIZE}
        height={SLIDE_SIZE}
        className="invert"
      />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="netlify" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon
        name="contentful"
        width={SLIDE_SIZE}
        height={SLIDE_SIZE}
      />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="storyblok" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
  {
    icon: (
      <TechnologyIcon name="strapi" width={SLIDE_SIZE} height={SLIDE_SIZE} />
    ),
  },
];
