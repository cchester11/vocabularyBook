// edit words
$('#wordsListDiv').on('click', 'h-5', function () {
  let word = $(this).text().trim()

  let TextArea = $('<textarea>').addClass('form-control').val(word)

  $(this).replaceWith(TextArea)

  TextArea.trigger('focus')
})

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


