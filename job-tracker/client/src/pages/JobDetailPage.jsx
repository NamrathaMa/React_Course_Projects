import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function JobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadJob() {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        if (res.status === 404)
          throw new Error("This job doesn't exist (it may have been deleted)");

        if (!res.ok)
          throw new Error(`Request failed with status : ${res.status}`);

        const data = await res.json();
        if (!ignore) setJob(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadJob();

    return () => {
      ignore = true;
    };
  }, [id]);
  if (loading) return <p>Loading job.........</p>;
  if (error)
    return (
      <div className="job-detail">
        <Link to="/" className="back-link">
          ← Back to board
        </Link>
        <p>Could not load this job: {error}</p>
      </div>
    );
  const dateApp = job.dateApplied && formatDate(job.dateApplied);
  return (
    <div className="job-detail">
      <Link to="/" className="back-link">
        ← Back to board
      </Link>
      <div className="job-info">
        <h1>
          {job.company}
          <span
            className="status-pill"
            style={{ background: `var(--${job.status})` }}
          >
            {job.status}
          </span>
        </h1>

        <p className="job-role">Role : {job.role}</p>
        <p className="job-location">Location : {job.location}</p>
        {job.salary != null && (
          <p className="job-salary">Salary : {job.salary} LPA</p>
        )}
        {dateApp && <p className="date-applied">Applied on {dateApp}</p>}
        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="posting-link"
          >
            View job posting ↗
          </a>
        )}
        {job.contacts.length > 0 && (
          <section className="detail-section contacts-list">
            <h2>Contact List</h2>
            {job.contacts.map((contact) => (
              <div key={contact._id}>
                <h4>{contact.name}:</h4>

                {contact.email && (
                  <p>
                    {" "}
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>{" "}
                  </p>
                )}

                {contact.phoneNbr && (
                  <p>
                    tel :
                    <a href={`tel:{" "}${contact.phoneNbr}`}>
                      {contact.phoneNbr}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </section>
        )}
        {job.description && (
          <section className="detail-section">
            <h2>Description</h2>
            <p className="job-description">{job.description}</p>
          </section>
        )}
        {job.interviews.length > 0 && (
          <section className="detail-section">
            <h2>Interview Rounds</h2>
            {job.interviews.map((interview) => (
              <div className="interview-round" key={interview._id}>
                <p className="job-interview">
                  {formatDate(interview.date)}: {interview.round}
                </p>
                {interview.notes && <p>Notes : {interview.notes}</p>}
              </div>
            ))}
          </section>
        )}
        {job.notes && (
          <section className="detail-section">
            <h2>Notes</h2>
            <p className="job-notes">{job.notes}</p>
          </section>
        )}
      </div>
    </div>
  );
}
