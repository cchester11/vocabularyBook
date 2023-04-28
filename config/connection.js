const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.PORT === 8001) {
  sequelize = new Sequelize(process.env.LOCAL_DB_NAME, process.env.LOCAL_DB_USER, process.env.LOCAL_DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;