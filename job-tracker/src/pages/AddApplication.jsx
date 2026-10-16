
import { useState } from "react";
import { X, BriefcaseBusiness } from "lucide-react";
import "./AddApplication.css";

export function AddApplication({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    status: "Applied",
    dateApplied: new Date().toISOString().split("T")[0],
    jobUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      id: Date.now(),
    });

    onClose();
  };

  return (
    <div className="application-overlay">
      <div className="application-modal">
        <div className="application-modal-header">
          <div className="application-heading">
            <div className="application-icon">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <h2>Add Application</h2>
              <p>Keep track of your job search.</p>
            </div>
          </div>

          <button
            type="button"
            className="application-close"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="application-form-body">
            <div className="application-form-grid">
              <div className="form-field">
                <label htmlFor="title">Job Title *</label>
                <input
                  id="title"
                  name="title"
                  placeholder="e.g. Frontend Developer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="company">Company Name *</label>
                <input
                  id="company"
                  name="company"
                  placeholder="e.g. ABC Technologies"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="location">Job Location</label>
                <input
                  id="location"
                  name="location"
                  placeholder="e.g. Lahore / Remote"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="jobType">Job Type</label>
                <select
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="status">Application Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="dateApplied">Application Date *</label>
                <input
                  id="dateApplied"
                  name="dateApplied"
                  type="date"
                  value={formData.dateApplied}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="jobUrl">Job Posting URL</label>
                <input
                  id="jobUrl"
                  name="jobUrl"
                  type="url"
                  placeholder="https://company.com/careers"
                  value={formData.jobUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="description">Job Description / Notes</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Add job requirements, interview notes, or reminders..."
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="application-form-footer">
            <button
              type="button"
              className="application-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="application-submit">
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
