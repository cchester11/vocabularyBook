function saveId (data) {
  localStorage.setItem('itemId', JSON.stringify(data))
}
function saveNewWord (newWord) {
  localStorage.setItem('newWord', JSON.stringify(newWord))
}
function saveNewDef (newDef) {
  localStorage.setItem('newDef', JSON.stringify(newDef))
}

async function editWord(clickedId, word, definition) {
  const response = await fetch(`/api/update/${clickedId}`, {
    method: "PUT",
    body: JSON.stringify({
      word: word,
      definition: definition
    }),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    console.log('item updated')
    return response.json()
  } else {
    alert(response.statusText)
  }
}

//begin edits of item values on click of edit button
$(".card-body").on('click', '.editBtn', (event) => {
  const targetEl = event.target;
  const targetId = event.target.id;

  saveId(targetId)

  const saveWordEl = $(targetEl).siblings('h5');
  const saveWord = $(targetEl).siblings('h5').text();
  const saveDefEl = $(targetEl).siblings('p');
  const saveDef = $(targetEl).siblings('p').text();
  
  $(saveWordEl).replaceWith(`<input type="text" value=${saveWord}>`);
  $(saveDefEl).replaceWith(`<textarea>${saveDef}</textarea>`);

  $(saveWordEl).trigger('focus');
  $(saveDefEl).trigger('focus');
});

$(".card-body").on('change', 'textarea', (event) => {
  const targetEl = event.target;
  const newDef = targetEl.value;

  saveNewDef(newDef)

  $(targetEl).replaceWith(`<p>${newDef}</p>`)
});
$(".card-body").on('change', 'input', (event) => {
  const targetEl = event.target;
  const newWord = targetEl.value;

  saveNewWord(newWord)

  $(targetEl).replaceWith(`<h5>${newWord}</h5>`)
});

$(".card-body").on('click', '.saveBtn', (event) => {
  event.preventDefault()

  const word = JSON.parse(localStorage.getItem('newWord'))
  const definition = JSON.parse(localStorage.getItem('newDef'))
  const clickedId = JSON.parse(localStorage.getItem('itemId'))

  editWord(clickedId, word, definition)
});


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