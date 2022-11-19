const router = require('express').Router()
const { Prefix } = require('../../models')

router.post('/prefix', (req, res) => {
  if(req.session) {
    Prefix.create({
      prefix: req.body.prefix,
      definition: req.body.definition
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      throw new Error(err)
    })
  } else {
    res.status(200).end()
  }
})

module.exports = router