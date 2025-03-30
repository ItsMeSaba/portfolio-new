import Link from "next/link";
import { socialsData } from "./data";
import { cn } from "@/components/aceternity-ui/lib/utils";

interface Props {
  id?: string;
  className?: string;
}

export function Socials({ id, className }: Props) {
  return (
    <div
      id={id}
      className={cn("flex flex-row gap-6 justify-start w-fit", className)}
    >
      {socialsData.map(({ href, Icon }) => (
        <Link key={href} target="_blank" href={href}>
          <Icon className="w-24 md:w-10" />
        </Link>
      ))}
    </div>
  );
}
