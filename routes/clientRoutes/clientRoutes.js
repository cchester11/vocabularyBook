const router = require('express').Router()
const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words, Users } = require('../../models')

// login page route
router.get('/', (req, res) => {
  res.render('login')
})

// take to homepage after successful sign up
router.post('/signupform', (req, res) => {
  // send body {username: 'username', password: 'password'} to sequelize to create new user
  Users.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(results => {
    req.session.save(() => {
      // save the below tokens to the users session while the user is logged in to allow the user access to all web apps pages
      req.session.user_id = results.id,
      req.session.username = results.username,
      req.session.loggedIn = true

      res.json(results)
    })
    .catch(err => {
      window.alert(err)
      res.status(500).json(err)
    })
  })
})

router.post('/loginform', (req, res) => {
  Users.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })
  .then(user => {
    if(!user) {
      res.status(400).json({ message: 'Wrong username or password.' })
    }

    req.session.save(() => {
      req.session.user_id = user.id,
      req.session.username = user.username,
      req.session.loggedIn = true

      res.json({ 
        user: user, 
        message: 'You are now logged in'
      })
    })
  })
})

// home route
router.get('/home', (req, res) => {
  res.render('home')
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