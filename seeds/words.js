// access the words table
const { Words } = require('../models')

const words = [
  { 
    word: 'Pariah', 
    definition: 'A social out cast',
    user_id: 1
  },
  {
    word: 'Sustenance',
    definition: 'Basic resources like food and water',
    user_id: 1
  },
  {
    word: 'Aloof',
    definition: 'Reserved socially; percieved by others as someone unapproachable',
    user_id: 2
  },
  {
    word: 'Trivial',
    definition: 'Of little significance',
    user_id: 1
  },
  {
    word: 'Quintessential',
    definition: 'A typical example of something',
    user_id: 2
  }
]

const seedWords = () => Words.bulkCreate(words, {individualHooks: true})

module.exports = seedWords;