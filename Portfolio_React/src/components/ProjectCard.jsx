import { GitHubIcon } from "./Icons";
import { statusCodes } from "../data";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className={`pill ${project.status}`}>
          {statusCodes[project.status]}
        </span>
        {project.repo && (
          <a
            className="icon-btn"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Code"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech">{project.tech.join(" · ")}</p>
    </article>
  );
}
