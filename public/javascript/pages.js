$(".card-body").on('click', '.editBtn', (event) => {
  const clicked = event.target
  const clickedId = event.target.id
  const text = $(clicked).prevAll().text()
  // const definition = text.slice(0, 16)
  // const word = text.slice(16, text.length)
  const word = $(clicked).siblings('h5').text()
  const savedWord = new Array()
  for (let i = 0; i < text.length; i++) {
    let goal = word
    if (text.includes(goal)) {
      savedWord.push(goal)
      const getWord = $(clicked).siblings('h5')
      const getDefinition = $(clicked).siblings('p')
      $(getWord).replaceWith(`<input placeholder="${goal}>`)
      $(getDefinition).replaceWith('<input>')
    }
  }
  // $(getWord).replaceWith(`<input placeholder="${getWord.text()}>`)
  // $(getDefinition).replaceWith(`<input placeholder="${getDefinition.text()}`)
  return
})

async function editWord(clickedId, word, definition) {
  let current = clickedId

  const response = await fetch(`api/update/${current}`, {
    method: "update",
    body: {
      id: current,
      word: word,
      definition: definition
    },
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    return response.json()
  } else {
    alert(response.statusText)
  }
}

async function deleteWord(clickedId) {

  let current = clickedId;

  console.log('button was clicked')
  console.log('id of word clicked ' + current)

  const response = await fetch(`/api/delete/${current}`, {
    method: "delete",
    headers: { 'Content-Type': 'application/json' }
  })

  // async functionality allows response to render before page reload. works correctly
  if (response.ok) {
    console.log('deleted successfully', response)
    document.location.reload();
  } else {
    alert(response.statusText)
  }
}


