const router = require('express').Router()

const clientRoutes = require('./client/clientRoutes')
const apiRoutesUsers = require('./api/users')
const apiRoutesWords = require('./api/words')
const apiRoutesLikes = require('./api/likes_routes')

router.use('/', clientRoutes)
router.use('/api', apiRoutesUsers)
router.use('/api', apiRoutesWords)
router.use('/api', apiRoutesLikes)

module.exports = router