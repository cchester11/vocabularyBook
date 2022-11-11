function saveId (data) {
  localStorage.setItem('itemId', JSON.stringify(data))
};

async function editWord(clickedId, word, definition) {
  let current = clickedId

  const response = await fetch(`api/update/${current}`, {
    method: "update",
    body: {
      id: current,
      word: word,
      definition: definition
    },
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    return response.json()
  } else {
    alert(response.statusText)
  }
};

$(".card-body").on('click', '.editBtn', (event) => {
  const targetEl = event.target;
  const targetId = event.target.id;

  saveId(targetId)

  const saveWordEl = $(targetEl).siblings('h5');
  const saveWord = $(targetEl).siblings('h5').text();
  const saveDefEl = $(targetEl).siblings('p');
  const saveDef = $(targetEl).siblings('p').text();
  
  $(saveWordEl).replaceWith(`<textarea>${saveWord}</textarea>`);
  $(saveDefEl).replaceWith(`<textarea>${saveDef}</textarea>`);

  // try creating a save button here and adding an event listener to it

  // save new values after text area loses focus
  // return el's back to h5 and p
  // run the editWord function 
  // good to go 
  return
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
};


