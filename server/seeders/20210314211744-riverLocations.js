module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { station: "0000018107" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'blackwater',
      county: 'cork',
      location: 'fermoy',
      locationID:  3,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
