let editBtn = document.querySelector('#editBtn')
let deleteBtn = document.querySelector('#deleteBtn')

// cant use the ids of the words and definitions yet. ids are not specific to words and defs
async function editWord(event) {
  event.preventDefault();

  let current = event.currentTarget.dataset.count;
  // access updated word and def here
  const word = document.querySelector('#wordVal')
  const definition = document.querySelector('#definitionVal')

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
async function deleteWord(event) {
  event.preventDefault()

  let current = event.currentTarget.dataset.count;

  console.log('button was clicked')
  console.log('id of word clicked ' + current)

  const response = await fetch(`/api/delete/${current}`, {
    method: "delete",
    headers: {'Content-Type': 'application/json'}
  })
  
  // response not ok but delete route successfully deletes the word and properly handles results. strange
  if(response.ok) {
    console.log('deleted successfully', response)
    document.location.reload();
  } else {
    alert(response.statusText)
  }
}

editBtn.addEventListener('click', editWord)
deleteBtn.addEventListener('click', deleteWord)
