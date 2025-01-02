import Javascript from "@/assets/svg/technologies/javascript.svg";
import Typescript from "@/assets/svg/technologies/typescript.svg";
import React from "@/assets/svg/technologies/react.svg";
import Nextjs from "@/assets/svg/technologies/nextjs.svg";
import Nestjs from "@/assets/svg/technologies/nestjs.svg";
import Node from "@/assets/svg/technologies/node.svg";
import MongoDB from "@/assets/svg/technologies/mongodb.svg";
import Netlify from "@/assets/svg/technologies/netlify.svg";
import Vercel from "@/assets/svg/technologies/vercel.svg";
import Contentful from "@/assets/svg/technologies/contentful.svg";
import Storyblok from "@/assets/svg/technologies/storyblok.svg";
import Strapi from "@/assets/svg/technologies/strapi.svg";

const icons = {
  javascript: Javascript,
  typescript: Typescript,
  react: React,
  nextjs: Nextjs,
  nestjs: Nestjs,
  nodejs: Node,
  mongodb: MongoDB,
  netlify: Netlify,
  vercel: Vercel,
  contentful: Contentful,
  storyblok: Storyblok,
  strapi: Strapi,
}

interface Props {
  name: keyof typeof icons;
  className?: string;
  width?: number;
  height?: number;
}

export function TechnologyIcon({ name, className, width, height }: Props) {
  const Icon = icons[name];
  
  return (
    <div className="relative">
      <Icon width={width || 35} height={height || 35} className={className} />
    </div>
  )
}