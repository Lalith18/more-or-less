import ResultsActionTypes from "./results.types";

const INITIAL_STATE = {
    submit1: false,
    submit2: false,
    username: '',
    showLeaderboard: false
}

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ResultsActionTypes.TOGGLE_SHOW_LEADERBOARD:
            return {
                ...state,
                showLeaderboard: ! state.showLeaderboard
            }
        case ResultsActionTypes.UPDATE_NAME:
            return {
                ...state,
                username: action.payload
            }
        case ResultsActionTypes.CLICKED_SUBMIT:
            return {
                ...state,
                submit1: true
            }
        case ResultsActionTypes.SUBMIT_RESULTS:
            return {
                ...state,
                submit2: true
            }
        case ResultsActionTypes.RESULT_RESULTS_BUTTONS:
            return INITIAL_STATE
        default:
            return {
                ...state,
            }
    }
}

export default resultsReducer;