import Gmail from "@/assets/svg/gmail.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";

export function Socials({ id }: any) {
  return (
    <div
      id={id}
      className="flex relative items-center justify-center gap-24 space-x-4 py-10 h-[800px]"
    >
      <Linkedin className="w-48" />

      <Gmail className="w-48" />

      <Github className="w-48" />
    </div>
  );
}
