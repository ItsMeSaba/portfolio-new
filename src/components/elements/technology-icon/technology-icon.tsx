import Typescript from "@/assets/svg/technologies/typescript.svg";
import Javascript from "@/assets/svg/technologies/javascript.svg";
import Contentful from "@/assets/svg/technologies/contentful.svg";
import Storyblok from "@/assets/svg/technologies/storyblok.svg";
import CursorAI from "@/assets/img/technologies/cursorai.jpeg";
import Tailwind from "@/assets/svg/technologies/tailwind.svg";
import MongoDB from "@/assets/svg/technologies/mongodb.svg";
import Chatgpt from "@/assets/svg/technologies/chatgpt.svg";
import Graphql from "@/assets/svg/technologies/graphql.svg";
import Netlify from "@/assets/svg/technologies/netlify.svg";
import Nextjs from "@/assets/svg/technologies/nextjs.svg";
import Nuxtjs from "@/assets/svg/technologies/nuxtjs.svg";
import Nestjs from "@/assets/svg/technologies/nestjs.svg";
import Linear from "@/assets/svg/technologies/linear.svg";
import Strapi from "@/assets/svg/technologies/strapi.svg";
import Openai from "@/assets/svg/technologies/openai.svg";
import Vercel from "@/assets/svg/technologies/vercel.svg";
import React from "@/assets/svg/technologies/react.svg";
import Figma from "@/assets/svg/technologies/figma.svg";
import Node from "@/assets/svg/technologies/node.svg";
import Jira from "@/assets/svg/technologies/jira.svg";
import Gsap from "@/assets/svg/technologies/gsap.svg";
import Vue from "@/assets/svg/technologies/vue.svg";
import clsx from "clsx";

import { StaticImageData } from "next/image";

const svgIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
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
  chatgpt: Chatgpt,
  figma: Figma,
  jira: Jira,
  linear: Linear,
  openai: Openai,
  gsap: Gsap,
  graphql: Graphql,
  tailwind: Tailwind,
};

const imgIcons: Record<string, StaticImageData> = {
  cursor: CursorAI,
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof svgIcons | keyof typeof imgIcons;
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
  const SvgIcon = svgIcons[name];
  const ImgIcon = imgIcons[name];

  if (!SvgIcon && !ImgIcon) return null;

  const iconStyles = "w-[35px] h-[35px] md:w-[40px] md:h-[40px]";

  return (
    <div className="relative" title={name} {...rest}>
      {SvgIcon && <SvgIcon className={clsx(iconStyles, className)} />}

      {!SvgIcon && ImgIcon && (
        <img
          src={ImgIcon.src}
          alt={name}
          className={clsx(iconStyles, className)}
        />
      )}
    </div>
  );
}
