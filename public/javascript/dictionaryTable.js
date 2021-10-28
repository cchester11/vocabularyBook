const toPages = (event) => {
  console.log(event.currentTarget.textContent)

  // take the letter thats clicked on 
  // pass into the fetch request so sequel query can use that letter to query the database
  // output should be array of words with letter clicked on

  fetch(`/api/words${event.currentTarget.textContent}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
    })

  // take array of words and pass into pages route 
  // in pages.handlebars loop through array and display all the words

  //document.location.replace('pages')
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