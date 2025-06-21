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
      className={cn("flex flex-row gap-10 justify-start w-fit", className)}
    >
      {socialsData.map(({ href, Icon, ariaLabel }) => (
        <Link key={href} target="_blank" href={href} aria-label={ariaLabel}>
          <Icon className="w-10" />
        </Link>
      ))}
    </div>
  );
}
