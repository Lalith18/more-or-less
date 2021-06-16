import { combineReducers } from "redux";
import questionsReducer from './questions/questions.reducer'

export default combineReducers({
    questions: questionsReducer
})