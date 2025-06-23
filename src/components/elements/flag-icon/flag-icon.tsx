import Georgia from "@/assets/svg/flags/georgia.png";
import Germany from "@/assets/svg/flags/germany.png";
import UnitedStates from "@/assets/svg/flags/united-states.png";
import GreatBritain from "@/assets/svg/flags/great-britain.png";
import Belgium from "@/assets/svg/flags/belgium.png";
import Image from "next/image";

const icons = {
  georgia: Georgia,
  germany: Germany,
  unitedStates: UnitedStates,
  greatBritain: GreatBritain,
  belgium: Belgium,
};

export type Flag = keyof typeof icons;

interface Props {
  country: Flag;
}

export function FlagIcon({ country }: Props) {
  const Icon = icons[country];

  if (!Icon) {
    console.error(`Flag icon for ${country} not found`);
    return null;
  }

  return (
    <div className="relative">
      <Image src={Icon} alt={country} width={30} height={30} />
    </div>
  );
}
