const { Words } = require('../models')

const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/createWord', (req, res) => {
  res.render('createWord')
})

router.get('/dictionary', (req, res) => {
  res.render('dictionary')
})

router.get('/pages', (req, res) => {
  Words.findAll({})
  .then(results => {
    const words = results.filter(word => word[i] === textContent)
    res.render('pages', { words })
  })
})

module.exports = router;