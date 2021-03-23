module.exports = (sequelize, DataTypes) => {
  const WeatherForecast = sequelize.define("WeatherForecast", {
    river: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    recordedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return WeatherForecast;
};
