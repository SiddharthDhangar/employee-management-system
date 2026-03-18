import React from "react";

const TaskCount = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 screen">
      <div className=" rounded-xl py-10 px-6 bg-blue-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" rounded-xl  py-10 px-6 bg-green-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" rounded-xl  py-10 px-6 bg-yellow-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className=" rounded-xl py-10 px-6 bg-red-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
