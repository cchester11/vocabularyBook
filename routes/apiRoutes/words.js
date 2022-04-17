const router = require('express').Router()
const { Words } = require('../../models')

// get all words; works fine
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

// post route; works fine
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

// update route; not sure what issues encompass this route. does not provide an error when the route is requested
router.put('/update/:id', (req, res) => {
  Words.update({
    word: req.body.word,
    defintion: req.body.definition
  },
  {
      where: {
        id: req.params.id
      }
  })
  .then(results => {
    console.log('results returned here')
    console.log(req.body)
    console.log(req.params.id)
    res.json(results)
  })
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