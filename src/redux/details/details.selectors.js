import { createSelector } from "reselect";

const selectDetails = state => state.details;

export const selectPage = createSelector(
    [selectDetails],
    details => details.page
)

export const selectScore = createSelector(
    [selectDetails],
    details => details.score
)

export const selectHighscore = createSelector(
    [selectDetails],
    details => details.highscore
)

export const selectBgNumber = createSelector(
    [selectDetails],
    details => details.bgNumber
)