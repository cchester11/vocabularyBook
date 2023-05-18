const router = require('express').Router()
const { sign_in, login, logout } = require('../../controllers/index.js')

// take to homepage after successful sign up; successfully stores new User data in session storage on the Sessions table
router.post('/signupform', sign_in)

// take to homepage after successful login; user session successfully stored in Sessions table
router.post('/loginform', login)

// redirect to homepage and destroy user session
router.post('/logout', logout)

module.exports = router