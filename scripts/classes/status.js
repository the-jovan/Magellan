
class Status {

  constructor (points) {
    this.points = points
  }

  correctAnswer() {
    this.points += 750
  }

  wrongAnswer() {
    this.points += 0
  }

  renderScore() {
    let message = `
      <div class='result'>
    
        <img class='gif' 
          src='http://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-24.gif' 
          alt='rotating planet'></img>
      
        <p class='title--big'>Your score is
          <br>
          ${this.points} pts
        </p>
      </div>
    `

    document.querySelector('.main').innerHTML = message
    document.querySelector('.navigation').innerHTML = 
    `<a href="index.html" class='button button--small'>
      Return
    </a href="index.html">`
  }
}

export default Status