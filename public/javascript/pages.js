let editBtn = document.querySelector('#editBtn')
let deleteBtn = document.querySelector('#deleteBtn')

function editWord(event) {
  event.preventDefault();
  console.log('button was clicked')
  let current = event.currentTarget.dataset.count;
  console.log(current)
  // delete below code. create a textbox for each, save the values of the text boxs and send to the update route
  let word = document.querySelector('#wordVal')
  let definition = document.querySelector('#definitionVal')
  const response = fetch(`/api/update/${current}`, {
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
function deleteWord(event) {
  event.preventDefault()
  console.log('button was clicked')
  let current = event.currentTarget.dataset.count;
  console.log('current ' + current)
  const response = fetch(`/api/delete/${current}`, {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'}
  })
  
  if(response.ok) {
    console.log('deleted successfully', response)
    document.location.reload();
  } else {
    alert(response.statusText)
  }
}

editBtn.addEventListener('click', editWord)
deleteBtn.addEventListener('click', deleteWord)
