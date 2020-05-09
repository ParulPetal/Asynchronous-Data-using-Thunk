import { createStore, applyMiddleware } from "redux";
import {reducer} from '../REDUX/Reducer'
import thunk from "redux-thunk";
export const store=createStore(reducer,applyMiddleware(thunk));