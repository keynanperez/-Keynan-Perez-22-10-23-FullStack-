const express = require('express');
const router = express.Router();
const favorites = require('../services/favorites');

/* GET favorites. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await favorites.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting favorites `, err.message);
    next(err);
  }
});

module.exports = router;