import Veezu from "@/assets/img/projects/veezu-mockup-2.png";
import Camino from "@/assets/img/projects/camino-mockup.png";
import Alpro from "@/assets/img/projects/alpro-mockup.png";
import AlproHealthcare from "@/assets/img/projects/alpro-healthcare-mockup.png";
import AlproFoundation from "@/assets/img/projects/alpro-foundation-mockup.png";
import Seawatch from "@/assets/img/projects/seawatch-mockup.png";
import ClimateCentral from "@/assets/img/projects/climate-central-mockup.png";
import { Flag } from "@/components/elements/flag-icon/flag-icon";

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
    src: Veezu.src,
    content: <></>,
  },
  {
    category: "Loan agency",
    title: "Camino",
    flag: "unitedStates",
    src: Camino.src,
    content: <></>,
  },
  {
    category: "Products",
    title: "Alpro",
    flag: "belgium",
    src: Alpro.src,
    content: <></>,
  },
  {
    category: "NGO",
    title: "Climate Central",
    flag: "unitedStates",
    src: ClimateCentral.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Healthcare Professionals",
    flag: "belgium",
    src: AlproHealthcare.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Foundation",
    flag: "belgium",
    src: AlproFoundation.src,
    content: <></>,
  },
  {
    category: "NGO",
    title: "Seawatch",
    flag: "germany",
    src: Seawatch.src,
    content: <></>,
  },
];
