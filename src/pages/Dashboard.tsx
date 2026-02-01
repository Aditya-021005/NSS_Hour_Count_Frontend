import { useState } from "react";
import HourCard from "../components/HourCard";
import HourTable from "../components/HourTable";
import AddHourModal from "../components/AddHourModal";

const mockLogs = [
  { id: 1, task: "Dept work", category: "Dept", startTime: "", endTime: "" },
  { id: 2, task: "Meeting", category: "Meet", startTime: "", endTime: "" },
  { id: 3, task: "Event duty", category: "Event", startTime: "", endTime: "" },
  { id: 4, task: "Misc help", category: "Misc", startTime: "", endTime: "" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"view" | "add">("view");
  const [category, setCategory] = useState("All");

  const filteredLogs =
    category === "All"
      ? mockLogs
      : mockLogs.filter(log => log.category === category);

  return (
    <>
      {/* HEADER */}
<header className="top-header">
  <div className="header-content">
    {/* LEFT: LOGO + TITLE */}
    <div className="header-left">
      <img
        src="/src/assets/nss-logo.png"
        alt="NSS Logo"
        className="nss-logo"
      />
      <h1 className="portal-title">Hour Count Portal</h1>
    </div>

    {/* RIGHT */}
    <span className="badge">Member</span>
  </div>
</header>


      <div className="page">
        {/* MAIN TABS */}
        <div className="tabs">
          <button
            className={activeTab === "view" ? "tab active" : "tab"}
            onClick={() => setActiveTab("view")}
          >
            View Hours
          </button>
          <button
            className={activeTab === "add" ? "tab active" : "tab"}
            onClick={() => setActiveTab("add")}
          >
            Add Hours
          </button>
        </div>

        {/* VIEW HOURS */}
        {activeTab === "view" && (
          <>
            {/* CATEGORY FILTER */}
            <div className="filters">
              {["All", "Dept", "Meet", "Event", "Misc"].map(cat => (
                <button
                  key={cat}
                  className={category === cat ? "filter active" : "filter"}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SUMMARY */}
            <section className="grid">
              <HourCard title="Department" value={12} />
              <HourCard title="Meetings" value={6} />
              <HourCard title="Events" value={9} />
              <HourCard title="Misc" value={3} />
            </section>

            {/* TABLE */}
    <section className="section">
  <div className="table-container">
    <HourTable logs={filteredLogs} />
  </div>
</section>

          </>
        )}

        {/* ADD HOURS */}
        {activeTab === "add" && (
          <section className="section">
          <div className="add-hours-header">
  <h2>Add Hours</h2>
  <p>Log your NSS activity by filling in the details below</p>
</div>
<AddHourModal />
          </section>
        )}
      </div>
    </>
  );
}
