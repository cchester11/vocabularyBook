const add_to_my_words_button = document.getElementById('add-to-my-words-button');

async function handleAddToMyWordsFeature(event) {
      event.preventDefault()
      const word_id = document.querySelector('h5').id

      const response = await fetch('/api/likes', {
            method: 'post',
            body: JSON.stringify({
                  word_id: word_id
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