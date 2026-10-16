import {
  BriefcaseBusiness,
  LayoutDashboard,
  FileText,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { AddApplication } from "../pages/AddApplication.jsx";
import "./Sidebar.css";

export function Sidebar({ onAddApplication, currentPage, onNavigate }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <span>
            Job<strong>Track</strong>
          </span>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-title">MENU</p>

          <a
            href="/"
            className={`nav-link${currentPage === "dashboard" ? " active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/");
            }}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </a>

          <a
            href="/applications"
            className={`nav-link${["applications", "details"].includes(currentPage) ? " active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/applications");
            }}
          >
            <FileText size={19} />
            <span>Applications</span>
          </a>

          <button
            type="button"
            className="nav-link"
            onClick={() => setShowApplicationForm(true)}
          >
            <Plus size={19} />
            <span>Add Application</span>
          </button>

          <p className="nav-title">GENERAL</p>

          <a
            href="/settings"
            className={`nav-link${currentPage === "settings" ? " active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/settings");
            }}
          >
            <Settings size={19} />
            <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="user-avatar">ZA</div>

            <div className="user-info">
              <strong>Zumar Arshad</strong>
              <span>Frontend Developer</span>
            </div>
          </div>

          <button type="button" className="logout-button" aria-label="Log out">
            <LogOut size={18} />
          </button>
        </div>
      </aside>
      {showApplicationForm && (
        <AddApplication
          onClose={() => setShowApplicationForm(false)}
          onSave={onAddApplication}
        />
      )}
    </>
  );
}
