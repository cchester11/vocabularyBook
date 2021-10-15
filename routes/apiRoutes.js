const router = require('express').Router()
const { Words } = require('../models')

router.get('/words', (req, res) => {
  Words.findAll({})
  .then(results => {
    res.json(results)
  })
})

router.post('/words', (req, res) => {
  Words.create({
    word: req.body.word,
    defintion: req.body.defintion
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

module.exports = router;