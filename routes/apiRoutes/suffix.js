const router = require('express').Router()
const { Suffix } = require('../../models')

router.post('/suffix', (req, res) => {
  if(req.session) {
    Suffix.create({
      suffix: req.body.suffix,
      definition: req.body.definition
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      throw new Error(err)
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router