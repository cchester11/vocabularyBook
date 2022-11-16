const router = require('express').Router()

const clientRoutes = require('./clientRoutes/clientRoutes')
const apiRoutesPrefix = require('./apiRoutes/prefix')
const apiRoutesSuffix = require('./apiRoutes/suffix')
const apiRoutesUsers = require('./apiRoutes/users')
const apiRoutesWords = require('./apiRoutes/words')

router.use('/', clientRoutes)
router.use('/api', apiRoutesPrefix)
router.use('/api', apiRoutesSuffix)
router.use('/api', apiRoutesUsers)
router.use('/api', apiRoutesWords)

module.exports = router