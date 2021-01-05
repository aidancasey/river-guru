const express = require('express');

const waterFlow = require('../water-flow-rate');

const router = express.Router(); // eslint-disable-line new-cap

console.log('adding routes...');
/** GET /health check - Check service health */
router.get('/health', (req, res) => res.send('OK'));

/** GET /water - process latest water levels */
router.get('/water', (req, res) => {
  waterFlow.UpdateData();
  res.send('water levels gotted');
});

module.exports = router;
