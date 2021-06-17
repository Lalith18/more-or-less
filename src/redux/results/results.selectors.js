import { createSelector } from "reselect";

const selectResults = state => state.results

export const selectShowLeaderboard = createSelector(
    [selectResults],
    results => results.showLeaderboard
)

export const selectSubmit1 = createSelector(
    [selectResults],
    results => results.submit1
)

export const selectSubmit2 = createSelector(
    [selectResults],
    results => results.submit2
)

export const selectUsername = createSelector(
    [selectResults],
    results => results.username
)
