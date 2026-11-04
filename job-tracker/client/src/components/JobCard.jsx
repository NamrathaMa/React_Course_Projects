import { Link } from "react-router";

export default function JobCard({ job }) {
  const linkAddress = `/jobs/${job._id}`;
  return (
    <Link to={linkAddress} className="job-card-link">
      <article className="job-card">
        <h4>{job.company}</h4>
        <p>{job.role}</p>
        <p>{job.location}</p>
      </article>
    </Link>
  );
}
