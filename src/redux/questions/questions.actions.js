import { firestore, storage } from '../../firebase/firebase.utils';
import QuestionsActionTypes from './questions.type';

export const initialiseProfiles = profilesAndDone => ({
    type: QuestionsActionTypes.INITIALISE_PROFILES,
    payload: profilesAndDone
})

export const newProfiles = profile => ({
    type: QuestionsActionTypes.NEW_PROFILE,
    payload: profile
})

export const initialiseProfilesAsync = () => {
    return dispatch => {
        let done = []
        while (done.length !== 3) {
            const num = Math.floor(Math.random() * 10) 
            if (!done.includes(num)) {
                done.push(num)
            }
        }
        const profiles = done.map(num => 
            firestore.collection('ig').doc(num.toString).get().then(doc =>{
                return doc.data()
            })
        )
        const data = {
            done: done,
            profiles: profiles
        }
        dispatch(initialiseProfiles(data))
    }
}