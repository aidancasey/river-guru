'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TideTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TideTime.init({
    location: DataTypes.STRING,
    height: DataTypes.DOUBLE,
    hilo: DataTypes.STRING,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TideTime',
  });
  return TideTime;
};