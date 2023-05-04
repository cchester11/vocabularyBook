const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.PORT = 4001) {
  sequelize = new Sequelize(process.env.GOOGLE_DB_NAME, process.env.RAILWAY_USERNAME, process.env.RAILWAY_PASSWORD, {
    host: process.env.GOOGLE_HOST,
    dialect: 'mysql',
    port: 3306
  })
} else {
  sequelize = new Sequelize(process.env.DB_USER, process.env.DB_PW, process.env.DB_NAME, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  })
};


module.exports = sequelize;