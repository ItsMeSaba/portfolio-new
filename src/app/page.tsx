import { Hero } from "@/components/sections/hero/Hero";
import { Text } from "@/components/sections/text/Text";
import { Experience } from "@/components/sections/experience/Experience";
import { Projects } from "@/components/sections/projects/Projects";
import { TechStack } from "@/components/sections/tech-stack/TechStack";
import { LinkedinRecommendations } from "@/components/sections/linkedin-recommendations/LinkedinRecommendations";
import { ContactMe } from "@/components/sections/contact-me/ContactMe";

export default function Home() {
  return (
    <div className="min-h-screen relative font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen">
        <Hero />

        <Text
          id="about"
          words="Full-stack developer with a frontend focus, passionate about crafting sleek, user-friendly web experiences. With over three years of experience in the JavaScript ecosystem, I specialize in building high-performance applications that are both visually appealing and seamlessly functional."
          className="md:mt-0 md:mb-40"
        />

        <Experience id="experience" />

        <Projects id="projects" />

        <LinkedinRecommendations />

        <TechStack />

        <ContactMe id="contact" />
      </main>
    </div>
  );
}
