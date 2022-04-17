let editBtn = document.querySelector('#editBtn')
let deleteBtn = document.querySelector('#deleteBtn')

async function editWord(event) {
  event.preventDefault();
  console.log('button was clicked')
  let current = event.currentTarget.dataset.count;
  console.log(current)
  // delete below code. create a textbox for each, save the values of the text boxs and send to the update route
  let word = document.querySelector('#wordVal')
  let definition = document.querySelector('#definitionVal')
  const response = await fetch(`/api/update/${current}`, {
    method: "PUT",
    body: JSON.stringify({
      word,
      definition
    }),
    headers: { "Content-Type": "application/json" }
  })

  if (response.ok) {
      console.log('success')
      document.location.replace('/dictionary')
  } else {
    alert(response.statusText)
  }
}

// deletes word but when page reloads word still appears on the list of words on the page
async function deleteWord(event) {
  event.preventDefault()
  console.log('button was clicked')
  let current = event.currentTarget.dataset.count;
  console.log('current ' + current)
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
