const { Words, Users } = require('../models')

exports.findAllWords = (req, res) => {
      console.log('finding all words')
      if (req.session) {
            Words.findAll({})
                  .then(results => {
                        res.json(results)
                  })
                  .catch(err => {
                        throw new Error(err)
                  })
      }
}

exports.allUserWords = (req, res) => {
      console.log('finding all words')
      if (req.session) {
            Words.findAll({
                  include: {
                        model: Users,
                        attributes: ['username']
                  }
            })
                  .then(results => {
                        res.json(results)
                  })
                  .catch(err => {
                        throw new Error(err)
                  })
      }
}