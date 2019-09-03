import Status from './classes/status.js'

/*
User related functions that check whether user interacted with correct buttons/divs or not
*/

export const user = new Status(0)
const audioC = new Audio('./../media/audio/correct.wav');
const audioW = new Audio('./../media/audio/wrong.wav');


const verification = (option, correct, options) => {

/* ------------------------------------------------------------------------------------------- *\
  If option (one of 3 possible answers) that was clicked includes correct (which is the name of 
  the continent that is next to image, example 'option Europe' includes 'Europe'), add green 
  style and 750pts 
\* ------------------------------------------------------------------------------------------- */
  if ((option.className).includes(correct)) {

    user.correctAnswer()
    audioC.play()
    option.classList.add("correct")
    
  } else {
/* ------------------------------------------------------------------------------------------- *\
  If user misses, no points are awared, style added is red, correct answer is highlighted, 
  and all other click events are removed, to prevent possible clicking on correct answer
\* ------------------------------------------------------------------------------------------- */
    // user.wrongAnswer()
    audioW.play()
    option.classList.add('incorrect')

    options.forEach(option => option.className.includes(correct) ? option.classList.add("correct") : null)

  }  
}

//select all divs with class of '.option' and map over to 'verify' them
export const checkAnswer = correct => {
  let options = document.querySelectorAll('.option')

//set "clicked once" to false
  let clicked = false

    options.forEach( option => {
      option.addEventListener('click', () => {
     
      //if nothing has been clicked yet, check for validity, then set clicked to true
        if (!clicked) {

          verification(option, correct, options)
          clicked = true

        }
      })
    })
  
}