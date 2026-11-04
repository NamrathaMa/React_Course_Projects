import { useState, useEffect } from "react";

import StatusSection from "../components/StatusSection";

const SMALL_STATUSES = [
  { value: "interview", label: "Interview" },
  { value: "offer", label: "Offer" },
  { value: "rejected", label: "Rejected" },
];

const LARGE_STATUSES = [
  { value: "saved", label: "Saved" },
  { value: "applied", label: "Applied" },
];

export default function BoardPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) {
          throw new Error(`Request failed with status : ${res.status}`);
        }
        const data = await res.json();
        if (!ignore) setJobs(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadJobs();
    return () => {
      ignore = true;
    };
  }, []);
  if (loading) return <p>Jobs are being loaded</p>;
  if (error) return <p>Could not load jobs : {error}</p>;

  return (
    <div>
      <h1>Job Board</h1>
      <div className="small-statuses">
        {SMALL_STATUSES.map(({ value, label }) => {
          const jobArray = jobs.filter((job) => job.status === value);
          return (
            <StatusSection
              jobList={jobArray}
              value={value}
              label={label}
              key={label}
            />
          );
        })}
      </div>
      <div className="large-statuses">
        {LARGE_STATUSES.map(({ value, label }) => {
          const jobArray = jobs.filter((job) => job.status === value);
          return (
            <StatusSection
              jobList={jobArray}
              value={value}
              label={label}
              key={label}
              className="wide"
            />
          );
        })}
      </div>
    </div>
  );
}
