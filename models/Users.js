// pull parts of sequelize library that we need
const { Model, DataTypes } = require('sequelize');
// connect to the db so that our model can interface with it
const sequelize = require('../config/connection');

// construct the model for Users
class Users extends Model {
// some hooks can be written in here
// see just_tech_news for example
}

Users.init(
      {
            id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true
            },
            username: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true
            },
            password: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true
            }
      },
      {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            modelName: 'users',
            underscored: true
      }
)

module.exports = Users;