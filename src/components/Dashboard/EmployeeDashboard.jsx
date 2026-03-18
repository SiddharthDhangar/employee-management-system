import React from "react";
import Header from "../other/Header";
import TaskCount from "../other/TaskCount";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, onLogout }) => {
  return (
    <div className="text-white py-10 px-10 md:px-34 bg-[#1c1c1c] min-h-screen flex flex-col">
      <Header data={data} onLogout={onLogout} />
      <TaskCount data={data} />
      <div className="flex-1 mt-10">
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
