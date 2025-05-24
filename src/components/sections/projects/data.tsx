import { Flag } from "@/components/elements/flag-icon/flag-icon";

import VeezuLogo from "@/assets/img/project-logos/veezu-logo.png";
import CaminoLogo from "@/assets/img/project-logos/camino-logo.png";
import AlproLogo from "@/assets/img/project-logos/alpro-logo.png";
import ClimateCentralLogo from "@/assets/img/project-logos/cc-logo.png";
import AlproHealthcareLogo from "@/assets/img/project-logos/alpro-healthcare-logo.png";
import AlproFoundationLogo from "@/assets/img/project-logos/alpro-foundation-logo.png";
import SeawatchLogo from "@/assets/img/project-logos/seawatch-logo.png";
import DeeptrekkerLogo from "@/assets/img/project-logos/deeptrekker-logo.png";
import MccLogo from "@/assets/img/project-logos/mcc-logo.png";

interface Project {
  category: string;
  title: string;
  flag?: Flag;
  src: string;
  content: React.ReactNode;
}

export const projectsData: Project[] = [
  {
    category: "Transportation Service",
    title: "Veezu",
    flag: "greatBritain",
    src: VeezuLogo.src,
    content: <></>,
  },
  {
    category: "Financial Services",
    title: "Camino",
    flag: "unitedStates",
    src: CaminoLogo.src,
    content: <></>,
  },
  {
    category: "Plant-Based Products",
    title: "Alpro",
    flag: "belgium",
    src: AlproLogo.src,
    content: <></>,
  },
  {
    category: "Climate Science",
    title: "Climate Central",
    flag: "unitedStates",
    src: ClimateCentralLogo.src,
    content: <></>,
  },
  {
    category: "Health & Nutrition Education",
    title: "Alpro Healthcare Professionals",
    flag: "belgium",
    src: AlproHealthcareLogo.src,
    content: <></>,
  },
  {
    category: "Scientific Research & Knowledge Sharing",
    title: "Alpro Foundation",
    flag: "belgium",
    src: AlproFoundationLogo.src,
    content: <></>,
  },
  {
    category: "Humanitarian Search & Rescue",
    title: "Seawatch",
    flag: "germany",
    src: SeawatchLogo.src,
    content: <></>,
  },
  {
    category: "Industrial Robotics",
    title: "Deeptrekker",
    flag: "unitedStates",
    src: DeeptrekkerLogo.src,
    content: <></>,
  },
  {
    category: "Financial Services",
    title: "Multicoin Capital",
    flag: "unitedStates",
    src: MccLogo.src,
    content: <></>,
  },
];
