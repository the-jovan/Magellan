import { shuffle } from './../functions/shuffle.js'
import { checkAnswer } from './../user.js'

class Question {
  constructor ( img, answers ) {
    this.img     = img
    this.answers = answers
  }

  renderQuestion() {

  //sepparate correct answer then shuffle all answers
    let correct = this.answers[0]
    let shuffled = shuffle(this.answers)

  //render question on the screen
  document.querySelector('.main').innerHTML = (
    
    `
    <img class='image' src='${this.img}' 
      onerror="this.src='./../../../media/error/${correct}.jpg'"
      alt='Image may or may not contain ${correct}'>
    </img>

    <div class='answers'>
      <div class='option ${shuffled[0]}'>${shuffled[0]}</div>
      <div class='option ${shuffled[1]}'>${shuffled[1]}</div>
      <div class='option ${shuffled[2]}'>${shuffled[2]}</div>
    </div>
    `
  )

  //check if clicked answer is correct
    checkAnswer(correct)

  }
}


export default Question