'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const slideSize = 40;

const slides = [
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'} width={slideSize} height={slideSize} alt="GE" className="invert" /> },
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://static-00.iconduck.com/assets.00/contentful-icon-454x512-8ffc9x65.png'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://s3.amazonaws.com/cmscritic.mediasite.org/assets/products/storyblok/logo-1575659434275.png?v=1689110467212'} width={slideSize} height={slideSize} alt="GE" className="" /> },
  { icon: <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg'} width={slideSize} height={slideSize} alt="GE" className="" /> },
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