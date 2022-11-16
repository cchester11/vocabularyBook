async function signup(event) {
      event.preventDefault()

      const username = document.getElementById('username-signup').value.trim()
      const password = document.getElementById('password-signup').value.trim()
      console.log(username, password)
      if(username && password) {
            const response = await fetch('/signup', {
                  method: "POST",
                  body: JSON.stringify({
                        username,
                        password
                  }),
                  headers: {
                        "Content-Type": "application/json"
                  }
            })
      
            if (response.ok) {
                  console.log('sending to homepage. successful signup')
                  document.location.replace('/home')
            } else {
                  alert(response.statusText)
            }
      }
}

document.querySelector('.signup-form').addEventListener('submit', signup)
