import SectionTag from "./SectionTag";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <SectionTag>Education</SectionTag>
      <h2>Where I studied</h2>
      <div className="education-grid">
        {education.map((school) => (
          <div className="school" key={school.name}>
            <h3>{school.name}</h3>
            <p className="degree">{school.degree}</p>
            <p className="year">{school.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
