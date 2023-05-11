const router = require('express').Router()
const { Users } = require('../../models')

// take to homepage after successful sign up; successfully stores new User data in session storage on the Sessions table
router.post('/signupform', (req, res) => {
      // send body {username: 'username', password: 'password'} to sequelize to create new user
      Users.create({
            username: req.body.username,
            password: req.body.password
      })
            .then(results => {
                  req.session.save(() => {
                        req.session.user_id = results.id,
                        req.session.username = results.username,
                        req.session.loggedIn = true

                        res.json({
                              user: results,
                              message: 'You are now logged in'
                        })
                  })
            })
            .catch(err => {
                  window.alert(err)
                  res.status(500).json(err)
            })
})

// take to homepage after successful login; user session successfully stored in Sessions table
router.post('/loginform', (req, res) => {
      Users.findOne({
            where: {
                  username: req.body.username,
                  password: req.body.password
            }
      })
            .then(user => {
                  if (!user) {
                        res.status(401).json({ message: 'Wrong username or password.' })
                        return
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
            .catch(err => {
                  console.error(err)
                  res.status(500).json({ message: 'Internal server error' })
            })
})

router.post('/logout', (req, res) => {
      if(req.session.loggedIn) {
            req.session.destroy(() => {
                  res.status(204).end()
            })
      } else {
            res.status(404).end()
      }
})

module.exports = router