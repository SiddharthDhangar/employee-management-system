import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] p-6 space-y-6">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
