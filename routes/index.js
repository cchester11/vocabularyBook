const router = require('express').Router()

const publicRoutes = require('./clientSideRoutes/home')

router.use('/', publicRoutes)

module.exports = router