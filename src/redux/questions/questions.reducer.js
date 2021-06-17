
import QuestionsActionTypes from "./questions.types"
import { addNewProfile, getInitialProfiles } from "./questions.utils"

const INITIAL_STATE = {
    profiles: [],
    done: [],
    x: 0,
    status: 'wait'
}

const questionsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case QuestionsActionTypes.INITIALISE_PROFILES:
            return getInitialProfiles(state)

        case QuestionsActionTypes.GET_PROFILE:
            return addNewProfile(state)
        
        case QuestionsActionTypes.NEXT_QUESTION:
            return {
                ...state,
                x: state.x - 100,
                status: 'wait'
            }

        case QuestionsActionTypes.SHOW_ANS:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state
    }
}

export default questionsReducer;