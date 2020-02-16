import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todo/todoReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({ todo: todoReducer });

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
