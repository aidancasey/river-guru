module.exports = (sequelize, DataTypes) => {
  const FlowReading = sequelize.define('FlowReading', {
    river: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reading: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    recordedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return FlowReading;
};