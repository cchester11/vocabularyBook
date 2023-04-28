const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.host === 'localhost') {
  sequelize = new Sequelize(process.env.LOCAL_DB_NAME, process.env.LOCAL_DB_USER, process.env.LOCAL_DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
} else {
  sequelize = new Sequelize(process.env.GOOGLE_DB_NAME, {
    host: process.env.GOOGLE_HOST,
    port: 3306
  })
}

module.exports = sequelize;