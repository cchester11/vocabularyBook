let i = 0;
let j = 0;

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

setInterval(changeWordOfTheDayColor, 5000)
setInterval(changeDefinitionOfTheDayColor, 5000)