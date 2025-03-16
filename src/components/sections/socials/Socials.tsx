import Link from "next/link";
import { socialsData } from "./data";

interface Props {
  id?: string;
}

export function Socials({ id }: Props) {
  return (
    <div
      id={id}
      className="flex flex-col md:flex-row relative items-center justify-center gap-5 md:gap-24 space-x-4 py-10 h-[800px] max-h-[95vh]"
    >
      {socialsData.map(({ href, Icon }) => (
        <Link key={href} target="_blank" href={href}>
          <Icon className="w-32 md:w-44" />
        </Link>
      ))}
    </div>
  );
}
