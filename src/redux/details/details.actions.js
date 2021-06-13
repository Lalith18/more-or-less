import DetailsActionTypes from "./details.types";

export const changePage = page => ({
    type: DetailsActionTypes.CHANGE_PAGE,
    payload: page
})

export const changeScore = () => ({
    type: DetailsActionTypes.CHANGE_SCORE
})

export const resetScore = () => ({
    type: DetailsActionTypes.RESET_SCORE
})

export const changeHighscore = () => ({
    type: DetailsActionTypes.CHANGE_HIGHSCORE,
})