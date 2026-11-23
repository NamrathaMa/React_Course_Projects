import {
  FitnessIcon,
  WeightlossIcon,
  LifestyleIcon,
  TherapyIcon,
  PrenatalIcon,
  CorporateIcon,
} from "./Icons";

type ProgramProps = {
  title: string;
  description: string;
  icon: keyof typeof programIcons;
  badge?: string;
};

const programIcons = {
  fitness: FitnessIcon,
  weightloss: WeightlossIcon,
  lifestyle: LifestyleIcon,
  therapy: TherapyIcon,
  prenatal: PrenatalIcon,
  corporate: CorporateIcon,
};

export default function Program({
  title,
  description,
  icon,
  badge,
}: ProgramProps) {
  const Icon = programIcons[icon];
  return (
    <a className="program__item" href="#">
      <div className="program__icon">
        <Icon />
      </div>
      <div className="program__text">
        <h3>
          {title}
          {badge && <span className="program__badge">{badge}</span>}
        </h3>
        <p>{description}</p>
      </div>
      <span className="program__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
