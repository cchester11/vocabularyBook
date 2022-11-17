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
  },
  {
    word: 'Plethora',
    definition: 'an abundance or excessive amount of',
    user_id: 2
  },
  {
    word: 'Invariable',
    definition: 'Not changing or subject to change',
    user_id: 1
  },
  {
    word: 'Inadvertent',
    definition: 'unintentional consequences resulting from lack of care',
    user_id: 1
  },
  {
    word: 'Primordial',
    definition: 'being the first in sequence',
    user_id: 2
  },
  {
    word: 'Pandemonium',
    definition: 'a condition of noisy confusion',
    user_id: 2
  },
  {
    word: 'Adobe',
    definition: 'Building material composed of sun dried clay and dung compacted together',
    user_id: 1
  },
  {
    word: 'Gregarious',
    definition: 'seeking and enjoying the company of others',
    user_id: 1
  }
]

const seedWords = () => Words.bulkCreate(words, {individualHooks: true})

module.exports = seedWords;