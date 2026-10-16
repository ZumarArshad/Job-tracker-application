import { FileText, Send, CalendarDays, CircleX } from "lucide-react";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { RecentApplications } from "./components/RecentApplications.jsx";
import { StatCard } from "./components/StatCard.jsx";
import "./App.css";

const initialApplications = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    status: "Interview",
    dateApplied: "2026-10-15",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc",
    status: "Rejected",
    dateApplied: "2026-10-15",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Web Dev Studios",
    status: "Applied",
    dateApplied: "2026-10-15",
  },
  {
    id: 4,
    title: "Wordpress Developer",
    company: "CMS Solutions",
    status: "Interview",
    dateApplied: "2026-10-15",
  },
];

function App() {
  const [applications, setApplications] = useState(initialApplications);

  const addApplication = (application) => {
    setApplications((currentApplications) => [
      application,
      ...currentApplications,
    ]);
  };

  const appliedCount = applications.filter(
    (application) => application.status === "Applied",
  ).length;
  const interviewCount = applications.filter(
    (application) => application.status === "Interview",
  ).length;
  const rejectedCount = applications.filter(
    (application) => application.status === "Rejected",
  ).length;

  return (
    <div className="app">
      <Sidebar onAddApplication={addApplication} />
      <main className="app-main">
        <Dashboard />
        <div className="stat-grid">
          <StatCard
            title="Total Applications"
            value={applications.length}
            icon={FileText}
          />
          <StatCard
            title="Applied"
            value={appliedCount}
            icon={Send}
            iconColor="success"
          />
          <StatCard
            title="Interview"
            value={interviewCount}
            icon={CalendarDays}
            iconColor="warning"
          />
          <StatCard
            title="Rejected"
            value={rejectedCount}
            icon={CircleX}
            iconColor="danger"
          />
        </div>
        <RecentApplications applications={applications} />
      </main>
    </div>
  );
}

export default App;
