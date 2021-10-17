const seedWords = require('./words')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({force: true})

  console.log('----------')

  await seedWords()
  console.log('synced successfully')

  process.exit(0)
}

seedAll()