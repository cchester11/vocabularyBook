const wordsListDiv = document.getElementById('allWordsListDiv');
let items = {};

async function getAllUserWords() {
      await await fetch('/api/words/alluserspage', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
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

      for (let i = 0; i < items.length; i++) {
            const betaDiv = document.createElement('div')
            const wordEl = document.createElement('h5')
            const definitionEl = document.createElement('p')
            const usernameEl = document.createElement('p')

            betaDiv.setAttribute('class', 'card-body col-12 border border-warning rounded bg-success h-5 m-auto')
            wordEl.setAttribute('class', 'card-title font-weight-light word')
            definitionEl.setAttribute('class', 'card-text definition')
            usernameEl.setAttribute('class', 'card-text definition')

            wordEl.textContent = items[i].word
            definitionEl.textContent = items[i].definition
            usernameEl.textContent = items[i].User.username

            betaDiv.appendChild(wordEl)
            betaDiv.appendChild(definitionEl)

            wordsListDiv.appendChild(betaDiv)
      }

}

getAllUserWords()