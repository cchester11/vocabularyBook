const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Words extends Model {

}

Words.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    word: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Words',
    underscored: true
  }
)

module.exports = Words