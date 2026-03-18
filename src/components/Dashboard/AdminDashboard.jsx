import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onLogout, data }) => {
  return (
    <div className="min-h-screen w-full p-7 text-white">
      <Header onLogout={onLogout} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
