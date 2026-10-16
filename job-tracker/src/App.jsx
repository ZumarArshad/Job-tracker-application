import { FileText, Send, CalendarDays, CircleX } from "lucide-react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { RecentApplications } from "./components/RecentApplications.jsx";
import { StatCard } from "./components/StatCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">
        <Dashboard />
        <div className="stat-grid">
          <StatCard title="Total Applications" value="5" icon={FileText} />
          <StatCard title="Applied" value="2" icon={Send} iconColor="success" />
          <StatCard
            title="Interview"
            value="2"
            icon={CalendarDays}
            iconColor="warning"
          />
          <StatCard
            title="Rejected"
            value="1"
            icon={CircleX}
            iconColor="danger"
          />
        </div>
        <RecentApplications />
      </main>
    </div>
  );
}

export default App;
