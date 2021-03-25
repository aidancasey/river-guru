module.exports = {
  up: (queryInterface, Sequelize) => {
    var leeConfig = {
      readingFile: "http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf",
    };
    var curranureConfig = { station: "0000020002" };
    var fermoyConfig = {
      station: "0000018107",
      latitude: "52.1373",
      longitude: "-8.2812",
    };
    var owenboyConfig = { station: "0000019001" };
    var waterworksConfig = { station: "0000019102" };
    var ballyduffConfig = { station: "0000018002" };
    var anglersrestConfig = { latitude: "51.8974", longitude: "-8.5688" };
    var bandontownConfig = { latitude: "51.7472", longitude: "-8.7253" };
    var carrigalineConfig = { latitude: "51.8179", longitude: "-8.3915" };

    return queryInterface.bulkInsert("RiverLocations", [
      {
        name: "lee",
        county: "cork",
        location: "inniscarra dam",
        locationID: 1,
        data: JSON.stringify(leeConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "bandon",
        county: "cork",
        location: "curranure",
        locationID: 2,
        data: JSON.stringify(curranureConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "blackwater",
        county: "cork",
        location: "fermoy",
        locationID: 3,
        data: JSON.stringify(fermoyConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "owenboy",
        county: "cork",
        location: "ballea",
        locationID: 4,
        data: JSON.stringify(owenboyConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lee",
        county: "cork",
        location: "waterworks",
        locationID: 5,
        data: JSON.stringify(waterworksConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "blackwater",
        county: "cork",
        location: "ballyduff",
        locationID: 6,
        data: JSON.stringify(ballyduffConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lee",
        county: "cork",
        location: "anglers-rest",
        locationID: 7,
        data: JSON.stringify(anglersrestConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "bandon",
        county: "cork",
        location: "bandon",
        locationID: 8,
        data: JSON.stringify(bandontownConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "owenboy",
        county: "cork",
        location: "carrigaline",
        locationID: 9,
        data: JSON.stringify(carrigalineConfig),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("RiverLocations", null, {}),
};
