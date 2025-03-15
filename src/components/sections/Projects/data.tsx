import Veezu from "@/assets/img/projects/veezu-mockup-2.png";
import Camino from "@/assets/img/projects/camino-mockup.png";
import Alpro from "@/assets/img/projects/alpro-mockup.png";
import AlproHealthcare from "@/assets/img/projects/alpro-healthcare-mockup.png";
import AlproFoundation from "@/assets/img/projects/alpro-foundation-mockup.png";
import Seawatch from "@/assets/img/projects/seawatch-mockup.png";
import ClimateCentral from "@/assets/img/projects/climate-central-mockup.png";

interface Project {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export const projectsData: Project[] = [
  {
    category: "British Taxi Service",
    title: "Veezu",
    src: Veezu.src,
    content: <></>,
  },
  {
    category: "Loan agency",
    title: "Camino",
    src: Camino.src,
    content: <></>,
  },
  {
    category: "Products",
    title: "Alpro",
    src: Alpro.src,
    content: <></>,
  },
  {
    category: "Climate",
    title: "Climate Central",
    src: ClimateCentral.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Healthcare Professionals",
    src: AlproHealthcare.src,
    content: <></>,
  },
  {
    category: "Informational Blog",
    title: "Alpro Foundation",
    src: AlproFoundation.src,
    content: <></>,
  },
  {
    category: "NGO",
    title: "Seawatch",
    src: Seawatch.src,
    content: <></>,
  },
];
