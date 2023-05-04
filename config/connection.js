const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize = new Sequelize(process.env.GOOGLE_DB_NAME, process.env.RAILWAY_USERNAME, process.env.RAILWAY_PASSWORD, {
    host: process.env.GOOGLE_HOST,
    dialect: 'mysql',
    port: 3306
  })



module.exports = sequelize;