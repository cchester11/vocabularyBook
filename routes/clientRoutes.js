const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/createWord', (req, res) => {
  res.render('createWord')
})
.catch(err => {
  if(err) {
    throw new Error(err)
  }
})

module.exports = router;