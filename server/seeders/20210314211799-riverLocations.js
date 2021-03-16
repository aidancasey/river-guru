module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { station: "0000019001" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'owenboy',
      county: 'cork',
      location: 'ballea',
      locationID:  4,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
