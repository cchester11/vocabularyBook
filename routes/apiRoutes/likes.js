const router = require('express').Router();
const { Likes, Users } = require('../../models');

router.get('/likes', (req, res) => {
      if (req.session) {
            Likes.findAll({
                  where: {
                        user_id: req.session.user_id
                  },
                  include: {
                        model: Users,
                        attributes: ['username']
                  }
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

router.post('/likes', (req, res) => {
      console.log(req.body)
      if (req.session) {
            Likes.create({
                  liked_word: req.body.liked_word,
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