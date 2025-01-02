import { PinContainer } from "@/components/aceternity-ui/3d-pin/3d-pin";
import Image from "next/image";
import Gmail from '@/assets/svg/gmail.svg';
import Linkedin from '@/assets/svg/linkedin.svg';
import Github from '@/assets/svg/github.svg';
import { BackgroundGradient } from "@/components/aceternity-ui/background-gradient/Background-gradient";

export function Socials({ id }: any) {
  return (
    <div id={id} className="flex relative items-center justify-center gap-24 space-x-4 py-10 h-[800px]">     
      <Linkedin className="w-48" />

      <Gmail className="w-48" />
    
      <Github className="w-48" />
    </div>
  )
}