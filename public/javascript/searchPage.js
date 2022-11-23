const add_to_my_words_button = document.getElementById('add-to-my-words-button');

async function handleAddToMyWordsFeature(event) {
      event.preventDefault()
      const liked_word = document.querySelector('#word').textContent

      const response = await fetch('/api/likes', {
            method: 'post',
            body: JSON.stringify({
                  liked_word: liked_word
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