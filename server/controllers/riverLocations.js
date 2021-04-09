const { RiverLocation } = require("../models");

module.exports = {
  list(req, res) {
    return RiverLocation.findAll({})
      .then((riverLocations) => res.status(200).send(riverLocations))
      .catch((error) => res.status(400).send(error));
  },
};
