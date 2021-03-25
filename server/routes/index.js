const riverLocationsController = require("../controllers").riverLocations;
const flowReadingsController = require("../controllers").flowReadings;
const dataCruncherController = require("../controllers").dataCruncher;
const dataNukerController = require("../controllers").dataNuker;
const tidesController = require("../controllers").tides;
const riverLevelController = require("../controllers").riverLevel;
const weatherForecastController = require("../controllers").weatherForecast;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!",
    })
  );

  app.get("/api/riverlocations", riverLocationsController.list);
  app.get("/api/flowreadings/latest", flowReadingsController.latest);

  app.get("/api/crunch", dataCruncherController.Karunch);
  app.get("/api/nuke", dataNukerController.Kaboom);

  app.get("/api/tides/:location/latest", (req, res) => {
    var place = req.params.location;
    tidesController.GetLatestTides(place, req, res);
  });

  app.get("/api/levels/:river/:location/latest", (req, res) => {
    var location = req.params.location;
    var river = req.params.river;
    riverLevelController.GetLatest(river, location, req, res);
  });

  app.get("/api/weather-forecast/:river/:location", (req, res) => {
    var location = req.params.location;
    var river = req.params.river;
    weatherForecastController.GetLatestForecast(river, location, req, res);
  });
};
