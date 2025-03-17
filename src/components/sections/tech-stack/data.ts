
interface TechStack {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}
export const techStack: TechStack[] = [
  {
    title: "Front End",
    items: [
      {
        name: "Javascript",
        icon: "javascript",
      },
      {
        name: "Typescript",
        icon: "typescript",
      },
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Vue",
        icon: "vue",
      },
      {
        name: "Nuxt.js",
        icon: "nuxtjs",
      },
    ],
  },
  {
    title: "Back End",
    items: [
      {
        name: "Node.js",
        icon: "nodejs",
      },
      {
        name: "Express",
        icon: "express",
      },
      {
        name: "Nestjs",
        icon: "nestjs",
      },
    ],
  },
  {
    title: "CMS",
    items: [
      {
        name: "Contentful",
        icon: "contentful",
      },
      {
        name: "Storyblok",
        icon: "storyblok",
      },
      {
        name: "Strapi",
        icon: "strapi",
      },
    ],
  },
  {
    title: "Hosts",
    items: [
      {
        name: "Vercel",
        icon: "vercel",
      },
      {
        name: "Netlify",
        icon: "netlify",
      },
    ],
  },
  {
    title: "AI",
    items: [
      {
        name: "ChatGPT",
        icon: "chatgpt",
      },
      {
        name: "Cursor",
        icon: "cursor",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Jira",
        icon: "jira",
      },
      {
        name: "Linear",
        icon: "linear",
      },
      {
        name: "Figma",
        icon: "figma",
      },      
    ],
  },
];
