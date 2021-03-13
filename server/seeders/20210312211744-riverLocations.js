module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { station: "0000020002" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'bandon',
      county: 'cork',
      location: 'curranure',
      locationID:  2,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
