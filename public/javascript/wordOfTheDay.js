let i = 0;

function changeWordOfTheDayColor () {
  const wordOfTheDay = document.querySelector('#figure')

  let color = ["tomato", "purple", "green", "yellow"]

  wordOfTheDay.setAttribute('style', `color: ${color[i]}`)

  i ++

  if(i > color.length - 1) {
    i = 0
  }
}

setInterval(changeWordOfTheDayColor, 5000)