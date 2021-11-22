// access the Prefix model table
const { Prefix } = require('../models')

const prefix = [
  {
    prefix: 'paro',
    definition: 'could mean beside, closely related, or closely resembling; generically, something resembling or relating to something else'
  },
  {
    prefix: 'pro',
    definition: 'forward; words like progress exemplify the meaning well' 
  }, 
  {
    prefix: 'meta', 
    definition: 'change, beyond or between; examples include metamorphoses which means the manipulation or change of nature or metaphysics which describes the way physics changes at subatomic levels'
  }
]

const seedPrefix = () => Prefix.bulkCreate(prefix,
  {
    individualHooks: true
  }
)

module.exports = seedPrefix;
