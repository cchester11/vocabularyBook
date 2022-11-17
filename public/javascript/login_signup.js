async function signup(event) {
      event.preventDefault()

      const username = document.getElementById('username-signup').value.trim()
      const password = document.getElementById('password-signup').value.trim()
      console.log(username, password)
      if(username && password) {
            const response = await fetch('/api/signupform', {
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

async function login (event) {
      event.preventDefault()

      const username = document.getElementById('username-login').value.trim()
      const password = document.getElementById('password-login').value.trim()

      if(username && password) {
            const response = await fetch('/api/loginform', {
                  method: "post",
                  body: JSON.stringify({
                        username,
                        password
                  }),
                  headers: {'Content-Type': 'application/json'}
            })

            if(response.ok) {
                  console.log(`user ${username} logged in`)
                  document.location.replace('/home')
            }
      }
}

document.querySelector('.signup-form').addEventListener('submit', signup)
document.querySelector('.login-form').addEventListener('submit', login)
