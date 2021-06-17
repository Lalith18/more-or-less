import QuestionsActionTypes from './questions.types'

export const initialiseProfiles = () => ({
    type: QuestionsActionTypes.INITIALISE_PROFILES,
})

export const getProfileFromFirebase = () => ({
    type: QuestionsActionTypes.GET_PROFILE
})

export const nextQuestion = () => ({
    type: QuestionsActionTypes.NEXT_QUESTION
})

export const showAns = status => ({
    type: QuestionsActionTypes.SHOW_ANS,
    payload: status
})