
import QuestionsActionTypes from "./questions.types"
import { addNewProfile, getInitialProfiles } from "./questions.utils"

const INITIAL_STATE = {
    profiles: [],
    done: []
}

const questionsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case QuestionsActionTypes.INITIALISE_PROFILES:
            return getInitialProfiles()

        case QuestionsActionTypes.GET_PROFILE:
            return addNewProfile(state)
  
        default:
            return state
    }
}


export default questionsReducer;

