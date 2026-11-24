import Program from "./Program";

import ProgramPhoto from "../assets/program_photo.webp";
import { programSection, programs } from "../data";

export default function Programs() {
  return (
    <section className="program--section container">
      <div className="program__section__left">
        <p className="program__section__label">{programSection.label}</p>
        <h2 className="program__section__heading">{programSection.heading}</h2>
        <p className="program__section__text">{programSection.text}</p>
        <div className="program__section__img">
          <img
            src={ProgramPhoto}
            alt="Three students holding one-legged wheel pose while an instructor adjusts a student's leg"
          />
        </div>
      </div>
      <div className="program__items">
        {programs.map((program) => (
          <Program key={program.title} {...program} />
        ))}
      </div>
    </section>
  );
}
