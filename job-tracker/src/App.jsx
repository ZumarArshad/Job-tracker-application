import { FileText, Send, CalendarDays, CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { ApplicationsPage } from "./pages/ApplicationsPage.jsx";
import { ApplicationDetails } from "./pages/ApplicationDetails.jsx";
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
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname,
  );
  const currentPage =
    currentPath === "/applications"
      ? "applications"
      : currentPath.startsWith("/applications/")
        ? "details"
        : "dashboard";
  const selectedApplicationId =
    currentPage === "details"
      ? decodeURIComponent(currentPath.slice("/applications/".length))
      : null;
  const selectedApplication = applications.find(
    (application) => String(application.id) === selectedApplicationId,
  );

  const addApplication = (application) => {
    setApplications((currentApplications) => [
      application,
      ...currentApplications,
    ]);
  };

  const updateApplication = (updatedApplication) => {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === updatedApplication.id
          ? updatedApplication
          : application,
      ),
    );
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

  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="app">
      <Sidebar
        onAddApplication={addApplication}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
      <main className="app-main">
        {currentPage === "details" && selectedApplication ? (
          <ApplicationDetails
            key={selectedApplication.id}
            application={selectedApplication}
            onBack={() => navigateTo("/applications")}
            onUpdate={updateApplication}
          />
        ) : currentPage === "applications" ? (
          <ApplicationsPage
            applications={applications}
            onViewDetails={(id) =>
              navigateTo(`/applications/${encodeURIComponent(id)}`)
            }
          />
        ) : (
          <>
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
            <RecentApplications
              applications={applications}
              onViewAll={() => navigateTo("/applications")}
              onViewDetails={(id) =>
                navigateTo(`/applications/${encodeURIComponent(id)}`)
              }
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
