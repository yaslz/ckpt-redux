import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

const ListTasks = () => {
  const [status, setStatus] = useState("All");
  const list = useSelector((state) => state.listReducer.ListTasks);
  return (
    <div>
      <button onClick={() => setStatus("All")}>All</button>
      <button onClick={() => setStatus("Done")}>Done</button>
      <button onClick={() => setStatus("Undone")}>Undone</button>
      <h2>List Tasks</h2>
      {status === "Done"
        ? list
            .filter((el) => el.isDone === true)
            .map((el) => <Task task={el} key={el.id} />)
        : status === "Undone"
        ? list
            .filter((el) => el.isDone === false)
            .map((el) => <Task task={el} key={el.id} />)
        : list.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default ListTasks;
