module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { station: "0000020002" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'Bandon',
      county: 'Cork',
      location: 'Curranure',
      locationID:  2,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
