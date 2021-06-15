import QuestionsActionTypes from "./questions.type"

const INITIAL_STATE = {
    done: [],
    profiles: []
}

const questionsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case QuestionsActionTypes.INITIALISE_PROFILES:
            return {
                ...state,
                profiles: action.payload
            }

        case QuestionsActionTypes.NEW_PROFILE:
            return {
                ...state,
                profiles: action.payload
            }
        default:
            return state
    }
}

export default questionsReducer;
