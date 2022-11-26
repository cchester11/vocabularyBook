const { Likes } = require('../models')

const likes = [
      {
            user_id: 1,
            word_id: 2 
      },
      {
            user_id: 2,
            word_id: 11
      },
      {
            user_id: 1,
            word_id: 4
      },
      {
            user_id: 2,
            word_id: 7
      }
]

const seedLikes = () => Likes.bulkCreate(likes, { individualHooks: true })

module.exports = seedLikes;