const router = require('express').Router()
const { Words } = require('../../models')

// get all words; works fine; used on homepage
router.get('/words', (req, res) => {
  console.log('finding all words')
  if(req.session) {
    Words.findAll({})
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      throw new Error(err)
    })
  }
})

// route for search bar; finds searched for word
router.get('/words/:word', (req, res) => {
  console.log(req.params.word)
  Words.findOne({
    where: {
      word: req.params.word
    }
  })
    .then(word => {
      if (!word) {
        res.status(404).json({ message: 'No word found in the db' });
        return;
      }

      res.json(word)
    })
    .catch(err => {
      throw new Error(err)
    })
})

// not used; 
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
          console.log('bad request')
          console.log(err)
        }
      })
  }
})

// update route; route is used to successfully update words upon save button submission
router.put('/update/:id', (req, res) => {
  if(req.session) {
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
  } else {
    res.status(200).end()
  }
})

// delete route; works correctly
router.delete('/delete/:id', (req, res) => {
  console.log('made it to delete route')
  if(req.session) {
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
  } else {
    res.status(200).end()
  }
})

module.exports = router