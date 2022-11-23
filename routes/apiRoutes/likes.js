const router = require('express').Router();
const { Likes } = require('../../models');

router.post('/likes', (req, res) => {
      console.log(req.body)
      if(req.session) {
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