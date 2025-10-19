import BejamasLogo from "@/assets/img/companies/bejamas-logo.png";
import UnisoftLogo from "@/assets/img/companies/unisoft-logo.png";
import FairPayLogo from "@/assets/img/companies/fairpay-logo.png";
import Image from "next/image";

import { TechnologyIcon } from "@/components/elements/technology-icon/technology-icon";

interface Experience {
  title: string;
  content: React.ReactNode;
}

export const experienceData: Experience[] = [
  {
    title: "2023-2025",
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
            Bejamas is a modern web agency specializing in high-performance,
            headless, and JAMstack websites — helping global brands build fast,
            scalable, and future-proof digital products, having delivered 200+
            projects for companies worldwide.
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>
              Built and maintained marketing and content-heavy sites using
              React/Next.js with CMS integration
            </li>
            <li>
              Improved performance to meet Core Web Vitals (LCP, FID, CLS),
              enhanced accessibility and SEO scores
            </li>
            <li>Onboarded new developers and wrote internal documentation</li>
            <li>
              Worked directly with clients to define requirements and propose
              UI/UX improvements
            </li>
            <li>
              Some notable projects: Veezu, Alpro, Camino, Alpro Foundation,
              Alpro Healthcare, Climate Central
            </li>
          </ul>

          <div className="mb-4 font-semibold">Key achievements:</div>
          <ul className="list-disc ml-8 mb-10">
            <li>
              Led Camino’s development, improving TTFB by 65%, FCP by 68%, and
              LCP by 72%.
            </li>
            <li>
              Led Veezu’s development, improving performance by over 70% through
              optimizing CMS structure for more efficient data fetching
            </li>
            <li>
              Implemented a custom search solution for Camino, saving the
              company approximately $14,000 annually.
            </li>
            <li>
              Migrated Climate Central to App Router, leveraging server
              components to improve performance by 60% and achieve 95+ scores in
              SEO and accessibility scores.
            </li>
            <li>
              Delivered the Alpro Healthcare Professionals website under a tight
              deadline while accommodating last-minute client requests regarding
              authentication requirements.
            </li>
            <li>
              Conducted an in-depth analysis of animations for an upcoming
              client project and produced comprehensive documentation.
            </li>
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
            Fairpay was a community-driven salary and review platform for the
            Georgian tech industry, designed to bring transparency into
            compensation and workplace culture. It enabled professionals to
            anonymously share salaries, reviews, and interview experiences,
            helping others make better career decisions — all built with a
            secure, modern web stack.
          </p>

          <ul className="list-disc ml-8 mb-10">
            <li>
              Developed a fully interactive salary & review platform in Next.js,
              enabling anonymous submissions, transparent insights, and smooth
              real-time browsing.
            </li>
            <li>
              Engineered scalable NestJS backend with modular structure (Users,
              Companies, Vacancies, Reviews, Interviews), leveraging Mongoose
              models and service–repository separation for clean data flow and
              maintainability.
            </li>
            <li>
              Optimized performance and SEO via caching layers and static
              generation; achieved visibly faster load and smoother navigation.
            </li>
            <li>
              Implemented Facebook OAuth + JWT authentication with secure
              httpOnly cookies and environment-based CORS policies — ensuring
              safe login.
            </li>
            <li>
              Designed faceted search and autocomplete (companies, technologies,
              seniority) using React Query and debounced filters, enabling fast,
              intuitive exploration.
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
            Unisoft — a comprehensive academic management platform providing
            dashboards for administrators, lecturers, and students to manage
            courses, assignments, finances, and performance analytics.
          </p>

          <ul className="list-disc ml-8 mb-10">
            <li>
              Built a modular, multi-role dashboard platform (Admin, Lecturer,
              Student) with dynamic navigation, secure access control, and a
              unified design system.
            </li>
            <li>
              Developed a scalable frontend architecture using reusable
              components, global context, and dependency-injection patterns for
              consistent, fast delivery.
            </li>
            <li>
              Architected a modular NestJS backend with service-repository
              separation and optimized MongoDB schemas to boost scalability and
              performance.
            </li>
            <li>
              Implemented role-based authentication and caching, ensuring strong
              security and high responsiveness under load.
            </li>
            <li>
              Delivered interactive analytics dashboards with Chart.js,
              visualizing key academic and financial metrics for data-driven
              insights.
            </li>
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
