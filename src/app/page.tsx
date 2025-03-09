import { TextGenerateEffect } from "@/components/aceternity-ui/text-generate-effect/Text-generate-effect";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/aceternity-ui/typewriter-effect/Typewriter-effect";
import { Vortex } from "@/components/aceternity-ui/vortex/Vortex";
import { Hero } from "@/components/sections/Hero/Hero";
import Image from "next/image";
import GE from "../../public/ge.png";
import { Text } from "@/components/sections/Text/Text";
import { Carousel } from "@/components/sections/Carousel/Carousel";
import { Experience } from "@/components/sections/Experience/Experience";
import { Projects } from "@/components/sections/Projects/Projects";
import { Socials } from "@/components/sections/Socials/Socials";

export default function Home() {
  return (
    <div className="min-h-screen relative font-[family-name:var(--font-geist-sans)]">
      <main className="w-full min-h-screen">
        <Hero />

        <Text
          id="about"
          words="Web developer with a knack for building sleek, user-friendly websites. With a strong foundation in Javascript ecosystem, having more than 3 years of experience, I love crafting seamless digital experiences that not only look great but also perform flawlessly."
          textClassName="leading-[40px] text-2xl md:text-3xl md:leading-[50px]"
        />

        <Carousel />

        <Experience id="experience" />

        <Projects id="projects" />

        <Socials id="contact" />
      </main>
    </div>
  );
}
