import { BreathIcon, WaterIcon, FoodIcon } from "./Icons";

type PillarProps = {
  title: string;
  description: string;
  sanskrit: string;
  icon: keyof typeof pillarIcons;
};
const pillarIcons = {
  breath: BreathIcon,
  water: WaterIcon,
  food: FoodIcon,
};
export default function Pillar({
  title,
  description,
  sanskrit,
  icon,
}: PillarProps) {
  const Icon = pillarIcons[icon];
  return (
    <div className="pillar">
      <div className="pillar__icon">
        <Icon />
      </div>

      <p className="pillar__sanskrit">{sanskrit}</p>
      <h3 className="pillar__title">{title}</h3>
      <p className="pillar__description">{description}</p>
    </div>
  );
}
