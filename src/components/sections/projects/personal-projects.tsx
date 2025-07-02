import { Flag } from "@/components/elements/flag-icon/flag-icon";

import CssCommentGrouperLogo from "@/assets/img/project-logos/css-comment-grouper-logo.png";

import WindowsXpPortfolioLogo from "@/assets/img/project-logos/windows-xp-logo.png";
import WindowsXpPortfolioPhoto from "@/assets/img/personal-projects/windows-xp-portfolio.png";
import WindowsXpPortfolioPhoto2 from "@/assets/img/personal-projects/windows-xp-portfolio-2.png";

import CssCommentGrouperPhoto from "@/assets/img/personal-projects/css-comment-grouper.png";

import UnlinkedinLogo from "@/assets/img/project-logos/unlinkedin.png";
import UnlinkedinPhoto from "@/assets/img/personal-projects/unlinkedin.png";
import UnlinkedinPhoto2 from "@/assets/img/personal-projects/unlinkedin-2.png";

import FairpayLogo from "@/assets/img/project-logos/fairpay.webp";
import FairpayPhoto from "@/assets/img/personal-projects/fairpay.png";
import FairpayPhoto2 from "@/assets/img/personal-projects/fairpay-2.png";

import MotionMimicLogo from "@/assets/img/project-logos/motion-mimic-logo.webp";
import MotionMimicPhoto from "@/assets/img/personal-projects/motion-mimic.png";
import MotionMimicPhoto2 from "@/assets/img/personal-projects/motion-mimic-2.png";

export interface Project {
  category: string;
  title: string;
  flag?: Flag;
  src: string;
  content: React.ReactNode | null;
  link?: string;
  images?: string[];
  github?: string;
}

export const personalProjects: Project[] = [
  {
    category: "Animation Library",
    title: "Motion Mimic",
    src: MotionMimicLogo.src,
    images: [MotionMimicPhoto.src, MotionMimicPhoto2.src],
    content: (
      <div className="prose">
        <p>
          Motion Mimic is a animation library designed for NextJS and React.
        </p>

        <br />

        <p>
          Here I recreate animations from different websites which I found
          interesting.
        </p>
      </div>
    ),
    link: "https://motion-mimic.vercel.app/",
    github: "https://github.com/ItsMeSaba/motion-mimic",
  },
  {
    category: "Website",
    title: "Fairpay",
    src: FairpayLogo.src,
    images: [FairpayPhoto.src, FairpayPhoto2.src],
    content: (
      <div className="prose">
        <p>
          Fairpay was a website dedicated to providing salary and review
          information about companies specifically for the Georgian market. The
          idea was born out of frustration with Glassdoor’s lack of data for
          Georgia.
        </p>

        <br />

        <p>
          From conception through design and implementation of both front-end
          and back-end, I managed every aspect of the project. We initially used
          a Next.js + NestJS stack, but for various reasons I decided to pause
          development.
        </p>

        <br />

        <p>
          To date, I’ve migrated the front-end to Next.js 15, though the
          back-end is currently absent. Even though the project is on hold, I’m
          considering giving it another try.
        </p>
      </div>
    ),
    link: "https://fairpay.vercel.app/",
    github: "https://github.com/ItsMeSaba/fairpay-ge",
  },
  {
    category: "Tool",
    title: "CSS Comment Grouper",
    src: CssCommentGrouperLogo.src,
    content: (
      <div className="prose">
        <p>
          In one of the projects at Bejamas, we used a method for organizing CSS
          properties called CSS Comment Grouping, which involves grouping
          related properties under comments.
        </p>

        <br />

        <p>
          Since this process was done manually, I decided to automate it with
          the help of this tool, which can be used as GUI or integrated into
          workflow.
        </p>
      </div>
    ),
    link: "https://css-comment-groupper-dev.netlify.app/",
    images: [CssCommentGrouperPhoto.src],
    github: "https://github.com/ItsMeSaba/css-comment-grouper-package",
  },
  {
    category: "Chrome Extension",
    title: "Unlinkedin",
    src: UnlinkedinLogo.src,
    content: (
      <div className="prose">
        <p>
          I created this extension to filter out unwanted LinkedIn posts, based
          on either language or topic.
        </p>

        <br />

        <p>
          The initial implementation used OpenAI, but since I wanted to make it
          accessible to everyone without concerns about cost, I decided to
          rebuild it with a more granular approach.
        </p>
      </div>
    ),
    images: [UnlinkedinPhoto.src, UnlinkedinPhoto2.src],
    link: "https://chromewebstore.google.com/detail/linkedout-post-filter/kghdmkmpfphijnmkkeeejjmhfngffmhe",
    // github: "https://github.com/ItsMeSaba/linkedout-extension",
  },
  {
    category: "Portfolio",
    title: "Windows XP Portfolio",
    src: WindowsXpPortfolioLogo.src,
    content: (
      <div className="prose">
        <p>
          I created this website as my portfolio but decided not to use it due
          to several factors.
        </p>
      </div>
    ),
    link: "https://saba-windows-xp-portfolio.vercel.app/",
    images: [WindowsXpPortfolioPhoto2.src, WindowsXpPortfolioPhoto.src],
    github: "https://github.com/ItsMeSaba/WindowsXpPortfolio",
  },
];
