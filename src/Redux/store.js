import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todo/todoReducers";
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({ todo: todoReducer });


const store = createStore(reducer, devToolsEnhancer());

export default store;
