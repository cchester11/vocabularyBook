const searchBar = document.getElementById('nav-search-bar');
const searchBarBtn = document.getElementById('nav-search-bar-btn');

async function searchBarHandler () {
      const word = searchBar.value.trim()

      const response = await fetch('/api/words/'+word, {
            method: "get",
            headers: {'Content-Type': 'application/json'}
      })

      if(response.ok) {
            console.log('successful fetch')
      } else {
            window.alert('that word does not appear to exist in the database')
            alert(response.statusText)
      }
}

searchBarBtn.addEventListener('click', searchBarHandler)

