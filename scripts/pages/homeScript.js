import { getScoreboard, clearScoreboard, displayScoreboard } from './../functions/scoreboard.js'


const top3 = getScoreboard()
const places = ['1st', '2nd', '3rd']

const location = document.querySelector('.home__scores')


const renderScores = arr => {

//if there is any data in storage, render it
  if (arr.find(e => e !== null)) {

    for (let i = 0; i < arr.length; i++) {
    
      if (arr[i] !== null) {

        let message = `
          <div class='score hide'>
            <div class='place'>
              <p class='center'>${places[i]}</p>
            </div>
            <div class='pts'>
              <p class='center'>${arr[i]}</p>
            </div>
          </div>
        `
      
        location.insertAdjacentHTML('beforeend', message)

      }
    }
  }

//else hide score and reset buttons
  else {
    document.getElementById('scoreboard').style.display = 'none'
    document.getElementById('clearScoreboard').style.display = 'none'
    
  }
  
}

renderScores(top3)



//hides header and shows scoreboard, and vice versa
document.getElementById('scoreboard').addEventListener('click', displayScoreboard)



//clears all saved data
document.getElementById('clearScoreboard').onclick = () => {
  clearScoreboard()
  document.location.reload()
}