import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyB894aWQmBKiSW6Ny8EbJIgqoi73y8PGuA",
    authDomain: "moreorless1.firebaseapp.com",
    projectId: "moreorless1",
    storageBucket: "moreorless1.appspot.com",
    messagingSenderId: "851109280037",
    appId: "1:851109280037:web:68b992b3935ff82d40c2cc"
};

export const updateLeaderboard = async (username, score) => {
    try {
        const userRef =  firestore.collection('users').doc(username.toUpperCase())
        const userData = await userRef.get()
        if (!userData.exists) {
            await userRef.set({
                name: username,
                score: score
            })
            console.log('doesnt exist');
        } else if (score > userData.data().score) {
            await userRef.set({
                name: username,
                score: score
            })
            console.log('scored more');
        }
    } catch(error) {
        console.log(error.message);
    }
}

firebase.initializeApp(config);

export const firestore = firebase.firestore()

export default firebase;