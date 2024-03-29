const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model {

}

Likes.init(
      {
            id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true
            },
            user_id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  references: {
                        model: 'Users',
                        key: 'id'
                  }
            },
            word_id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  references: {
                        model: 'Words',
                        key: 'id'
                  }
            }
      },
      {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            modelName: 'Likes',
            underscored: true
      }
)

module.exports = Likes;