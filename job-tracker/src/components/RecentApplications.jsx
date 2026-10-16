import { ArrowRight } from "lucide-react";
import "./RecentApplications.css";
import {JobCard} from "./JobCard.jsx";
export function RecentApplications() {
  return (
     <section className="recent-applications">
      <div className="section-header">
        <h2>Recent Applications</h2>

        <a href="#">
          View all <ArrowRight size={16} />
        </a>
      </div>
        <div className="job-cards-container">
            <JobCard title="Software Engineer" company="Tech Corp" status="Interview" dateApplied="2026-10-15" />
            <JobCard title="Product Manager" company="Innovate Inc" status="Rejected" dateApplied="2026-10-15" />
            <JobCard title="Frontend Developer" company="Web Dev Studios" status="Applied" dateApplied="2026-10-15" />
            <JobCard title="Wordpress Developer" company="CMS Solutions" status="Interview" dateApplied="2026-10-15" />

        </div>
    </section>
    );
}
