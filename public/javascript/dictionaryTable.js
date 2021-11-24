const toPages = (event) => {
  const replace = document.location.replace(`pages/${event.currentTarget.textContent}`)
  if(!replace) {
    console.log('unsuccessful send')
  }
  if(replace) {
    console.log('successful send to the pages route')
  }
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