const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words } = require('../../models')

exports.renderLoginPage = (req, res) => {
      res.render('login')
}

exports.renderHomePage = (req, res) => {
      res.render('home', {
            loggedIn: req.session.loggedIn,
            username: req.session.username
      })
}

exports.renderCreateWordPage = (req, res) => {
      res.render('createWord', {
            loggedIn: req.session.loggedIn,
            username: req.session.username
      })
}

exports.renderAllUserWordsPage = (req, res) => {
      res.render('allUserWords', {
            loggedIn: req.session.loggedIn,
            username: req.session.username
      })
}

exports.renderLikeWordsPage = (req, res) => {
      res.render('likedWords', {
            loggedIn: req.session.loggedIn,
            username: req.session.username
      })
}


exports.renderDictionary = (req, res) => {
      res.render('dictionary', {
            loggedIn: req.session.loggedIn,
            username: req.session.username
      })
}

exports.renderPages = (req, res) => {
      Words.findAll({
            where: {
                  user_id: req.session.user_id,
                  word: {
                        [Op.like]: `${req.params.id}%`
                  }
            }
      })
            .then(data => {
                  const words = data.map(word => word.get({ plain: true }))

                  res.render('pages', {
                        words,
                        loggedIn: req.session.loggedIn,
                        username: req.session.username
                  })
            })
            .catch(err => {
                  if (err) {
                        throw new Error(err)
                  }
            })
}

exports.searchPage = (req, res) => {
      console.log(req.params.word)
      Words.findOne({
            where: {
                  word: req.params.word
            },
            attributes: [
                  'id',
                  'word',
                  'definition'
            ]
      })
            .then(result => {
                  const word = result.toJSON()

                  res.render('search', {
                        word,
                        loggedIn: req.session.loggedIn,
                        username: req.session.username
                  })
            })
            .catch(err => {
                  throw new Error(err)
            })
}
