const likedWordsListDiv = document.querySelector('#likedWordsListDiv')
const items = {}

async function getAllLikedWords() {
      await fetch('/api/likes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
      })
            .then(results => {
                  return results.json()
            })
            .then(data => {
                  items = data
                  console.log(items)
            })
            .catch(err => {
                  throw new Error(err)
            })

      // for (let i = 0; i < items.length; i++) {
      //       const betaDiv = document.createElement('div')
      //       const usernameEl = document.createElement('p')
      //       const wordEl = document.createElement('h5')
      //       const definitionEl = document.createElement('p')

      //       betaDiv.setAttribute('class', 'card-body col-12 border border-warning rounded bg-success h-25 m-auto')
      //       usernameEl.setAttribute('class', 'card-text usernameEl')
      //       wordEl.setAttribute('class', 'card-title font-weight-light word')
      //       definitionEl.setAttribute('class', 'card-text definition')

      //       usernameEl.textContent = 'username: ' + items[i].User.username
      //       wordEl.textContent = items[i].Words.word 
      //       definitionEl.textContent = items[i].Words.definition

      //       betaDiv.appendChild(wordEl)
      //       betaDiv.appendChild(definitionEl)
      //       betaDiv.appendChild(usernameEl)

      //       likedWordsListDiv.appendChild(betaDiv)
      // }
}

getAllLikedWords()