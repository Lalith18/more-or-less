
import QuestionsActionTypes from './questions.types'

export const initialiseProfiles = () => ({
    type: QuestionsActionTypes.INITIALISE_PROFILES,
})

export const getProfileFromFirebase = () => ({
    type: QuestionsActionTypes.GET_PROFILE
})

