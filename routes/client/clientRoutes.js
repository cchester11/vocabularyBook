const router = require('express').Router()
const { 
  renderLoginPage, 
  renderHomePage, 
  renderCreateWordPage, 
  renderAllUserWordsPage,
  renderLikeWordsPage,
  renderDictionary,
  renderPages,
  searchPage
} = require('../../controllers/index.js')

router.get('/', renderLoginPage)

// below client routes (rendering UI) will check for loggedIn value of true or false

router.get('/home', renderHomePage)

router.get('/createWord', renderCreateWordPage)

router.get('/allUserWords', renderAllUserWordsPage)

router.get('/likedWords', renderLikeWordsPage)

router.get('/dictionary', renderDictionary)

router.get('/pages/:id', renderPages)

router.get('/search/:word', searchPage)

module.exports = router;