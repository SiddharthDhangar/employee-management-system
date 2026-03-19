import React from "react";

const TaskCount = ({ data }) => {
  const { active, newTask, completed, failed } = data.taskCounts;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-blue-600/20 border border-blue-500 p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-white">{newTask}</h2>
        <p className="text-blue-400 mt-1">New Tasks</p>
      </div>

      <div className="bg-green-600/20 border border-green-500 p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-white">{completed}</h2>
        <p className="text-green-400 mt-1">Completed</p>
      </div>

      <div className="bg-yellow-600/20 border border-yellow-500 p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-white">{active}</h2>
        <p className="text-yellow-400 mt-1">Accepted</p>
      </div>

      <div className="bg-red-600/20 border border-red-500 p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-white">{failed}</h2>
        <p className="text-red-400 mt-1">Failed</p>
      </div>
    </div>
  );
};

export default TaskCount;
