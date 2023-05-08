const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.NODE_ENV==='local') {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  })

  console.log('connecting to local db')
} else {
  sequelize = new Sequelize(process.env.GOOGLE_DB_NAME, process.env.RAILWAY_USERNAME, process.env.RAILWAY_PASSWORD, {
    host: process.env.GOOGLE_HOST,
    dialect: 'mysql',
    port: 3306
  })

  console.log('connecting to google cloud db services')
}

module.exports = sequelize;