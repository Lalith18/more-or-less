import { combineReducers } from "redux";
import questionsReducer from './questions/questions.reducer';
import detailsReducer from "./details/details.reducer";

export default combineReducers({
    questions: questionsReducer,
    details: detailsReducer
})