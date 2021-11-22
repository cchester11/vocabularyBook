const router = require('express').Router()
const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words, Prefix, Suffix } = require('../models')

router.get('/words:param', (req, res) => {
  Words.findAll({
    where: {
      word:{
        [Op.like]: `${req.params.param}%`
      }
    }
  })
  .then(results => {
    res.json(results)
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
    if(err) {
      console.log(err)
    }
  })
})

router.post('/prefix', (req, res) => {
  Prefix.create({
    prefix: req.body.prefix,
    definition: req.body.definition
  })
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    throw new Error(err)
  })
})

router.post('/suffix', (req, res) => {
  Suffix.create({
    suffix: req.body.suffix,
    definition: req.body.definition
  })
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    throw new Error(err)
  })
})

module.exports = router;