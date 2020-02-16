import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const requestTodos = async () => await axios.get('/todo/getTodos');


export const requestDeleteTodo = async id =>
  await axios.delete(`/todo/deleteTodo/${id}`);



export const requestAddTodo = async todo =>
  await axios.post('/todo/addTodo', todo);



export const requestEditTodo = async (id, todo) => {
  await axios.patch(`todo/updateTodo/${id}`, todo);
  console.log('todo', todo);
};
