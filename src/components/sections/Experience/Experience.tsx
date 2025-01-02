import { Timeline } from "@/components/aceternity-ui/timeline/Timeline";
import Image from "next/image";
import BejamasLogo from '@/assets/img/bejamas-logo-2.png'
import UnisoftLogo from '@/assets/img/unisoft-logo-2.png'
import { TechnologyIcon } from "@/components/elements/technology-icon/TechnologyIcon";

const data = [
  {
    title: '2022-Present',
    content: (
      <div>
        <div className="flex items-center">
          <Image src={BejamasLogo} width={50} className="mr-4" alt='' />
          <h2 className="text-4xl mb-0 font-semibold">Bejamas</h2>
        </div>

        <h3 className="mt-3 mb-5 font-medium">Remote · Full time · Frontend Developer</h3>

        <div className="mb-10 leading-7">
          <p className="text-balance mb-4">Bejamas is a Poland-based web development company operating remotely on a global scale. We specialize in building and maintaining Jamstack websites, catering to a diverse range of international clients. Our portfolio includes prominent brands such as Alpro and Veezu, showcasing our expertise and broad industry appeal.</p>

          <p className="mb-2">As a developer my responsibilities include:</p>

          <ul className="list-disc ml-8 mb-10">
            <li>Taking part in implementation of different websites</li>
            <li>Maintaining already functioning websites and adding new funcitonalities</li>
            <li>Working with different CMS-es</li>
            <li>Communicating with different clients and understanding their needs</li>
            <li>Improving website performance to pass CWV</li>
          </ul>

          <div className="flex gap-6 flex-wrap">
            <TechnologyIcon name="javascript" />
            <TechnologyIcon name="typescript" />
            <TechnologyIcon name="nextjs" className="invert" />
            <TechnologyIcon name="vercel" className="invert" />
            <TechnologyIcon name="netlify" />
            <TechnologyIcon name="contentful" />
            <TechnologyIcon name="storyblok" />
            <TechnologyIcon name="strapi" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: '2021-2022',
    content: (
      <div>
        <div className="flex items-center">
          <Image src={UnisoftLogo} width={50} className="mr-4" alt='' />
          <h2 className="text-4xl mb-0 font-semibold">Unisoft</h2>
        </div>

        <h3 className="mt-3 mb-5 font-medium">Hybrid · Full time · Fullstack Developer</h3>

        <div className="mb-10 leading-7">
          <p className="text-balance mb-4">Unisoft is a versatile university management system designed to dynamically adapt to any institutional structure. It serves both students and lecturers, offering a range of functionalities such as homework management, timetable organization, payment processing, vacation tracking, and syllabus management.</p>

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
    )
  },
]

export function Experience({ id }: any) {
  return (
    <div className="py-40" id={id}>
      <Timeline
        data={data}
      />
    </div>
  )
}