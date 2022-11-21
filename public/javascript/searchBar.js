const searchBar = document.getElementById('nav-search-bar');
const searchBarBtn = document.getElementById('nav-search-bar-btn');

async function searchBarHandler (event) {
      event.preventDefault()

      const word = searchBar.value.trim()
      const url = '/api/words/'+word

      const response = await fetch(url, {
            method: "get",
            headers: {'Content-Type': 'application/json'}
      })

      if(response.ok) {
            console.log('successful fetch')
            searchBar.value = '';
            document.location.replace('/search/'+word)
      } else {
            console.log('bad fetch request')
            alert(response.statusText)
            searchBar.value = '';
      }
}

searchBarBtn.addEventListener('click', searchBarHandler)

