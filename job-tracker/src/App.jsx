import { FileText, Send, CalendarDays, CircleX } from "lucide-react";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { StatCard } from "./components/StatCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">
        <Dashboard />
        <div className="stat-grid">
          <StatCard title="Total Applications" value="5" icon={FileText} />
          <StatCard title="Applied" value="2" icon={Send} />
          <StatCard title="Interview" value="2" icon={CalendarDays} />
          <StatCard title="Rejected" value="1" icon={CircleX} iconColor="danger" />
        </div>
      </main>
    </div>
  );
}

export default App;
