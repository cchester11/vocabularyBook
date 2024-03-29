const router = require('express').Router()
const { getUserLikes, addLikeWordToUser } = require('../../controllers/api/likes_controllers.js')

router.get('/likes', getUserLikes)
router.post('/likes', addLikeWordToUser)

module.exports = router;