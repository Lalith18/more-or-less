
import DetailsActionTypes from "./details.types"

const INITIAL_STATE = {
    page: 1,
    score: 0,
    highscore: 0
}

const detailsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DetailsActionTypes.CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case DetailsActionTypes.SET_SCORE:
            return {
                ...state,
                score: state.score + 1
            }

        case DetailsActionTypes.SET_HIGHSCORE:
            return {
                ...state,
                highscore: state.score > state.highscore ? state.score : state.highscore
            }

        case DetailsActionTypes.RESET_SCORE:
            return {
                ...state,
                score: 0
            }

        default:
            return state
    }
}

export default detailsReducer;