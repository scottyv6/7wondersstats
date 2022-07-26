const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scores extends Model {}

Scores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gameID: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,      
    },
    city: {
      type: DataTypes.INTEGER,
    },
    treasury: {
      type: DataTypes.INTEGER,
      allowNull: false,            
    },
    military: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commerce: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    science: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guild: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scores',
  }
);

module.exports = Scores;