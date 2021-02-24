//const todosController = require('../controllers').todos;
//const todoItemsController = require('../controllers').todoItems;
const riverLocationsController = require('../controllers').riverLocations;
const flowReadingsController = require('../controllers').flowReadings;
const dataCruncherController = require('../controllers').dataCruncher;
const tidesController = require('../controllers').tides;




module.exports = (app) => {
 
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }));

  /*   app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy); */

  app.get('/api/riverlocations', riverLocationsController.list);
  app.get('/api/flowreadings/latest', flowReadingsController.latest);

  app.get('/api/crunch', dataCruncherController.Foo);
  app.get('/api/tides', tidesController.GetTides);
};
