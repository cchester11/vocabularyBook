// import for exportation all models
const Users = require('./Users')
const Words = require('./Words')
const Prefix = require('./Prefix')
const Suffix = require('./Suffix')

// create associations
Users.hasMany(Words, {
      foreignKey: 'user_id'
})

Words.belongsTo(Users, {
      foreignKey: 'user_id'
})

// send models to routes, server, etc with their associations
module.exports = {Users, Words, Prefix, Suffix};