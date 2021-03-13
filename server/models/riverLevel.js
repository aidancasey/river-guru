module.exports = (sequelize, DataTypes) => {
    const RiverLevel = sequelize.define('RiverLevel', {
      river: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      max: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      mean: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      value: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      recordedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
    return RiverLevel;
  };