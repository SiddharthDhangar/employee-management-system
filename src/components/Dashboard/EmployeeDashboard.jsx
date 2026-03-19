import React from "react";
import Header from "../other/Header";
import TaskCount from "../other/TaskCount";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] p-6 space-y-6">
      <Header handleLogout={handleLogout} data={data} />
      <TaskCount data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
