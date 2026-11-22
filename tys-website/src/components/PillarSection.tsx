import Pillar from "./Pillar";
import { pillarSection, pillars } from "../data";
import { WaveTop, WaveBottom } from "./Icons";

export default function PillarSection() {
  return (
    <section className="pillar--section">
      <div className="wave wave--top">
        <WaveTop />
      </div>
      <div className="pillar__inner container">
        <p className="pillar__section__title">{pillarSection.title}</p>
        <h2 className="pillar__section__description">
          {pillarSection.description}
        </h2>
        <div className="pillars">
          {pillars.map((pillar) => (
            <Pillar
              title={pillar.title}
              description={pillar.description}
              sanskrit={pillar.sanskrit}
              icon={pillar.icon}
              key={pillar.title}
            />
          ))}
        </div>
      </div>
      <div className="wave wave--bottom">
        <WaveBottom />
      </div>
    </section>
  );
}
