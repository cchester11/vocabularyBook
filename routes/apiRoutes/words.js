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

// route used for home page. sends an array of total words and defs to the js dom file of the homepage
// not necessary at the moment. also doesnt seem to work
// router.get('/homepage', (req, res) => {
//   Words.findAll({})
//   .then(results => {
//     const words = results.map(word => word.get({ plain: true }))
//     const wordsArray = []
//     const defsArray = []

//     for(let i = 0; i < words.length; i ++) {
//       let current = words[i]
//       wordsArray.push(current.word)
//       defsArray.push(current.definition)
//     }

//     res = wordsArray, defsArray
//   })
//   .catch(err => {
//     if(err) {
//       throw new Error(err)
//     }
//   })
// })

// not used; (I think)
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