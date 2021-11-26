const router = require('express').Router()

const clientRoutes = require('./clientRoutes/clientRoutes')
const apiRoutesPrefix = require('./apiRoutes/prefix')
const apiRoutesSuffix = require('./apiRoutes/suffix')
const apiRoutesWords = require('./apiRoutes/words')
const apiRoutesWordsParam = require('./apiRoutes/wordsParam')

router.use('/', clientRoutes)
router.use('/api', apiRoutesPrefix)
router.use('/api', apiRoutesSuffix)
router.use('/api', apiRoutesWords)
router.use('/api', apiRoutesWordsParam)

module.exports = router