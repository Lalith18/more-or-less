import { createSelector } from "reselect";

const selectQuestions = state => state.questions

export const selectProfiles = createSelector(
    [selectQuestions],
    questions => questions.profiles
)

export const selectDone = createSelector(
    [selectQuestions],
    questions => questions.done
)

export const selectStatus = createSelector(
    [selectQuestions],
    questions => questions.status
)

export const selectX = createSelector(
    [selectQuestions],
    questions => questions.x
)