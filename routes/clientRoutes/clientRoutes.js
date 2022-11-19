const router = require('express').Router()
const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words } = require('../../models')

// beginning page that throws the login page
router.get('/', (req, res) => {
  res.render('login')
})

// below client routes (rendering UI) will check for loggedIn value of true or false

// home route
router.get('/home', (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn
  })
})

// creation pages used for sending data to the database
router.get('/createWord', (req, res) => {
  res.render('createWord')
})

router.get('/createPrefix', (req, res) => {
  res.render('createPrefix')
})

router.get('/createSuffix', (req, res) => {
  res.render('createSuffix')
})


// a page displaying an index of the letters of the alphabet. choose one to be routed to the route below
router.get('/dictionary', (req, res) => {
  res.render('dictionary')
})

// works correctly. takes you to a page that displays all words starting with selected letter
router.get('/pages/:id', (req, res) => {
  Words.findAll({
    where: {
      user_id: req.session.user_id,
      word:{
        [Op.like]: `${req.params.id}%`
      }
    }
  })
    .then(data => {
      const words = data.map(word => word.get({ plain: true }))

      res.render('pages', {
        words
      })
    })
    .catch(err => {
      if(err) {
        throw new Error(err)
      }
    })
})

module.exports = router;