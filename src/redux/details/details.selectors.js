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

export const selectBg = createSelector(
    [selectDetails],
    details => details.bg
)

export const selectStartBg = createSelector(
    [selectDetails],
    details => details.startBg
)