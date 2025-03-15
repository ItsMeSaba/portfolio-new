import Gmail from "@/assets/svg/gmail.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";
import Link from "next/link";

interface Props {
  id?: string;
}

export function Socials({ id }: Props) {
  return (
    <div
      id={id}
      className="flex flex-col md:flex-row relative items-center justify-center gap-5 md:gap-24 space-x-4 py-10 h-[800px] max-h-[95vh]"
    >
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/saba-silagadze-8164a31b0/"
      >
        <Linkedin className="w-32 md:w-44" />
      </Link>

      <Link target="_blank" href="mailto:sbsilagadze@gmail.com">
        <Gmail className="w-32 md:w-44" />
      </Link>

      <Link target="_blank" href="https://github.com/ItsMeSaba">
        <Github className="w-32 md:w-44" />
      </Link>
    </div>
  );
}
