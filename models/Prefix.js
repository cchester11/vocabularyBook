const {Model, Datatypes} = require('sequelize')
const sequelize = require('../config/connection')

class Prefix extends Model {

}

Prefix.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    prefix: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
)

module.exports = Prefix;