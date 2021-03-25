module.exports = {
  up: (queryInterface, Sequelize) => {
    var config = { latitude: "51.8974", longitude: "-8.5688" };
    return queryInterface.bulkInsert("RiverLocations", [
      {
        name: "lee",
        county: "cork",
        location: "anglers-rest",
        locationID: 7,
        data: JSON.stringify(config),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("RiverLocations", { locationID: 7 }, {}),
};
