module.exports = (sequelize, DataTypes) => {
  const SunCalendar = sequelize.define("SunCalendar", {
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
  return SunCalendar;
};
