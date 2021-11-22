const seedWords = require('./words')
const seedPrefix = require('./prefix')
const seedSuffix = require('./suffix')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({force: true})

  console.log('----------')

  await seedWords()
  console.log('Words synced successfully')

  await seedPrefix()
  console.log('Prefix synced successfully')

  await seedSuffix()
  console.log('Suffix synced successfully')

  process.exit(0)
}

seedAll()