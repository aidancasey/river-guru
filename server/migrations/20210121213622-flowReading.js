'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
  queryInterface.createTable('FlowReadings', {
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
    reading: {
      type: Sequelize.DOUBLE,
      allowNull: false,
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

  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('FlowReadings'),
};
