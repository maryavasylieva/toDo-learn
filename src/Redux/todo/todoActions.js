import Action_Types from "./todoActionTypes";

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

export const addTaskSuccess = task => ({
  type: Action_Types.ADD_TASK_SUCCESS,
  payload: { task }
});

export const addTaskError = err => ({
  type: Action_Types.ADD_TASK_ERROR,
  payload: { err }
});

// delete task
export const dltTaskRequest = () => ({
  type: Action_Types.DELETE_TASK_REQUEST
});

export const dltTaskSuccess = id => ({
  type: Action_Types.DELETE_TASK_SUCCESS,
  payload: { id }
});

export const dltTaskError = err => ({
  type: Action_Types.DELETE_TASK_ERROR,
  payload: { err }
});

// change priority task
export const cngPriorityRequest = () => ({
  type: Action_Types.CHANGE_PRIOTITY_REQUEST
});

export const cngPrioritySuccess = id => ({
  type: Action_Types.CHANGE_PRIORITY_SUCCESS,
  payload: { id }
});

export const cngPriorityError = err => ({
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
