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
import Nuxtjs from "@/assets/svg/technologies/nuxtjs.svg";
import Vue from "@/assets/svg/technologies/vue.svg";
import Cursor from "@/assets/svg/technologies/cursor.svg";
import Chatgpt from "@/assets/svg/technologies/chatgpt.svg";
import Figma from "@/assets/svg/technologies/figma.svg";
import Jira from "@/assets/svg/technologies/jira.svg";
import Linear from "@/assets/svg/technologies/linear.svg";
import Openai from "@/assets/svg/technologies/openai.svg";

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
  nuxtjs: Nuxtjs,
  vue: Vue,
  cursor: Cursor,
  chatgpt: Chatgpt,
  figma: Figma,
  jira: Jira,
  linear: Linear,
  openai: Openai,
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof icons;
  className?: string;
  width?: number;
  height?: number;
}

export function TechnologyIcon({
  name,
  className,
  width,
  height,
  ...rest
}: Props) {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <div className="relative" title={name} {...rest}>
      <Icon width={width || 35} height={height || 35} className={className} />
    </div>
  );
}
