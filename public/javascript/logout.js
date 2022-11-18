const logoutBtn = document.getElementById('logout-btn')

async function logoutHandler () {
      const response = await fetch('/api/logout', {
            method: 'post',
            headers: {'Content-Type': 'application/json'}
      })

      if(response.ok) {
            document.location.replace('/')
      } else {
            alert(response.statusText)
      }
}

logoutBtn.addEventListener('click', logoutHandler)