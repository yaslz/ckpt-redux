//importation

import {
  ADD_Task,
  DELETE_Task,
  DONE_Task,
  EDIT_Task,
} from "../ActionTypes/ListTask";

//les actions
export const addTask = (newTask) => {
  return {
    type: ADD_Task,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_Task,
    payload: id,
  };
};

export const doneTask = (id) => {
  return {
    type: DONE_Task,
    payload: id,
  };
};

export const editTask = (id, newTask) => {
  return {
    type: EDIT_Task,
    payload: { id, newTask },
  };
};
