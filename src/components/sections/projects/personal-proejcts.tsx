import { Flag } from "@/components/elements/flag-icon/flag-icon";

import CssCommentGrouperLogo from "@/assets/img/project-logos/css-comment-grouper-logo.png";
import UnlinkedinLogo from "@/assets/img/project-logos/unlinkedin.png";

import CssCommentGrouperPhoto from "@/assets/img/personal-projects/css-comment-grouper.png";
import UnlinkedinPhoto from "@/assets/img/personal-projects/unlinkedin.png";
import UnlinkedinPhoto2 from "@/assets/img/personal-projects/unlinkedin-2.png";

export interface Project {
  category: string;
  title: string;
  flag?: Flag;
  src: string;
  content: React.ReactNode | null;
  link?: string;
  images?: string[];
}

export const personalProjects: Project[] = [
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
  },
];
