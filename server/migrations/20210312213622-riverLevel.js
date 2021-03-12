'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
  queryInterface.createTable('RiverLevels', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    river: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    locationID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    min: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    max: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    mean: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    recordedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('RiverLevels'),
};
