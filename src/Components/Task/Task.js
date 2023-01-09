import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Actions/ListTask";
import Edit from "../Edit/Edit";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{task.text}</span>
      <Edit task={task} />
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? "UnDone" : "Done"}
      </button>
    </div>
  );
};

export default Task;
