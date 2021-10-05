const {Model, DataTypes} = require('sequelize')

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
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
)

module.exports = Words