const submitBtn = document.querySelector("#submitBtn")

const createSuffix = async function (event) {
  event.preventDefault()

  let suffix = document.querySelector('#suffix').value
  let definition = document.querySelector('#definition').value

  if (suffix && definition) {
    console.log(suffix, definition)
    const response = await fetch('/api/suffix', {
      method: "POST",
      body: JSON.stringify({
        suffix,
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

submitBtn.addEventListener('click', createSuffix)