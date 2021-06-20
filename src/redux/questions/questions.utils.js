import { firestore, storage } from '../../firebase/firebase.utils'

export const addNewProfile = (state) => {
    let num = Math.floor(Math.random() * 10) 
    let done = state.done
    let profiles = state.profiles.map((content, i) => i === state.profiles.length-2 ? {...content, showAns: 'animate'} : content)
    if (done.length === 10) {
      done = []
    }
    if (done.includes(num))  {
        return addNewProfile(state)
    } else {
      done.push(num)
      firestore.collection('ig').doc(num.toString()).get().then(doc => {
        let profile = doc.data()
        profile.showAns = 'dont'
        storage.ref().child(`profiles/${num}.jpg`).getDownloadURL().then(url => profile.photo = url )
        profiles.push(profile)
          })
        return {
          ...state,
          profiles: profiles,
          done: done
        }  
    }
}

export const getInitialProfiles = () => {
  let done = []
  while (done.length !== 3) {
    let num = Math.floor(Math.random() * 10) 
    if (!done.includes(num)) {
      done.push(num)
    }
  }
  let profiles = []
  done.map((num, index) => firestore.collection('ig').doc(num.toString()).get().then(doc => {
    profiles.push(doc.data())
    profiles[index].showAns = index === 0 ? 'show': 'dont'
    storage.ref().child(`profiles/${num}.jpg`).getDownloadURL().then(url => profiles[index].photo = url )
      })
    )
  return {
    x: 0,
    status: 'wait',
    profiles: profiles,
    done: done
  }
}