// cant use the ids of the words and definitions yet. ids are not specific to words and defs
// send back the id as a param to find the right word and the updated word and definition in the body for update
// can use replaceChild on click on editBtn
async function editWord(event, id, word, definition) {
  event.preventDefault();

  let current = event.currentTarget.dataset.count;

  console.log('button was clicked')
  console.log('id of word clicked ' + current)

  // work on word and def ids.

  const response = await fetch(`/api/update/${current}`, {
    method: "PUT",
    body: JSON.stringify({
      word,
      definition
    }),
    headers: { "Content-Type": "application/json" }
  })

  if (response.ok) {
      console.log('successful edit')
      document.location.reload()
  } else {
    alert(response.statusText)
  }
}

// deletes word but when page reloads word still appears on the list of words on the page
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


// activeBtn eventListener


