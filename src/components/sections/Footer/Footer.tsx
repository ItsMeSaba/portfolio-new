import Image from "next/image";
import Gmail from './gmail.png'

export function Footer() {
  return (
    <footer className="transparency-darker bg-[rgb(20,20,20)] pb-5"> 
      <div className="flex justify-center items-center py-10 gap-10">
        <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'} className="invert" width={45} height={45} alt="github" />
        <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'} className="" width={45} height={45} alt="linkedin" />
        <Image src={Gmail} className="" width={50} alt="linkedin" />
      </div>
    </footer>
  );
}