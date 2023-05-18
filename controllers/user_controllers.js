const { Users } = require('../models')

exports.sign_in = (req, res) => {
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
}

exports.login = (req, res) => {
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
}

exports.logout = (req, res) => {
      if(req.session.loggedIn) {
            req.session.destroy(() => {
                  res.status(204).end()
            })
      } else {
            res.status(404).end()
      }
}