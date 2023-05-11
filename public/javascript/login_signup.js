// remember that any route sending a body of data to the server cannot be a get route. get routes do not send any information. they only recieve info
let error_container = document.getElementById('error-container')
let error_button = document.querySelector('.login-page-error-button')

async function signup(event) {
      event.preventDefault()

      const username = document.getElementById('username-signup').value.trim()
      const password = document.getElementById('password-signup').value.trim()
      console.log(username, password)
      if(username && password) {
            const response = await fetch('/api/signupform', {
                  method: "post",
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
            } else {
                  error_container.setAttribute('style', 'display: flex')
            }
      }
}

document.querySelector('.signup-form').addEventListener('submit', signup)
document.querySelector('.login-form').addEventListener('submit', login)
error_button.addEventListener('click', () => {
      error_container.setAttribute('style', 'display: none')
})
