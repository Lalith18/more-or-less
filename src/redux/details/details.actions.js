import DetailsActionTypes from "./details.types";

export const changePage = page => ({
    type: DetailsActionTypes.CHANGE_PAGE,
    payload: page
})

export const setScore = () => ({
    type: DetailsActionTypes.SET_SCORE
})

export const resetScore = () => ({
    type: DetailsActionTypes.RESET_SCORE
})

export const setHighscore = () => ({
    type: DetailsActionTypes.SET_HIGHSCORE
})