import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./RecentApplications.css";
import { JobCard } from "./JobCard.jsx";

export function RecentApplications({ applications }) {
  const [showAll, setShowAll] = useState(false);
  const visibleApplications = showAll
    ? applications
    : applications.slice(0, 4);

  return (
    <section className="recent-applications" id="applications">
      <div className="section-header">
        <h2>Recent Applications</h2>

        {applications.length > 4 && (
          <button
            type="button"
            className="view-all-applications"
            aria-expanded={showAll}
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show recent" : "View all"} <ArrowRight size={16} />
          </button>
        )}
      </div>
      <div className="job-cards-container">
        {visibleApplications.map((application) => (
          <JobCard
            key={application.id}
            title={application.title}
            company={application.company}
            status={application.status}
            dateApplied={application.dateApplied}
          />
        ))}
        {applications.length === 0 && (
          <p className="empty-applications">
            No applications yet. Add one to get started.
          </p>
        )}
      </div>
    </section>
  );
}
