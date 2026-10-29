import SectionTag from "./SectionTag";
import ProjectCard from "./ProjectCard";

import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <SectionTag>Projects</SectionTag>
      <h2>Things I've built</h2>
      <div className="projects-grid" id="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
