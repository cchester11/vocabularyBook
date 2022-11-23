const router = require('express').Router()

const clientRoutes = require('./clientRoutes/clientRoutes')
const apiRoutesPrefix = require('./apiRoutes/prefix')
const apiRoutesSuffix = require('./apiRoutes/suffix')
const apiRoutesUsers = require('./apiRoutes/users')
const apiRoutesWords = require('./apiRoutes/words')
const apiRoutesLikes = require('./apiRoutes/likes')

router.use('/', clientRoutes)
router.use('/api', apiRoutesPrefix)
router.use('/api', apiRoutesSuffix)
router.use('/api', apiRoutesUsers)
router.use('/api', apiRoutesWords)
router.use('/api', apiRoutesLikes)

module.exports = router