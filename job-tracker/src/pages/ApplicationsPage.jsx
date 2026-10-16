import { JobCard } from "../components/JobCard.jsx";

export function ApplicationsPage({ applications }) {
  return (
    <section className="all-applications-page">
      <header className="all-applications-header">
        <div>
          <h1>All Applications</h1>
          <p>Track all your job applications in one place.</p>
        </div>
      </header>

      <div className="job-cards-container">
        {applications.map((application) => (
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
