const express = require('express');
const router = express.Router();

const {
  createPlace,
  getPlaces,
  updatePlace,
  deletePlace,
} = require('../controllers/places.controller');

router.post('/', createPlace);
router.get('/', getPlaces);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

module.exports = router;
