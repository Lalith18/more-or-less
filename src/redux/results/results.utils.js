export const getBgNum = data => {
    const {score, highscore} = data
        let num = Math.floor(Math.random() * 2)
        if ( score === highscore && score > 3) {
            num = 4 + num
        } else if (score > 3) {
            num = 2 + num
        }
        return num
}