import { createStore, applyMiddleware } from "redux";
import {movieReducers} from "../reducer/movieReducer"
import { thunk } from "redux-thunk";

// create store
export const store = createStore(movieReducers, applyMiddleware(thunk))