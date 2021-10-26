let alphabetBtn = document.querySelector('#alphabetBtn')

const toPages = async function() {  
  if(alphabetBtn) {
    console.log('yes')
    // grab button.textContent
    const textContent = alphabetBtn.textContent
    //send to apiroute
    const response = await fetch('/pages', {
      method: 'GET',
      body: JSON.stringify({
        textContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.ok) {
      document.location.replace('pages')
    }
  }
}

alphabetBtn.addEventListener('click', toPages)