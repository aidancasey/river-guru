// const todosController = require('../controllers').todos;
// const todoItemsController = require('../controllers').todoItems;
const riverLocationsController = require('../controllers').riverLocations;
const flowReadingsController = require('../controllers').flowReadings;
const dataCruncherController = require('../controllers').dataCruncher;
const tidesController = require('../controllers').tides;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }));

  app.get('/api/riverlocations', riverLocationsController.list);
  app.get('/api/flowreadings/latest', flowReadingsController.latest);

  app.get('/api/crunch', dataCruncherController.Karunch);

  app.get('/api/tides/:location/latest', (req, res) => {
    var place = req.params.location;
    tidesController.GetLatestTides(place, req, res);
  });
};
