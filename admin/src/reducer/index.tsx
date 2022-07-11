import { combineReducers } from "redux";
import { rootReducer } from "./fetchRecord";

const allReducers = combineReducers({
    rootReducer:rootReducer
})

export default allReducers;