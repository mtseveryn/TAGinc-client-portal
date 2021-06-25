const express = require('express');
const landingController = require('../controllers/landingController');
const router = express.Router();

router.get('/data', landingController.getDate);

module.exports = router;


