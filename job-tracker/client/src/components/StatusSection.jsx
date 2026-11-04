import JobCard from "./JobCard";

export default function StatusSection({
  jobList,
  value,
  label,
  className = "",
}) {
  return (
    <div
      className={`status-section ${className}`}
      style={{ borderTop: `5px solid var(--${value})` }}
    >
      <h3>
        {label} <span className="count">{jobList.length}</span>
      </h3>
      <div className="cards">
        {jobList.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
}
