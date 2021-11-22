const submitBtn = document.querySelector("#submitBtn")

const createPrefix = async function (event) {
  event.preventDefault()

  let prefix = document.querySelector('#prefix').value
  let definition = document.querySelector('#definition').value

  if (prefix && definition) {
    console.log(prefix, definition)
    const response = await fetch('/api/prefix', {
      method: "POST",
      body: JSON.stringify({
        prefix,
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

submitBtn.addEventListener('click', createPrefix)