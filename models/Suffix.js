// import the Model and DataTypes tools from the sequelize library
const {Model, DataTypes} = require('sequelize')
// connect to the database by communicating with the config file
const sequelize = require('../config/connection')

// Declaration
class Suffix extends Model {

}

// Create our Suffix Table
Suffix.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    suffix: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    definition: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true
  }
)

module.exports = Suffix; 