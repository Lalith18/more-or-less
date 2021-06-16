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