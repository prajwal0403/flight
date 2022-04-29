import { createStore } from "redux";

import { combineReducers  , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { FlightReducer } from "./FlightRedux/FlightReducer";
const rootReducer= combineReducers({
    getData:FlightReducer
})
export const store= createStore( rootReducer, applyMiddleware(thunk))