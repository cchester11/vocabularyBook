// deletes word but when page reloads word still appears on the list of words on the page
// edit words
$('#wordListDiv').on('click', 'h-5', () => {
  let text = $(this).text().trim()

  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
})

$("#wordsListDiv").on("change", "textarea", function () {
  // get current value of textarea
  var text = $(this).val();
  
  // recreate p element
  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});

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


