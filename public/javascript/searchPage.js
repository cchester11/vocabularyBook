const add_to_my_words_button = document.getElementById('add-to-my-words-button');

async function handleAddToMyWordsFeature(event) {
      event.preventDefault()
      const word = document.querySelector('#word').textContent
      const definition = document.querySelector('#definition').textContent

      console.log(word, definition)
      console.log('clicked')

      const response = await fetch('/api/words', {
            method: 'post',
            body: JSON.stringify({
                  word: word,
                  definition: definition
            }),
            headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
            window.alert("You've added a new word to your database!")
            document.location.replace('/dictionary')
      } else {
            alert(response.statusText)
      }
}

add_to_my_words_button.addEventListener('click', handleAddToMyWordsFeature)