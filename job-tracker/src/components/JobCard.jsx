import { ChevronRight } from "lucide-react";
import "./JobCard.css";

export function JobCard({
  id,
  title,
  company,
  status,
  dateApplied,
  onViewDetails,
}) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="job-card">
      <div className="company-logo" aria-hidden="true">
        {company.charAt(0).toUpperCase()}
      </div>

      <div className="job-card-info">
        <h3>{title}</h3>
        <p>{company}</p>
      </div>

      <div className="job-card-status">
        <span className={`job-status ${statusClass}`}>
          {status}
        </span>
      </div>

      <time className="application-date">
        {dateApplied}
      </time>

      <a
        href={`/applications/${encodeURIComponent(id)}`}
        className="job-card-action"
        aria-label={`View ${title} at ${company}`}
        onClick={(event) => {
          event.preventDefault();
          onViewDetails(id);
        }}
      >
        <ChevronRight size={20} />
      </a>
    </article>
  );
}