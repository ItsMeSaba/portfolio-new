import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { TechStack } from "@/components/sections/tech-stack/TechStack";
import { Experience } from "@/components/sections/experience/Experience";
import { ContactMe } from "@/components/sections/contact-me/ContactMe";
import { bejamasProjects } from "@/components/sections/projects/bejamas-projects";
import { personalProjects } from "@/components/sections/projects/personal-projects";
import { LinkedinRecommendations } from "@/components/sections/linkedin-recommendations/LinkedinRecommendations";

export default function Home() {
  return (
    <div className="min-h-screen relative font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen">
        <Hero />

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
