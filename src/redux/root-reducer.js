import { combineReducers } from "redux";
import detailsReducer from "./details/details.reducer";

export default combineReducers({
    details: detailsReducer
})