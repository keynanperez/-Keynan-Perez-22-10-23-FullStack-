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
/* DELETE favorite */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await favorites.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting favorites`, err.message);
    next(err);
  }
});
/* POST favorite */
router.post('/', async function(req, res, next) {
  try {
    res.json(await favorites.create(req.body));
  } catch (err) {
    console.error(`Error while creating favorite`, err.message);
    next(err);
  }
});
module.exports = router;