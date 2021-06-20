import { storage } from "../../firebase/firebase.utils"

export const setBg = (score, highscore) => {
    let num = Math.floor(Math.random() * 2)
    if ( score === highscore && score > 3) {
        num = 4 + num
    } else if (score > 3) {
        num = 2 + num
    }
    let link = {
        url: ''
    }
    storage.ref().child(`background/${num}.jpg`).getDownloadURL().then(url => link.url = url)
    return link.url
}