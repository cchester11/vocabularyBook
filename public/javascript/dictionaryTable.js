const toPages = (event) => {
  console.log(event.currentTarget.textContent)

  fetch(`/api/words${event.currentTarget.textContent}`)
    .then(response => response.json())
    .then(data => {
      let wordsArr = []
      let defsArr = []
    
      for (let i = 0; i < data.length; i++) {
        wordsArr.push(data[i].word)
        defsArr.push(data[i].definition)
      }
    
      console.log(wordsArr, defsArr)

      document.location.replace('pages')

      // const pagesDiv = document.querySelector('#pages')

      // for(let i = 0; i < wordsArr.length; i ++) {
      //   const p = document.createElement('p')
      //   p.textContent = wordsArr[i]

      //   pagesDiv.appendChild(p)
      // }
    })
}

function createDictionaryTable() {
  const tableDiv = document.querySelector('#dictionaryTable')
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for (let i = 0; i < alphabet.length - 1; i++) {
    let curr = alphabet[i]

    if (curr >= alphabet.length - 1) {
      return
    }

    const button = document.createElement('button')

    button.id = 'alphabetBtn'

    button.type = "submit"

    button.addEventListener('click', toPages)

    button.textContent = alphabet[i]

    tableDiv.appendChild(button)
  }
}

createDictionaryTable()