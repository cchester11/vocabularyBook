const router = require('express').Router()
const sequelize = require('sequelize')
const Op = sequelize.Op
const { Words } = require('../../models')

router.get('/words/:param', (req, res) => {
  Words.findAll({
    where: {
      word:{
        [Op.like]: `${req.params.param}%`
      }
    }
  })
  .then(results => {
    res.json(results)
  })
})

module.exports = router