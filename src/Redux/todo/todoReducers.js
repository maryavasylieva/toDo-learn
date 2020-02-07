import Action_Types from "./todoActionTypes";
import { combineReducers } from "redux";

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case Action_Types.GET_TASKS_SUCCESS:
      return payload.tasks === null ? [] : payload.tasks;
    case Action_Types.ADD_TASK_SUCCESS:
      return payload.task
    case Action_Types.DELETE_TASK_SUCCESS:
      return state.map(el =>
        el.id === payload.task.id ? { ...el, tasks: payload.task.tasks } : el
      );

    case Action_Types.CHANGE_PRIORITY_SUCCESS:
      return state.map(el =>
        el.id === payload.task.id
          ? { ...el, priority: payload.task.priority }
          : el
      );

    case Action_Types.EDIT_TASK_SUCCESS:
      return state.map(el =>
        el.id === payload.task.id
          ? { ...el, updatedTask: payload.task.updatedTask }
          : el
      );

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Action_Types.GET_TASKS_ERROR:
    case Action_Types.ADD_TASK_ERROR:
    case Action_Types.DELETE_TASK_ERROR:
      return payload.err;

    // case Action_Types.GET_TASKS_SUCCESS:
    // case Action_Types.ADD_TASK_SUCCESS:
    // case Action_Types.DELETE_TASK_SUCCESS:
    //   return null;

    default:
      return state;
  }
};

export default combineReducers({ tasks, error });
