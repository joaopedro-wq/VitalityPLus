const express = require('express');
const router = express.Router();
const alimentosData = require('../../services/taco.json');

router.get('/alimentos', (req, res) => {
  res.json(alimentosData);
});

module.exports = router;
