import Gmail from "@/assets/svg/gmail.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";
import Link from "next/link";

export function Socials({ id }: any) {
  return (
    <div
      id={id}
      className="flex relative items-center justify-center gap-24 space-x-4 py-10 h-[800px]"
    >
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/saba-silagadze-8164a31b0/"
      >
        <Linkedin className="w-48" />
      </Link>

      <Link target="_blank" href="mailto:sbsilagadze@gmail.com">
        <Gmail className="w-48" />
      </Link>

      <Link target="_blank" href="https://github.com/ItsMeSaba">
        <Github className="w-48" />
      </Link>
    </div>
  );
}
