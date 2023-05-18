const router = require('express').Router()
const { 
  findAllWords, 
  allUserWords, 
  findOneWord, 
  findById, 
  createNewWord,
  updateWord,
  deleteWord 
} = require('../../controllers')

// get all words; works fine; used on homepage
router.get('/words', findAllWords)

// get all words plus username; used for alluserwords page
router.get('/words/alluserspage', allUserWords)

// route for search bar; finds searched for word
router.get('/words/:word', findOneWord)

// not used; 
router.get('/words/:id', findById)

// post route; creates a new word; works fine
router.post('/words', createNewWord)

// update route; route is used to successfully update words upon save button submission of the edit feature
router.put('/update/:id', updateWord)

// delete route; works correctly
router.delete('/delete/:id', deleteWord)

module.exports = router