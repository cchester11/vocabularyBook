let i = 0;

function changeWordOfTheDayColor () {
  const wordOfTheDay = document.querySelector('#figure')

  let color = ["tomato", "purple", "green", "salmon"]

  wordOfTheDay.setAttribute('style', `color: ${color[i]}`)

  i ++

  if(i > color.length - 1) {
    i = 0
  }
}

setInterval(changeWordOfTheDayColor, 3000)


// const timeInterval = setInterval(() => {
//   const blue = wordOfTheDay.setAttribute('style', "color: blue;")
//   const tomato = wordOfTheDay.setAttribute('style', "color: tomato;")
//   const yellow = wordOfTheDay.setAttribute('style', "color: yellow;")
//   const purple = wordOfTheDay.setAttribute('style', "color: purple;")

//   for(let i = 0; i < 4; i ++) {
//     if(i === 1) {
//       blue
//       console.log(i)
//     } else if(i === 2) {
//       tomato
//       console.log(i)
//     } else if(i === 3) {
//       yellow
//       console.log(i)
//     } else if(i === 4) {
//       purple
//       console.log(i)
//     } else {
//       changeWordOfTheDayColor()
//     }
//   }
// }, 1000)