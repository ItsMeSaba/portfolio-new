import { Hero } from "@/components/sections/hero/Hero";
import { Text } from "@/components/sections/text/Text";
import { Experience } from "@/components/sections/experience/Experience";
import { Projects } from "@/components/sections/projects/Projects";
import { TechStack } from "@/components/sections/tech-stack/TechStack";
import { LinkedinRecommendations } from "@/components/sections/linkedin-recommendations/LinkedinRecommendations";
import { ContactMe } from "@/components/sections/contact-me/ContactMe";
import { bejamasProjects } from "@/components/sections/projects/bejamas-projects";
import { personalProjects } from "@/components/sections/projects/personal-projects";

export default function Home() {
  return (
    <div className="min-h-screen relative font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen">
        <Hero />

        <Text
          id="about"
          words="JavaScript engineer (React / Next.js, Node) with 4+ years building production apps that load in under 1s and serve 100k+ monthly users. I turn design hand-offs into accessible, high-performance interfaces while owning back-end APIs when needed."
        />

        <Experience id="experience" />

        <Projects
          id="bejamas-projects"
          data={bejamasProjects}
          title="Projects I Contributed to at Bejamas"
        />

        <Projects
          id="personal-projects"
          data={personalProjects}
          title="Personal Projects"
        />

        <LinkedinRecommendations />

        <TechStack />

        <ContactMe id="contact" />
      </main>
    </div>
  );
}
