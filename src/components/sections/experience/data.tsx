import { TechnologyIcon } from "@/components/elements/technology-icon/technology-icon";
import Image from "next/image";
import BejamasLogo from "@/assets/img/companies/bejamas-logo.png";
import UnisoftLogo from "@/assets/img/companies/unisoft-logo.png";
import FairPayLogo from "@/assets/img/companies/fairpay-logo.png";

interface Experience {
  title: string;
  content: React.ReactNode;
}

export const experienceData: Experience[] = [
  {
    title: "2023-Present",
    content: (
      <div>
        <div className="flex items-center">
          <Image src={BejamasLogo} width={50} className="mr-4" alt="" />
          <h2 className="text-3xl md:text-4xl mb-0 font-semibold">Bejamas</h2>
        </div>

        <h3 className="text-sm md:text-base mt-3 mb-5 font-medium">
          Remote · Full time · Frontend Developer
        </h3>

        <div className="mb-10 leading-7">
          <p className="text-balance mb-4">
            Bejamas is a Poland-based web development company operating remotely
            on a global scale. Specializing in building and maintaining Jamstack
            websites, catering to a diverse range of international clients.
            Portfolio includes prominent brands such as Alpro and Veezu,
            showcasing expertise and broad industry appeal.
          </p>

          <p className="mb-2">As a developer my responsibilities include:</p>

          <ul className="list-disc ml-8 mb-10">
            <li>Taking part in implementation of different websites</li>
            <li>
              Maintaining already functioning websites and adding new
              funcitonalities
            </li>
            <li>Working with different CMS-es</li>
            <li>
              Communicating with different clients and understanding their needs
            </li>
            <li>Improving website performance to pass CWV</li>
            <li>Improving website Accessibility</li>
            <li>Improving website SEO</li>
            <li>Creating Documentations</li>
          </ul>

          <div className="flex gap-6 flex-wrap">
            <TechnologyIcon name="javascript" />
            <TechnologyIcon name="typescript" />
            <TechnologyIcon name="nextjs" />
            <TechnologyIcon name="nuxtjs" />
            <TechnologyIcon name="contentful" />
            <TechnologyIcon name="storyblok" />
            <TechnologyIcon name="strapi" />
            <TechnologyIcon name="netlify" />
            <TechnologyIcon name="vercel" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022-2023",
    content: (
      <div>
        <div className="flex items-center">
          <Image src={FairPayLogo} width={50} className="mr-4" alt="" />
          <h2 className="text-3xl md:text-4xl mb-0 font-semibold">FairPay</h2>
        </div>

        <h3 className="text-sm md:text-base mt-3 mb-5 font-medium">
          Remote · Part time · Fullstack Developer
        </h3>

        <div className="mb-10 leading-7">
          <p className="text-balance mb-4">
            Fairpay.ge was a website that provides users with salary statistics
            and reviews about companies in Georgia. It allowed users to search
            for companies and job titles to get insights into the salaries of
            their peers, as well as providing reviews of the companies from
            current and former employees
          </p>

          <p className="mb-2">As a Founder and Sole developer I:</p>

          <ul className="list-disc ml-8 mb-10">
            <li>
              Founded and developed a salary transparency platform for the
              Georgian market, inspired by Glassdoor (project canceled for now)
            </li>
            <li>
              Built the frontend using Next.js, optimized for SEO and
              performance
            </li>
            <li>Designed a clean and responsive UI</li>
            <li>
              Implemented user authentication using Passport.js with
              session-based cookies
            </li>
          </ul>

          <div className="flex gap-6 flex-wrap">
            <TechnologyIcon name="typescript" />
            <TechnologyIcon name="react" />
            <TechnologyIcon name="nextjs" />
            <TechnologyIcon name="nestjs" />
            <TechnologyIcon name="mongodb" />
            <TechnologyIcon name="figma" />
            <TechnologyIcon name="vercel" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021-2022",
    content: (
      <div>
        <div className="flex items-center">
          <Image src={UnisoftLogo} width={50} className="mr-4" alt="" />
          <h2 className="text-3xl md:text-4xl mb-0 font-semibold">Unisoft</h2>
        </div>

        <h3 className="text-sm md:text-base mt-3 mb-5 font-medium">
          Hybrid · Full time · Fullstack Developer
        </h3>

        <div className="mb-10 leading-7">
          <p className="text-balance mb-4">
            Unisoft is a versatile university management system designed to
            dynamically adapt to any institutional structure. It serves both
            students and lecturers, offering a range of functionalities such as
            homework management, timetable organization, payment processing,
            vacation tracking, and syllabus management.
          </p>

          <p className="mb-2">As a developer my responsibilities included:</p>

          <ul className="list-disc ml-8 mb-10">
            <li>Developing and improving frontend</li>
            <li>Extending backend</li>
            <li>Working with database</li>
          </ul>

          <div className="flex gap-6 flex-wrap">
            <TechnologyIcon name="typescript" />
            <TechnologyIcon name="react" />
            <TechnologyIcon name="nodejs" />
            <TechnologyIcon name="mongodb" />
            <TechnologyIcon name="nestjs" />
          </div>
        </div>
      </div>
    ),
  },
];
