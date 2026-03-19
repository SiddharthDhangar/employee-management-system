import React from "react";
import { useAuth } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useAuth();
  return (
    <div className="bg-[#111827] p-6 rounded-xl shadow-md">
      <h2 className="text-xl text-white font-semibold mb-4">Employee Tasks</h2>

      <div className="grid grid-cols-5 text-gray-400 text-sm border-b border-gray-700 pb-2">
        <span>Name</span>
        <span>New</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>

      {userData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 text-white py-3 border-b border-gray-800"
        >
          <span>{item.firstName}</span>
          <span className="text-blue-400">{item.taskCounts.newTask}</span>
          <span className="text-yellow-400">{item.taskCounts.active}</span>
          <span className="text-green-400">{item.taskCounts.completed}</span>
          <span className="text-red-400">{item.taskCounts.failed}</span>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
