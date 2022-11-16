const seedUsers = require('./users')
const seedWords = require('./words')
const seedPrefix = require('./prefix')
const seedSuffix = require('./suffix')

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

  await seedPrefix()
  console.log('Prefix synced successfully')

  console.log('============')

  await seedSuffix()
  console.log('Suffix synced successfully')

  console.log('============')

  process.exit(0)
}

seedAll()