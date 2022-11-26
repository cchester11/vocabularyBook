const seedUsers = require('./users')
const seedWords = require('./words')
const seedLikes = require('./likes')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({force: true})

  console.log('----------')

  await seedUsers()
  console.log('Users synced successfully')

  console.log('============')

  await seedWords()
  console.log('Words synced successfully')

  console.log('============')

  await seedLikes()
  console.log('Likes successfully seeded')

  console.log('============')

  process.exit(0)
}

seedAll()