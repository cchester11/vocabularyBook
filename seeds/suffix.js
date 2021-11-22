// access the Suffix model table
const { Suffix } = require('../models')

const suffix = [
  {
    suffix: 'gress',
    definition: 'move, walk; in conjunction with the prefix pro, a word progress is created with the meaning forward movement'
  }, 
  {
    suffix: 'tion',
    definition: 'a suffix used to nominalize verbs (turn them into nouns) so that they then convey an idea or a state rather than an a physical action'
  },
  {
    suffix: 'bolic',
    definition: 'no clear definition but the phrase bolic behaves like a suffix connoting relation; meaning could be: related to'
  }
]

const seedSuffix = () => Suffix.bulkCreate(suffix, 
  {
    individualHooks: true
  }
)

module.exports = seedSuffix; 