const router = require('express').Router();
const { Likes, Users, Words } = require('../../models');

router.get('/likes', (req, res) => {
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
})

// post route used in searchPage; creates a new instanceOf a Like
router.post('/likes', (req, res) => {
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
})

module.exports = router;