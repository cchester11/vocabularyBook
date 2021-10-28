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
  res.render('pages')
})

module.exports = router;