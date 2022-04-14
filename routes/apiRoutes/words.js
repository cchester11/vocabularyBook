const router = require('express').Router()
const { Words } = require('../../models')

router.get('/words', (req, res) => {
  console.log('finding all words')
  Words.findAll({})
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    throw new Error(err)
  })
})

router.post('/words', (req, res) => {
  Words.create({
    word: req.body.word,
    definition: req.body.definition
  })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      if (err) {
        console.log(err)
      }
    })
})

router.put('/update/:param', (req, res) => {
  Words.update({
    word: req.body.word,
    defintion: req.body.definition
  },
  {
      where: {
        id: req.params.param
      }
  })
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    throw new Error(err)
  })
})

router.delete('/delete/:id', (req, res) => {
  Words.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    console.log('word successfully deleted')
    res.status(200).end()
  })
  .catch(err => {
    throw new Error(err)
  })
})

module.exports = router