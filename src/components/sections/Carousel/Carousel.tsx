'use client'

import { TechnologyIcon } from '@/components/elements/technology-icon/TechnologyIcon';
import { motion } from 'framer-motion';

const slideSize = 40;

const slides = [
  { icon: <TechnologyIcon name='javascript' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='typescript' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='react' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='nextjs' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='nodejs' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='nestjs' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='vercel' width={slideSize} height={slideSize} className='invert' /> },
  { icon: <TechnologyIcon name='netlify' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='contentful' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='storyblok' width={slideSize} height={slideSize} /> },
  { icon: <TechnologyIcon name='strapi' width={slideSize} height={slideSize} /> },
];

export function Carousel() {
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
      <div className="relative container h-full overflow-hidden py-12 bg-black">
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <div className="flex items-center justify-center h-full select-none">
                {slide.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
  );
};