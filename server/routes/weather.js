const express = require('express');
const router = express.Router();
const weather = require('../services/weather');

/* GET weather. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await weather.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting weather `, err.message);
    next(err);
  }
});
  /* POST weather. */
  router.post('/', async function(req, res, next) {
    try {
      res.json(await weather.create(req.body));
    } catch (err) {
      console.error(`Error while creating weather`, err.message);
      next(err);
    }
  });


module.exports = router;