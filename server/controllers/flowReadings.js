const { Op } = require('sequelize');
const { FlowReading } = require('../models');

module.exports = {
  latest(req, res) {
    return FlowReading.findAll({
      where: {
        recordedAt: {
          [Op.gte]: new Date(Date.now() - 24 * 60 * 60 * 1000)
        }
      },
      // Add order conditions here....
      order: [
        ['recordedAt', 'DESC']
      ]
    }).then((flowReadings) => res.status(200).send(flowReadings))
      .catch((error) => res.status(400).send(error));
  }

};
