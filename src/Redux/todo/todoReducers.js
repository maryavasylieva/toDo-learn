import Action_Types from './todoActionTypes';
import { combineReducers } from 'redux';

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case Action_Types.GET_TASKS_SUCCESS:
      console.log(payload)
      return payload.todos === null ? [] : payload.todos;

    case Action_Types.ADD_TASK_SUCCESS:
      return [
        ...state,
        {
          id: payload.id,
          ...payload.task
        },
      ];
    case Action_Types.DELETE_TASK_SUCCESS:
      return [...state.filter(el => el._id !== payload.id)];

    case Action_Types.CHANGE_PRIORITY_SUCCESS:
      return state.map(el =>
        el._id === payload.task.id
          ? { ...el, priority: payload.task.priority }
          : el,
      );

    case Action_Types.EDIT_TASK_SUCCESS:
      return state.map(task => {
        return task.id === payload.id ? { ...task, ...payload.todo} : task;
      })



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

    case Action_Types.GET_TASKS_SUCCESS:
    case Action_Types.ADD_TASK_SUCCESS:
    case Action_Types.DELETE_TASK_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ tasks, error });
