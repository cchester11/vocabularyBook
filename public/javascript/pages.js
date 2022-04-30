// can use replaceChild on click on editBtn

// possible problem is that preventDefault only works with Jquery
const pages = document.querySelector('#pages')

function editWord(event) {
  event.target.style.visibility = 'hidden'
  let target = event.target.id
  let targetSib = event.target
  console.log(target, targetSib)
  // console.log('button ' + clickedBtn + ' was clicked')
  
  // console.log(this.window.document)
}
  // const response = await fetch(`/api/update/${id}`, {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     word,
  //     definition
  //   }),
  //   headers: { "Content-Type": "application/json" }
  // })

  // if (response.ok) {
  //     console.log('successful edit')
  //     document.location.reload()
  // } else {
  //   alert(response.statusText)
  // }


  // can study this code for help
  
  //deleteButton.addEventListener('click', function(event) {
    //   event.preventDefault() 
    //   console.log(event)
    
    //   if(event.target.matches('button')) {
    //     console.log('button was clicked')
    //     let id = event.target.parentElement.id
    //     console.log(id)
    //     deleteCharacter(id)
    //   }
    // })

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

pages.addEventListener('click', editWord)


