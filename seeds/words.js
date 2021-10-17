const sequelize = require('../config/connection')
const { Words } = require('../models')

const words = [
  {
    word: 'Pariah', 
    definition: 'A social out cast'
  },
  {
    word: 'Trivial',
    definition: 'Of little significance'
  },
  {
    word: 'Quintessential',
    definition: 'A typical example of something'
  }
]

const seedWords = () => Words.bulkCreate(words, {individualHooks: true})

module.exports = seedWords;