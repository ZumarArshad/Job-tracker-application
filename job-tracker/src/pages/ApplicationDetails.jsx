
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Link as LinkIcon,
  MapPin,
  Wallet,
  Clock3,
  Pencil,
  Building2,
  FileText,
  Activity,
  StickyNote,
} from "lucide-react";

import "./ApplicationDetails.css";

const defaultApplicationDetails = {
  location: "Not provided",
  jobType: "Not provided",
  posted: "",
  status: "Applied",
  dateApplied: "Not provided",
  jobUrl: "",
  salary: "Not specified",
  description: "No description provided.",
  skills: [],
};

export function ApplicationDetails({
  application: applicationData,
  onBack,
  onUpdate,
}) {
  const [application, setApplication] = useState(() => ({
    ...defaultApplicationDetails,
    ...applicationData,
    skills: applicationData.skills ?? [],
  }));
  const [activeTab, setActiveTab] = useState("Details");
  const [notes, setNotes] = useState("");
  const [activity, setActivity] = useState([
    {
      id: 1,
      title: "Application added",
      date: applicationData.dateApplied,
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const updateField = (field, value) => {
    setApplication((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const changeStatus = (status) => {
    const updatedApplication = { ...application, status };
    setApplication(updatedApplication);
    onUpdate(updatedApplication);

    setActivity((prev) => [
      {
        id: Date.now(),
        title: `Application status changed to ${status}`,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
  };

  const saveChanges = () => {
    setIsEditing(false);
    onUpdate(application);

    setActivity((prev) => [
      {
        id: Date.now(),
        title: "Application details updated",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
  };

  const statusClass = application.status
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className="jt-app">
      <div className="jt-main">
        <a
          href="/applications"
          className="jt-back-link"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          <ArrowLeft size={15} />
          Back to jobs
        </a>

        <section className="jt-top-grid">
          <div className="jt-job-summary">
            <div className="jt-company-logo">
              {application.company.charAt(0).toUpperCase()}
            </div>

            <div className="jt-job-heading">
              {isEditing ? (
                <>
                  <input
                    aria-label="Job title"
                    className="jt-edit-input jt-title-input"
                    value={application.title}
                    onChange={(e) =>
                      updateField("title", e.target.value)
                    }
                  />
                  <input
                    aria-label="Company name"
                    className="jt-edit-input"
                    value={application.company}
                    onChange={(e) =>
                      updateField("company", e.target.value)
                    }
                  />
                </>
              ) : (
                <>
                  <h1>{application.title}</h1>
                  <p>{application.company}</p>
                </>
              )}

              <div className="jt-job-meta">
                <span>
                  <MapPin size={13} />
                  {application.location}
                </span>
                <span>
                  <Clock3 size={13} />
                  {application.jobType}
                </span>
                {application.posted && (
                  <span>
                    <Clock3 size={13} />
                    {application.posted}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="jt-status-card">
            <label htmlFor="application-status">Apply Status</label>
            <select
              id="application-status"
              className={`jt-status-select status-${statusClass}`}
              value={application.status}
              onChange={(e) => changeStatus(e.target.value)}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="jt-edit-card">
            {isEditing ? (
              <button
                className="jt-edit-button jt-save-button"
                onClick={saveChanges}
              >
                Save
              </button>
            ) : (
              <button
                className="jt-edit-button"
                onClick={() => setIsEditing(true)}
              >
                <Pencil size={14} />
                Edit
              </button>
            )}
          </div>
        </section>

        <div className="jt-tabs" role="tablist">
          {[
            { name: "Details", icon: FileText },
            { name: "Notes", icon: StickyNote },
            { name: "Activity", icon: Activity },
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              role="tab"
              aria-selected={activeTab === name}
              className={`jt-tab ${
                activeTab === name ? "selected" : ""
              }`}
              onClick={() => setActiveTab(name)}
            >
              <Icon size={15} />
              {name}
            </button>
          ))}
        </div>

        {activeTab === "Details" && (
          <section className="jt-details-grid">
            <div className="jt-panel jt-description-panel">
              <h3>Job Description</h3>

              {isEditing ? (
                <textarea
                  className="jt-edit-input jt-description-input"
                  aria-label="Job description"
                  value={application.description}
                  onChange={(e) =>
                    updateField("description", e.target.value)
                  }
                />
              ) : (
                <p className="jt-description">
                  {application.description}
                </p>
              )}

              <h3 className="jt-skills-title">Required Skills</h3>

              <div className="jt-skills">
                {application.skills.map((skill) => (
                  <span className="jt-skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="jt-panel jt-info-panel">
              <h3>Application Information</h3>

              <div className="jt-info-row">
                <CalendarDays size={17} />
                <div>
                  <span>Applied On</span>
                  <strong>{application.dateApplied}</strong>
                </div>
              </div>

              <div className="jt-info-row">
                <LinkIcon size={17} />
                <div>
                  <span>Job Link</span>
                  {application.jobUrl ? (
                    <a
                      href={application.jobUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {application.jobUrl}
                    </a>
                  ) : (
                    <strong>Not provided</strong>
                  )}
                </div>
              </div>

              <div className="jt-info-row">
                <MapPin size={17} />
                <div>
                  <span>Location</span>
                  <strong>{application.location}</strong>
                </div>
              </div>

              <div className="jt-info-row">
                <Wallet size={17} />
                <div>
                  <span>Salary</span>
                  <strong>{application.salary}</strong>
                </div>
              </div>

              <div className="jt-info-row">
                <Building2 size={17} />
                <div>
                  <span>Job Type</span>
                  <strong>{application.jobType}</strong>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "Notes" && (
          <section className="jt-panel jt-notes-panel">
            <h3>Application Notes</h3>
            <p className="jt-muted">
              Save interview preparation, recruiter details, or reminders.
            </p>

            <textarea
              className="jt-notes-input"
              placeholder="Write your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={8}
            />

            <span className="jt-muted">
              Notes remain available while this page stays mounted.
            </span>
          </section>
        )}

        {activeTab === "Activity" && (
          <section className="jt-panel jt-activity-panel">
            <h3>Application Activity</h3>

            {activity.map((item) => (
              <div className="jt-activity-item" key={item.id}>
                <span className="jt-activity-dot" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
