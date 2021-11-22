module.exports = function grabData(data) {
  let wordsArr = []
  let defsArr = []

  for (let i = 0; i < data.length; i++) {
    wordsArr.push(data[i].word)
    defsArr.push(data[i].definition)
  }

  console.log(wordsArr, defsArr)
}