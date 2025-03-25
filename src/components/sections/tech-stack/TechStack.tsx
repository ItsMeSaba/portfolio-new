import { TechStackIconsByCategories } from "./TechStackIconsByCategories";

export function TechStack() {
  return (
    <section className="container max-w-screen-xl my-12 py-12 md:my-20 md:py-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Tech Stack</h2>

        <p className="text-gray-400 mb-4">
          I've worked with a variety of technologies over the years, and I'm
          always eager to learn new things. Here are some of the technologies
          I've used:
        </p>

        <TechStackIconsByCategories />
      </div>
    </section>
  );
}
