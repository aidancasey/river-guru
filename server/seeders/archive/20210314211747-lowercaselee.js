module.exports = {
  up: function (queryInterface, Sequelize, migration) {
    return queryInterface.sequelize.query('UPDATE "FlowReadings" SET river = ? where river = ?',
    {
      replacements: ['lee', 'Lee'],
    })
  }
}