const figure1 = document.getElementById('figure1');
const figure2 = document.getElementById('figure2');

// stores the data retrieved from get request for words
let items = {}

// rotators for words and defs
let a = 0; 

// rotators for colors of words and defs
let i = 0;
let j = 0;

async function wordstohomepage () {
  await fetch('/api/words', {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  })
  .then(results => {
    return results.json()
  })
  .then(data => {
    items = data;
    console.log(items)
  })
  .catch(err => {
    window.alert('Error message ' + err)
  })
}

wordstohomepage()

function rotateWords () {
  figure1.textContent = items[a].word
  figure2.textContent = items[a].definition

  a ++

  if(a > items.length - 1) {
    a = 0
  }
}

function changeWordOfTheDayColor () {
  const wordOfTheDay = document.querySelector('#figure1')

  let color = ["tomato", "purple", "green", "blue"]

  wordOfTheDay.setAttribute('style', `color: ${color[i]}`)

  i ++

  if(i > color.length - 1) {
    i = 0
  }
}

function changeDefinitionOfTheDayColor () {
  const definitionOfTheDay = document.querySelector('#figure2')

  let color = ["tomato", "purple", "green", "blue"]

  definitionOfTheDay.setAttribute('style', `color: ${color[j]}`)

  j ++

  if(j > color.length - 1) {
    j = 0
  }
}

setInterval(rotateWords, 10000)
setInterval(changeWordOfTheDayColor, 3000)
setInterval(changeDefinitionOfTheDayColor, 3000)