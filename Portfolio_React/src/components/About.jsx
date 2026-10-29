import { about } from "../data";
import SectionTag from "./SectionTag";

export default function About() {
  return (
    <section id="about">
      <SectionTag>About</SectionTag>
      <h2>A bit about me</h2>
      <div className="about-grid">
        <div>
          <p>{about.jobExp}</p>
          <p>{about.eduExp}</p>
          <ul className="skills">
            {about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="photo">
          <img src={about.imgUrl} alt={about.imgAlt} />
        </div>
      </div>
    </section>
  );
}
