
export const initialiseQuestions = (state) => {
    const done = []
    while (done.length !== 3) {
      const num = Math.floor(Math.random() * 10) 
      if (!done.includes(num)) {
        done.push(num)
      }
    }
}