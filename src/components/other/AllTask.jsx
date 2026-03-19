import React from "react";
import { useAuth } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-[#111827] p-4 md:p-6 rounded-xl shadow-md">
      <h2 className="text-lg md:text-xl text-white font-semibold mb-4">
        Employee Tasks
      </h2>

      {/* ✅ Header (Desktop Only) */}
      <div className="hidden md:grid grid-cols-5 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-3">
        <span>Name</span>
        <span className="text-center">New</span>
        <span className="text-center">Active</span>
        <span className="text-center">Completed</span>
        <span className="text-center">Failed</span>
      </div>

      {/* Data */}
      {userData.map((item) => (
        <div
          key={item.id}
          className="bg-[#1f2937] p-4 rounded-xl mb-3 md:grid md:grid-cols-5 md:items-center border border-gray-700"
        >
          {/* Name */}
          <div className="text-white font-semibold mb-3 md:mb-0">
            {item.firstName}
          </div>

          {/* ✅ MOBILE VIEW */}
          <div className="md:hidden flex flex-col gap-1 text-sm ">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">New</span>
              <span className="text-blue-400 font-medium pr-10">
                {item.taskCounts.newTask}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Active</span>
              <span className="text-yellow-400 font-medium pr-10">
                {item.taskCounts.active}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Completed</span>
              <span className="text-green-400 font-medium pr-10">
                {item.taskCounts.completed}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Failed</span>
              <span className="text-red-400 font-medium pr-10">
                {item.taskCounts.failed}
              </span>
            </div>
          </div>

          {/* ✅ DESKTOP VIEW */}
          <div className="hidden md:contents text-center text-sm">
            <span className="text-blue-400">{item.taskCounts.newTask}</span>
            <span className="text-yellow-400">{item.taskCounts.active}</span>
            <span className="text-green-400">{item.taskCounts.completed}</span>
            <span className="text-red-400">{item.taskCounts.failed}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
