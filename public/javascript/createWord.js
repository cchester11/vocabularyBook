const submitBtn = document.querySelector("#submitBtn")

const createWord = async function (event) {
  event.preventDefault()

  let word = document.querySelector('#word').value
  let definition = document.querySelector('#definition').value

  if (word && definition) {
    console.log(word, definition)
    const response = await fetch('/api/words', {
      method: "POST",
      body: JSON.stringify({
        word,
        definition
      }),
      headers: ({ "Content-Type": "application/json" })
    })

    if (response.ok) {
      console.log(response)
      document.location.replace('/dictionary')
    } else {
      alert(response.statusText)
    }
  }
}

submitBtn.addEventListener('click', createWord)