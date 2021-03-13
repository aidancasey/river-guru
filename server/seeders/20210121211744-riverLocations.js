module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { readingFile: "http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf" };
    return queryInterface.bulkInsert('RiverLocations', [{
      name: 'lee',
      county: 'cork',
      location: 'inniscarra dam',
      locationID:  1,
      data: JSON.stringify(config),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RiverLocations', null, {})
};
