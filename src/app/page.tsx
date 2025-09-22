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
          words="Frontend-focused JavaScript engineer with 5+ years of experience building fast, accessible, and SEO-friendly web apps for 100k+ monthly users. Strong foundation in React/Next.js and CMS integration, with additional experience implementing AI-powered features using OpenAI APIs, LangChain, and vector databases. Comfortable owning features end-to-end, from frontend to backend APIs and cloud deployments."
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
