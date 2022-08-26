$(".card-body").on('click', '.editBtn', (event) => {
  const clickedId = event.target.id
  console.log(clickedId)
  // edit the field
  
  // call the editWord function and pass id, updated word, updated def
  // editWord(clickedId, word, definition)

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
    headers: { 'Content-Type': 'application/json'}
  })

  if(response.ok) {
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
    headers: {'Content-Type': 'application/json'}
  })
  
  // async functionality allows response to render before page reload. works correctly
  if(response.ok) {
    console.log('deleted successfully', response)
    document.location.reload();
  } else {
    alert(response.statusText)
  }
}


