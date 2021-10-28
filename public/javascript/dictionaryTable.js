function createDictionaryTable () {
  const tableDiv = document.querySelector('#dictionaryTable')
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for(let i = 0; i < alphabet.length - 1; i ++) {
    let curr = alphabet[i]

    if(curr >= alphabet.length - 1) {
      return
    }

    const button = document.createElement('button')

    button.class = 'alphabetBtn'

    button.type = "submit"

    button.textContent = alphabet[i]

    tableDiv.appendChild(button)
  }
}

createDictionaryTable()