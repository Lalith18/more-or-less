import { combineReducers } from "redux";
import questionsReducer from './questions/questions.reducer';
import detailsReducer from "./details/details.reducer";
import resultsReducer from "./results/results.reducer";

export default combineReducers({
    questions: questionsReducer,
    details: detailsReducer,
    results: resultsReducer
})