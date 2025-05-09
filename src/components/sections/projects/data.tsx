import Veezu from "@/assets/img/projects/veezu-mockup-2.png";
import Camino from "@/assets/img/projects/camino-mockup.png";
import Alpro from "@/assets/img/projects/alpro-mockup.png";
import AlproHealthcare from "@/assets/img/projects/alpro-healthcare-mockup.png";
import AlproFoundation from "@/assets/img/projects/alpro-foundation-mockup.png";
import Seawatch from "@/assets/img/projects/seawatch-mockup.png";
import ClimateCentral from "@/assets/img/projects/climate-central-mockup.png";
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
    category: "Taxi Service",
    title: "Veezu",
    flag: "greatBritain",
    // src: Veezu.src,
    src: VeezuLogo.src,
    content: <></>,
  },
  {
    category: "Loan agency",
    title: "Camino",
    flag: "unitedStates",
    src: CaminoLogo.src,
    content: <></>,
  },
  {
    category: "Products",
    title: "Alpro",
    flag: "belgium",
    src: AlproLogo.src,
    content: <></>,
  },
  {
    category: "NGO",
    title: "Climate Central",
    flag: "unitedStates",
    src: ClimateCentralLogo.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Healthcare Professionals",
    flag: "belgium",
    src: AlproHealthcareLogo.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Foundation",
    flag: "belgium",
    src: AlproFoundationLogo.src,
    content: <></>,
  },
  {
    category: "NGO",
    title: "Seawatch",
    flag: "germany",
    src: SeawatchLogo.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Deeptrekker",
    flag: "unitedStates",
    src: DeeptrekkerLogo.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Multicoin Capital",
    flag: "unitedStates",
    src: MccLogo.src,
    content: <></>,
  },
];
