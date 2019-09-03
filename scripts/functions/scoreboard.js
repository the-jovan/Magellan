const updateScoreboard = arr => {

  arr.sort( (a,b) => b-a)

  for (let i = 0; i < 3; i++) {
    localStorage.setItem(`${i}`, arr[i])
  }
}


const getScoreboard = () => {
  let retrieved = []
  
  for (let i = 0; i < 3; i++) {
    let x = localStorage.getItem(`${i}`)
    retrieved.push(JSON.parse(x))
  }

  return retrieved
}


const clearScoreboard = () => localStorage.clear()



const displayScoreboard = () => {
  document.querySelectorAll('.score').forEach(e => {
    
    if (e.classList == 'score') {
      e.classList.add('hide')
      document.querySelector('header').className = "header--show"
      document.querySelector('h1').className = "title--big"
      //inline ftw
      document.querySelector('.home').style.height = "20vh"
    } 
    
    else {
      e.classList.remove('hide')
      document.querySelector('header').className = "header--hide"
      document.querySelector('h1').className = "title--small"
      //inline ftw
      document.querySelector('.home').style.height = "85vh"
    }
  
  })
}


export {
  updateScoreboard,
  getScoreboard,
  clearScoreboard,
  displayScoreboard
}
