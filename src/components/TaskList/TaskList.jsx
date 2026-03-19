import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { useAuth } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4 ">
      {data.tasks.map((item, idx) => {
        if (item.active) {
          return <AcceptTask key={idx} data={item} />;
        }
        if (item.newTask) {
          return <NewTask key={idx} data={item} />;
        }
        if (item.completed) {
          return <CompleteTask key={idx} data={item} />;
        }
        if (item.failed) {
          return <FailedTask key={idx} data={item} />;
        }
      })}
    </div>
  );
};

export default TaskList;
