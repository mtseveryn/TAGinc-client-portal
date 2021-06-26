const express = require('express');
const landingController = require('../controllers/landingController');
const router = express.Router();

router.get('/data', landingController.getData,
(req, res) => {
    res.status(200).json(req.body)}
);



router.post('/message', landingController.getMessage,
(req, res) => {
    res.status(200)
});


module.exports = router;