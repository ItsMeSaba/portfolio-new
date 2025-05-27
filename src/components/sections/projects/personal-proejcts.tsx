import { Flag } from "@/components/elements/flag-icon/flag-icon";

import CssCommentGrouperLogo from "@/assets/img/project-logos/css-comment-grouper-logo.png";
import UnlinkedinLogo from "@/assets/img/project-logos/unlinkedin.png";

export interface Project {
  category: string;
  title: string;
  flag?: Flag;
  src: string;
  content: React.ReactNode | null;
  link?: string;
}

export const personalProjects: Project[] = [
  {
    category: "Tool",
    title: "CSS Comment Grouper",
    src: CssCommentGrouperLogo.src,
    content: null,
    link: "https://css-comment-groupper-dev.netlify.app/",
  },
  {
    category: "Chrome Extension",
    title: "Unlinkedin",
    src: UnlinkedinLogo.src,
    content: null,
    link: "https://chromewebstore.google.com/detail/linkedout-post-filter/kghdmkmpfphijnmkkeeejjmhfngffmhe",
  },
];
