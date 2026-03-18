import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useAuth();

  const [taskCreate, setTaskCreate] = useState({
    title: "",
    date: "",
    assign: "",
    category: "",
    desc: "",
  });

  const AdminTaskCreation = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskCreate({
      ...taskCreate,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = userData;
    data.forEach((user) => {
      if (taskCreate.assign == user.firstName) {
        const newTasks = {
          ...taskCreate,
        };
        user.tasks = [...user.tasks, newTasks];
        user.taskCounts.newTask = user.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);
    setTaskCreate({
      title: "",
      date: "",
      assign: "",
      category: "",
      desc: "",
    });
  };
  return (
    <div className="p-5 mt-7 bg-[#1c1c1c] rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row w-full items-start justify-between gap-6"
      >
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskCreate.title}
              name="title"
              onChange={AdminTaskCreation}
              className="text-white placeholder-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500 "
              type="text"
              placeholder="make a ui design"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              onChange={AdminTaskCreation}
              name="date"
              value={taskCreate.date}
              className="text-white placeholder-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500"
              type="date"
              placeholder="date.."
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              onChange={AdminTaskCreation}
              name="assign"
              value={taskCreate.assign}
              className="text-white placeholder-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500"
              type="text"
              placeholder="employee name.."
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              onChange={AdminTaskCreation}
              name="category"
              value={taskCreate.category}
              className="text-white placeholder-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500"
              type="text"
              placeholder="dev, design etc.."
            />
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            onChange={AdminTaskCreation}
            name="desc"
            value={taskCreate.desc}
            className="text-white placeholder-gray-400  w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:b-emerald-600 px-5 rounded text-sm mt-4 w-full cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
