
import ResultsActionTypes from "./results.types";

export const toggleShowLeaderboard = () => ({
    type: ResultsActionTypes.TOGGLE_SHOW_LEADERBOARD,
})

export const clickedSubmit = () => ({
    type: ResultsActionTypes.CLICKED_SUBMIT
})

export const updateName = name => ({
    type: ResultsActionTypes.UPDATE_NAME,
    payload: name
})

export const submitResults = () => ({
    type: ResultsActionTypes.SUBMIT_RESULTS
})
