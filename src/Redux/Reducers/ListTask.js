//importation

import ListTasks from "../../Components/ListTasks/ListTasks";
import {
  ADD_Task,
  DELETE_Task,
  DONE_Task,
  EDIT_Task,
} from "../ActionTypes/ListTask";

//initState
const initState = {
  ListTasks: [
    { id: Math.random(), text: "Task1", isDone: false },
    { id: Math.random(), text: "Task2", isDone: false },
  ],
};

//pure function
const listReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_Task:
      return { ...state, ListTasks: [...state.ListTasks, payload] };
    case DELETE_Task:
      return {
        ...state,
        ListTasks: state.ListTasks.filter((el) => el.id !== payload),
      }; //payload=> id
    case DONE_Task:
      return {
        ...state,
        ListTasks: state.ListTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_Task:
      return {
        ...state,
        ListTasks: state.ListTasks.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newTask } : el
        ),
      };

    default:
      return state;
  }
};
export default listReducer;
