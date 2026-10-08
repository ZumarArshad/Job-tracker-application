import {
  BriefcaseBusiness,
  LayoutDashboard,
  FileText,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <BriefcaseBusiness size={22} />
        </div>

        <span>JobTrack</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <p className="nav-title">MENU</p>

        <a href="#" className="nav-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="#" className="nav-link">
          <FileText size={19} />
          <span>Applications</span>
        </a>

        <a href="#" className="nav-link">
          <Plus size={19} />
          <span>Add Application</span>
        </a>

        <p className="nav-title">GENERAL</p>

        <a href="#" className="nav-link">
          <Settings size={19} />
          <span>Settings</span>
        </a>
      </nav>

      {/* User Profile */}
      <div className="sidebar-bottom">
        <div className="user-profile">
          <div className="user-avatar">ZA</div>

          <div className="user-info">
            <strong>Zumar Arshad</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <button className="logout-button">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
}

