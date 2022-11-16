const router = require('express').Router()
const { Users } = require('../../models')

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
                  if (!user) {
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

module.exports = router