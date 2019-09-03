import Question from './../classes/question.js'
import { user } from './../user.js'
import { shuffle } from './../functions/shuffle.js'
import { getScoreboard, updateScoreboard } from './../functions/scoreboard.js'


const continents = ["Africa", "Asia", "South America", "North America", "Europe", "Oceania", "Antarctica"]
const audioGG = new Audio('./../../media/audio/gameover.wav');

//loading...
document.querySelector('.main').innerHTML = `<div class='result'>Making it really hard for you!</div>`


axios.get('https://api.myjson.com/bins/a6da9')
  .then (response => {

//get 5 random questions
  let questions = shuffle(response.data).slice(0,5)


  questions.map( question => {
//get possible answers
    let wrongAnswers = shuffle(continents.filter(e => e !== question.continent)).slice(0,2)
    question.continent = [question.continent, ...wrongAnswers]
  })


//render first question
  let firstQ = new Question(questions[0].image, questions[0].continent)
  firstQ.renderQuestion()


//get questions by clicking on "next"
  let i = 0
  
  document.getElementById('butt').onclick = () => {
  
    if (i < 4) {
      let q = new Question(questions[i+1].image, questions[i+1].continent)
      q.renderQuestion()
      i++
      
    } else {
      user.renderScore()
      audioGG.play()

    //update top 3 table
      let result = getScoreboard()
      result.push(user.points)
      updateScoreboard(result)
    }
  }
})