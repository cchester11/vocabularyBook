const router = require('express').Router();
const { Likes, Users } = require('../../models');

// test route; works 
router.get('/likes/liked', (req, res) => {
      Likes.findAll({})
      .then(results => res.json(results))
      .catch(err => console.log(Error(err)))
})

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