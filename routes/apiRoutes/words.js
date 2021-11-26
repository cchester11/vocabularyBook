const router = require('express').Router()
const { Words } = require('../../models')

router.post('/words', (req, res) => {
  Words.create({
    word: req.body.word,
    definition: req.body.definition
  })
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    if(err) {
      console.log(err)
    }
  })
})

module.exports = router