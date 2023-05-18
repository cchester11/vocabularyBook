const { Likes, Users, Words} = require('../../models')

exports.getUserLikes = (req, res) => {
      if (req.session) {
            Likes.findAll({
                  where: {
                        user_id: req.session.user_id
                  },
                  include: [
                        {
                              model: Users,
                              attributes: ['username']
                        },
                        {
                              model: Words,
                              attributes: ['word', 'definition']
                        }
                  ]
            })
                  .then(results => {
                        if(!results) { res.json({ message: "No likes in your db"}) }
                        res.json(results)
                  })
                  .catch(err => {
                        throw new Error(err)
                  })
      }
}

exports.addLikeWordToUser = (req, res) => {
      console.log(req.body)
      if (req.session) {
            Likes.create({
                  word_id: req.body.word_id,
                  user_id: req.session.user_id
            })
                  .then(liked_word => {
                        res.json(liked_word)
                  })
                  .catch(err => {
                        throw new Error(err)
                  })
      }
}