let editBtn = document.querySelector('#editBtn')
let deleteBtn = document.querySelector('#deleteBtn')

async function editWord(event) {
  event.preventDefault();
  console.log('button was clicked')
  let word = document.querySelector('#wordVal')
  let definition = document.querySelector('#definitionVal')
  const response = await fetch(`/api/words/update/${editBtn.dataset.count}`, {
    METHOD: "PUT",
    BODY: JSON.stringify({
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


async function deleteWord(event) {
  event.preventDefault()
  console.log('button was clicked')
  let current = event.currentTarget.dataset.count;
  console.log(current)
  const response = await fetch(`/api/words/delete/${deleteBtn.dataset.count}`, {
    METHOD: "DELETE",
    headers: {'Content-Type': 'application/json'}
  })
  
  if(response.ok) {
    console.log('deleted successfully')
    document.location.reload();
  } else {
    alert(response.statusText)
  }
}

editBtn.addEventListener('click', editWord)
deleteBtn.addEventListener('click', deleteWord)