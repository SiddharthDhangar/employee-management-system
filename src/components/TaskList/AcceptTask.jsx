import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="task-card border-yellow-500 ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="title">{data.title}</h2>
      <p className="desc">{data.description}</p>

      <div className="flex gap-2 mt-4">
        <button className="btn-green">Complete</button>
        <button className="btn-red">Fail</button>
      </div>
    </div>
  );
};

export default AcceptTask;
