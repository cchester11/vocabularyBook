const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.PORT === 8001) {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,  process.env.DB_PW, {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    logging: false
  })
}

module.exports = sequelize;