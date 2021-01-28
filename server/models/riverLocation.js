module.exports = (sequelize, DataTypes) => {
  const RiverLocation = sequelize.define('RiverLocation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });
  return RiverLocation;
};