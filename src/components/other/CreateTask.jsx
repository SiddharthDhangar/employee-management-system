import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useAuth();
  const [task, setTask] = useState({
    title: "",
    date: "",
    assign: "",
    category: "",
    description: "",
  });
  const TaskAssign = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("employees")) || [];
    const data = [...storedData];
    data.forEach((currEmp) => {
      if (task.assign === currEmp.firstName) {
        const newTask = {
          ...task,
        };
        currEmp.tasks = [...currEmp.tasks, newTask];
        currEmp.taskCounts.newTask = currEmp.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    localStorage.setItem("employees", JSON.stringify(data));
    console.log(data);

    setTask({
      title: "",
      date: "",
      assign: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="bg-[#111827] p-6 rounded-xl shadow-md">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <input
            name="title"
            value={task.title}
            onChange={TaskAssign}
            className="input"
            type="text"
            placeholder="Task Title"
          />
          <input
            name="date"
            value={task.date}
            onChange={TaskAssign}
            className="input"
            type="date"
          />
          <input
            name="assign"
            value={task.assign}
            onChange={TaskAssign}
            className="input"
            type="text"
            placeholder="Assign To"
          />
          <input
            name="category"
            value={task.category}
            onChange={TaskAssign}
            className="input"
            type="text"
            placeholder="Category"
          />
        </div>

        <div className="flex flex-col gap-4">
          <textarea
            name="description"
            value={task.description}
            onChange={TaskAssign}
            className="input h-40"
            placeholder="Description"
          ></textarea>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
