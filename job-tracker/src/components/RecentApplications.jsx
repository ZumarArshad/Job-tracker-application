import { ArrowRight } from "lucide-react";
import "./RecentApplications.css";
import { JobCard } from "./JobCard.jsx";

export function RecentApplications({ applications, onViewAll }) {
  return (
    <section className="recent-applications" id="applications">
      <div className="section-header">
        <h2>Recent Applications</h2>

        <a
          href="/applications"
          className="view-all-applications"
          onClick={(event) => {
            event.preventDefault();
            onViewAll();
          }}
        >
          View all <ArrowRight size={16} />
        </a>
      </div>
      <div className="job-cards-container">
        {applications.slice(0, 4).map((application) => (
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
