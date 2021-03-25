module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { station: "0000019102" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'lee',
      county: 'cork',
      location: 'waterworks',
      locationID:  5,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
