const router = require('express').Router()
const { Words } = require('../../models')

// get all words; works fine
router.get('/words', (req, res) => {
  console.log('finding all words')
  if(req.session) {
    Words.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      throw new Error(err)
    })
  }
})

// not used; but can be used in the search issue later
router.get('/words/:id', (req, res) => {
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
})

// post route; creates a new word; works fine
router.post('/words', (req, res) => {
  if(req.session) {
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
          console.log(err)
        }
      })
  }
})

// update route; not sure what issues encompass this route
router.put('/update/:id', (req, res) => {
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
})

// delete route; works correctly
router.delete('/delete/:id', (req, res) => {
  console.log('made it to delete route')
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
})

module.exports = router