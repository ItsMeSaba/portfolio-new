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

// Project screenshots
import VeezuImage from "@/assets/img/bejamas-projects/veezu.png";
import CaminoImage from "@/assets/img/bejamas-projects/camino.png";
import AlproImage from "@/assets/img/bejamas-projects/alpro.png";
import ClimateCentralImage from "@/assets/img/bejamas-projects/climatecentral.png";
import AlproHealthcareImage from "@/assets/img/bejamas-projects/alpro-hp.png";
import AlproFoundationImage from "@/assets/img/bejamas-projects/alpro-foundation.png";
import SeawatchImage from "@/assets/img/bejamas-projects/seawatch.png";
import DeeptrekkerImage from "@/assets/img/bejamas-projects/deeptrekker.png";
import MccImage from "@/assets/img/bejamas-projects/mcc.png";

export interface Project {
  category: string;
  title: string;
  flag?: Flag;
  src: string;
  content: React.ReactNode | null;
  link?: string;
  images?: string[];
}

export const bejamasProjects: Project[] = [
  {
    category: "Transportation Service",
    title: "Veezu",
    flag: "greatBritain",
    src: VeezuLogo.src,
    content: (
      <div>
        <li>
          Led daily maintenance and updates to the website, implemented new
          features and improvements to the website.
        </li>
        <li>
          Improved performance by over 70% through optimizing CMS structure for
          more efficient payloads.
        </li>
      </div>
    ),
    link: "https://veezu.co.uk/",
    images: [VeezuImage.src],
  },
  {
    category: "Financial Services",
    title: "Camino",
    flag: "unitedStates",
    src: CaminoLogo.src,
    content: (
      <div>
        <li>Delivered website under tight deadlines.</li>
        <li>
          Led development, improving TTFB by 65%, FCP by 68%, and LCP by 72%.
        </li>
        <li>
          Implemented a custom search solution, saving the company approximately
          $14,000 annually.
        </li>
        <li>
          Built an internal CSS Comment Groupper tool to automate CSS
          organization, saving the dev team hours of manual work.
        </li>
      </div>
    ),
    images: [CaminoImage.src],
  },
  {
    category: "Plant-Based Products",
    title: "Alpro",
    flag: "belgium",
    src: AlproLogo.src,
    content: (
      <div>
        <li>Took part in inial implementation of complex sections.</li>
        <li>
          Handled client requests, including new features, bug fixes, and
          performance improvements.
        </li>
      </div>
    ),
    link: "https://www.alpro.com/uk/",
    images: [AlproImage.src],
  },
  {
    category: "Climate Science",
    title: "Climate Central",
    flag: "unitedStates",
    src: ClimateCentralLogo.src,
    content: (
      <div>
        <li>
          Refactored spaghetti code, improving maintainability and readability.
        </li>
        <li>
          Migrated platform from Pages Router to App Router, leveraging server
          components.
        </li>
        <li>
          Achieved a 60% performance boost and 95+ Lighthouse scores in SEO and
          accessibility.
        </li>
      </div>
    ),
    link: "https://www.climatecentral.org/",
    images: [ClimateCentralImage.src],
  },
  {
    category: "Health & Nutrition Education",
    title: "Alpro Healthcare Professionals",
    flag: "belgium",
    src: AlproHealthcareLogo.src,
    content: (
      <div>
        <li>
          Took part in implementation of initial scope and furthermore client
          requests.
        </li>
        <li>
          Delivered the website under a tight deadline, while also accommodating
          last-minute client authentication requests.
        </li>
      </div>
    ),
    link: "https://alprohealthprofessional.com/",
    images: [AlproHealthcareImage.src],
  },
  {
    category: "Scientific Research & Knowledge Sharing",
    title: "Alpro Foundation",
    flag: "belgium",
    src: AlproFoundationLogo.src,
    content: (
      <div>
        <li>
          Handled client requests, including new features, bug fixes, and
          performance improvements.
        </li>
      </div>
    ),
    link: "https://www.alprofoundation.org/",
    images: [AlproFoundationImage.src],
  },
  {
    category: "Humanitarian Search & Rescue",
    title: "Seawatch",
    flag: "germany",
    src: SeawatchLogo.src,
    content: (
      <div>
        Developed a mission-critical incident reporting system with offline
        capabilities. Implemented real-time communication features and
        geolocation tracking for rescue operations coordination.
      </div>
    ),
    link: "https://seawatch.netlify.app/",
    images: [SeawatchImage.src],
  },
  {
    category: "Industrial Robotics",
    title: "Deeptrekker",
    flag: "unitedStates",
    src: DeeptrekkerLogo.src,
    content: (
      <div>
        <li>
          Handled client requests, including new features, bug fixes, and
          performance improvements.
        </li>
        <li>
          Added live preview functionality to the CMS, allowing clients to see
          changes in real-time.
        </li>
        <li>
          Refactored messy components, improving maintainability and
          readability.
        </li>
      </div>
    ),
    link: "https://www.deeptrekker.com/",
    images: [DeeptrekkerImage.src],
  },
  {
    category: "Financial Services",
    title: "Multicoin Capital",
    flag: "unitedStates",
    src: MccLogo.src,
    content: (
      <div>
        <li>
          Took part in delivering website in tight deadlines. Coming up with
          solutions to client requests on the way.
        </li>
      </div>
    ),
    link: "https://www.multicoin.capital/",
    images: [MccImage.src],
  },
];
