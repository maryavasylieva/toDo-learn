import {
  requestTodos,
  requestDeleteTodo,
  requestAddTodo,
  requestEditTodo,
} from '../../api/api';
import * as todoActions from '../todo/todoActions';

export const getTodos = () => async dispatch => {
  try {
    const data = await requestTodos();

    dispatch(todoActions.getTasksSuccess(data.data.todos));
  } catch (e) {
    dispatch(todoActions.getTasksError(e));
    console.log('getTodos error:', e);
  }
};

export const deleteTodo = id => async dispatch => {
  try {
    await requestDeleteTodo(id);
    dispatch(todoActions.deleteTaskSuccess(id));
  } catch (e) {
    dispatch(todoActions.deleteTaskError(e));
    console.log('deleteTodo error:', e);
  }
};

export const addTodo = todo => async dispatch => {
  try {
    const data = await requestAddTodo(todo);
    console.log('data:', data);
    dispatch(todoActions.addTaskSuccess(data.data.todo));
  } catch (e) {
    dispatch(todoActions.addTaskError(e));
    console.log('addTodo:', e);
  }
};

export const editTodo = (id, todo) => async dispatch => {
  try {
    const data = await requestEditTodo(id, todo);
    dispatch(todoActions.editTaskSuccess(data.data.updatedTodo));
    console.log('data:', data);
  } catch (e) {
    dispatch(todoActions.editTaskError(e));
    console.log('editTodo:', e);
  }
};
