const router = require('express').Router()

const clientRoutes = require('./clientRoutes')
const apiRoutes = require('./apiRoutes')

router.use('/', clientRoutes)
router.use('/api', apiRoutes)

module.exports = router