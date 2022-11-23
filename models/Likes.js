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
            liked_word: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  references: {
                        model: 'Words',
                        key: 'word'
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