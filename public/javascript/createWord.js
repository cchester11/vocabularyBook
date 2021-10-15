const submitBtn = document.querySelector("#submitBtn")

const createWord = async function (event) {
  event.preventDefault()

  let word = document.querySelector('#word').placeholder
  let definition = document.querySelector('#definition').placeholder

  if (word && definition) {
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