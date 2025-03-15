import Georgia from "@/assets/svg/flags/georgia.svg";
import Germany from "@/assets/svg/flags/germany.svg";
import UnitedStates from "@/assets/svg/flags/united-states.svg";
import GreatBritain from "@/assets/svg/flags/great-britain.svg";
import Belgium from "@/assets/svg/flags/belgium.svg";

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
      <Icon width={30} height={30} />
    </div>
  );
}
