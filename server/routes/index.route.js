const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

console.log('adding routes...');
/** GET /health-check - Check service health */
router.get('/health', (req, res) =>
  res.send('OK')
);

module.exports = router;