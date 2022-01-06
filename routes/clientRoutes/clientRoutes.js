const router = require('express').Router()
const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words } = require('../../models')

// home route
router.get('/', (req, res) => {
  res.render('home')
})

// creation pages used for sending data to the database
router.get('/createWord', (req, res) => {
  res.render('createWord')
})

router.get('/createPrefix', (req, res) => {
  res.render('createPrefix')
})

router.get('/createSuffix', (req, res) => {
  res.render('createSuffix')
})


// the dictionary page that houses all the letter buttons who talk to the backend and retrieve words according to the letter represented in the button
router.get('/dictionary', (req, res) => {
  res.render('dictionary')
})

// pages page that should somehow render all the data we got from the button mentioned above
router.get('/pages/:id', (req, res) => {
  Words.findAll({
    where: {
      word:{
        [Op.like]: `${req.params.id}%`
      }
    }
  })
    .then(data => {
      const words = data.map(word => word.get({ plain: true }))

      res.render('pages', {
        words
      })
    })
    .catch(err => {
      if(err) {
        throw new Error(err)
      }
    })
})

module.exports = router;