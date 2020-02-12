import Action_Types from "./todoActionTypes";

const shortid = require('shortid')

// get Tasks
export const getTaskRequest = () => ({
  type: Action_Types.GET_TASKS_REQUEST
});

export const getTasksSuccess = tasks => ({
  type: Action_Types.GET_TASKS_SUCCESS,
  payload: { tasks }
});

export const getTasksError = err => ({
  type: Action_Types.GET_TASKS_ERROR,
  payload: { err }
});

// add task
export const addTaskRequest = () => ({
  type: Action_Types.ADD_TASK_REQUEST
});

export const addTaskSuccess = (task) => ({
  type: Action_Types.ADD_TASK_SUCCESS,
  payload: {id: shortid.generate(), task }
});

export const addTaskError = err => ({
  type: Action_Types.ADD_TASK_ERROR,
  payload: { err }
});

// delete task
export const deleteTaskRequest = () => ({
  type: Action_Types.DELETE_TASK_REQUEST
});

export const deleteTaskSuccess = id => ({
  type: Action_Types.DELETE_TASK_SUCCESS,
  payload: { id }
});

export const deleteTaskError = err => ({
  type: Action_Types.DELETE_TASK_ERROR,
  payload: { err }
});

// change priority task
export const changePriorityRequest = () => ({
  type: Action_Types.CHANGE_PRIOTITY_REQUEST
});

export const changePrioritySuccess = id => ({
  type: Action_Types.CHANGE_PRIORITY_SUCCESS,
  payload: { id }
});

export const changePriorityError = err => ({
  type: Action_Types.CHANGE_PRIORITY_ERROR,
  payload: { err }
});

// edit task
export const editTaskRequest = () => ({
  type: Action_Types.EDIT_TASK_REQUEST
});

export const editTaskSuccess = id => ({
  type: Action_Types.EDIT_TASK_SUCCESS,
  payload: { id }
});

export const editTaskError = err => ({
  type: Action_Types.EDIT_TASK_ERROR,
  payload: { err }
});

// new task modal
export const modalNewTaskOpen = () => ({
  type: Action_Types.MODAL_NEWTASK_OPEN,
  payload: {}
});

export const modalNewTaskClose = () => ({
  type: Action_Types.MODAL_NEWTASK_CLOSE,
  payload: {}
});
