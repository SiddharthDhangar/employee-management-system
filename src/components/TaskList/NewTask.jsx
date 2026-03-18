import React from "react";

const NewTask = ({ data }) => {
  const { title, description, date, category } = data;
  return (
    <div className="h-[230px] flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-5 ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{category}</h3>
        <h4 className="text-sm">{date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm w-full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
