// import for exportation all models
const Users = require('./Users')
const Words = require('./Words')
const Likes = require('./Likes')
const Prefix = require('./Prefix')
const Suffix = require('./Suffix')

// create associations
Users.hasMany(Words, {
      foreignKey: 'user_id'
})

Words.belongsTo(Users, {
      foreignKey: 'user_id'
})

Users.hasMany(Likes, {
      foreignKey: 'user_id'
})

Likes.belongsTo(Users, {
      foreignKey: 'user_id'
})

// send models to routes, server, etc with their associations
module.exports = {Users, Words, Likes, Prefix, Suffix};