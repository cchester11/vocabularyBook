const { Words, Users } = require('../../models')

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

exports.findOneWord = (req, res) => {
      console.log(req.params.word)
      Words.findOne({
            where: {
                  word: req.params.word
            }
      })
            .then(word => {
                  if (!word) {
                        res.status(404).json({ message: 'No word found in the db' });
                        return;
                  }

                  res.json(word)
            })
            .catch(err => {
                  throw new Error(err)
            })
}

exports.findById = (req, res) => {
      Words.findAll({
            where: {
                  id: req.params.id
            }
      })
            .then(results => {
                  res.json(results)
            })
            .catch(err => {
                  throw new Error(err)
            })
}

exports.createNewWord = (req, res) => {
      if (req.session) {
            Words.create({
                  word: req.body.word,
                  definition: req.body.definition,
                  user_id: req.session.user_id
            })
                  .then(results => {
                        res.json(results)
                  })
                  .catch(err => {
                        if (err) {
                              console.log('bad request')
                              console.log(err)
                        }
                  })
      }
}

exports.updateWord = (req, res) => {
      if (req.session) {
            Words.update({
                  word: req.body.word,
                  definition: req.body.definition
            },
                  {
                        where: {
                              id: req.params.id
                        }
                  })
                  .then(results => res.json(results))
                  .catch(err => {
                        throw new Error(err)
                  })
      } else {
            res.status(200).end()
      }
}

exports.deleteWord = (req, res) => {
      console.log('made it to delete route')
      if (req.session) {
            Words.destroy({
                  where: {
                        id: req.params.id
                  }
            })
                  .then((results) => {
                        console.log('word successfully deleted')
                        res.json(results)
                  })
                  .catch(err => {
                        throw new Error(err)
                  })
      } else {
            res.status(200).end()
      }
}